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
            $('.prev').css({
                'border-color': 'var(--text-color)',
                'color': 'var(--text-color)'
            })
            $('.prev > .buttonAnim > i').css({
                'border-color': 'var(--text-color)',
                'color': 'var(--text-color)'
            })
        }
    } else {
        if (contentCount > 0) {contentCount -= 1}
        if (contentCount == 0) {
            $('.prev').css({
                'border-color': 'var(--background-color)',
                'color': 'var(--background-color)'
            })
            $('.prev > .buttonAnim > i').css({
                'border-color': 'var(--background-color)',
                'color': 'var(--background-color)'
            })
        } 
    }
    
    $('.h1').html(contentArr[contentCount].h1)
    $('.h2').html(contentArr[contentCount].h2)
    $('.p').html(contentArr[contentCount].p)
    showSlides(contentCount)  /* For dots visual navigation */
    
}

$('.button').on("click", function(e) {  /* click function for NEXT button */
    nextContent(contentArr, $(this).data('id'))
    e.preventDefault()

    if ($(this).data('id') == 'Prev') {
        $(this).children("div:nth-child(1)").css({ /* button animation */
            "margin-right": "5px",
        })
        setTimeout(() => {
            $(this).children("div:nth-child(1)").css({
                "margin-right": "0px",
            })
        }, 300);
        $(".left2").css({ /* button animation */
            'margin-right': '-5px'
        })
        setTimeout(() => {
            $(".left2").css({
                'margin-right': '0px'
            })
        }, 300);
    } else {
        $(this).children("div:first").css({ /* button animation */
            "margin-left": "5px"
        })
        setTimeout(() => {
            $(this).children("div:first").css({
                "margin-left": "0px",
            })
        }, 300);
        $(".right2").css({ /* button animation */
            'margin-left': '-5px'
        })
        setTimeout(() => {
            $(".right2").css({
                'margin-left': '0px'
            })
        }, 300);
        
    }
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

$('.pushButton').on("click", function() {
    displayNotification()
})