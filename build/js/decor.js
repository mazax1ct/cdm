function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

$(document).ready(function() {
  if($('body').width() > 1349) {
    let i = 0;

    let j = 1;

    let bH = $('main').height();

    if(bH > 2000){
      j = 2;
    }
    if(bH > 3000) {
      j = 3;
    }
    if(bH > 4000) {
      j = 4;
    }
    if(bH > 5000) {
      j = 5;
    }

    $('main').append('<div class="decor-container"></div>');

    while (i < j) {
      let img = getRandomInt(1, 17);
      let className = 'right';
      let bHP = $('main').height()/(j+1);
      if((i%2) > 0) {
        className = 'left';
      }
      $('.decor-container').append('<div class="decor '+ className +'" style="top:'+(bHP*i + 160)+'px"><img src="images/backgrounds/decor/new/'+ img +'.png" /></div>');
      i++;
    }
  }
});
