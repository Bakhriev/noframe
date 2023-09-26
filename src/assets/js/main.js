const btn = document.querySelector('.btn')
const rect = document.querySelector('.box')
const lines = document.querySelectorAll('.line')

const btnDistance = btn.offsetTop + btn.offsetHeight
const rectDistance = rect.offsetTop + rect.offsetHeight

document.addEventListener('mousemove', e => {
	const rectOffset = ((e.pageY / rectDistance) * 100) / 3
	const btnOffset = 100 - e.pageY

	if (
		e.pageY > rectDistance - 300 &&
		e.pageX > 200 &&
		window.innerWidth - e.pageX > 200
	) {
		if (e.pageY > 100) {
			rect.style.filter = `blur(${Math.min(rectOffset, 60)}px)`
			lines.forEach(
				line => (line.style.filter = `blur(${Math.min(rectOffset, 60)}px)`)
			)
		}
	} else {
		rect.style.filter = 'blur(0px)'
		lines.forEach(line => (line.style.filter = 'blur(0px)'))
	}

	if (btn.offsetLeft - e.clientX < 50 && e.pageY - btnDistance < 150) {
		if (e.pageY < 100) {
			rect.style.filter = `blur(${Math.min(btnOffset, 60)}px)`
			lines.forEach(
				line => (line.style.filter = `blur(${Math.min(btnOffset, 60)}px)`)
			)
		}
	}
})
