import { Nav, Navbar } from 'react-bootstrap';
import { RiNeteaseCloudMusicLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <Navbar variant="dark" expand="md">
            <Nav.Link className="navbar-brand pt-0" href=""><RiNeteaseCloudMusicLine /></Nav.Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink to="/music-player-react-app" exact activeClassName="active" className="nav-link">All songs</NavLink>
                    <NavLink to="/music-player-react-app/fav" className="nav-link">Favorite songs</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;