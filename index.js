 if('IntersectionObserver' in window){
    document.documentElement.classList.add('js-reveal');
    const els = document.querySelectorAll('[data-reveal]');
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, {threshold:0.15});
    els.forEach(el=>io.observe(el));
  }