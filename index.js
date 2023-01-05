const btnEl = document.querySelector(".btn");
const videoEl = document.querySelector("video");
const closeIconEl = document.querySelector(".close-icon");
const containerEl = document.querySelector(".container__trailer");

btnEl.addEventListener("click", ()=>{
    containerEl.classList.remove("active");
})

closeIconEl.addEventListener("click", ()=>{
    containerEl.classList.add("active");
    videoEl.pause();
    videoEl.currentTime = 0;
})