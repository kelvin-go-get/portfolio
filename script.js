

const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true

})
sr.reveal(',h2',{delay: 300, origin: 'top'})
sr.reveal('.content,h1,h3,h4',{delay: 200, origin: 'left'})
sr.reveal('.about-text',{delay: 200, origin: 'right'})
sr.reveal('h5',{delay: 300, origin: 'bottom'})
sr.reveal('p',{delay: 200, origin: 'top'})
sr.reveal('.social, .button-two',{delay: 600, origin: 'bottom'})
