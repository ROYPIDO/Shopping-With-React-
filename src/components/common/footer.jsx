import React from "react";
import { Container } from "react-bootstrap";
import { FaCode, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="footer-custom">
			<Container>
				<div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-4">
					<div>
						<div className="footer-brand">
							<FaCode />
							<span>ReactRecap</span>
						</div>
						<p className="footer-text mb-0">
							Core React concepts, demonstrated interactively.
						</p>
					</div>

					<div className="d-flex gap-4">
						<Link to="/" className="footer-link">Home</Link>
						<Link to="/page7" className="footer-link">Shop</Link>
						<Link to="/page1" className="footer-link">Concepts</Link>
					</div>

					<div className="text-md-end">
						<p className="footer-text mb-0">
							&copy; {new Date().getFullYear()} — React Concepts Portfolio
						</p>
						<p className="footer-text mb-0" style={{ marginTop: "2px" }}>
							Built with React + Redux + Vite
						</p>
					</div>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
