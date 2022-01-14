import '../Assets/Css/Header.css';
function Header() {

    return (
        <div>
            <header className="neumorphic-header">
                <div className="navigation-container">
                    <input type="checkbox" name="navigation" id="navHandlerId" />
                    <label className="header-menu-icon fa fa-bars" for="navHandlerId"></label>
                    <nav id="headerNavigationId" className="header-navigation">

                        <input type="radio" name="headerNavigation" id="nav-1" checked/>
                        <label className="nav-item" for="nav-1" >
                            <i className="nav-icon fa fa-home"><a href='/' className='header-links'>Home</a></i>
                        </label>
                        <input type="radio" name="headerNavigation" id="nav-2"/>
                        <label className="nav-item" for="nav-2">
                            <i className="nav-icon  fa fa-star"><a href='/whoweare' className='header-links'>Who we are</a></i>
                        </label>
                        <input type="radio" name="headerNavigation" id="nav-3" />
                        <label className="nav-item" for="nav-3">
                            <i className="nav-icon  fa fa-heart"><a href='/howwecanhelp' className='header-links'>How we can help</a></i>
                        </label>
                        <input type="radio" name="headerNavigation" id="nav-4" />
                        <label className="nav-item" for="nav-4">
                            <i className="nav-icon  fa fa-globe"><a href='/projects' className='header-links'>Projects</a></i>
                        </label>
                        <input type="radio" name="headerNavigation" id="nav-5" />
                        <label className="nav-item" for="nav-5" >
                            <i className="nav-icon fa fa-map"><a href='/history' className='header-links'>History</a></i>
                        </label>
                        <a>
                        <input type="radio" name="headerNavigation" id="nav-6" />
                        <label className="nav-item" for="nav-6" >
                            <i className="nav-icon fa fa-pencil"><a href='/testimonials' className='header-links'>Testimonials</a></i>
                        </label>
                        </a>
                        <a href='/getintouch'>
                        <input type="radio" name="headerNavigation" id="nav-7" />
                        <label className="nav-item" for="nav-7" data="Get in touch">
                            <i className="nav-icon  fa fa-info"></i>
                        </label>
                        </a>
                    </nav>
                </div>
            </header>

        </div>
    )
}

export default Header;