(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))q(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const m of n.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&q(m)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function q(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();const d="/assets/ai-paper-BClNhFq5.png",p="/assets/ai-rock-DtDc8ZbH.png",f="/assets/ai-scissors-DK-w-ZeH.png",I="/assets/AI-Arm-Idle-B_26l1tg.png",g="/assets/human-paper-DbRWmsku.png",y="/assets/human-rock-DkU8qCnf.png",h="/assets/human-scissors-DiP-gsDU.png",k="/assets/Human-Arm-Idle-mdut7KDZ.png";document.querySelector(".rock");document.querySelector(".paper");document.querySelector(".scissors");const S=document.querySelector(".rock-img"),x=document.querySelector(".paper-img"),C=document.querySelector(".scissors-img"),e=document.querySelector(".ai-arm-img"),r=document.querySelector(".human-arm-img"),c=document.querySelector(".result-text"),N=document.querySelector(".next-round-btn"),R=document.querySelector(".restart-btn-img"),O=document.querySelector(".restart-btn-wrapper"),D=document.querySelector(".score-ai"),L=document.querySelector(".score-human"),l=document.querySelector(".choice-wrapper"),A=["rock","paper","scissors"];let i=0,u=0;l.addEventListener("click",W);function W(s){if(s.target.nodeName!=="IMG")return;const a=Math.floor(Math.random()*A.length),o=A[a];r.style.transform="rotate(-50deg)",e.style.transform="rotate(50deg)",s.target===S&&o==="rock"&&(r.src=y,e.src=p,c.textContent="IT'S A DRAW"),s.target===S&&o==="paper"&&(r.src=y,e.src=d,i++,c.textContent="YOU LOOSE!"),s.target===S&&o==="scissors"&&(r.src=y,e.src=f,u++,c.textContent="YOU WIN!"),s.target===x&&o==="rock"&&(r.src=g,e.src=p,u++,c.textContent="YOU WIN!"),s.target===x&&o==="paper"&&(r.src=g,e.src=d,c.textContent="IT'S A DRAW"),s.target===x&&o==="scissors"&&(r.src=g,e.src=f,i++,c.textContent="YOU LOOSE!"),s.target===C&&o==="rock"&&(r.src=h,e.src=p,i++,c.textContent="YOU LOOSE!"),s.target===C&&o==="paper"&&(r.src=h,e.src=d,u++,c.textContent="YOU WIN!"),s.target===C&&o==="scissors"&&(r.src=h,e.src=f,c.textContent="IT'S A DRAW"),D.textContent=i,L.textContent=u,l.style.display="none",O.style.display="flex"}R.addEventListener("click",b);function b(s){i=0,u=0,D.textContent=0,L.textContent=0,c.textContent="",r.src=k,e.src=I,O.style.display="none",l.style.display="flex",r.style.transform="rotate(0deg)",e.style.transform="rotate(0deg)"}N.addEventListener("click",B);function B(s){O.style.display="none",l.style.display="flex",r.src=k,e.src=I,c.textContent="",r.style.transform="rotate(0deg)",e.style.transform="rotate(0deg)"}
//# sourceMappingURL=commonHelpers.js.map