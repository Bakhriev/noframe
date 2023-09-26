const btn = document.querySelector('.btn')
const rect = document.querySelector('.box')
const line1 = document.querySelector('.line-1')
const line2 = document.querySelector('.line-2')
const line3 = document.querySelector('.line-3')

const btnDistance = btn.offsetTop + btn.offsetHeight
const rectDistance = rect.offsetTop + rect.offsetHeight
const blurLayer = document.querySelector('.blur-layer')

document.addEventListener('mousemove', e => {
	if (e.pageY > rectDistance - 300 && e.pageX > 200) {
		const rectOffset = ((e.pageY / rectDistance) * 100) / 3

		if (e.pageY > 100) {
			if (rectOffset > 60) {
				rect.style.filter = `blur(60px)`
				line1.style.filter = `blur(60px)`
				line2.style.filter = `blur(60px)`
				line3.style.filter = `blur(60px)`
			} else {
				rect.style.filter = `blur(${rectOffset}px)`
				line1.style.filter = `blur(${rectOffset}px)`
				line2.style.filter = `blur(${rectOffset}px)`
				line3.style.filter = `blur(${rectOffset}px)`
			}
		}
	} else {
		rect.style.filter = `blur(0px)`
		line2.style.filter = `blur(0px)`
		line3.style.filter = `blur(0px)`
		line1.style.filter = `blur(0px)`
	}
	if (btn.offsetLeft - e.clientX < 50 && e.pageY - btnDistance < 150) {
		if (e.pageY < 100) {
			const btnOffset = 100 - e.pageY
			if (btnOffset > 60) {
				rect.style.filter = `blur(60px)`
				line1.style.filter = `blur(60px)`
				line2.style.filter = `blur(60px)`
				line3.style.filter = `blur(60px)`
			} else {
				rect.style.filter = `blur(${btnOffset}px)`
				line1.style.filter = `blur(${btnOffset}px)`
				line2.style.filter = `blur(${btnOffset}px)`
				line3.style.filter = `blur(${btnOffset}px)`
			}
		}
	}
})
