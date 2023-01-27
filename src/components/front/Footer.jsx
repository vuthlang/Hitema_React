import { Link } from "react-router-dom";

const Footer = () => {
    return (<>
        <footer className="text-center mb-3" style={{ whiteSpace: 'break-spaces' }}>
            <hr style={{ size: 50 }}></hr>
            <Link to="/mention-legale" style={{ textDecoration: 'none' }}>Mentions Légales</Link>
        </footer>
    </>);
}

export default Footer;