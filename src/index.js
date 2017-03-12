import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'

import alt from './alt';

import routes from './routes/routes';

const entry = document.getElementById('entry')

const router = (
  <Router history={browserHistory}>
    {routes}
  </Router>
)

/* Set up preload and render for react app */
window.onload = function() {

  alt.bootstrap(JSON.stringify({
    TweetStore: {
      tweets: window.__appPreloadState__.tweets
    },
    FriendStore: {
      friends: window.__appPreloadState__.friends
    }
  }));

  render(router, entry);
}

