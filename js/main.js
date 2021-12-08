const emailForm = document.getElementById('emailForm');
const email = document.getElementById('email');
const errIcon = document.querySelector('.icon')
const submitBtn = document.getElementById('arrowBtn')

submitBtn.addEventListener('click', (e)=> {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
    {
        if (errIcon.classList.contains('--error') === true) {
            errIcon.classList.remove('--error')
        }
        
    } else {
        e.preventDefault()
        alert("You have entered an invalid email address!")
        
        console.log(false)

        if (errIcon.classList.contains('--error') === false) {
            errIcon.classList.add('--error')
        } else {
            return;
        }

    }
    
})

email.addEventListener('focus', ()=> { emailForm.classList.add('formActive') })

email.addEventListener('blur', ()=> { emailForm.classList.remove('formActive') })