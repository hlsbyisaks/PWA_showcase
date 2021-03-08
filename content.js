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
        h1: "Installation",
        h2: "How do I install a PWA?",
        p: 'If you are using Google Chrome right now, good news, there should be a prompt at the bottom of your screen, asking if you want to add this app to your homescreen. <br><br> If you are on any other browser, there is no installation prompt in clear sight. You need to navigate to the browsers alternative menu, scroll down a bit, and look for "Add to homescreen" and manually name it. <br><br>Continue for examples.'
    },
    {    
        h1: "Android",
        h2: "Installation guide",
        p: '1. Press the alternatives button',
        img1: 'images/install_android_1.jpg',
        p2:'2. Navigate to, and press, "Add to Home screen". You might need to scroll down.',
        img2: 'images/install_android_2.jpg',
    },
    {    
        h1: "Android",
        h2: "Installation guide",
        p:'3. Add a name and continue.',
        img1: 'images/install_android_3.jpg'
    },
    {    
        h1: "Android",
        h2: "Installation guide",
        p:'The installation is complete, open this app via your home screen for a fullscreen experience.',
    },
    {    
        h1: "Thank you",
        h2: "for participating",
        p:'I would greatly appreciate if you continue and describe your experience of the installation process in the survey linked below.',
        img1: '',
        p2:'Recap of PWA core functionalities: <br>1. Offline use. <br>2. Installation to homescreen. <br>3. Push notifications',
        img2: ''
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
    if (contentArr[contentCount].img1) {
        $('.img1').show()
        $('.img1').attr('src', contentArr[contentCount].img1)
    } else {$('.img1').hide()}
    if (contentArr[contentCount].p2) {
        $('.p2').html(contentArr[contentCount].p2)
        $('.p2').show()
    } else {$('.p2').hide()}
    if (contentArr[contentCount].img2) {
        $('.img2').show()
        $('.img2').attr('src', contentArr[contentCount].img2)
    } else {$('.img2').hide()}
    if (contentArr[contentCount].p3) {
        $('.p3').html(contentArr[contentCount].p3)
        $('.p3').show()
    } else {$('.p3').hide()}
    if (contentArr[contentCount].img3) {
        $('.img3').show()
        $('.img3').attr('src', contentArr[contentCount].img3)
    } else {$('.img3').hide()}

    if (contentCount == contentArr.length-1) {
        $('.navBtn').show()
        $('.button').hide()
        $('.nav').hide()
    }

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
    $(this).css({
        "border-radius": "0px",
    })
    setTimeout(() => {
        $(this).css({
            "border-radius": "10px",
        })
    }, 300);
})

$('.androidButton').on("click", function(e) {
    contentCount = 3
    nextContent(contentArr)
    e.preventDefault()
    $('.navBtn').hide()
    $('.button').show()
    $('.nav').show()
})

$('.iosButton').on("click", function(e) {
    contentCount = 3 //change me to ios start page
    nextContent(contentArr)
    e.preventDefault()
    $('.navBtn').hide()
    $('.button').show()
    $('.nav').show()
})
