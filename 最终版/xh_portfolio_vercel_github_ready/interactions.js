(function(){
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canvas = document.getElementById('particle-canvas');
  if (!canvas || reduce) return;
  const ctx = canvas.getContext('2d');
  let w=0,h=0,dpr=1,particles=[];
  function resize(){
    dpr=Math.min(window.devicePixelRatio||1,2);
    w=window.innerWidth; h=window.innerHeight;
    canvas.width=Math.floor(w*dpr); canvas.height=Math.floor(h*dpr);
    canvas.style.width=w+'px'; canvas.style.height=h+'px';
    ctx.setTransform(dpr,0,0,dpr,0,0);
    const count=Math.min(95,Math.max(42,Math.floor(w*h/22000)));
    particles=Array.from({length:count},()=>({
      x:Math.random()*w, y:Math.random()*h,
      vx:(Math.random()-.5)*.28, vy:(Math.random()-.5)*.28,
      r:Math.random()*1.45+.55, a:Math.random()*.34+.12
    }));
  }
  function draw(){
    ctx.clearRect(0,0,w,h);
    for(let i=0;i<particles.length;i++){
      const p=particles[i];
      p.x+=p.vx; p.y+=p.vy;
      if(p.x<0||p.x>w) p.vx*=-1;
      if(p.y<0||p.y>h) p.vy*=-1;
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(216,201,255,${p.a})`; ctx.fill();
      for(let j=i+1;j<particles.length;j++){
        const q=particles[j]; const d=Math.hypot(p.x-q.x,p.y-q.y);
        if(d<105){ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.strokeStyle=`rgba(167,112,255,${(1-d/105)*0.12})`;ctx.lineWidth=1;ctx.stroke();}
      }
    }
    requestAnimationFrame(draw);
  }
  window.addEventListener('resize',resize,{passive:true});
  resize(); draw();
})();