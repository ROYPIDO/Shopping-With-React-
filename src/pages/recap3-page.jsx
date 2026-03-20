import React, { useState } from "react";
import Recap3Child from "../components/recap3-child";

const Recap3Page = () => {
	const [message, setMessage] = useState("");

	return (
		<div className="concept-page">
			<span className="concept-badge">lifting state</span>
			<h2 className="concept-title">Lifting State Up</h2>
			<p className="concept-description">
				The setMessage callback is passed from parent to child as a prop. When
				the child calls it, the parent’s state updates — the data flows upward.
			</p>
			<hr className="concept-divider" />

			<div className="concept-demo-card">
				<div className="mb-4">
					<span className="demo-section-label">
						Parent Component — owns state, displays result
					</span>
					<div className="demo-output">
						{message || (
							<span style={{ color: "var(--clr-muted)", fontSize: "0.9rem" }}>
								Waiting for callback from child...
							</span>
						)}
					</div>
				</div>

				<hr className="demo-inner-divider" />

				<div>
					<span className="demo-section-label">
						Child Component — triggers the callback
					</span>
					<Recap3Child setMessage={setMessage} />
				</div>
			</div>
		</div>
	);
};

export default Recap3Page;
