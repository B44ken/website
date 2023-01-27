// const doLinkHijack = true

const iframe = document.querySelector('iframe')
const nav = document.querySelector('nav')

for(let a of document.querySelectorAll('a:not(.never-hijack)')) {
	a.addEventListener('click', (event) => {
		if(event.target.href.includes('github.com')) return
		event.preventDefault()
		
		if(event.target.classList.contains('home')) {
			nav.id = ''
			iframe.removeAttribute('src')
			return
		}

		iframe.src = event.target.href
		nav.id = 'small'
	})
}