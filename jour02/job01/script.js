document.addEventListener("DOMContentLoaded", function(){

    function citation(){    //création fonction citation

        const citation = document.querySelector("#citation").innerText; // je cible le texte que je veux afficher 

        console.log(citation) // j'affiche le texte dans la console 
    }

    const button = document.querySelector("#bouton"); // je cible le bouton 


    button.addEventListener("click", citation); // action au clique du bouton 


});