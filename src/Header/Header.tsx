import './Header.css';
import star from './star.svg';

function Header() {
    return (
        <div className="Header">
            <div className="logo">
                <img className="star" src={star} alt="star of nebula logo"/>
                <span className="text">Nebula</span>
            </div>
            <div className="nav">
                <ul>
                    <li className="active">Home</li>
                    <li>Mission</li>
                    <li>Findings</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
