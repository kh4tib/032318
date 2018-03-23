const button = document.querySelector(".content__button");
const title = document.querySelector(".content__title");
const subTitle = document.querySelector(".content__subtitle");
const description = document.querySelector(".content__description");
const image = document.querySelector(".main__image");

button.addEventListener("click", () => {
    title.innerHTML = " The <br> family Rosaceae"
    description.innerHTML = "Rose plants range in size from compact, miniature roses, to climbers that can reach seven meters in height."
    button.innerHTML = "Check more"
    image.style.background = "url(https://images.unsplash.com/photo-1465405092061-4db6005a2be0?ixlib=rb-0.3.5&s=5db2717daa6fd6f0b2d42a98c894cd8b&auto=format&fit=crop&w=2134&q=80) center center / cover no-repeat";
});

