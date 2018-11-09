/* 
  Returns a color string in the form of "hsl(100, 50%, 50%)"
  For example, calling color(10, 100, 40);
  will return a string "hsl(10, 100%, 40%)"
*/
function hslColor(h, s, l) {  
  var hue = h;
  var saturation = s + "%";
  var luminance = l + "%";

  var color = "hsl(" + hue + "," + saturation + "," + luminance + ")";

  return color;
}

function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFloat (min, max) {
  var float = Math.random();
  var value;

  if (float < 0.5) {
    value = (1 - Math.random()) * (max-min) + min;
  } else {
    value = Math.random() * (max-min) + min;
  }

  return parseFloat(value.toFixed(2));
}



for (var i =0; i<100; i++) {

//create a div
var layer1 = document.createElement('div');

//add class "shape" to div
layer1.classList.add('layer1');

// if (i % 23 == 0) {
// 	layer1.classList.add('layer1');
// }

var duration = randomNumber (1000,5000);
console.log(duration); 


layer1.style.animationDuration = duration + 'ms';



// select container div
var container = document.querySelector('.content');

//add a div with a class "shape" to container div
container.append(layer1);

}


// select all shapes on the page
var layers = document.querySelectorAll('.layer1');

// add interactions to each shape
layers.forEach(function(layer1) {
  layer1.addEventListener('mouseover', function() {

    if (layer1.classList.contains('shape-interaction')) { 
      layer1.classList.remove('shape-interaction');
    }else {
      layer1.classList.add('shape-interaction');

    }
  });
});


















