// card3d.js
export function init3DCardEffect() {
  const cards = document.querySelectorAll(".card-3d");

cards.forEach( el =>{
    el.addEventListener("mousemove", e =>{

        let elRect = el.getBoundingClientRect();

        let x = e.clientX - elRect.x;
        let y = e.clientY - elRect.y;

        let midCardWidth = elRect.width / 2;
        let midCardHeight = elRect.height / 2;

        let angleY = -(x - midCardWidth) / 10;
        let angleX = (y - midCardHeight) / 10;

        let glowX = x / elRect.width * 100;
        let glowY = y / elRect.height * 100;

        let offsetX = x / elRect.width * 3;
        let offsetY = y / elRect.height * 3;

        el.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
        el.children[0].style.transition = 'transform 0.15s ease-out'
        el.children[0].children[0].style.transform = `translate(-${offsetX}%, ${offsetY}%) scale(1.1)`;
    })

  
    el.addEventListener("mouseleave", ()=>{
        el.children[0].style.transform = `rotateX(0) rotateY(0)`
        el.children[0].style.transition = 'transform 0.5s ease-in'
        el.children[0].children[0].style.transform = `translate(0%,0%)`;

    })

})
}
