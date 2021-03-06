import '../Assets/Css/Home.css';
function Home() {
    return (
        <div>
            <container className="home-container">
                <zoomer>Hover to Enter</zoomer>
                <secret>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent semper feugiat nibh sed pulvinar proin gravida. Diam donec adipiscing tristique risus nec feugiat.
                    <clickable>FIND OUT HOW</clickable>
                </secret>
                <leftie><text>FIND US ON SOCIALS</text>
                    <icon className="bi bi-facebook"></icon>
                    <icon className="bi bi-twitter"></icon>
                    <icon className="bi bi-linkedin"></icon>
                    <icon className="bi bi-instagram"></icon>
                    <icon className="bi bi-discord"></icon>
                </leftie>
                <rightie>
                    <menu>
                        <menu-item>
                            <a href='/whoweare' className='home-links'>WHO WE ARE</a>
                        </menu-item>
                        <menu-item>
                           <a href='/howwecanhelp' className='home-links'> HOW WE CAN HELP</a>
                        </menu-item>
                        <menu-item>
                        <a href='/projects' className='home-links'> PROJECTS</a>
                        </menu-item>
                        <menu-item>
                        <a href='/history' className='home-links'> HISTORY</a>
                        </menu-item>
                        <menu-item>
                        <a href='/testimonials' className='home-links'> TESTIMONIALS</a>
                        </menu-item>
                        <menu-item>
                        <a href='/getintouch' className='home-links'> GET IN TOUCH</a>
                        </menu-item>
                    </menu>
                </rightie>
            </container>
        </div>
    )
}
export default Home;