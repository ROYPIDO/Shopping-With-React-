import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaArrowRight, FaCode } from "react-icons/fa";

const concepts = [
	{
		path: "/page1",
		tag: "useState",
		icon: "⚡",
		title: "State Management",
		desc: "Learn how useState works to manage local component state and trigger re-renders.",
	},
	{
		path: "/page2",
		tag: "props",
		icon: "⬇️",
		title: "Props: Parent → Child",
		desc: "Pass data from a parent component down to its children via props.",
	},
	{
		path: "/page3",
		tag: "lifting state",
		icon: "⬆️",
		title: "Lifting State Up",
		desc: "Use callback functions as props to let children update parent state.",
	},
	{
		path: "/page4",
		tag: "controlled inputs",
		icon: "📝",
		title: "Controlled Forms",
		desc: "Bind input values to React state and compute derived results in real time.",
	},
	{
		path: "/page5",
		tag: "events",
		icon: "🔤",
		title: "Text Analyzer",
		desc: "Real-time character analysis on every keystroke using onChange and regex.",
	},
	{
		path: "/page6",
		tag: "useEffect",
		icon: "🔄",
		title: "Side Effects",
		desc: "Run code in response to state changes using useEffect with a dependency array.",
	},
];

const HomePage = () => {
	return (
		<div>
			{/* ── Hero ── */}
			<div className="hero-section">
				<div className="hero-badge">Portfolio Project</div>
				<h1 className="hero-title">
					Core <span className="gradient-text">React</span> Concepts
				</h1>
				<p className="hero-subtitle">
					Interactive demos of fundamental React patterns — hooks, props, state
					management, side effects, and full Redux integration.
				</p>
				<div className="d-flex justify-content-center gap-3 flex-wrap">
					<Link to="/page7" className="btn hero-cta-primary">
						<FaShoppingCart className="me-2" />
						Open Shop Demo
					</Link>
					<Link to="/page1" className="btn hero-cta-secondary">
						Start with Basics
						<FaArrowRight className="ms-2" />
					</Link>
				</div>
			</div>

			{/* ── Concepts Grid ── */}
			<div className="concepts-section">
				<Container>
					<p className="section-label">React Concept Demos</p>

					<Row xs={1} sm={2} lg={3} className="g-4 mb-4">
						{concepts.map((c) => (
							<Col key={c.path}>
								<Link to={c.path} className="concept-card-home">
									<div className="concept-card-icon">{c.icon}</div>
									<div className="concept-card-tag">{c.tag}</div>
									<div className="concept-card-title">{c.title}</div>
									<p className="concept-card-desc">{c.desc}</p>
								</Link>
							</Col>
						))}
					</Row>

					{/* ── Shop Feature Card ── */}
					<Link
						to="/page7"
						className="concept-card-home shop-feature-card"
						style={{ display: "block" }}
					>
						<div className="d-flex align-items-center justify-content-between gap-3">
							<div style={{ flex: 1 }}>
								<div className="concept-card-tag">
									Redux Toolkit &nbsp;•&nbsp; REST API &nbsp;•&nbsp; Global State
								</div>
								<div
									className="concept-card-title d-flex align-items-center gap-2"
									style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}
								>
									<FaShoppingCart style={{ color: "var(--clr-accent)" }} />
									Full Shop with Cart
								</div>
								<p className="concept-card-desc" style={{ maxWidth: "600px" }}>
									Products fetched asynchronously from DummyJSON REST API. Cart
									managed globally with Redux Toolkit — add items, remove them,
									and watch the header badge update in real time.
								</p>
							</div>
							<FaArrowRight
								style={{
									color: "var(--clr-accent)",
									fontSize: "1.5rem",
									flexShrink: 0,
								}}
							/>
						</div>
					</Link>
				</Container>
			</div>
		</div>
	);
};

export default HomePage;

