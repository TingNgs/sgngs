$(function() {
  $('#mobile_nav_container').load('navMobile.html');
  $('#name_container').load('name.html');
  $('footer').load('footer.html');
  $('header').load('header.html');
  InitPortfolioData();
  InitSkillData();
  setTimeout(function() {
    $.getScript('js/nav.js', function() {
      NavInit();
    });
    $.getScript('js/isMobile.js');
  }, 1500);
});
