(function(){try{
var E="";
if(!E)return;
var s=localStorage,q=location.search;
if(/[?&]notrack/.test(q))s.setItem("nt","1");
if(/[?&]track(&|$)/.test(q))s.removeItem("nt");
if(s.getItem("nt"))return;
var v=s.getItem("v");
if(!v){v=Math.random().toString(36).slice(2,10);s.setItem("v",v)}
var d=new URLSearchParams({p:location.pathname,r:document.referrer,w:screen.width,v:v});
if(navigator.sendBeacon)navigator.sendBeacon(E,d);
else fetch(E,{method:"POST",body:d,mode:"no-cors",keepalive:true});
}catch(e){}})();
