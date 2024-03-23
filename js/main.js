

const menuItens = document.querySelectorAll('.portfolio__menu a[href^="#"]');

//console.group(menuItens);

menuItens.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
    console.log(item);
});

function scrollToIdOnClick(event){
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const section = document.querySelector(id).offsetTop;
    console.log(id);
    console.log(section);

    window.scroll({
        top: section,
        behavior: 'smooth'
    })
}