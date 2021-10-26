/*menu*/
document.querySelectorAll('.header__menu, .header__burger ')
  .forEach(i => i.addEventListener('click', (event) => {
    document.querySelector('.header__menu').classList.toggle('active')
    document.querySelector('.header__burger').classList.toggle('active')
    document.body.classList.add('lock')
  }))


/*accordion*/

let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

/*partners-slider*/

// $(function (){
//   $('.top-slider').slick({
//     dots: false,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     nextArrow: ' <button type="button" class="slick-arrow slick-next"><img src="images/right-arrow.svg"></button>',
//     prevArrow: ' <button type="button" class="slick-arrow slick-prev"><img src="images/left-arrow.svg"></button>',
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//
//         }
//       }
//     ]
//   });
// })



$(function() {
  $('.slick').on('init', function(event, slick) {
    $(this).append('<div class="slick-counter"><span class="current"></span> / <span class="total"></span></div>');
    $('.current').text(slick.currentSlide + 1);
    $('.total').text(slick.slideCount);
  })
      .slick({
        autoplay: false,
        infinite: true,
        arrows: true,
        nextArrow: ' <button type="button" class="slick-arrow slick-next"><img src="images/right-arrow.svg"></button>',
        prevArrow: ' <button type="button" class="slick-arrow slick-prev"><img src="images/left-arrow.svg"></button>',
      })
      .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.current').text(nextSlide + 1);
      });
});

