

function displayPsondage() {
    const showMessage = document.getElementById('pAct');
    showMessage.innerHTML = 'Chaque trimestre, sera organisé un sondage pour évaluer votre niveau de morale. Vous serez amenés à nous donner vos ressentis et les axes d’amélioration de l’école W2G pour votre confort et votre bien être au sein du campus.';
    showMessage.style.display = 'block';
}

function displayPcours() {
    const showMessage = document.getElementById('pAct');
    showMessage.innerHTML = "Il y a différente manière d'assister aux cours que selon vos convenances, à savoir en présentiel et distanciel, ou tout simplement en visionnant les cours enregistrer. Ainsi, vous pourrez être en distanciel, présentiel ou même en hybride.";
    showMessage.style.display = 'block';
}

function displayPchoix() {
    const showMessage = document.getElementById('pAct');
    showMessage.innerHTML = 'Vous choisissez ce que vous voulez apprendre à part 5 modules faisant partie d’un tronc commun pour asseoir quelques bases vous être libre de choisir les modules dans lesquelles vous voulez monter en compétence.';
    showMessage.style.display = 'block';
}

function displayPsport() {
    const showMessage = document.getElementById('pAct');
    showMessage.innerHTML = 'Nous proposons aussi diverses activités sportives ainsi qu’un accès illimité à notre grande salle de musculation .';
    showMessage.style.display = 'block';
}

function displayPfete() {
    const showMessage = document.getElementById('pAct');
    showMessage.innerHTML = 'Il y aura trois 3 soirées , 2 galas au cours de l’années organisées par et sur le campus dans notre salle de bal, prévue à cet effet.';
    showMessage.style.display = 'block';
}

function displayPculture() {
    const showMessage = document.getElementById('pAct');
    showMessage.innerHTML = 'Des activités culturelles telles que des concerts et des semaines culturelles où vous pourrez, si vous le souhaitez, exprimer votre âme d’artiste.';
    showMessage.style.display = 'block';
}

function displayPrepos() {
    const showMessage = document.getElementById('pAct');
    showMessage.innerHTML = 'Nous disposons également de nombreuses salles de repos un peu partout dans le campus, car nous avons conscience qu’un cerveau bien reposé est plus productif.';
    showMessage.style.display = 'block';
 } 

function showStory() {
    var x = document.getElementById("StoryHide");
    if (x.innerHTML === "Hide") {
        x.innerHTML = "Show";
    } else {
        x.innerHTML = "Hide";
    }
    $("#Storymap").toggle("hide");
}

function showImpact() {
    var x = document.getElementById("ImpactHide");
    if (x.innerHTML === "Hide") {
        x.innerHTML = "Show";
    } else {
        x.innerHTML = "Hide";
    }
    $("#Impactmap").toggle("hide");
}

function showLean() {
    var x = document.getElementById("LeanHide");
    if (x.innerHTML === "Hide") {
        x.innerHTML = "Show";
    } else {
        x.innerHTML = "Hide";
    }
    $("#LeanCanvas").toggle("hide");
}

function hideAll() {
    showStory();
    showImpact()
    showLean();
}
