$(document).ready(function(){
    $('.slider').slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
  });


  new WOW().init();





// Top

let modal = document.getElementById("myModal");

let btn = document.getElementsByClassName('product-col-btn');

let cardModal = document.getElementsByClassName('card-modal');

let topBtn = document.getElementById("topModal");

let span = document.getElementsByClassName("close")[0];

for(let i=0; i< btn.length; i++) {
    btn[i].onclick=function() {
        modal.style.display = "block";
    }
}

for(let i=0; i< cardModal.length; i++) {
  cardModal[i].onclick=function() {
      modal.style.display = "block";
  }
}

topBtn.onclick = function() {
    modal.style.display = "block";
}

cardModal.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function openModal() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function youTubes_makeDynamic() {


  var $ytIframes = $('iframe[src*="youtube.com"]');


  $ytIframes.each(function (i,e) {


       var $ytFrame = $(e);


       var ytKey; var tmp = $ytFrame.attr('src').split(/\//); tmp = tmp[tmp.length - 1]; tmp = tmp.split('?'); ytKey = tmp[0];


       var $ytLoader = $('<div class="ytLoader">');


       $ytLoader.append($('<img class="cover" src="img/play.png">'));


      //  $ytLoader.append($('<img class="playBtn" src="img/play.png">'));


       $ytLoader.data('$ytFrame',$ytFrame);


       $ytFrame.replaceWith($ytLoader);


       $ytLoader.click(function () {


            var $ytFrame = $ytLoader.data('$ytFrame');


            $ytFrame.attr('src',$ytFrame.attr('src')+'?autoplay=1');


            $ytLoader.replaceWith($ytFrame);


       });


  });


};


$(document).ready(function () {youTubes_makeDynamic()});

function youTubes_makeDynamic() {


  var $ytIframes = $('iframe[src*="youtube.com"]');


  $ytIframes.each(function (i,e) {


          var $ytFrame = $(e);


          var ytKey; var tmp = $ytFrame.attr('src').split(/\//); tmp = tmp[tmp.length - 1]; tmp = tmp.split('?'); ytKey = tmp[0];


          var $ytLoader = $('<div class="ytLoader">');


          $ytLoader.append($('<img class="cover" src="img/play.png">'));


          // $ytLoader.append($('<img class="playBtn" src="img/play.png">'));


          $ytLoader.data('$ytFrame',$ytFrame);


          $ytFrame.replaceWith($ytLoader);


          $ytLoader.click(function () {


                  var $ytFrame = $ytLoader.data('$ytFrame');


                  $ytFrame.attr('src',$ytFrame.attr('src')+'?autoplay=1');


                  $ytLoader.replaceWith($ytFrame);


          });


  });


};


$(document).ready(function () {youTubes_makeDynamic()});
