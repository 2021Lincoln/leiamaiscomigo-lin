function createNavebar(){
    const element = document.getElementById('navbar-local')
    const navbar = `
    <nav class="nav-top">
        <ul>
            <li><a href="index.html">Inicio</a></li>
            <li><a href="index.html">Galeria</a></li>
            <li><a href="index.html">Agenda</a></li>
            <li><a href="index.html">Contato</a></li>
            <li><a href="index.html">Entrar</a></li>
        </ul>
    </nav> 
    `
    element.innerHTML = navbar
}

createNavebar()