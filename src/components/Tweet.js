import React, { Component } from 'react'

/* Store */
import TweetStore from '../stores/TweetStore'

/* Actions */
import TweetActions from '../actions/TweetActions'

export default class Tweet extends Component {
  constructor(props) {
    super(props)
    this.state = TweetStore.getState()
    this._onChange = this._onChange.bind(this)
  }

  componentDidMount() {
    TweetStore.listen(this._onChange)

    TweetActions.fetchTweets()
  }

  componentWillUnmount() {
    TweetStore.unlisten(this._onChange)
  }

  _onChange(state) {
    this.setState(state)
  }

  render() {
    const {
      errorMessage,
      tweets
    } = this.state

    if (errorMessage) {
      return (
        <div>Something is wrong</div>
      )
    }

    if (tweets.length === 0) {
      return (<div> loading... </div>)
    }

    console.log(tweets)

    const TweetInfo = ({ text, created_at, entities }) => (
      <div>
        <p> text: {text} </p>
        <p> created at: {created_at} </p>
        {
          entities.user_mentions.map(user => {
            return <div key={user.id} style={{ padding: '10px' }}>
              {user.name}({user.screen_name})
              </div>
          })
        }
      </div>
    )

    const renderTweets = tweets.map(tweet => (
      <div key={tweet.id}>
        <p> user: {tweet.user.name}</p>
        <img src={tweet.user.profile_image_url} />
        <TweetInfo {...tweet} />
      </div>
    ))
    /* Make Tweet Card component */
    return (
      <div>
        <div>tweets goes here</div>
        {renderTweets}
      </div>
    )
  }
}