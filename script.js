/**ficher pour java script */
var basketList=[];


/**liste des formations**/
let formationsList= {
}

/**fonction d'ajout dans le panier */
function addBasket(btnId){
    basketList.push(document.getElementById(btnId));
}
/**fonction de retrait du panier */
function removeBasket(btnId){
    for (let n = 0; n < basketList.length; n++) {
        if(basketList[n] == document.getElementById(btnId)){
            basketList.splice(n, 1);
        }
    }
}
/**fonction afficher le panier */
function openBasket(){
    document.getElementById("basket").classList.toggle('show-menu');
    document.getElementById("open-menu").style.display="none";
    document.getElementById("close-menu").style.display="block";
    console.log("opened")
}
function closeBasket(){
    document.getElementById("basket").classList.toggle('show-menu');
    document.getElementById("open-menu").style.display="block";
    document.getElementById("close-menu").style.display="none";
    console.log("closed")
}
/**fonction pour imprimer la page en pdf */
function print(){

}