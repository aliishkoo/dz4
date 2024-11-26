let count = 0;

const decrementButton = document.getElementById('decrement');
const incrementButton = document.getElementById('increment');

decrementButton.onclick = () => {
    if (count > 0) {
        count--;
        incrementButton.innerText = count;
        incrementButton.style.color = 'red';

    }
};

incrementButton.onclick = () => {
    count ++;
    incrementButton.innerText = count;
    incrementButton.style.color = 'green';
};


const element = document.querySelector('#title');

element.innerHTML = "AAAAA"
element.style.width = "500px";
element.style.height = "500px";

const title = document.getElementById('title');

title.addEventListener('mousedown', e => {
    console.log(e);
});




