(function(){try{
var A="https://abacus.jasoncameron.dev/hit/alexhendershott-com/";
var s=localStorage,q=location.search,p=location.pathname;
if(/[?&]notrack/.test(q))s.setItem("nt","1");
if(/[?&]track(&|$)/.test(q))s.removeItem("nt");
if(s.getItem("nt")||/^\/stats/.test(p))return;
var d=new Intl.DateTimeFormat("en-CA",{timeZone:"America/New_York"}).format(new Date()).replace(/-/g,"");
var k=p.replace(/\.html$/,"").replace(/^\/+|\/+$/g,"").replace(/\//g,".").replace(/[^A-Za-z0-9_.-]/g,"-")||"home";
var keys=["total","d."+d,("p."+k).slice(0,64)];
if(s.getItem("ud")!==d){s.setItem("ud",d);keys.push("u."+d)}
keys.forEach(function(x){fetch(A+x,{mode:"no-cors",keepalive:true})});
}catch(e){}})();
