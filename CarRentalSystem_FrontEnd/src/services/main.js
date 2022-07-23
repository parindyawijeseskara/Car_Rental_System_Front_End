/**Mixitup filter featured **/
let mixerFeatured = mixitup('.featured-content', {
    selectors: {
        target: '.featured-card'
    },
    animation: {
        duration: 10
    }
});

const linkFeatured = document.querySelectorAll('.featured-item')

function activeFeatured() {
    linkFeatured.forEach(l=> l.classList.remove('active-featured'))
    this.classList.add('active-featured')
}
linkFeatured.forEach(l=>l.addEventListener('click',activeFeatured))