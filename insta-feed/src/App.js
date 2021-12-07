// src/App.js
import Post from './components/Post';
import Header from './components/Header';
import { Component } from 'react/cjs/react.production.min';

const postImgs = ['post1. jpg', 'post1.jpg'];
const captions = ['kekeke', 'yeet'];

const posts = [];
for (let [index, value] of postImgs.entries()) {
  posts.push(<Post image = {{ backgroundImage: {value}}} caption = {captions[index]} nickname = "toiletpaper" />)
}

class App extends Component {
  
  render() {

    return (

      <div>

        <Header />

        <div>

          {posts}
          
        </div>

      </div>

    );

  }

}

export default App;