const dFb = document.querySelector(".facebook");
const dGit = document.querySelector(".github");
const fb = document.querySelector(".fb");
const git = document.querySelector(".git");

function show(variable) {
    variable.classList.add('open');
}
function hidden(variable) {
    variable.classList.remove('open');
}

fb.addEventListener('mouseenter', function () {
    show(dFb);
})
fb.addEventListener('mouseleave', function () {
    hidden(dFb);
})
git.addEventListener('mouseenter', function () {
    show(dGit);
})
git.addEventListener('mouseleave', function () {
    hidden(dGit);
})