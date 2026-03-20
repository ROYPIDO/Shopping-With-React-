import React, { useState } from "react";
import { FormControl } from "react-bootstrap";

const Recap4Page = () => {
	const [number1, setNumber1] = useState("");
	const [number2, setNumber2] = useState("");

	const result = Number(number1) + Number(number2);

	return (
		<div className="concept-page">
			<span className="concept-badge">controlled components</span>
			<h2 className="concept-title">Controlled Forms</h2>
			<p className="concept-description">
				Each input’s value is bound to React state via onChange. The sum is a
				derived value, computed on every re-render.
			</p>
			<hr className="concept-divider" />

			<div className="concept-demo-card">
				<div className="row g-3 align-items-end mb-4">
					<div className="col">
						<label
							className="form-label"
							style={{ color: "var(--clr-muted)", fontSize: "0.8rem" }}
						>
							Number 1
						</label>
						<FormControl
							placeholder="0"
							type="number"
							value={number1}
							onChange={(e) => setNumber1(e.target.value)}
							size="lg"
						/>
					</div>
					<div className="col-auto">
						<span
							style={{
								fontSize: "1.75rem",
								color: "var(--clr-accent)",
								fontWeight: 700,
								paddingBottom: "0.5rem",
								display: "block",
							}}
						>
							+
						</span>
					</div>
					<div className="col">
						<label
							className="form-label"
							style={{ color: "var(--clr-muted)", fontSize: "0.8rem" }}
						>
							Number 2
						</label>
						<FormControl
							placeholder="0"
							type="number"
							value={number2}
							onChange={(e) => setNumber2(e.target.value)}
							size="lg"
						/>
					</div>
				</div>

				<div className="demo-result-big">{result}</div>
			</div>
		</div>
	);
};

export default Recap4Page;
