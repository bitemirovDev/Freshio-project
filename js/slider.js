let prevArrow = document.getElementById('prevArrow')
    nextArrow = document.getElementById('nextArrow')

$('.feature-items').slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: prevArrow,
    nextArrow: nextArrow
  });