$(document).ready(function(){
  const properties = [
    "url('pics/pic1.jpg') center center no-repeat",
    "url('pics/pic2.jpg') top 30% center no-repeat",
    "url('pics/pic3.jpg') 25% top no-repeat",
    "url('pics/pic4.jpg') 25% no-repeat",
    "url('pics/pic5.jpg') top center no-repeat",
    "url('pics/pic6.jpg') top 25% center no-repeat",
    "url('pics/pic7.jpg') top 35% center no-repeat",
    "url('pics/pic8.jpg') top 15% center no-repeat",
    "url('pics/pic9.jpg') top 35% center no-repeat",
    "url('pics/pic10.jpg') top 25% center no-repeat"
  ];

  const sizes = [
    "150% auto",
    "cover",
    "cover",
    "cover",
    "cover",
    "cover",
    "cover",
    "cover",
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