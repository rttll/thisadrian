import './app.css'

function importAllImages(r) {
  const paths = require.context('./assets/images', false, /\.(png|jpe?g|svg)$/)
  paths.keys().forEach(a => {
    var name = a.replace('./', '')  
  });
}

const images = importAllImages();
