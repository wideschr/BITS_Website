/* OEFENING 1*/
// log een boodschap naar de console die toont dat het script geladen is
console.log('Hey');

/* OEFENING 2*/
//  'Login first' boodschap

// Haal de header op en stop deze in een variabele 
let headers = document.getElementsByTagName('header');

// koppel een click-event aan de download link
let downloadLink = document.getElementById('download');

console.log(downloadLink)

downloadLink.addEventListener('click', loginFirst, false);

function loginFirst() {
  
    downloadLink.textContent = 'Login first'

    downloadLink.style.fontWeight = 'bold'
    downloadLink.style.color = 'white'
}


/* OEFENING 3*/
//  Header met navigatie verdwijnt bij naar beneden scrollen 
// en verschijnt weer na omhoog scrollen

let beginP = window.scrollY


let nav = document.getElementsByTagName('header');

window.addEventListener('scroll', function () {
    let curP = window.scrollY
    console.log(beginP, curP);

if(curP > beginP)
{
    nav[0].classList.add('hidden')

    beginP = curP
    
}
else
{nav[0].classList.remove('hidden')}
beginP = curP
})






/*
Nodige event: window.scroll (it is een event van het window-object ipv document)

Voeg zodra er gescrolled wordt een klasse 'hidden' toe aan de navigatie
Verwijder deze klasse zodra er omhoog gescolled wordt.
Definieer de hidden klasse in je CSS en geef ze display:hidden

window.pageYoffset 

geeft het aantal pixels terug dat het document op een bepaald moment gescrolled is in verticale richting

*/






