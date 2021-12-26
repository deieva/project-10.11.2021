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
                            HOW WE CAN HELP
                        </menu-item>
                        <menu-item>
                            PROJECTS
                        </menu-item>
                        <menu-item>
                            HISTORY
                        </menu-item>
                        <menu-item>
                            TESTIMONIALS
                        </menu-item>
                        <menu-item>
                            GET IN TOUCH
                        </menu-item>
                    </menu>
                </rightie>
            </container>
        </div>
    )
}
export default Home;