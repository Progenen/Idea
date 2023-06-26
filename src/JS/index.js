function animate () {
    const animateEl = document.querySelectorAll("[data-animate]");
    
    animateEl.forEach(el => {
        if (scrollY => el.clientTop) {
            console.log("ok");
        }
    })
}

document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector(".header__burger");
    const menu = document.querySelector(".header__col--menu");
    const header = document.querySelector("header");
    const errorMap = ["Пожалуйста, заполните все обязательные поля", "Укажите, пожалуйста, имя", "Слишком короткое значение"];

    menu.style.top = header.clientHeight - 1 +  "px";
    document.querySelector("main").style.marginTop = header.clientHeight + 1 + "px";

    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        menu.classList.toggle("active");
        document.body.classList.toggle("lock");
        
    });

    window.addEventListener("scroll", () => {
        animate();
    });

    if (document.querySelector(".form")) {
        const forms = document.querySelectorAll(".form");
        forms.forEach(el => {
            let error = false;
            const inputName = el.querySelector("input[name='name']");
            const inputPhone = el.querySelector("input[name='phone']");
            const label = el.querySelector(".form__label");
            el.addEventListener("submit", (e) => {
                e.preventDefault();
                    if (inputName.value.length < 1 || inputPhone.value.length < 1 ) {
                        label.classList.add("error");
                        label.textContent = errorMap[0];
                        console.log(inputName.value.length);
                    } else if (inputName.value.length < 5)  {
                        label.classList.add("error");
                        label.textContent = errorMap[2];
                        error = true;
                    } else if (el.querySelector("input[name='name']").value.search(/[a-zA-Z]+[А-яЁё]/)) {
                        label.classList.add("error");
                        label.textContent = errorMap[1];
                        error = true;
                    } else {
                        label.classList.remove("error");
                        label.textContent = "Спасибо! Мы свяжемся с вами в ближайшее время"
                        label.classList.add("right");
                    }
            })
        })
    }

});