let stars = document.querySelector(".stars");
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let hhh = document.querySelector('.hhh');
console.log(hhh);
window.onscroll = function(){
  var value = scrollY;
  stars.style.left = value + 'px';
  moon.style.top = value * 3 + 'px';
  mountains3.style.top = value * 2 + 'px';

  river.style.top = value + 'px';
  boat.style.top = value + 'px';
  boat.style.left = value * 3 + 'px';
  hhh.style.fontSize = value + 'px';
  if(scrollY >= 67){
    hhh.style.fontSize = 67 + 'px';
    hhh.style.position = 'fixed';
    if(scrollY >= 410){
      hhh.style.display = 'none';
    }else {
      hhh.style.display = 'block';
    }
    if (scrollY >= 127) {
      document.querySelector('.mainnn').style.background = 'linear-gradient(#376281,#10001f)';
    }else {
      document.querySelector('.mainnn').style.background = 'linear-gradient(#200016,#10001f)';
    }
  }
}
