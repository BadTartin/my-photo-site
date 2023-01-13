document.querySelector('')


document.querySelectorAll('.mini').forEach(item => {
    item.addEventListener('click', event => {
      //handle click
    })
  })


//   window.onload = function() {
//     var imgs = document.getElementsByTagName('img');
//     for(var i = 0; i < imgs.length; i++) {
//         var img = imgs[i];
//         img.onclick = function() {
//             newSrc = this.src; //this = reference to image that fired onclick
//             focus = document.getElementById('focus');
//             focus.src = newSrc; //no quotes for variable references!
//         }
//     }
// }

// var image = document.getElementById('myImage');

// image.addEventListener('click', function(){
//     changeImage();
// });

// function changeImage(){
//     image.src = './squid-dab2.gif';
// }