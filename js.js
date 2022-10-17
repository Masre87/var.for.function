// let user ={
//     name: 'mahmoud',
//     age: 35,
//     email:' m.masre2021@gmail.com',
//     location: 'rotterdam',
//     blogs: [ 'i am studing web developing'],
//     login: function () {
//         console.log ('user is log in')
//     },
//     logout: function (){
//         console.log ('user is log out')
//     }
// }
// user.login()
// user.logout()
// for(let i=0; i<=135; i++){
// console.log(i)}

var items =document.getElementById('menu').getElementsByTagName('li');
var text =document.getElementById('text');
// items[0].innerHTML='hello word';

for (i=0; i<items.length; i++){
    // items[i].innerHTML="hello";
    items[i].addEventListener('click',select);
}
function select(){
    // alert('Good');
   text.innerHTML=this.innerHTML;
}
