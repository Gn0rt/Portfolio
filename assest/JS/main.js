// const dFb = document.querySelector(".facebook");
// const dGit = document.querySelector(".github");
// const fb = document.querySelector(".fb");
// const git = document.querySelector(".git");
// function show(variable, className) {
//     variable.classList.add('className');
// }
// function hidden(variable, className) {
//     variable.classList.remove('className');
// }

// fb.addEventListener('mouseenter', function () {
//     show(dFb, clOpen);
// })
// fb.addEventListener('mouseleave', function () {
//     hidden(dFb, clOpen);
// })
// git.addEventListener('mouseenter', function () {
//     show(dGit, clOpen);
// })
// git.addEventListener('mouseleave', function () {
//     hidden(dGit, clOpen);
// })

const hoverElement = [
    { trigger: ".fb", target: ".facebook" },
    { trigger: ".git", target: ".github" }
];
const clOpen = 'open';

function toggleClass(eventType, element, className) {
    if (eventType === "mouseenter") {
        element.classList.add(className);
    } else if (eventType === "mouseleave") {
        element.classList.remove(className);
    }
}
//sử dụng destructuring
//Khi bạn duyệt qua mảng hoverElements, 
//mỗi phần tử của mảng là một object có 
//cấu trúc { trigger, target }. Bằng cách sử dụng 
//destructuring, bạn lấy trực tiếp giá trị 
//của các key trigger và target trong object đó.
//không sử dụng destructuring
// hoverElement.forEach((element, index) => {
//     console.log(element.trigger)
// })
// sử dụng destructuring
hoverElement.forEach(({ trigger, target }) => {
    const triggerElement = document.querySelector(trigger);
    const targetElement = document.querySelector(target);

    triggerElement.addEventListener('mouseenter', () => {
        toggleClass('mouseenter', targetElement, clOpen);
    });
    triggerElement.addEventListener('mouseleave', () => {
        toggleClass('mouseleave', targetElement, clOpen);
    });
})

const navItem = document.querySelectorAll(".item");
const extendList = document.querySelectorAll('.extend')
const navigation = document.querySelector(".navigation");
console.log(navigation)
console.log(navItem, extendList)

navItem.forEach(function (item, index) {
    const pane = extendList[index];
    // console.log(pane)
    item.onclick = function () {
        const itemActive = document.querySelector('.item.active');
        const extendActive = document.querySelector('.extend.active');
        itemActive.classList.remove('active');
        extendActive.classList.remove('active');
        this.classList.add('active');
        pane.classList.add('active');
        // console.log(this)
    }
})

// window.addEventListener('scroll', function () {
//     if (window.scrollY > 200) {
//         navigation.style.position = "fixed";
//         navigation.style.top = "0"
//         navigation.style.width = "14%"

//     } else {
//         navigation.style.position = "relative";
//         navigation.style.top = "0"
//         navigation.style.width = "100%"

//     }
// })
// Kiểm tra nếu màn hình nhỏ hơn 739px
if (window.matchMedia('(min-width: 740px)').matches) {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) {
            navigation.style.position = "fixed";
            navigation.style.top = "0";
            navigation.style.width = "14%";
        } else {
            navigation.style.position = "relative";
            navigation.style.top = "0";
            navigation.style.width = "100%";
        }
    });
}










