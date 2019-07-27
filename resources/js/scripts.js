$(document).ready(
    function(){
        $('.about-section').waypoint(
            function(direction){
                if(direction == "down"){
                    $('nav').addClass('sticky');
                }else {
                    $('nav').removeClass('sticky');
                }
            },{
                offset: '600px'
            }
        )
    }
)
$("a[href*='#']:not([href='#])").click(function() {
    let target = $(this).attr("href");
    $('html,body').stop().animate({
      scrollTop: $(target).offset().top
    }, 1000);
    event.preventDefault();
});

// Typewritter Effects
var pos = 0;
var turn = 0;
var data = ['Skateboarding saves my life'];
var speed = 200;

setTimeout(typeWriter, speed);

function typeWriter() {
  if (pos < data[turn].length) {
    document.getElementById("slogan").innerHTML += data[turn].charAt(pos);
    console.log(data[turn].charAt(pos));
    pos++;
    setTimeout(typeWriter, speed);
  } else {
  	setTimeout(erase, speed+200);
  }
}

function erase() {
	if (pos >= 0) {
      var str=data[turn].toString().substring(0, pos);
      document.getElementById("slogan").innerHTML = str;
      pos--;
      setTimeout(erase, speed-100);
    } else {
      turn++;
      if(turn>=data.length) 
        turn=0;
      setTimeout(typeWriter, speed);
    }
}