import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Services from './Services';
import Book from './Book';
import Footer from './Footer';

function Layout() {
  return (
    <Router>
      <Header />
      <Route exact path='/' component={Home} />
      <Route exact path='/Home' component={Home} />
      <Route exact path='/About' component={About} />
      <Route exact path='/Services' component={Services} />
      <Route exact path='/Book' component={Book} />
      <Footer />
    </Router>
  )
}

export default Layout