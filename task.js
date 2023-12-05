const reveal = document.querySelectorAll('.reveal')
reveal.forEach((e) => {
    window.addEventListener('scroll', () => {
        const { top } = e.getBoundingClientRect()
        if ((top - window.innerHeight) <= 0) {
            e.classList.add('reveal_active')
        } else {
            e.classList.remove('reveal_active')
        }
    })
})
