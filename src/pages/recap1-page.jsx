import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Recap1Page = () => {
	const [message, setMessage] = useState("");

	return (
		<div className="concept-page">
			<span className="concept-badge">useState</span>
			<h2 className="concept-title">State Management Basics</h2>
			<p className="concept-description">
				Click the button to update local state. React detects the change and
				re-renders the component to reflect the new value.
			</p>
			<hr className="concept-divider" />

			<div className="concept-demo-card">
				<div className="d-flex align-items-center gap-3 flex-wrap">
					<Button
						variant="primary"
						size="lg"
						onClick={() => setMessage("Hello, React!")}
					>
						⚡ Update State
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

				<div className="demo-output mt-4">
					{message || (
						<span style={{ color: "var(--clr-muted)", fontSize: "0.9rem" }}>
							State is empty — click the button
						</span>
					)}
				</div>
			</div>
		</div>
	);
};

export default Recap1Page;
