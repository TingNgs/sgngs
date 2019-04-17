function AddSkillElement(array, row) {
  array.forEach(element => {
    var html =
      '<div class="col-md-6 skill_box"><div class="comment"><p>' +
      element.comment +
      '</p> </div><div class="skill_name"><p>' +
      element.name +
      '</p></div><div class="skillStar"><span class="' +
      element.checked[0] +
      '">★</span><span class="' +
      element.checked[1] +
      '">★</span><span class="' +
      element.checked[2] +
      '">★</span><span class="' +
      element.checked[3] +
      '">★</span><span class="' +
      element.checked[4] +
      '">★</span></div></div>';
    var rowDiv = document.getElementById(row);
    rowDiv.insertAdjacentHTML('beforeend', html);
  });
}
function InitSkillData() {
  $.ajax({
    url: './JSON/skillData.json',
    type: 'GET',
    dataType: 'json',
    success: function(skillData) {
      AddSkillElement(skillData.skill, 'skill_row');
      AddSkillElement(skillData.editing, 'editing_row');
      AddSkillElement(skillData.languages, 'languages_row');
      AddSkillElement(skillData.hobbies, 'hobbies_row');
    },
    error: function() {
      console.log('error');
    }
  });
}

function InitPortfolioData() {
  $.ajax({
    url: './JSON/portfolio.json',
    type: 'GET',
    dataType: 'json',
    success: function(portfolioData) {
      portfolioData.forEach(element => {
        var backData = '';
        var techData = '';
        element.link.forEach(element => {
          backData +=
            '<a href="' +
            element.href +
            '" target="_blank"><p>' +
            element.type +
            '</p></a>';
        });
        element.tech_row.forEach(element => {
          techData += '<div class="tech_box">' + element + '</div>';
        });
        var html =
          '<div class="col-xl-4 col-md-6 col-12 portfolio_Card"><div class="card_box"><div class="row card_h"><div class="card-flip"><div class="flip"><div class="back"style="background-image: url(' +
          element.img +
          ');"><div class="back_box"><div>' +
          backData +
          '</div></div></div><div class="card_bg" style="background-image: url(' +
          element.img +
          ');"></div><div class="front"><div class="portfolio_box_des"><h5>' +
          element.name +
          '</h5><hr /><p>' +
          element.description +
          '</p></div><div class="tech_row"><hr />' +
          techData +
          '</div></div></div></div></div></div></div>';
        var rowDiv = document.getElementById('prot_row');
        rowDiv.insertAdjacentHTML('beforeend', html);
      });
    },
    error: function() {
      console.log('error');
    }
  });
}
