let currentSlide = 0;
let slideInterval;


function clickk(index) {
    swiper.slideTo(index); 
    updateActiveButton(index);

}
function chan(activeSlide) {
    document.querySelectorAll(".swiper-slide").forEach(slide => {
        slide.classList.remove("inact");
    });

    if (activeSlide) {
        activeSlide.classList.add("inact");
    }
}
var swiper = new Swiper(".mySwiper", {
    
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
   
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
   
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    on: {
        
       
slideChangeTransitionEnd: function () {
    let activeSlide = swiper.slides[swiper.activeIndex]; // جلب العنصر النشط الصحيح
    chan(activeSlide);

    if (swiper.isEnd) {
        setTimeout(() => {
            swiper.slideTo(0);
        }, 6000);
    }

    updateActiveButton(swiper.activeIndex);
},

        slideChange:function(){
            let activeSlide = swiper.slides[swiper.activeIndex]; // جلب العنصر النشط الصحيح
            chan(activeSlide);
        
            if (swiper.isEnd) {
                setTimeout(() => {
                    swiper.slideTo(0);
                }, 6000);
            }
        
            updateActiveButton(swiper.activeIndex);
            resetAutoSlide();
            updateActiveButton(swiper.activeIndex);
        }
    }

 
  });
  document.addEventListener("DOMContentLoaded", function () {
    let firstSlide = document.querySelector(".swiper-slide-active");
    if (firstSlide) {
        firstSlide.classList.add("inact");
    }
});
  function updateActiveButton(index) {
    document.querySelectorAll(".b-4 button").forEach(btn => {
        btn.classList.remove("goo");
    });

    document.querySelectorAll(".b-4 button")[index].classList.add("goo");
}

let autoSlideInterval = setInterval(() => swiper.slideNext(), 6000);


function resetAutoSlide() {
    clearInterval(autoSlideInterval); 
    autoSlideInterval = setInterval(() => swiper.slideNext(), 6000); // إعادة تشغيل المؤقت
}

window.addEventListener("scroll", function() {
   
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 5) { 
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    

    const serviceItems3 = document.querySelectorAll('.From .container');
    serviceItems3.forEach(item=>{
        if (window.scrollY  <= item.offsetTop+10*item.offsetTop) {
            item.style.animation = 'goUp 3s ease forwards';
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".feaT");
    const prevButton = document.querySelector(".pre");
    const nextButton = document.querySelector(".nextt");
    const scrollAmount = 280;

    function updateButtons() {
        if (slider.scrollLeft === 0) {
            prevButton.classList.add("opac");
            prevButton.classList.remove("nonop");
        } else {
            prevButton.classList.add("nonop");
            prevButton.classList.remove("opac");
        }

        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
            nextButton.classList.add("opac");
            nextButton.classList.remove("nonop");
        } else {
            nextButton.classList.add("nonop");
            nextButton.classList.remove("opac");
        }
    }

    prevButton.addEventListener("click", function () {
        slider.scrollLeft -= scrollAmount;
       
    });

    nextButton.addEventListener("click", function () {
        slider.scrollLeft += scrollAmount;
        
    });

    slider.addEventListener("scroll", updateButtons);

    updateButtons();
});


document.addEventListener("DOMContentLoaded", function () {
    const slider2 = document.querySelector(".sec");
    const prevButton2 = document.querySelector(".pree");
    const nextButton2 = document.querySelector(".pos");
    const prevButton = document.querySelector(".pree i");
    const nextButton = document.querySelector(".pos i");
    const scrollAmount2 = 300;

    function updateButtons2() {
        if (slider2.scrollLeft === 0) {
            prevButton.classList.add("g-color");
            prevButton.classList.remove("w-color");
        } else {
            prevButton.classList.add("w-color");
            prevButton.classList.remove("g-color");
        }

        if (slider2.scrollLeft + slider2.clientWidth >= slider2.scrollWidth) {
            nextButton.classList.add("g-color");
            nextButton.classList.remove("w-color");
        } else {
            nextButton.classList.add("w-color");
            nextButton.classList.remove("g-color");
        }
    }

    prevButton2.addEventListener("click", function () {
        slider2.scrollLeft -= scrollAmount2;
       
    });

    nextButton2.addEventListener("click", function () {
        slider2.scrollLeft += scrollAmount2;
        
    });
    slider2.addEventListener("scroll", updateButtons2);

    updateButtons2();
   
});

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_j7cdaji';
   const templateID = 'template_1ae0si8';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

