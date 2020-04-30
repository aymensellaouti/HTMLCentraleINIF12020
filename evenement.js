const button = document.querySelector('button');
const ol = document.querySelector('ol');
function getRandomColor() {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
}
function handleClick(e) {
    console.log('in handle clik :');
    console.log(e);
    ol.hidden = !ol.hidden;
}
ol.addEventListener('click', function (e) {
    console.log(e.target);
    e.target.style.color = getRandomColor();
})

button.addEventListener('click', handleClick);
button.addEventListener('mouseenter', function () {
    button.style.color = 'red';
});
button.addEventListener('mouseleave', function () {
    button.style.color = 'yellow';
}, true);
