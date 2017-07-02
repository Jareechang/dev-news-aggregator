import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import alt from './alt';
import bootstrap from './appBootstrap';
import DefaultRoutes from './routes/routes';

const entry = document.getElementById('entry');
const browserHistory = createBrowserHistory();

const Application = (
  <BrowserRouter history={browserHistory}>
    <DefaultRoutes />
  </BrowserRouter>
);
const renderApplication = _ => render(Application, entry);

/* Asssume no serverRendering on start */

window.__serverRendering = false; // this is handled by the server

/* Set up preload and render for react app */
window.onload = function preLoad() {
  alt.bootstrap(JSON.stringify(bootstrap.appState));
  renderApplication();
};
