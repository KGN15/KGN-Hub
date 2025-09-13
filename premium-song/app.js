// পার্টিকল কনফিগারেশন
particlesJS('particles-js', {
  particles: {
    number: { value: 80 },
    size: { value: 3 },
    move: { speed: 2 },
    line_linked: { enable: true, color: '#ffffff' },
    color: { value: '#ffffff' }
  }
});
// মাউস মুভমেন্ট ইভেন্ট দিয়ে ভেরিয়েবল আপডেট করবো
window.addEventListener('mousemove', (e) => {
  // ভিউপোর্টের মধ্যে পজিশন %
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;

  // CSS ভেরিয়েবল সেট করো
  document.body.style.setProperty('--mouseX', x + '%');
  document.body.style.setProperty('--mouseY', y + '%');
});
particlesJS('particles-js', {
  particles: {
    number: { value: 150 },  // সংখ্যা বাড়ালো ৮০ থেকে ১৫০
    size: { value: 3 },
    move: { speed: 2 },
    line_linked: { enable: true, color: '#ffffff' },
    color: { value: '#ffffff' },
    opacity: {
      value: 0.3,  // ফিকাপনার জন্য opacity কমানো
      anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
    }
  }
});
