var skillData = [];
var editingData = [];
var languagesData = [];
var hobbiesData = [];
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
