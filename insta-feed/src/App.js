// ./App.js
import Post from './components/Post';
import Header from './components/Header';
import { Component } from 'react/cjs/react.production.min';

import christmas from "./post1.jpg"
import worryline from "./post2.jpg"
import slouching from "./post4.jpg"
import arthurFist from "./arthur-fist.jpg"
import brian from "./bad-luck-brian.jpg"
import businessCat from "./business-cat.jpg"
import brent from "./brent-rambo-approves-of-the-internet.jpg"
import daniel from "./damn-daniel.jpg"
import disasterGirl from "./disaster-girl.jpg"
import drake from "./drake-hotline-bling.jpg"
import fry from "./futurama-fry.jpg"
import shark from "./katy-perry-left-shark.jpg"
import kermit from "./kermit-that's-none-of-your-business.jpg"
import leo from "./leo-dicaprio-cheers.jpg"
import steve from "./scumbag-steve.jpg"
import skai from "./skai-jackson.jpg"
import ralph from "./sudden-realization-ralph.jpg"
import doge from "./the-doge.jpg"
import dress from "./the-dress.jpg"
import interestingMan from "./the-most-interesting-man-in-the-world.jpg"
import yonce from "./unflattering-beyonce.jpg"
import student from "./woke-college-student.jpg"
import why from "./y-u-no.jpg"
import yoda from "./baby-yoda.jpg"
import changeMyMind from "./change-my-mind.jpg"
import covid1 from "./covid.jpg"
import datBoi from "./dat-boi.jpg"
import djangoLeo from "./django-leonardo.jpg"
import trump from "./donald-trump.jpg"
import patrick from "./evil-patrick.jpg"
import bernie2020 from "./i-am-once-again-asking.jpg"
import anime from "./is-this-a-bird-butterfly.jpg"
import khaby from "./khaby-lame.jpg"
import kombuchaGirl from "./kombucha-girl.jpg"
import michaela from "./michaela-coel.jpg"
import boomer from "./ok-boomer.jpg"
import affirmation1 from "./nyush-affirmations.jpg"
import affirmation2 from "./nyush-affirmations1.jpg"
import saltBae from "./salt-bae.jpg"
import pikachu from "./surprised-pikachu.jpg"
import goose from "./untitled-goose-game.jpg"
import squint from "./woman-squinting.jpg"
import egg from "./world-record-egg.jpg"
import anakinPadme from "./anakinPadme.jpg"
import spiderman from "./spiderman-pointing.jpg"

const postImgs = [slouching, worryline, affirmation1, affirmation2, khaby, anakinPadme, changeMyMind,
                   covid1, spiderman, kombuchaGirl, bernie2020, djangoLeo, yoda, goose, boomer, 
                  michaela, egg, patrick, anime, pikachu, squint, saltBae, 
                  trump, skai, arthurFist, daniel, datBoi, dress, drake, shark,
                  kermit, leo, doge, brent, yonce, ralph, disasterGirl, brian,
                  student, why, fry, businessCat, steve, interestingMan, christmas];

const captions = ['* 🧻 -> 👀 *', 'made by chenhe (illustration by @worrylines', 
                  '@nyush_affirmations, 2021', 'tnyush_affirmations, 2021', 'khaby lame, 2021',
                  'anakin and padme, 2021', 'change my mind, 2020', 'pandemics, 2020', 'spiderman pointing, 2020',
                  'kombucha girl, 2020', 'i am once again asking, 2020', 'django leonardo, 2020', 'baby yoda, 2019',
                  'untitled goose game, 2019', 'ok boomer, 2019', 'michaela coel, 2019', 'world record egg, 2019', 
                  'evil patrick, 2018', 'is this a bird butterfly, 2018', '*surprised pikachu face, 2018', 
                  'woman squinting, 2018', 'salt bae, 2017', 'trump ffing, 2017', 'petty skai jackson, 2016',
                  'arthur fist, 2016', 'damn daniel, 2016', 'dat boi, 2016', 'is the dress blue and black? 2015',
                  'hotline bling drake, 2015', 'left shark, 2015', "that's none of your business kermit, 2014", 
                  "leonardo dicaprio cheers, 2014", "the doge, 2013", "brent rambo approves of the internet, 2013", 
                  'unflattering beyonce, 2013', 'sudden realization ralph, 2012', 'disaster girl, 2012', 
                  'bad luck brian, 2012', 'woke college kid, 2011', 'y u no, 2011', 'futurama fry, 2011', 
                  'business cat, 2011', 'scumbag steve, 2011', 'most interesting man in the world, 2011', 
                  'THE END. merri christmas'];

const posts = [];

if (postImgs.length != captions.length) {
  console.log('input error! captions and images do not match')
  console.log('caption list length: ' + captions.length)
  console.log('posts list length: ' + postImgs.length)
  for (let i = 0; i < 44; i++) {
    console.log(postImgs[i], captions[i])
    console.log('---------------')
  }
} 
else {
  for (let [index, value] of postImgs.entries()) { 
    posts.push(<Post img = {{ backgroundImage: `url(${value}`}} caption = {captions[index]} nickname = "toiletpaper" />)
  }
}


// image = {{ backgroundImage: `url(/${value}`}}

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