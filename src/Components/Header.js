import '../Assets/Css/Header.css';
function Header() {

    return (
        <div>
            <header>
                <a href="#" class="logo">
                    <img src="https://1.bp.blogspot.com/-FSJpfNUfiwQ/YVmBlwUDTuI/AAAAAAAABA8/UJWwUNLmi8A-dbv_FAwXhnnOh93BsJiAgCLcBGAsYHQ/s320/logo2.png" />
                    <h1>Online store</h1>
                </a>
                <input type="checkbox" id="check" />
                <label for="check">
                    <img src="https://1.bp.blogspot.com/-TQ6sqw09POE/YVmBmHDNLtI/AAAAAAAABBE/h2kA7cyP42gurgfw1OttA8o6-9IFWvm7wCLcBGAsYHQ/s0/menu1.png" class="img1" />
                    <img src="https://1.bp.blogspot.com/-7FrNzRkSTfA/YVmBmBWPd1I/AAAAAAAABBA/7ddyu0cIswgmBH3FCqUAuOnCU6Rq5bgbgCLcBGAsYHQ/s0/menu2.png" class="img2" />
                </label>
                <div class="links">
                    <div>
                        <a href="#">Home</a>
                        <a href="#">Content</a>
                        <a href="#">Profile</a>
                        <a href="#">About</a>
                    </div>
                </div>
            </header>

        </div>
    )
}

export default Header;