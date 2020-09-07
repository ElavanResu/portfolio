import React from 'react';
// import logo from './logo.svg';
import Navigation from './components/navigation/Navigation'
import './App.css';
import Home from './views/Home'
import About from './views/About'
import Skills from './views/Skills'
import Work from './views/Work'
import Contact from './views/Contact'
// import Animation from './views/Animation'

function App() {
  const siderBarData = [
    {
      root: true,
      routeName: 'home',
      iconName: 'home',
      component: Home
    },
    {
      routeName: 'about',
      iconName: 'about',
      component: About
    },
    {
      routeName: 'skills',
      iconName: 'skills',
      component: Skills
    },
    {
      routeName: 'work',
      iconName: 'work',
      component: Work
    },
    {
      routeName: 'contact',
      iconName: 'contact',
      component: Contact
    }
  ]
  return (
    // <Animation />
    <div className="App">
      <header className="App-header">
        <Navigation
          siderBarData={siderBarData}
        />
      </header>
    </div>
  );
}

export default App;
