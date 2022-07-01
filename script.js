const aside = document.querySelector('#aside')
const main = document.querySelector('#main')

const email = document.querySelector('#email')
const password = document.querySelector('#password')

const icon1 = document.querySelector('#icon1')
const icon2 = document.querySelector('#icon2')


window.addEventListener('resize', resize)
document.addEventListener('DOMContentLoaded', resize)
email.addEventListener('focusin', function(){icon1.setAttribute('src', './assets/mail-focus.svg')})
email.addEventListener('focusout', function(){icon1.setAttribute('src', './assets/mail.svg')})
password.addEventListener('focusin', function(){icon2.setAttribute('src', './assets/lock-focus.svg')})
password.addEventListener('focusout', function(){icon2.setAttribute('src', './assets/lock.svg')})

function resize(){
    console.log(window.innerWidth)
    if (window.innerWidth < 780){
        aside.style.display = 'none'
        main.style.width = '100%'
    }
    if (window.innerWidth > 780){
        aside.removeAttribute('style')
        main.removeAttribute('style')
    }
}


