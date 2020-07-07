let project = document.getElementById('p-list');
let allPElements = project.getElementsByClassName('pl-elem');

gsap.registerPlugin(ScrollTrigger);

// Projects 

gsap.from(allPElements, {
    opacity: 0,
    duration: .4,
    y: 1000,
    ease: 'easeOut',
    stagger: {
        each: .1
    },
    scrollTrigger: {
        trigger: project,
        start: 'top 80%',
        end: 'bottom 25%'

    }
});