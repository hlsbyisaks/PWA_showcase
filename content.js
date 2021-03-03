let contentArr = [ /* obj containing text content */
    {
        h1: "Welcome",
        h2: "What is a PWA?",
        p: "A PWA (Progressive Web App) is a web based app, however, unlike a traditional web app it supports installation to home screen, offline use and push notifications. Just like you would expect from a regular app. Stick around and try it out!"
    },
    {
        h1: "Introduction",
        h2: "Purpose",
        p: "The PWA concept opens up for some pretty sizeable advantages regarding distribution of apps, although useless if the installation process is to cumbersome. The purpose of this app is to research the impact of said installation process. This PWA will show some core functionalites of the PWA concept, as well as guide through the installation process."
    },
    {
        h1: "Placeholder",
        h2: "Lorem",
        p: "Ipsum lorem dolorem sidjgiajgjkldghjakldjhgkladshknome."
    }
]

let contentCount = 0
function nextContent(contentArr, buttonId) {  /* Swapping content of page using content object */
    if (buttonId == "Next") {                   /* Also manages navigation buttons */
        if (contentCount < contentArr.length-1) {
            contentCount += 1
            $('.prev').show()
        }
    } else {
        contentCount -= 1
        if (contentCount == 0) { $('.prev').hide() } 
    }
    
    $('.h1').html(contentArr[contentCount].h1)
    $('.h2').html(contentArr[contentCount].h2)
    $('.p').html(contentArr[contentCount].p)
    showSlides(contentCount)  /* For dots visual navigation */
    
}

$('.button').on("click", function(e) {  /* click function for NEXT button */
    nextContent(contentArr, $(this).data('id'))
    e.preventDefault()

    $(this).children("div:first").css({ /* button animation */
        "margin-left": "15px",
    })
    setTimeout(() => {
        $(this).children("div:first").css({
            "margin-left": "0px",
        })
    }, 300);
    $(this).css({
        "border-radius": "0px",
    })
    setTimeout(() => {
        $(this).css({
            "border-radius": "10px",
        })
    }, 300);
})


function showSlides(contentCount) { /* Func for dots visual navigation */
    var i;
    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[contentCount].className += " active";
}