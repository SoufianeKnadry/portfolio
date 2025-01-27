const cards = document.querySelectorAll(".card-3d");
cards.forEach( el =>{
    let inside = false
    let clicked = false
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
        el.children[0].style. boxShadow = `${-angleY}px ${angleX}px 20px 15px rgba(0,0,0,0.25), 0 0 20px 15px rgba(0,0,0,0.25) inset`;
        
        if (!clicked){
            camera.position.z = 1 - offsetY/3 ;
            camera.position.x = + offsetX/10;
            camera.rotation.y = angleY / 505;
            camera.rotation.x = -angleX / 505;

        }

        
        el.children[1].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
        el.children[1].style.transition = 'all 0.15s ease-out'
        el.children[1].style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(248, 243, 228, 0.22), transparent)`;

    })

    el.addEventListener("mouseenter",e =>{
        el.children[0].children[1].style.transform = `translateX(0)`
        inside = true
    })

    el.addEventListener("mouseleave", ()=>{
        inside = false
        clicked = false
        gsap.to(camera.position, {
            x:0,
            z:1,
            duration: 0.5,
            ease: 'back'
        })
        gsap.to(camera.rotation, {
            x:0,
            y:0,
            duration: 0.5,
            ease: 'back'
        })
        
        gsap.to(el.children[0],{
            boxShadow: '0px 0px 0px 0px rgba(0,0,0,0), 0 0 20px 15px rgba(0,0,0,0) inset',
            duration: 0.25,
        })
        el.children[0].style.transform = `rotateX(0) rotateY(0)`
        el.children[0].children[0].style.transform = `translate(0%,0%)`;
        el.children[0].children[1].style.transform = `translateX(-100%)`
        el.children[1].style.transform = `rotateX(0) rotateY(0)`
        el.children[1].style.background = `radial-gradient(circle at 80% 180%, rgba(248, 243, 228, 0.22), transparent)`;
        el.children[1].style.transition = 'all 0.5s ease-in'

    })

    el.addEventListener("click", e =>{
        if(inside && !clicked){
            clicked = true
            gsap.to(camera.position, {
                x:0,
                z:10,
                duration: 0.5,
                ease: 'back'
            })
        }
        else if (clicked){
            clicked = false
            gsap.to(camera.position, {
                x:0,
                z:1,
                duration: 0.5,
                ease: 'back'
            })
        }
    })

})