import { Button, InputGroup } from 'react-bootstrap';
import { Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { RiNeteaseCloudMusicLine } from 'react-icons/ri';
import { FaSearch } from "react-icons/fa";
const Header = () => {
    return (
        <Navbar variant="dark" expand="md">
            <Nav.Link className="navbar-brand pt-0" href=""><RiNeteaseCloudMusicLine /></Nav.Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="">All songs</Nav.Link>
                    <Nav.Link href="">Top songs</Nav.Link>
                    <Nav.Link href="">Favorite songs</Nav.Link>
                </Nav>
                <Form inline>
                    <InputGroup>
                        <InputGroup.Prepend>
                        <Button variant="outline-light" className="btn_search"><FaSearch/></Button>
                        </InputGroup.Prepend>
                        <FormControl type="text" placeholder="Search"/>
                    </InputGroup>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;