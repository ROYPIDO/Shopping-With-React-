import React from "react";
import Header from "../components/common/header";
import Footer from "../components/common/footer";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

const RootLayout = () => {
	return (
		<div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
			<Header />
			<main style={{ flex: 1 }}>
				<Container>
					<Outlet />
				</Container>
			</main>
			<Footer />
		</div>
	);
};

export default RootLayout;
