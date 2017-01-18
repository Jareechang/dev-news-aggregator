import tweets from '../../tweets.json'
import axios from 'axios'

const API_ROOT = 'http://localhost:8080'

var TweetSource = {
  fetch(screenName) {
    // imitate AJAX call — replace with axios later
    return axios.get(`${API_ROOT}/api/tweets/${screenName}`)
    //return new Promise((resolve, reject) => {
      //setTimeout(() => {
        //resolve(tweets)
      //}, 1500 )
    //})
  }
}

export default TweetSource
