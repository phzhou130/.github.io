const hero = document.querySelector('[data-hero]')

const menuButton = document.querySelector('[data-btn="menu"]')
const menu = document.querySelector('[data-menu]')


menuButton.addEventListener('click', () => {
	menu.classList.toggle('is-open')
	menuButton.classList.toggle('is-active')
})



window.addEventListener('mousemove', (e) => {
	const { clientX, clientY } = e
  const x = Math.round((clientX / window.innerWidth) * 100)
  const y = Math.round((clientY / window.innerHeight) * 100)
	
	gsap.to(hero, {
    '--x': `${x}%`,
    '--y': `${y}%`,
    duration: 0.3,
    ease: 'sine.out',
  })
})

