var skillData = [];
var editingData = [];
var languagesData = [];
var hobbiesData = [];
var portfolioData = [];
InitPortfolioData();
InitSkillData();
InitEditingData();
InitLanguagesData();
InitHobbiesData();
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
  skillData.push({
    name: 'HTML',
    comment: '',
    checked: ['checked', 'checked', 'checked', 'checked', ' ']
  });
  skillData.push({
    name: 'CSS',
    comment: '',
    checked: ['checked', 'checked', 'checked', 'checked', ' ']
  });
  skillData.push({
    name: 'JavaScript',
    comment: '',
    checked: ['checked', 'checked', 'checked', 'checked', ' ']
  });
  skillData.push({
    name: 'Bootstrap',
    comment: '',
    checked: ['checked', 'checked', 'checked', 'checked', ' ']
  });
  skillData.push({
    name: 'PHP',
    comment: '',
    checked: ['checked', 'checked', 'checked', 'checked', ' ']
  });
  skillData.push({
    name: 'MySQL',
    comment: '',
    checked: ['checked', 'checked', 'checked', 'checked', ' ']
  });
  skillData.push({
    name: 'Angular 7',
    comment: '',
    checked: ['checked', 'checked', 'checked', '', ' ']
  });
  skillData.push({
    name: 'SASS/SCSS',
    comment: '',
    checked: ['checked', 'checked', 'checked', '', ' ']
  });
  skillData.push({
    name: 'Firebase',
    comment: '',
    checked: ['checked', 'checked', 'checked', '', ' ']
  });
  skillData.push({
    name: 'VHDL',
    comment: 'I hate it',
    checked: ['checked', 'checked', 'checked', '', ' ']
  });
  skillData.push({
    name: 'C/C++',
    comment: '',
    checked: ['checked', 'checked', 'checked', '', ' ']
  });
  skillData.push({
    name: 'Java',
    comment: '',
    checked: ['checked', 'checked', '', '', ' ']
  });
  skillData.push({
    name: 'Python',
    comment: '',
    checked: ['checked', '', '', '', ' ']
  });
  AddSkillElement(skillData, 'skill_row');
}
function InitEditingData() {
  editingData.push({
    name: 'Adobe Photoshop',
    comment: '',
    checked: ['checked', 'checked', 'checked', 'checked', ' ']
  });
  editingData.push({
    name: 'Adobe Illustrator',
    comment: '',
    checked: ['checked', 'checked', 'checked', '', ' ']
  });
  editingData.push({
    name: 'Adobe Premiere Pro',
    comment: '',
    checked: ['checked', 'checked', '', '', ' ']
  });
  AddSkillElement(editingData, 'editing_row');
}
function InitLanguagesData() {
  languagesData.push({
    name: 'Cantonese (Native)',
    comment: '',
    checked: ['checked', 'checked', 'checked', 'checked', 'checked']
  });
  languagesData.push({
    name: 'Body language :D',
    comment: 'Really good at it',
    checked: ['checked', 'checked', 'checked', 'checked', 'checked']
  });
  languagesData.push({
    name: 'Mandarin',
    comment: '',
    checked: ['checked', 'checked', 'checked', 'checked', ' ']
  });
  languagesData.push({
    name: 'English',
    comment: 'Survivable',
    checked: ['checked', 'checked', 'checked', '', ' ']
  });
  AddSkillElement(languagesData, 'languages_row');
}
function InitHobbiesData() {
  hobbiesData.push({
    name: 'Photography',
    comment: '',
    checked: ['checked', 'checked', 'checked', '', '']
  });
  hobbiesData.push({
    name: 'Longboarding',
    comment: 'That Time I Almost Died',
    checked: ['checked', 'checked', 'checked', '', '']
  });
  hobbiesData.push({
    name: 'Hiking',
    comment: 'But not too high',
    checked: ['checked', 'checked', 'checked', '', '']
  });
  AddSkillElement(hobbiesData, 'hobbies_row');
}
function InitPortfolioData() {
  portfolioData.push({
    name: 'sgngs.com',
    description: 'My personal resume websit. (This Website)',
    tech_row: ['SCSS', 'Google API'],
    link: [{ type: 'Github', href: 'https://github.com/ngSgn/sgngs' }],
    img: './img/portfolio/sgngs.png'
  });
  portfolioData.push({
    name: 'TT-iwatchStore',
    description:
      'Database and Information Security final project. Build a e-commerce system that sell smart watch.',
    tech_row: ['PHP', 'MySQL'],
    link: [
      { type: 'Github', href: 'https://github.com/thianhe/TT-iwatchStore' },
      { type: 'Demo Video', href: 'https://youtu.be/3xBdWTHWdL0' }
    ],
    img: './img/portfolio/tt-iwatch.png'
  });

  portfolioData.push({
    name: 'Imitation Game - The Binding of Isaac',
    description:
      "Oop Lab final project. Imitate a game (The Binding of Isaac) by using professor's JS framework.",
    tech_row: ['JavaScript'],
    link: [
      { type: 'Github', href: 'https://github.com/thianhe/OopLab' },
      { type: 'Play Demo', href: 'https://thianhe.github.io/OopLab/' }
    ],
    img: './img/portfolio/isaac.png'
  });
  portfolioData.push({
    name: 'NTUT HKST',
    description:
      "Web programming final project. A register system for NTUT's oversea chinese student.",
    tech_row: ['Firebase'],
    link: [
      { type: 'Github', href: 'https://github.com/ngSgn/FinalWebProject' },
      { type: 'Demo', href: 'https://ngsgn.github.io/FinalWebProject/' }
    ],
    img: './img/portfolio/ntut_hksd.png'
  });
  portfolioData.push({
    name: 'Colorpella',
    description:
      'Freelance android app. An android app detect color and sound frequency to send signal to arduino.',
    tech_row: ['Android'],
    link: [
      { type: 'Github', href: 'https://github.com/ngSgn/ColorPlayer' },
      {
        type: 'About',
        href:
          'https://github.com/ngSgn/ColorPlayer/blob/master/%E8%AA%AA%E6%98%8E.pdf'
      }
    ],
    img: './img/portfolio/colorpella.jpeg'
  });
  portfolioData.push({
    name: 'NTUT Empty Classroom',
    description:
      'Android final project. An android app use for search empty classroom in NTUT.',
    tech_row: ['Android', 'Firebase'],
    link: [
      { type: 'Github', href: 'https://github.com/ngSgn/ntutAndroidFinal' }
    ],
    img: './img/portfolio/NTUT_emptyClassroom.png'
  });

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
}
