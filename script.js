/**ficher pour java script */
var basketList = [];


/**liste des formations**/
let formationsList = {
}

let filtersList = [];

function filter() {
    let values = [];

    /**query de chaque colonne du tableau */
    let cbformation = document.querySelectorAll('input[name="formation"]:not(:checked)');
    let cbstructure = document.querySelectorAll('input[name="structure"]:not(:checked)');
    let cbvalidation = document.querySelectorAll('input[name="validation"]:not(:checked)');
    let cblocalisation = document.querySelectorAll('input[name="localisation"]:not(:checked)');
    let cblocalisation = document.querySelectorAll('input[name="localisation"]:not(:checked)');
    let cblocalisation = document.querySelectorAll('input[name="localisation"]:not(:checked)');
    let cblocalisation = document.querySelectorAll('input[name="localisation"]:not(:checked)');
    values.push("Formation:")
    cbformation.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    values.push("\nStructure:")
    cbstructure.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    values.push("\nLocalisation:")
    cblocalisation.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    alert(values);
}

/**fonction d'ajout dans le panier */
function addBasket(btnId) {
    basketList.push(document.getElementById(btnId));
}
/**fonction de retrait du panier */
function removeBasket(btnId) {
    for (let n = 0; n < basketList.length; n++) {
        if (basketList[n] == document.getElementById(btnId)) {
            basketList.splice(n, 1);
        }
    }
}
/**fonction afficher le panier */
function displayBasket() {
    var x = document.getElementById("basket");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}
/**fonction pour imprimer la page en pdf */
function print() {

}