import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Recap2Child from "../components/recap2-child";

const Recap2Page = () => {
	const [message, setMessage] = useState("");

	return (
		<div className="concept-page">
			<span className="concept-badge">props</span>
			<h2 className="concept-title">Props: Parent → Child</h2>
			<p className="concept-description">
				The parent owns and controls state. It passes data down to the child as
				a prop — the child only reads and displays it.
			</p>
			<hr className="concept-divider" />

			<div className="concept-demo-card">
				<div className="mb-4">
					<span className="demo-section-label">Parent Component — owns state</span>
					<div className="d-flex align-items-center gap-3">
						<Button onClick={() => setMessage("Hello from Parent! 👋")}>
							Set message
						</Button>
						{message && (
							<button
								className="btn btn-outline-secondary btn-sm"
								onClick={() => setMessage("")}
							>
								Reset
							</button>
						)}
					</div>
				</div>

				<hr className="demo-inner-divider" />

				<div>
					<span className="demo-section-label">
						Child Component — receives via prop
					</span>
					<Recap2Child message={message} />
				</div>
			</div>
		</div>
	);
};

export default Recap2Page;
