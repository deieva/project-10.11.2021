import '../Assets/Css/Header.css';
function Header() {

    return (
        <div>
            <header class="neumorphic-header">
                <div class="navigation-container">
                    <input type="checkbox" name="navigation" id="navHandlerId" />
                    <label class="header-menu-icon fa fa-bars" for="navHandlerId"></label>
                    <nav id="headerNavigationId" class="header-navigation">
                        <input type="radio" name="headerNavigation" id="nav-1" checked />
                        <label class="nav-item" for="nav-1" data="Codepen">
                            <i class="nav-icon fa fa-codepen"></i>
                        </label>
                        <input type="radio" name="headerNavigation" id="nav-2" />
                        <label class="nav-item" for="nav-2" data="Github">
                            <i class="nav-icon fa fa-github"></i>
                        </label>
                        <input type="radio" name="headerNavigation" id="nav-3" />
                        <label class="nav-item" for="nav-3" data="Linkedin">
                            <i class="nav-icon fa fa-linkedin"></i>
                        </label>
                        <input type="radio" name="headerNavigation" id="nav-4" />
                        <label class="nav-item" for="nav-4" data="Instagram">
                            <i class="nav-icon fa fa-instagram"></i>
                        </label>
                        <input type="radio" name="headerNavigation" id="nav-5" />
                        <label class="nav-item" for="nav-5" data="Facebook">
                            <i class="nav-icon fa fa-facebook"></i>
                        </label>
                    </nav>
                </div>
            </header>

        </div>
    )
}

export default Header;