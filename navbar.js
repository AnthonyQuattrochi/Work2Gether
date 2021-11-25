

document.write(
    "<div class='navbar'><div class='LogoTitre'><img id=\"LogoEA\" onclick=\"playEasterEgg()\" src='./img/LogoW2G_2.png' alt='LogoW2G'></div><div class='menu'><a href='index.html'><button class='boutonMenu'><div>Accueil</div></button></a><a href='formation.html'><button class='boutonMenu'><div>Formation</div></button></a><a href='tools.html'><button class='boutonMenu'><div>Outils</div></button></a><a href='orga.html'><button class='boutonMenu'><div>Organisation</div></button></a><a href='technologies.html'><button class='boutonMenu'><div>Technologies</div></button></a> <div id='checkdark'><i class='material-icons'>nightlight_round</i><input type='checkbox' id='darkmode'></div> </div ></div >"
);
const toggleSwitch = document.getElementById('darkmode');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        console.log("dans dark")
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);