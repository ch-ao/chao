$('#typed').css({
  color: '#FFF',
  fontSize: '120%',
  textShadow: '0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #7effdb, 0 0 30px #7effdb, 0 0 40px #7effdb, 0 0 55px #7effdb, 0 0 75px #7effdb'
})

var typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
  typeSpeed: 40,
  backDelay: 1500,        
  loop: true,
  loopCount: Infinity
});

