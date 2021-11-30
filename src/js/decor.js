function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

$(document).ready(function() {
  if($('body').width() > 1349) {
    let i = 0;

    let bH = $('main').height()/6;

    while (i < 5) {
      let img = getRandomInt(1, 17);
      let className = 'right';
      if((i%2) > 0) {
        className = 'left';
      }

      $('main').append('<div class="decor '+ className +'" style="top:'+(bH*i + 160)+'px"><img src="images/backgrounds/decor/'+ img +'.png" /></div>');
      i++;
    }
  }
});
