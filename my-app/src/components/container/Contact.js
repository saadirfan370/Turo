import { Link } from "react-router-dom";


function Contact(){
    return(
        <div>
            <h1>Contact</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        Youtube
                    </a>
                </li>
            </ul>
        </div>
    );
}
export default Contact;