const slider = new Swiper(".mainMovie",{
    slidesPerView:"auto",
    effect:"coverflow",
    centeredSlides:true,
    speed:500,
    //direction:"vertical",
    coverflowEffect: {
        rotate: 0,
        slideShadows: false,
        stretch:0,
        depth:1000,
    },
    loop:true,
    pagination:{
        el:".pagination",
        clickable:true
    },
    mousewheel:true,
});

const aboutSiteWindow = document.querySelector("#aboutThisSite");
const aboutSite = document.querySelector("#aboutSite");
const contentWrapper = document.querySelector(".contentWrapper");
const boardBtn = document.querySelector("#boardBtn");

aboutSite.addEventListener("click",()=>{

    contentWrapper.classList.add("setLowOpacity");
    aboutThisSite.style.display = "block";
    cancelBtn = document.querySelector("#cancelBtn");
    cancelBtn.addEventListener("click",()=>{
        console.log("test");
        contentWrapper.classList.remove("setLowOpacity");
        aboutThisSite.style.display="none";
    })
})