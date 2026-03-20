import React from "react";
import { Button } from "react-bootstrap";

const Recap3Child = ({ setMessage }) => {
	return (
		<Button onClick={() => setMessage("Hello from Child! 🙌")}>
			Fire callback →
		</Button>
	);
};

export default Recap3Child;
