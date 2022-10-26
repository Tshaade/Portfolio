const sections = document.getElementsByClassName('sections');
const secBtns = document.getElementsByClassName('controls');
const secBtn = document.getElementsByClassName('control');
const allSections = document.getElementsByClassName('main-content');

function pageTrans() {
    //button click active class, rids of not active 
    for(let i = 0; i < secBtn.lenght; i++) {
        secBtn[i].addEventListener("click", function() {
            let currentBtn = document.getElementsByClassName('active');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');

            if (currentBtn.length > 0) {
                currentBtn[0].className = current[0].className.replace(" .active", "");
              }

            this.className += 'active';
        })
    }
    //sections active class, main content is the parent
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if(id){
            //remove selected from the other btn
            secBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections
            sections.forEach((section) => {
                section.classList.remove('active')
            })
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}
pageTrans();