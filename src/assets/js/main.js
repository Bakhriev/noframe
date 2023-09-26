const btn = document.querySelector('.btn')
const rect = document.querySelector('.box')
const lines = document.querySelectorAll('.line')

const btnDistance = btn.offsetTop + btn.offsetHeight
const rectDistance = rect.offsetTop + rect.offsetHeight

const debounce = (func, delay) => {
	let timeoutId
	return (...args) => {
		clearTimeout(timeoutId)
		timeoutId = setTimeout(() => {
			func.apply(null, args)
		}, delay)
	}
}

const handleMouseMove = debounce(e => {
	const rectOffset = ((e.pageY / rectDistance) * 100) / 3
	const btnOffset = 100 - e.pageY

	if (
		e.pageY > rectDistance - 300 &&
		e.pageX > 200 &&
		window.innerWidth - e.pageX > 200
	) {
		if (e.pageY > 100) {
			rect.style.filter = `blur(${Math.min(rectOffset, 60)}px)`
			rect.style.backgroundColor = `rgb(50, 31, ${rectOffset - 10})`
			lines.forEach(
				line => (line.style.filter = `blur(${Math.min(rectOffset, 60)}px)`)
			)
		}
	} else {
		const blurValue = Math.max((rectOffset / 10) * 2, 0)
		rect.style.filter = `blur(${blurValue}px)`
		rect.style.backgroundColor = `rgb(31, 77, 41)`

		lines.forEach(line => (line.style.filter = `blur(${blurValue}px)`))
	}

	if (btn.offsetLeft - e.clientX < 50 && e.pageY - btnDistance < 150) {
		if (e.pageY < 100) {
			rect.style.filter = `blur(${Math.min(btnOffset / 2, 60)}px)`
			rect.style.backgroundColor = `rgb(50, 31, ${rectOffset + 30})`
			lines.forEach(
				line => (line.style.filter = `blur(${Math.min(btnOffset, 60)}px)`)
			)
		}
	}
}, 10)

document.addEventListener('mousemove', handleMouseMove)

// 	background-color: rgb(50, 31, 68);
// 	background-color: rgb(31, 77, 41);
