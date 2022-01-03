

// On va chercher les différents éléments de notre page
const pages = document.querySelectorAll(".page")
const header = document.querySelector("header")
const nbPages = pages.length // Nombre de pages du formulaire
let pageActive = 1

// On attend le chargement de la page
window.onload = () => {
    // On affiche la 1ère page du formulaire
    document.querySelector(".page").style.display = "initial"

    // On affiche les numéros des pages dans l'entête
    // On parcourt la liste des pages
    pages.forEach((page, index) => {
        // On crée l'élément "numéro de page"
        let element = document.createElement("div")
        element.classList.add("page-num")
        element.id = "num" + (index + 1)
        if(pageActive === index + 1){
            element.classList.add("active")
        }
        element.innerHTML = index + 1
        header.appendChild(element)
    })

    // On gère les boutons "suivant"
    let boutons = document.querySelectorAll(".next")

    for(let bouton of boutons){
        bouton.addEventListener("click", pageSuivante)
    }

    // On gère les boutons "suivant"
    boutons = document.querySelectorAll(".prev")

    for(let bouton of boutons){
        bouton.addEventListener("click", pagePrecedente)
        if(bouton==4){
            bouton.addEventListener("click",  calcul)
            bouton.addEventListener("click", pagePrecedente)
        }
    }
}

/**
 * Cette fonction fait avancer le formulaire d'une page
 */
function pageSuivante(){
    // On masque toutes les pages
    for(let page of pages){
        page.style.display = "none"
    }

    // On affiche la page suivante
    this.parentElement.nextElementSibling.style.display = "initial"

    // On "désactive" la page active
    document.querySelector(".active").classList.remove("active")

    // On incrémente pageActive
    pageActive++

    // On "active" le nouveau numéro
    document.querySelector("#num"+pageActive).classList.add("active")
    if(pageActive==4){
       
            confirm('انهاء و ارسال الكل');
            pageActive++
           
        
    }
}

/**
 * Cette fonction fait reculer le formulaire d'une page
 */
function pagePrecedente(){
    // On masque toutes les pages
    for(let page of pages){
        page.style.display = "none"
    }

    // On affiche la page suivante
    this.parentElement.previousElementSibling.style.display = "initial"
    

    // On "désactive" la page active
    document.querySelector(".active").classList.remove("active")

    // On incrémente pageActive
    pageActive--

    // On "active" le nouveau numéro
    document.querySelector("#num"+pageActive).classList.add("active")
}
///************************************************************************************ */
function calcul(){
    nombreDeQuestion=10;
    nom=new Array();
    nomLength=new Array();
    point=0;
    for(n=0;n<=(nombreDeQuestion-1);n++)
    {
       nom[n]=document.getElementsByName("choix_rep_"+n);
       nomLength[n]=nom[n].length;
       for(q=0;q<=(nomLength[n]-1);q++)
       {
         if(nom[n][q].checked==true)
         {point=point+eval(nom[n][q].value);} 
         else
         {point=point;}
 
       }       
    }
    document.form_qz.txtNb.value=parseFloat(point*2)+'/20';
    document.getElementById('note1').innerHTML=parseFloat(point*2)+'/20';
   
    document.getElementById('note2').innerHTML=parseFloat(point)+'/10';
 }
 
