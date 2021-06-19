document.body.style.position = "absolute"

document.body.style.transition = "all 0.5s"

window.onscroll = function() {

    function getPosition(item) {

        let top = (item.getBoundingClientRect().top / window.innerHeight * 100).toFixed(0)

        return top
    }

    document.body.style.paddingTop = getPosition(document.body) + "px"

    document.body.style.top = getPosition(document.body) + "px"
}