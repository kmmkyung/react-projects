import logo from '../assets/images/company/logo.png';
import video from '../assets/video/collection-video.mp4';

import collection01 from '../assets/images/collection/Collection-01.jpg';

import glasses01 from '../assets/images/product/Glasses-01.jpg';
import glasses02 from '../assets/images/product/Glasses-02.jpg';
import glasses03 from '../assets/images/product/Glasses-03.jpg';

import sunGlasses01 from '../assets/images/product/sunGlasses-01.jpg';
import sunGlasses02 from '../assets/images/product/sunGlasses-02.jpg';
import sunGlasses03 from '../assets/images/product/sunGlasses-03.jpg';

const imageData = {
  logo: logo,
  video: video,
  collection: [collection01],
  product : {
    glasses: [glasses01, glasses02, glasses03],
    sunGlasses: [sunGlasses01, sunGlasses02, sunGlasses03]
  }
}

export default imageData;