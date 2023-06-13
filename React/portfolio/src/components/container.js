import Navbar from './navbar';
import Sections from './sections';
import Footer from './footer';

export default function Container() {
    return(
        <>
            <div className="container">
                <Navbar />
                <Sections />
                <Footer />
            </div> 
        </>
    );
}