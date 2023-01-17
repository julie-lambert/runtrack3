document.addEventListener("DOMContentLoaded", function(){

    const texte1 = document.querySelector("#texte1").innerText; // je cible le texte que je veux afficher 
    const button = document.querySelector("#bouton"); // je cible le bouton 
    texte1.style.display ="none";
    
    function showhide(){
        
        
            if(texte1.style.display === "none"){
                texte1.style.display= "block";
            }
            else  {
                texte1.style.display="none";
            }
    }
    
    
    
 button.addEventListener("click", showhide); // action au clique du bouton 

});