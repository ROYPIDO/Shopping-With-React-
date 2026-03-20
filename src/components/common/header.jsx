import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Cart from "./cart";
import { FaCode } from "react-icons/fa";

const conceptPages = [
	{ path: "/page1", label: "useState", icon: "⚡" },
	{ path: "/page2", label: "Props ↓ Parent→Child", icon: "⇩" },
	{ path: "/page3", label: "Lifting State Up", icon: "⇧" },
	{ path: "/page4", label: "Controlled Forms", icon: "📝" },
	{ path: "/page5", label: "Text Analyzer", icon: "🔤" },
	{ path: "/page6", label: "useEffect", icon: "🔄" },
];

const Header = () => {
	const location = useLocation();

	return (
		<Navbar expand="lg" className="navbar-custom">
			<Container>
				<Navbar.Brand to="/" as={Link} className="navbar-brand-custom">
					<FaCode />
					<span>ReactRecap</span>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="main-navbar" />

				<Navbar.Collapse id="main-navbar">
					<Nav className="me-auto">
						<Nav.Link
							to="/"
							as={Link}
							className={location.pathname === "/" ? "active" : ""}
						>
							Home
						</Nav.Link>
						<Nav.Link
							to="/page7"
							as={Link}
							className={location.pathname === "/page7" ? "active" : ""}
						>
							Shop
						</Nav.Link>
						<NavDropdown title="Concepts" id="concepts-dropdown">
							{conceptPages.map((page) => (
								<NavDropdown.Item to={page.path} as={Link} key={page.path}>
									<span className="me-2">{page.icon}</span>
									{page.label}
								</NavDropdown.Item>
							))}
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>

				<Cart />
			</Container>
		</Navbar>
	);
};

export default Header;
