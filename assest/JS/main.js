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