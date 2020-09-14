import React, { useEffect, useRef } from 'react'
const randomIntFromRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const Animation = (props) => {
  const { delay } = props
  console.log('Render animation')
  const canvasRef = useRef(null)
  let viewRef = useRef(null)
  const mouse = {
    x: 0,
    y: 0
  }

  const mouseRadius = 1

  let particles = []

  let ww
  let wh

  let windowWidth = window.innerWidth
  let windowHeight = window.innerHeight

  function Particle (context, canvas, x, y, dx, dy, radius, color) {
    this.context = context
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.width
    this.dest = {
      x,
      y
    }
    this.friction = Math.random()*0.05 + 0.91
    this.dx = dx
		this.dy = dy
		this.dtx = 0
    this.dty = 0
    this.radius = radius
    this.color = color
  }

  Particle.prototype.draw = function () {
    this.context.beginPath()
    this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    this.context.fillStyle = this.color
    this.context.fill()
  }

  Particle.prototype.update = function () {
    this.dtx = (this.dest.x - this.x) / 200
    this.dty = (this.dest.y - this.y) / 200
    this.dx += this.dtx
    this.dy += this.dty
    this.dx *= this.friction
    this.dy *= this.friction
    
    this.x += this.dx
    this.y += this.dy

    this.a = this.x - mouse.x
    this.b = this.y - mouse.y

    const distance = Math.sqrt( this.a * this.a + this.b * this.b )

    if (distance < (mouseRadius * 70)) {
      this.dtx = (this.x - mouse.x) / 100
      this.dty = (this.y - mouse.y) / 100
      this.dx += this.dtx
      this.dy += this.dty
    }
    this.draw()
  }

  const init = (context, canvas) => {
    console.log('canvasWidth: ', canvas.width, canvas.height)
    context.clearRect(0, 0, canvas.width, canvas.height)

    ww = canvas.width
    wh = canvas.height
    
    context.font = 'bold '+(ww/2)+'px sans-serif'
    // context.scale(-1, 1)
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    // context.scale(-1, 1)
    context.fillText(props.animationText, ww/2, wh/2)


    const data  = context.getImageData(0, 0, ww, wh).data
    context.clearRect(0, 0, canvas.width, canvas.height)

    context.globalCompositeOperation = 'screen'

    const particles = []
    for (let x = 0; x < ww; x+=Math.round(ww/90)) {
      for (let y = 0; y < wh; y+=Math.round(ww/90)) {
        const particle = (x + y * ww) * 4
        if (data[particle + 3] > 200) {
          const dx = randomIntFromRange(-4, 4)
          const dy = randomIntFromRange(-4, 4)
          const radius = randomIntFromRange(1, 1)
          particles.push(new Particle(context, canvas, x, y, dx, dy, radius, props.particleColor))
        }
      }
    }

    return particles
  }

  useEffect(() => {
    console.log('use effects called')
    const parentDimentions = viewRef.current.getBoundingClientRect()
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    canvas.width = parentDimentions.width
    canvas.height = parentDimentions.height
    document.addEventListener('mousemove', (e) => {
      let rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    })
    window.addEventListener('touchmove', (e) => {
      if(e.touches.length > 0 ){
        let rect = canvas.getBoundingClientRect()
        mouse.x = e.touches[0].clientX  - rect.left
        mouse.y = e.touches[0].clientY  - rect.top
      }
    })
    window.addEventListener('resize', () => {
      console.log('screen', window.screen)
      if (window.innerWidth < 600 && viewRef.current !== null && window.screen.availWidth > 600) {
        if (window.innerWidth !== windowWidth || window.innerHeight !== windowHeight) {
          console.log('resize')
          const newParentDimentions = viewRef.current.getBoundingClientRect()
          canvas.width = newParentDimentions.width
          canvas.height = newParentDimentions.height
          canvas.style.height='100%'
          canvas.style.width='100%'
          particles = init(context, canvas)
        }
      } else if (viewRef.current !== null && window.screen.availWidth > 600) {
        console.log('resize')
        const newParentDimentions = viewRef.current.getBoundingClientRect()
        canvas.width = newParentDimentions.width
        canvas.height = newParentDimentions.height
        canvas.style.height='100vh'
        canvas.style.width='100%'
        particles = init(context, canvas)
      }
    })
    let animationFrameId

    particles = init(context, canvas)

    const render = () => {
      context.clearRect(0, 0, canvas.width, canvas.height)
      animationFrameId = window.requestAnimationFrame(render)
      particles.forEach(e => {
        e.update()
      })
    }

    setTimeout(() => {
      render()
    }, delay)

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [])
  const canvas = <canvas
    id={'animationCanvas'}
    ref={canvasRef}
    data-paper-resize
  />

  return (
    <div resize='true' ref={viewRef} id={'viewDiv'} style={{ display: 'flex', flex: 1 }}>
      {canvas}
    </div>
  )
}

export default Animation
