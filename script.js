let footer = document.getElementsByTagName('footer')[0]
let count = 0


footer.addEventListener("click", function(){
    count++;
    console.log(`clique ${count}`)
})

document.getElementsByClassName('navbar-toggler')[0].addEventListener("click", function(){
    console.log("a")
    document.getElementById('navbarHeader').classList.toggle('collapse');
})



let firstCard = document.getElementsByClassName('card')[0]
firstCard.querySelector(".btn-outline-secondary").addEventListener("click", function(){
    firstCard.style.color = 'red';

})

let secondCard = document.getElementsByClassName('card')[1]
secondCard.querySelector(".btn-outline-secondary").addEventListener("click", function(){
    if (secondCard.style.color == "green")
        secondCard.style.color = '';
    else 
        secondCard.style.color = "green";

})


let header = document.getElementsByTagName('header')[0]
header.addEventListener("dblclick", function(){
    if (document.styleSheets[0].disabled == false)
        document.styleSheets[0].disabled = true;
    else
        document.styleSheets[0].disabled = false; 
})

/*
let cardOne = document.getElementsByClassName('card')[0]
let cardOneB = cardOne.getElementsByTagName('button')[0]
let textCard = cardOne.querySelector('.card-text').innerHTML;

cardOneB.addEventListener("mouseover", function(){
   
    let imageCard = cardOne.querySelectorAll('.card-img-top')[0];

    if (cardOne.querySelector('.card-text').innerHTML.length > 0) {
        cardOne.querySelector('.card-text').innerHTML = '';

        imageCard.style.height = '20%';
        imageCard.style.width = '20%';
  }
  else {
        cardOne.querySelector('.card-text').innerHTML = textCard;
        imageCard.style.height = '100%';
        imageCard.style.width = '100%'; 
  }

})
*/


let card = document.querySelectorAll('.card');

for (let i = 0 ; i < card.length; i++) {

    let textCard = card[i].querySelector('p').innerHTML;
  
    card[i].querySelector("button").addEventListener("mouseover", function(){


    if (card[i].querySelector("p").innerHTML.length > 0) {
        card[i].querySelector("p").innerHTML = "";
        card[i].querySelector("img").style.width = "20%";
    }
    else {
        card[i].querySelector("p").innerHTML = textCard;
        card[i].querySelector("img").style.width = "";
        }
    });
}




let greyButton = document.querySelector(".jumbotron").querySelectorAll("a")[1];

let parentChild = document.querySelectorAll('.row')[1];

greyButton.addEventListener("click", function(){
    parentChild.insertBefore(parentChild.lastElementChild, parentChild.firstElementChild);
});





let blueButton = document.querySelectorAll(".btn-primary")[0]

let parentChild2 = document.getElementsByClassName('row')[1]

console.log(blueButton)

blueButton.addEventListener("click", function(e){
    parentChild.insertBefore(parentChild2.lastElementChild, parentChild2.firstElementChild);
    e.preventDefault();
})


/* question 9 */


let columns = document.querySelectorAll('.col-md-4')

console.log(columns[0].classList);


window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; 
    }
  
    switch (event.key) {
      case "a":
        for( let i = 0; i < columns.length; i++) {
            columns[i].classList.value ='col-md-3'
        }
    
        break;
      case "y":
        for( let i = 0; i < columns.length; i++) 
            columns[i].classList.value ='col-md-3'
        break;
      case "p":
        for( let i = 0; i < columns.length; i++) 
            columns[i].classList.value ='col-md-3'
        break;
      case "b":
        for( let i = 0; i < columns.length; i++) 
            columns[i].classList.value ='col-md-4'
        break;
      default:
        return; 
    }
      event.preventDefault();
  }, true);
