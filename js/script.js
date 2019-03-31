function flipFrame() {
  document.querySelector('#flipFrame').classList.toggle('hover');
}
$('.card-flip').click(function() {
  console.log('yo');
  $(this).addClass('hover');
  setTimeout(() => {
    $(this).removeClass('hover');
  }, 2000);
});
