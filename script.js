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
/**fonction pour imprimer la page en pdf */
function print(){

}