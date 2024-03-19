// change nav style on scroll
window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
})

// contact btn (circular text btn)
const textButtons = document.querySelectorAll('.contact__btn');
textButtons.forEach(textButton => {
    let text = textButton.querySelector('p');
    text.innerHTML = text.innerHTML.split('').map((character, index) => `<span style="transform: rotate(${index * 12}deg)">${character}</span>`).join('')
})

// SwiperJS script
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        599: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1023:{
            slidesPerView: 3,
            spaceBetween: 60
        }
    }
});

// Nav script
const nav = document.querySelector('.nav__links');
const openNavBtn = document.querySelector('#nav__toggle-open');
const closeNavBtn = document.querySelector('#nav__toggle-close');

const openNav = () =>{
    nav.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
}

openNavBtn.addEventListener('click', openNav)

const closeNav = () =>{
    nav.style.display = 'none';
    closeNavBtn.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
}

closeNavBtn.addEventListener('click', closeNav)

if(document.body.clientWidth < 1024) {
    nav.querySelectorAll('li a').forEach(navLink => {
        navLink.addEventListener('click', closeNav);
    })
}

// Contact Form

const form = document.querySelector('form');

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');
const message = document.getElementById('message');

function sendEmail() {
    const bodyMessage = `First Name: ${firstName.value}<br>
    Last Name: ${lastName.value}<br>
    email: ${email.value}<br>
    Mobile: ${mobile.value}<br>
    Message: ${message.value}<br>`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "www.abdahhla@gmail.com",
        Password : "B79782BE2231ABFB3958D5AB9DB026308450",
        To : 'www.abdahhla@gmail.com',
        From : "www.abdahhla@gmail.com",
        Subject : "You have recieved an Email from the Website",
        Body : bodyMessage
    }).then(
      message => {
        if (message  == "OK"){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Message has been sent successfully!",
                showConfirmButton: false,
                timer: 2800
            });
        }
      }
    );
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();

    form.reset();
    return false;
});