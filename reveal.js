const ratio = .30;
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if(entry.intersectionRatio > ratio){
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
        }
    })
    console.log('handleIntersect');
}

const observer = new IntersectionObserver(handleIntersect, options);

observer.observe(document.querySelector('.reveal'));