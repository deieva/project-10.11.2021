import $ from 'jquery';
import '../Assets/Css/Header.css';
function Header() {
    $(function(){
        // this will get the full URL at the address bar
        var url = window.location.href; 
    
        // passes on every "a" tag 
        $("#headerLinks a").each(function() {
                // checks if its the same on the address bar
            if(url == (this.href)) { 
                $(this).closest("a").addClass("active");
            }
        });
    });
    return (
        <div>
            <header>
                <a href="/" className="logo">
                    <img src="https://1.bp.blogspot.com/-FSJpfNUfiwQ/YVmBlwUDTuI/AAAAAAAABA8/UJWwUNLmi8A-dbv_FAwXhnnOh93BsJiAgCLcBGAsYHQ/s320/logo2.png" />
                    <h1>Online store</h1>
                </a>
                <input type="checkbox" id="check" />
                <label for="check">
                    <img src="https://1.bp.blogspot.com/-TQ6sqw09POE/YVmBmHDNLtI/AAAAAAAABBE/h2kA7cyP42gurgfw1OttA8o6-9IFWvm7wCLcBGAsYHQ/s0/menu1.png" className="img1" />
                    <img src="https://1.bp.blogspot.com/-7FrNzRkSTfA/YVmBmBWPd1I/AAAAAAAABBA/7ddyu0cIswgmBH3FCqUAuOnCU6Rq5bgbgCLcBGAsYHQ/s0/menu2.png" className="img2" />
                </label>
                <div className="links">
                    <div id='headerLinks'>
                        <a href="/">Home</a>
                        <a href="/whoweare">Who we are</a>
                        <a href="/howwecanhelp">How we can help</a>
                        <a href="/projects">Projects</a>
                        <a href="/history">History</a>
                        <a href="/testimonials">Testimonials</a>
                        <a href="/getintouch">Get in touch</a>
                    </div>
                </div>
            </header>

        </div>
    )
}

export default Header;