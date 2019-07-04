$(document).ready(function(){
  const properties = [
    "url('pics/pic1.jpeg') center center no-repeat",
    "url('pics/pic2.jpeg') 30%  top no-repeat",
    "url('pics/pic3.jpeg') 25% top no-repeat",
    "url('pics/pic4.jpeg') 25% no-repeat"
  ];

  const sizes = [
    "150% auto",
    "cover",
    "cover",
    "cover"
  ]

  let i = 0;

  setInterval(function(){
    if (i+1 === properties.length) {
      i = 0;
    } else {
      i++;
    }

    $('header').css({"background": properties[i], "background-size": sizes[i]});
  }, 6000);
});