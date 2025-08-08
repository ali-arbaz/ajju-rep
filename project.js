// const buttons=document.querySelectorAll('.button')
// console.log(buttons)
// const body = document.querySelectorAll("body")
// buttons.forEach(function (button){
// console.log(button);
// button.addEventListener('click', function(man){
// console.log(man)
// console.log(man.target)
// if(man.target==='red'){
//     body.style.backgroundColor='red'
// }
// if(man.target==='green'){
//     body.style.backgroundColor='green'
// }
// if(man.target==='yellow'){
//     body.style.backgroundColor='yellow'
// }
// if(man.target==='blue'){
//     body.style.backgroundColor='blue'
// }
// })
// });


const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body'); // Get single body element

buttons.forEach(function(button) {
button.addEventListener('click', function(event) {
    const color = event.target.id;
    body.style.backgroundColor = color;
});
});
