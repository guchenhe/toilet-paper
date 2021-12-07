// src/App.js
import Post from './components/Post';
import Header from './components/Header';
import { Component } from 'react/cjs/react.production.min';

import post1 from "./post1.jpg"
import post2 from "./post2.jpg"
import post3 from "./post3.jpg"
import post4 from "./post4.jpg"
import post5 from "./post5.jpg"

const postImgs = [post1, post2, post3, post4, post5];
const captions = ['kekeke', 'yeet', 'adfadsfasdf', 'aesthetic', 'asdfas'];

const posts = [];
for (let [index, value] of postImgs.entries()) {
  posts.push(<Post img = {{ backgroundImage: `url(${value})`}} caption = {captions[index]} nickname = "toiletpaper" />)
}

// image = {{ backgroundImage: `url(/${value})`}}

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