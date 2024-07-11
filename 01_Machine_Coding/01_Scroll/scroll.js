let indicator = document.querySelector(".scroll-indicator .progress")

let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight

console.log(document.documentElement.scrollHeight)
console.log(document.documentElement.clientHeight)
console.log(document.documentElement.scrollTop)

window.addEventListener("scroll", scroll)

function scroll(){
    let scrollTop = document.documentElement.scrollTop

    let scrolled = (scrollTop/scrollHeight) * 100

    console.log(scrolled)

    indicator.style.width = `${scrolled}%`
}