import React, { useRef, useEffect, useState } from 'react'

const Loading = (props) => {
  const canvasRef = useRef(null)
  let ww
  let wh

  const { colors, backgroundColor } = props

  // Define properties of your animation unit, it's like a factory
  function Particles (context, canvas, x, y, radius, color) {
    this.x = x
    this.y = y
    this.initialPos = {
      x,
      y
    }
    this.radius = radius
    this.color = color
    this.context = context
    this.canvas = canvas
    this.radians = Math.random() * Math.PI * 2
    this.distance = Math.floor(Math.random() * (120 - 50 + 1) + 50)
    this.velocity = 0.05
  }

  // create draw function for your animation unit, this
  // will draw the animation unit on canvas
  Particles.prototype.draw = function (lastPos) {
    // this.context.beginPath()
    // this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    // this.context.fillStyle = this.color
    // this.context.fill()
    // this.context.beginPath()
    // this.context.strokeStyle = this.color
    // this.context.lineWidth = this.radius
    // this.context.moveTo(this.initialPos.x, this.initialPos.y)
    // this.context.lineTo(this.x, this.y)
    // this.context.stroke()
    // this.context.closePath()
    this.context.beginPath()
    this.context.strokeStyle = this.color
    this.context.lineWidth = this.radius
    this.context.moveTo(lastPos.x, lastPos.y)
    this.context.lineTo(this.x, this.y)
    this.context.stroke()
    this.context.closePath()
  }

  // create update function which will update the properties
  // of your animation unit each time render calls.
  // It will give one effect as animation
  Particles.prototype.update = function () {
    // update
    const lastPos = {
      x: this.x,
      y: this.y
    }
    this.radians += this.velocity
    this.x = this.initialPos.x + Math.cos(this.radians) * this.distance
    this.y = this.initialPos.y + Math.sin(this.radians) * this.distance
    // console.log(Math.cos(this.radians), this.radians, Math.cos(this.radians) * 100)
    // this.y += 1
    // then call draw to draw your animation unit with updated properties
    this.draw(lastPos)
  }

  const init = (context, canvas) => {
    // clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // get the new canvas size
    ww = canvas.width
    wh = canvas.height

    // create an object to store the info to particle or anything
    // that you are drawing
    let particles = []

    for (let i = 0; i < 50; i++) {
      // position of your animation unit
      const x = ww / 2
      const y = wh / 2
      const radius = (Math.random() * 1) + 1
      const color = colors[Math.floor(Math.random() * colors.length)]
      // Create a new object with the info of your animation unit
      particles.push(new Particles(context, canvas, x, y, radius, color))
    }

    // return the object to get used bu render function
    return particles

  }

  useEffect(() => {

    //setup canvas
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    ww = canvas.width = window.innerWidth
    wh = canvas.height = window.innerHeight

    // setup stuff for cleanup
    let animationFrameId
    let particles = []
    let starter = 0
    // setup the content of canvas, create the start up material which will
    // get rendered again and again
    particles = init(context, canvas) // create object of animation stuff using init

    // render the content, and repeat the render by calling it again
    const render = () => {
      // clear the canvas after each render, to make it appear that it's animating
      // context.clearRect(0, 0, ww, wh)
      // To generate trailing effect
      if (starter < 2) {
        context.clearRect(0, 0, ww, wh)
        starter++
      } else {
        context.fillStyle = 'rgba(0, 0, 0, 0.05)'
        context.fillRect(0, 0, ww, wh)
      }
    
      // requestAnimationFrame to make the animation smooth and to recall render
      animationFrameId = window.requestAnimationFrame(render)

      // call the fucntion which updates the canvas drawing positions and state
      particles.forEach(particle => {
        particle.update()
      })
    }

    // Initiate the continious render cycle by calling render once
    render()

    // destroy animation when component unmounts, this is a clean up function
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  })
  return (
    <canvas
      id={'loadingCanvas'}
      ref={canvasRef}
      data-paper-resize
    />
  )
}

export default Loading
