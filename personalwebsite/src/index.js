import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import Landing from './components/Landing/Landing';
// import AboutMe from './components/AboutMe/AboutMe';
// import Resume from './components/Resume/Resume';
// import ContactMe from './components/ContactMe/ContactMe';

ReactDOM.render(
  <React.StrictMode>
    <Landing />
    {/* <AboutMe />
    <Resume />
    <ContactMe /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
