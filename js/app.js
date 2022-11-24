/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const nav = document.getElementById("navbar__list");
const fragment = document.createDocumentFragment();
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/




/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function generateNav(){
    for(const section of sections){
        let  title = section.dataset.nav
        let id = section.id;
        let li = document.createElement('li');
        let anchor = document.createElement('a');
        anchor.classList.add('menu__link');
        anchor.setAttribute('href' ,`#${id}`);
        anchor.textContent = title

        // smoth scroll
        anchor.addEventListener("click" , function(e){
            e.preventDefault();
            section.scrollIntoView({
                behavior: "smooth"
            })
        });
        li.append(anchor);
        fragment.appendChild(li);
    }
    nav.appendChild(fragment);
}

window.addEventListener("load" ,generateNav )

// Add class 'active' to section when near top of viewport by Using getBoundingClientRect method

window.addEventListener("scroll" , function(){
    let links = document.querySelectorAll("a.menu__link");
    let curr_ele = "";
    sections.forEach(section=>{ 
        let DOMRec = section.getBoundingClientRect();
        if(DOMRec.top < 600 ){
            curr_ele = section.dataset.nav
            section.classList.add("your-active-class");
        }else{
            section.classList.remove("your-active-class");
        }
    });
    
    links.forEach(link=>{
        link.classList.remove("active");
        if(link.innerHTML === curr_ele){
            link.classList.add("active");
        }
    });  
    
});

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active