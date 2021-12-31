import '../Assets/Css/Header.css';
function Header() {

    return (
        <div>
            <header className="neumorphic-header">
                <div className="navigation-container">
                    <input type="checkbox" name="navigation" id="navHandlerId" />
                    <label className="header-menu-icon fa fa-bars" for="navHandlerId"></label>
                    <nav id="headerNavigationId" className="header-navigation">
                        <input type="radio" name="headerNavigation" id="nav-1" checked />
                        <label className="nav-item" for="nav-1" data="Home">
                            <i className="nav-icon fa fa-codepen"></i>
                        </label>
                        <input type="radio" name="headerNavigation" id="nav-2" />
                        <label className="nav-item" for="nav-2" data="How we can help">
                            <i className="nav-icon fa fa-github"></i>
                        </label>
                        <input type="radio" name="headerNavigation" id="nav-3" />
                        <label className="nav-item" for="nav-3" data="Projects">
                            <i className="nav-icon fa fa-linkedin"></i>
                        </label>
                        <input type="radio" name="headerNavigation" id="nav-4" />
                        <label className="nav-item" for="nav-4" data="History">
                            <i className="nav-icon fa fa-instagram"></i>
                        </label>
                        <input type="radio" name="headerNavigation" id="nav-5" />
                        <label className="nav-item" for="nav-5" data="Testimonials">
                            <i className="nav-icon fa fa-facebook"></i>
                        </label>
                        <input type="radio" name="headerNavigation" id="nav-5" />
                        <label className="nav-item" for="nav-5" data="Get in touch">
                            <i className="nav-icon fa fa-facebook"></i>
                        </label>
                    </nav>
                </div>
            </header>

        </div>
    )
}

export default Header;