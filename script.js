// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({

                behavior:'smooth'

            });

    });

});

// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll('.section,.card,.skill-card,.project-card')
.forEach(el=>{

    el.classList.add("fade");

    observer.observe(el);

});

// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-150;

        const sectionHeight=section.clientHeight;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

// ===============================
// TYPING EFFECT
// ===============================

const text="AI & Web Developer";

let index=0;

const role=document.querySelector(".hero-text h2");

role.innerHTML="";

function typing(){

    if(index<text.length){

        role.innerHTML+=text.charAt(index);

        index++;

        setTimeout(typing,80);

    }

}

typing();

// ===============================
// SKILL CARD HOVER EFFECT
// ===============================

document.querySelectorAll(".skill-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px) scale(1.05)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});

// ===============================
// PROJECT CARD ANIMATION
// ===============================

document.querySelectorAll(".project-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.boxShadow="0 20px 50px rgba(56,189,248,.35)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.boxShadow="none";

    });

});

// ===============================
// NAVBAR SHADOW ON SCROLL
// ===============================

window.addEventListener("scroll",()=>{

    const nav=document.querySelector("nav");

    if(window.scrollY>80){

        nav.style.background="rgba(15,23,42,.95)";

        nav.style.boxShadow="0 10px 30px rgba(0,0,0,.3)";

    }

    else{

        nav.style.background="rgba(255,255,255,.05)";

        nav.style.boxShadow="none";

    }

});

// ===============================
// BACK TO TOP BUTTON
// ===============================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.className="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.right="25px";
topBtn.style.bottom="25px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#38bdf8";
topBtn.style.color="white";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="999";
topBtn.style.boxShadow="0 10px 25px rgba(0,0,0,.3)";

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ===============================
// END
// ===============================