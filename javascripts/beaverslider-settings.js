var createSlider = function(){

  ////////////////////////////
  // Beaver Slider Settings //
  ////////////////////////////
  var height1 = $(window).height();
  var width1 = $(window).width(); 

  var width2 = ($(window).width()/100)*40;
  var height2 = ($(window).height()/100)*35;

  var slider = new BeaverSlider({
      structure: {
        container: {
            id: "top-slider",
            width: width1,
            height: 600
        },
        messages: {
            top: height2,
            right: 5,
            containerClass: "message-container"
        },
      },
      content: {
          images: [
              "images/1.jpg",
              "images/2.jpg",
              "images/3.jpg",
              "images/4.jpg"
          ],
          messages: [
              "Valid HTML 5 & CSS3",
              "Fully responsive",
              "Retina ready",
              "Programmed in Sass"
          ]
      },
      animation: {
          waitAllImages: true,
          effects: effectSets["slider: simplefade"],
          initialInterval: 1000,
          interval: 3000,
          changeMessagesAfter: 1
      }
  });  
  console.log(slider);
};

$(document).ready(createSlider);
$(window).resize(createSlider);