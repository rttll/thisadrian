import 'alpinejs'
import './assets/css/app.css'


function importAllImages(r) {
  const paths = require.context('./assets/images', false, /\.(png|jpe?g|svg|gif)$/)
  paths.keys().forEach(a => {
    var name = a.replace('./', '')  
  });
}

const images = importAllImages();

var gif = document.getElementsByTagName('img')[0]

var mapGif = new SuperGif({ 
  gif: gif,
  progressbar_height: '12',
  progressbar_background_color: '#999',
  progressbar_foreground_color: '#888'
});

mapGif.load();

document.getElementById('pause').addEventListener('click', gifCon)
document.getElementById('play').addEventListener('click', gifCon)

function gifCon(action) {
  mapGif.play()
}


fetch('http://localhost:1337/projects')
  .then(a => {
    return a.json()
  }).then(b => {
    var x = b.map(c => {
      return {
        title: c.title
      }
    })
    // console.log(JSON.stringify(x))

  })