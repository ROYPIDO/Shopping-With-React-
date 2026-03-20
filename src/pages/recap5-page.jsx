import { FormControl } from "react-bootstrap";
import Recap5Child from "../components/recap5-child";
import { useState } from "react";

const Recap5Page = () => {
	const [text, setText] = useState("");

	return (
		<div className="concept-page">
			<span className="concept-badge">event handling</span>
			<h2 className="concept-title">Real-time Text Analyzer</h2>
			<p className="concept-description">
				As you type, the child component receives the text as a prop and
				analyzes it in real time using regex to count vowels and consonants.
			</p>
			<hr className="concept-divider" />

			<div className="concept-demo-card">
				<label
					className="form-label"
					style={{ color: "var(--clr-muted)", fontSize: "0.8rem" }}
				>
					Type anything below
				</label>
				<FormControl
					placeholder="Start typing to analyze..."
					onChange={(e) => setText(e.target.value)}
					size="lg"
					className="mb-4"
				/>
				<Recap5Child text={text} />
			</div>
		</div>
	);
};

export default Recap5Page;
