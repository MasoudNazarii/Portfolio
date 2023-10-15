import Images from '../images/index.js';

export default function Navbar() {
    window.onscroll = function() {scrollFunction()};
 
    function scrollFunction() {
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.background = "#1e1e1e2a";
        document.getElementById("navbar").style.borderBottom = "1px solid #7a7a7a4b";
    }
    else {
        document.getElementById("navbar").style.background = "none";
        document.getElementById("navbar").style.borderBottom = "none";
    }}

    return(
        <>
            <nav id='navbar' className="navbar">
                <div className="left-items">
                    <a href="#Home">Home</a>
                    <a href="#Contact">Contact</a>
                    <a href="#About">About</a>
                </div>
                <div className="right-items">
                    <img
                    className="logo"
                    src={Images.LogoLight}
                    alt="logo"
                    />
                </div>
            </nav>
        </>
    );
}