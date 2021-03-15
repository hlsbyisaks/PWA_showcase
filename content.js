
let contentCount
if(localStorage.getItem('currentPage') == null) {
    contentCount = 0
    localStorage.setItem('currentPage', contentCount)
} 


if (navigator.userAgent.includes("Android")) { contentArr = contentAndroid } //Checks user OS for appropriate install guide
else { contentArr = contentIos}
nextContent(contentArr, "Prev")

function nextContent(contentArr, buttonId) {  /* Swapping content of page using content object */
    contentCount = parseInt(localStorage.getItem('currentPage'))
    if (buttonId == "Next") {                   /* Also manages navigation buttons */
        if (contentCount < contentArr.length-1) {
            
            contentCount += 1
            localStorage.setItem('currentPage', contentCount)
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
        if (contentCount > 0) {
            contentCount -= 1
            localStorage.setItem('currentPage', contentCount)
        }
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
        $('.dotContainer').hide()       
    }

    showSlides(contentCount)  /* For dots visual navigation */
    
}

$('.button').on("click", function(e) {  /* click function for NEXT button */
    if (navigator.userAgent.includes("Android")) { contentArr = contentAndroid } //Checks user OS for appropriate install guide
    else { contentArr = contentIos}

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

$('.iosButton').on("click", function(e) {
    contentCount = 3 //change me to ios start page
    localStorage.setItem('currentPage', contentCount)
    nextContent(contentArr)
    e.preventDefault()
    $('.navBtn').hide()
    $('.button').show()
    $('.nav').show()
    $('.dotContainer').show()
})
