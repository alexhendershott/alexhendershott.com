(function(){
var links=[].slice.call(document.querySelectorAll(".grid a"));
if(!links.length)return;
var box=document.createElement("div");
box.className="lb";box.hidden=true;box.setAttribute("role","dialog");box.setAttribute("aria-label","Photo viewer");
box.innerHTML='<button class="lb-x" aria-label="Close">&times;</button><button class="lb-p" aria-label="Previous photo">&lsaquo;</button><img alt=""><button class="lb-n" aria-label="Next photo">&rsaquo;</button>';
document.body.appendChild(box);
var img=box.querySelector("img"),i=0,sx=null;
function show(n){i=(n+links.length)%links.length;img.src=links[i].href;img.alt=links[i].querySelector("img").alt;}
function open(n){show(n);box.hidden=false;document.body.style.overflow="hidden";box.querySelector(".lb-x").focus();}
function close(){box.hidden=true;document.body.style.overflow="";links[i].focus();}
links.forEach(function(a,n){a.addEventListener("click",function(e){e.preventDefault();open(n)})});
box.querySelector(".lb-x").onclick=close;
box.querySelector(".lb-p").onclick=function(){show(i-1)};
box.querySelector(".lb-n").onclick=function(){show(i+1)};
box.addEventListener("click",function(e){if(e.target===box)close()});
document.addEventListener("keydown",function(e){
  if(box.hidden)return;
  if(e.key==="Escape")close();else if(e.key==="ArrowLeft")show(i-1);else if(e.key==="ArrowRight")show(i+1);
});
box.addEventListener("touchstart",function(e){sx=e.touches[0].clientX},{passive:true});
box.addEventListener("touchend",function(e){if(sx===null)return;var dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>40)show(i+(dx<0?1:-1));sx=null});
})();
