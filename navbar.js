document.write(
    " <script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js\" integrity=\"sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==\" crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\"></script><div class='navbar'><div class='LogoTitre'><img id=\"LogoEA\" onclick=\"playEasterEgg()\" src='./img/LogoW2G_2.png' alt='LogoW2G'></div><button class=\"buttonHide\" onclick=\"hideMenu()\" width=30 height=30></button><div class='menu'><a href='index.html'><button class='boutonMenu'><div>Accueil</div></button></a><a href='formation.html'><button class='boutonMenu'><div>Formation</div></button></a><a href='tools.html'><button class='boutonMenu'><div>Outils</div></button></a><a href='orga.html'><button class='boutonMenu'><div>Organisation</div></button></a><a href='technologies.html'><button class='boutonMenu'><div>Technologies</div></button></a> <div id='checkdark'><i class='material-icons'>nightlight_round</i><input type='checkbox' id='darkmode'></div> </div ></div >"
);

const toggleSwitch = document.getElementById('darkmode');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);