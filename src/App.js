import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Footer from './components/Footer';
import Contact from './pages/contact'
import Signin from './pages/signin';
import Register from './pages/register';
import Blogs from './pages/blogs';
import Dropdown from './components/Dropdown';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/blogs' component={Blogs} />
        <Route path='/contact' component={Contact} />
        <Route path='/signin' component={Signin} />
        <Route path='/register' component={Register} />
      </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
