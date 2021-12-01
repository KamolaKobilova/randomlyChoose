// how to win
  var handUp1  = document.getElementById('handUp');
  var handDown1 = document.getElementById('handDown');
  var scissors = document.getElementById('scissors');
  var btn = document.getElementById('btn')
  

handUp1.addEventListener('click', function(){
     const ww = document.getElementById('ww')
     ww.innerHTML = `  <li><button id="handUp"><img src="./assets/1 11.00.27 AM.png"></button></li>  `
})


var loader = document.querySelector(".loader")
        
        window.addEventListener("load", vanish);
        function vanish() {
            loader.classList.add("disappear");
            
        }
// const numbers = [23,46,22,200,14,26];
//  document.getElementById('h2').innerHTML = numbers;

//  function shuffleNumbers(){
//   numbers.sort(function(a,b) {
//     return 0.5 - Math.random()
//   })

// document.getElementById('h2').innerHTML = numbers;
// }