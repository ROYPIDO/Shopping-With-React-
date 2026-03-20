import React from "react";

const Recap2Child = ({ message }) => {
	return (
		<div className="demo-output">
			{message || (
				<span style={{ color: "var(--clr-muted)", fontSize: "0.9rem" }}>
					Waiting for prop...
				</span>
			)}
		</div>
	);
};

export default Recap2Child;
