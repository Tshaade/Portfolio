const sections = document.querySelectorAll('.sections');
const secBtns = document.querySelectorAll('.controls');
const secBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');

function onsecBtnClick(){
  //toggle active class on button
  if(!this.classList.contains('active'))
    this.classList.add("active") 
  else 
    this.classList.remove('active');

  pageTrans(this);
}

function pageTrans(e) {
  //Change content on main page
  let id = e.getAttribute('data-id')
  let element = document.getElementById(id);

  document.querySelectorAll('.active')[0].classList.remove('active')
  element.classList.add('active');
  
}

for(let i in secBtn) 
  secBtn[i].addEventListener("click", onsecBtnClick)
