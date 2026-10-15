(function(){
var btns=[].slice.call(document.querySelectorAll(".story-share button"));
if(!btns.length)return;
var note=document.querySelector(".story-note");
function msg(t){if(note)note.textContent=t;}
btns.forEach(function(b){
  b.addEventListener("click",async function(){
    var url=b.dataset.img,name=url.split("/").pop();
    try{
      var blob=await (await fetch(url)).blob();
      var file=new File([blob],name,{type:"image/jpeg"});
      if(navigator.canShare&&navigator.canShare({files:[file]})){
        await navigator.share({files:[file]});
        msg("In Instagram, choose Story, then add a Link sticker with "+location.href.split("?")[0]);
        return;
      }
    }catch(e){if(e&&e.name==="AbortError")return;}
    var a=document.createElement("a");a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();
    msg("Image downloaded. Post it to your Instagram Story from your phone and add a Link sticker.");
  });
});
})();
