import 'alpinejs'
import './assets/css/app.css'


function importAllImages(r) {
  const paths = require.context('./assets/images', false, /\.(png|jpe?g|svg|gif)$/)
  paths.keys().forEach(a => {
    var name = a.replace('./', '')  
  });
}

const images = importAllImages();

// (function() {

//   window.addEventListener('scroll', () => {
//     // let h = document.documentElement.getBoundingClientRect().top
//     // let h = document.getElementsByTagName('html')[0].getBoundingClientRect().top
//     let h = document.getElementsByTagName('html')[0].scrollTop
//     console.log(h)
//   })

// })()
