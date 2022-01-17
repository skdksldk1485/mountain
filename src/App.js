import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing/Landing';
import Search from './pages/Search/Search';
import Community from './pages/Community/Community';
import './App.less';

const App = () => {
  return (
    <BrowserRouter basename="mountain">
      <Navbar />
      <Route path="/" exact component={Landing} />
      <Route path="/search" exact component={Search} />
      <Route path="/community" exact component={Community} />
    </BrowserRouter>
  );
};

export default App;
