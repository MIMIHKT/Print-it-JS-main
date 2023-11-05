const slides = [
	{   
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//<img class="banner-img" src="./assets/images/slideshow/slide1.jpg" alt="Banner Print-it">
//<p>Impressions tous formats <span>en boutique et en ligne</span></p>

// Je veux écouter le clique sur la flèche de droite
const right = document.querySelector('.arrow_right')

let currentIndex = 0
right.addEventListener("click",  () => {
    // On récupère le slider (c'est la constante définie en haut)
    /*
        slides[indice]
        slides[3]
    */

    // On récupère l'index et on ajoute 1 pour changer de slide
    // On vérifie la quantité de slides pour savoir si on fait +1 ou si on remet à 0
    // variable =  (conditions a tester) ? valeur si vraie : valeur si faux
    currentIndex = (currentIndex == slides.length - 1) ? 0 : currentIndex + 1

    // Modifier l'image et la tagLine sur le dom
    document.querySelector('.banner-img').src ="./assets/images/slideshow/"+slides[currentIndex].image
    document.querySelector('#banner p').innerHTML = slides[currentIndex].tagLine


    // Changer le point actif grace au currentIndex
    // Sélectionner le point actif, et retirer la classe
    document.querySelector('.dot_selected').classList.remove('dot_selected')

    // On ajoute la classe au bon dot grace à l'index
    document.querySelectorAll('.dot')[currentIndex].classList.add('dot_selected')

})

// Je veux écouter le clique sur la flèche de gauche
const left = document.querySelector('.arrow_left')
left.addEventListener("click",  () => {
   
    currentIndex = (currentIndex == 0) ? slides.length - 1 : currentIndex - 1

    // Modifier l'image et la tagLine sur le dom
    document.querySelector('.banner-img').src ="./assets/images/slideshow/"+slides[currentIndex].image
    document.querySelector('#banner p').innerHTML = slides[currentIndex].tagLine

    // Changer le point actif grace au currentIndex
    // Sélectionner le point actif, et retirer la classe
    document.querySelector('.dot_selected').classList.remove('dot_selected')

    // On ajoute la classe au bon dot grace à l'index
    document.querySelectorAll('.dot')[currentIndex].classList.add('dot_selected')

})

// On injecte les points dans le HTML
// On regarde combien de slides il y a, et on fait une boucle pour chaque slide
for(let i = 0; i < slides.length; i++){
    document.querySelector('.dots').insertAdjacentHTML('beforeend', '<div class="dot"></div>')
}
// On active le premier dot
document.querySelector('.dot').classList.add('dot_selected')