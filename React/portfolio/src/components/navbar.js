import Images from '../images/index.js';

export default function Navbar() {
    return(
        <>
            <nav className="navbar">
                <div className="left-items">
                    <a href="#Home">Home</a>
                    <a href="#Contact">Contact</a>
                    <a href="#About">About</a>
                </div>
                <div className="right-items">
                    <img
                    className="logo"
                    src={Images.Logo}
                    alt="logo"
                    />
                </div>
            </nav>
        </>
    );
}