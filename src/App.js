import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav';
import Introduction from 'components/Introduction';
import Tech from 'components/Tech';
import Thoughts from 'components/Thoughts';
import Skills from 'components/Skills';
import Information from 'components/Information';
import Projects from 'pages/Projects';
import Contact from 'pages/Contact';


const App = () => {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Nav />
          <Introduction />
          <Tech />
          <Thoughts />
          <Skills />
          <Information />
        </Route>
        <Route path="/projects" exact>
          <Projects />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
      </Switch>
    </BrowserRouter>
  )};

export default App;
