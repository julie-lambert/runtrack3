document.addEventListener("DOMContentLoaded", function(){

  let compteur = 0

  function addone(){

      compteur++;
      document.getElementById("compteur").textContent = compteur;
    }
    
    
const button = document.querySelector("#bouton"); // je cible le bouton 
button.addEventListener("click", addone); // action au clique du bouton 


});