
function vider(){
    const showMessage = document.getElementById('pAct');
    showMessage.innerHTML = "";
    showMessage.style.display = 'block';
 }

function displayPsondage() {
    
    showMessage.innerHTML = 'Chaque trimestre, sera organisé un sondage pour évaluer votre niveau de morale. Vous serez amenés à nous donner vos ressentis et les axes d’amélioration de l’école W2G pour votre confort et votre bien être au sein du campus.';
    
    showMessage.style.display = 'block';
 }
 function displayPcours() {
     vider();
    const showMessage = document.getElementById('pAct');
    showMessage.innerHTML = "Il y a différente manière d'assister aux cours que selon vos convenances, à savoir en présentiel et distanciel, ou tout simplement en visionnant les cours enregistrer. Ainsi, vous pourrez être en distanciel, présentiel ou même en hybride.";
    showMessage.style.display = 'block';
 }
