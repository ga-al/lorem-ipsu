!function(){"use strict";(function(){const e=document.querySelector(".mobile-nav-btn"),t=document.querySelector(".mobile-nav"),n=document.querySelector(".nav-icon"),o=document.querySelector("html");e&&(e.onclick=function(){t.classList.toggle("mobile-nav--open"),n.classList.toggle("nav-icon--active"),t.style.visibility="visible",document.body.classList.toggle("no-scroll"),o.classList.toggle("no-scroll")})})(),function(){const e=document.querySelector(".language"),t=document.querySelector(".btn-lang");t.addEventListener("click",(function(){"Ru"==e.textContent?e.textContent="En":e.textContent="Ru"})),window.matchMedia("(max-width: 768px)").matches&&(e.style.display="none",t.addEventListener("click",(function(){e.style.display="inline-block",t.style.height="36px",t.style.lineHeight="29px",t.style.display="flex",t.style.alignItems="center",document.querySelector(".icon.icon--planet").style.marginRight="10px"})))}(),function(){if(window.matchMedia("(max-width: 768px)").matches){const t=document.querySelectorAll(".footer .nav__list li"),n=document.querySelectorAll(".footer .socials__list a");e(t),e(n)}function e(e){e.forEach((e=>{e.classList.contains("none")&&e.classList.remove("none")}))}}(),function(){const e=document.querySelector(".main .container");window.matchMedia("(max-width: 1365px)").matches&&e.classList.remove("container")}(),function(){let e=document.querySelector(".posts__scroll");var t;(t=e).addEventListener("wheel",(e=>{let n=e.deltaY>-1,o=t.scrollHeight-t.offsetHeight,l=t.scrollTop;if(n&&o==l||!n&&0==l)return;e.preventDefault();let c=t.scrollHeight/100*10;for(let e=0;e<=c;e++)setTimeout((()=>n?t.scrollTop++:t.scrollTop--),4*e)}))}(),function(){const e=document.querySelector(".posts__scroll").getElementsByClassName("post");for(var t=0;t<e.length;t++)e[t].addEventListener("click",(function(e){e.preventDefault();const t=document.getElementsByClassName("active");t.length>0&&(t[0].className=t[0].className.replace(" active","")),this.className+=" active"}))}()}();