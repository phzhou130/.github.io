

const hero = document.querySelector('[data-hero]')

const menu = document.querySelector('[data-menu]')

const form = document.querySelector('#reply');

const enterbutton = document.querySelector('.wrapper');

const closeform = document.querySelector('.close');
const submitform = document.querySelector('#submit');

const threed = document.querySelector('#threed');



window.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e
  const x = Math.round((clientX / window.innerWidth) * 100)
  const y = Math.round((clientY / window.innerHeight) * 100)
  let cursor1=document.getElementById('cursor1');
	gsap.to(hero, {
    '--x': `${x}%`,
    '--y': `${y}%`,
    duration: 0.3,
    ease: 'sine.out',
  })
  cursor1.style.left=e.x +"px";
  cursor1.style.top=e.y +"px";
});

enterbutton.addEventListener('click', function() {
    form.className = 'show';
});

closeform.addEventListener('click', function() {
    form.className = 'hide';
})

// const ft = new THREE.TextureLoader().load("./image/galaxy-X.tga");
// const bk = new THREE.TextureLoader().load("./image/galaxy+X.tga");
// const up = new THREE.TextureLoader().load("./image/galaxy+Z.tga");
// const dn = new THREE.TextureLoader().load("./image/galaxy-Z.tga");
// const rt = new THREE.TextureLoader().load("./image/galaxy+Y.tga");
// const lf = new THREE.TextureLoader().load("./image/galaxy-Y.tga");



submitform.addEventListener('click', function(e) {
    // e.preventDefault();
    form.className = 'hide';
  
})

  