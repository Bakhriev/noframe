if (window.innerWidth > 1023) {
	const btn = document.querySelector('.btn')
	const rect = document.querySelector('.box')
	const blurLayer = document.querySelector('.blur-layer')
	const duration = 600

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
				rect.animate(
					{
						background: `linear-gradient(202deg, rgba(0, 255, ${rectOffset}, 0.2) 14.43%, rgba(${
							rectOffset * 1.5
						}, 0, ${rectOffset * 3}, 0.45) 92.13%), #262725`,
					},

					{duration: duration, easing: 'linear', fill: 'forwards'}
				)
				blurLayer.animate(
					{backdropFilter: `blur(${Math.min(rectOffset, 60)}px)`},
					{duration: duration, easing: 'linear', fill: 'forwards'}
				)
				blurLayer.animate(
					{webkitBackdropFilter: `blur(${Math.min(rectOffset, 60)}px)`},
					{duration: duration, easing: 'linear', fill: 'forwards'}
				)
			}
		} else {
			const blurValue = Math.max((rectOffset / 10) * 2, 0)
			blurLayer.animate(
				{
					backdropFilter: `blur(${blurValue}px)`,
				},
				{
					duration: duration,
					easing: 'linear',

					fill: 'forwards',
				}
			)
			blurLayer.animate(
				{webkitBackdropFilter: `blur(${blurValue}px)`},
				{duration: duration, easing: 'linear', fill: 'forwards'}
			)
		}

		if (btn.offsetLeft - e.clientX < 50 && e.pageY - btnDistance < 150) {
			if (e.pageY < 100) {
				blurLayer.animate(
					{backdropFilter: `blur(${Math.min(btnOffset / 2, 60)}px)`},
					{duration: duration, easing: 'linear', fill: 'forwards'}
				)
				blurLayer.animate(
					{webkitBackdropFilter: `blur(${Math.min(btnOffset / 2, 60)}px)`},
					{duration: duration, easing: 'linear', fill: 'forwards'}
				)
				rect.animate(
					{
						background: `linear-gradient(202deg, rgba(0, 255, ${btnOffset}, 0.2) 14.43%, rgba(${
							btnOffset / 1.2
						}, 0, ${btnOffset / 1.2}, 0.45) 92.13%), #262725`,
					},

					{duration: duration, easing: 'linear', fill: 'forwards'}
				)
			}
		}
	}, 5)

	document.addEventListener('mousemove', handleMouseMove)
}

// background: linear-gradient(
// 	202deg,
// 	rgba(0, 255, 56, 0.2) 14.43%,
// 	rgba(255, 0, 0, 0) 92.13%
// ),
// #262725;
