$(function() {
  $('#mobile_nav_container').load('navMobile.html');
  $('#name_container').load('name.html');
  $('footer').load('footer.html');
  $('header').load('header.html');

  $.getScript('js/nav.js', function() {
    NavInit();
  });
  InitPortfolioData();
  InitSkillData();
});
