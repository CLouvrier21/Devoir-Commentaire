function addnom() {
    let input = document.getElementById("nom");
    let list = document.getElementById("list");
    
    let newItemList = document.createElement("li");
    
    let newItemListContent = document.createTextNode(input.value);
    
    newItemList.appendChild(newItemListContent);
    
    list.appendChild(newItemList);
    }
    function addprenom() {
        let input = document.getElementById("prenom");
        let list = document.getElementById("list");
        
        let newItemList = document.createElement("li");
        
        let newItemListContent = document.createTextNode(input.value);
        
        newItemList.appendChild(newItemListContent);
        
        list.appendChild(newItemList);
    }
    function addabout() {
        let input = document.getElementById("about");
        let list = document.getElementById("list");
        
        let newItemList = document.createElement("li");
        
        let newItemListContent = document.createTextNode(input.value);
        
        newItemList.appendChild(newItemListContent);
        
        list.appendChild(newItemList);
    }
    var validation = document.getElementById('bouton_envoi');
    var prenom = document.getElementById('prenom');
    var nom = document.getElementById('nom');
    var about = document.getElementById('about');
    var prenom_m = document.getElementById('prenom_manquant');
    var nom_m = document.getElementById('nom_manquant');
    var about = document.getElementById('veuillez_renseigner_ce_champ');
    validation.addEventListener('click', valid);

    function valid(e) {
        if (prenom.validity.valueMissing) {
            e.preventDefault();
            prenom_m.textContent = 'prenom manquant !';
            prenom_m.style.color = 'red';
        }
        if (nom.validity.valueMissing) {
            e.preventDefault();
            nom_m.textContent = 'nom manquant !';
            nom_m.style.color = 'red';
        }
        if (about.validity.valueMissing) {
            e.preventDefault();
            about.textContent = 'veuillez renseigner ce champ';
            about.style.color = 'red';
        }     
}
var node = document.createElement("strong") ; ('list');
node.appenchild(document.createTextNode('Vincent B.'));
document.querySelector('ul').appendChild(node);

var node = document.createElement('li');
node.appenchild(document.createTextNode('Bonjour voici mon devoir dynamiser un commentaire'));
document.querySelector('ul').appendChild(node);

window.addEventListener("load", event => {
    document.getElementById("reload").onclick = function() {
        location.reload(true);
    }
});