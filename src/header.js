import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default function Header1() {
    return (
        <div className="col-12">
            <div className="col-row">
                <Navbar bg="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Brand href="#">SATTAKINGFAST</Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavDropdown title="" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#">Change Password</NavDropdown.Item>
                                <NavDropdown.Item href="#">Log out</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    )
}

export function Sidepannel() {
    return (<div className="col-12">
    <div className="col-row">
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Brand href="#">SATTAKINGFAST</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">Change Password</NavDropdown.Item>
                        <NavDropdown.Item href="#">Log out</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
</div>)
}