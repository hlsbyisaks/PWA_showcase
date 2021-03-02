let contentArr = [
    {
        h1: "Welcome",
        h2: "What is a PWA?",
        p: "A PWA (Progressive Web App) is a web based app, however, unlike a traditional web app it supports installation to home screen, offline use and push notifications. Just like you would expect from a regular app. Stick around and try it out!"
    },
    {
        h1: "Introduction",
        h2: "Purpose",
        p: "The PWA concept opens up for some pretty sizeable advantages regarding distribution of apps, although useless if the installation process is to cumbersome. The purpose of this app is to research the impact of said installation process. This PWA will show some core functionalites of the PWA concept, as well as guide through the installation process."
    }
]

let contentCount = 0
function nextContent(contentArr) {
    if (contentCount < contentArr.length) {contentCount += 1}
    $('.h1').html(contentArr[contentCount].h1)
    $('.h2').html(contentArr[contentCount].h2)
    $('.p').html(contentArr[contentCount].p)
}

$('.button').on("click", function(e) {
    nextContent(contentArr)
    e.preventDefault()
    $('.buttonAnim').css({
        "display": "inline-block",
        "margin-left": "15px",
        "transition": "all 0.3s ease 0s"
    })
    setTimeout(() => {
        $('.buttonAnim').css({
            "display": "inline-block",
            "margin-left": "0px",
            "transition": "all 0.3s ease 0s"
        })
    }, 300);
})