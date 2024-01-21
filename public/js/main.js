//? Get elements
let glasses = Array.from(document.querySelectorAll(".glass"))

let liters = document.querySelector('#liters');

let pourcent = document.querySelector('#pourcent'); 

let percentageText = document.querySelector("#percentageText")

let litersSpan = document.querySelector("#liters>span")



//? Get total numbers of glasses
let lesVerres = glasses.length;



//? Function to update glasses state
function cliquer(clicked) {

    glasses.forEach((element, i) => {

        let ajout = i <= clicked;  //? Determine whether the glass should be empty or not
        
        element.classList.toggle('vide', ajout); //? Toggle the 'vide' class based on the above condition
   
    });

    affichage();
}


//? funtion to update the display 
function affichage() {

    //?get the number of empty glasses
    let emptyGlass = document.querySelectorAll('.glass.vide').length;

    
    //? calculate the remaining liters
    let remainingLiters = (2 - (250 * emptyGlass / 1000)).toFixed(2); //? toFixed(2) rounds the result to two decimal places, providing a precise measurement of the remaining liters

    
    //? If there are no remaining liters, show "100%" in the middle
    if (remainingLiters === '0.00') {

        liters.innerText = '';
        pourcent.innerText = '100%';
        pourcent.style.color = "white"

        alert("congratulations you drank 2 liters")

    } else {

        //? update the remaining liters text
        liters.innerText = ` \n        ${remainingLiters}L \nremained`;
        liters.style.fontSize = '10px'
        pourcent.innerText = '';

    }

    //? update the percentage
    pourcent.style.height = `${(emptyGlass / lesVerres) * 100}%`;
    pourcent.innerText = `${(emptyGlass / lesVerres) * 100}%`;
    pourcent.style.color = "#05056d"


}     



//? Add an event listener to each glass
glasses.forEach((element, i) => {

    element.addEventListener('click', () => {

        //? Call the cliquer function when a glass is clicked
        cliquer(i)
        //? Change the background color of the clicked glass
        element.style.backgroundColor = "#5FA8F6"
        //? Change the text color of the clicked glass
        element.style.color = "white"

    });
});




