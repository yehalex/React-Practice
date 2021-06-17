import React from 'react';

import SearchBar from './SearchBar'
import youtube from '../../api/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail';

class YoutubePlayer extends React.Component {
  state = { videoList: [], selectedVideo: null }

  componentDidMount() {
    this.onTermSubmit('buildings');
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })
    this.setState({
      videoList: response.data.items,
      selectedVideo: response.data.items[0]
    })
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }


  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} ></VideoDetail>
            </div>
            <div className="five wide column">
              <VideoList videos={this.state.videoList} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default YoutubePlayer;