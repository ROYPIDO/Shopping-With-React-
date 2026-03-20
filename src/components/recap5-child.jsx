import React from "react";

const Recap5Child = ({ text }) => {
	const vowelsRegex = /[aeiou]/gi;
	const consonantsRegex = /[bcdfghjklmnpqrstvwxyz]/gi;

	const vowels = (text.match(vowelsRegex) || []).length;
	const consonants = (text.match(consonantsRegex) || []).length;
	const total = text.replace(/\s/g, "").length;

	return (
		<div className="row g-3">
			<div className="col-4">
				<div className="demo-stat-box">
					<div className="demo-stat-number">{vowels}</div>
					<div className="demo-stat-label">Vowels</div>
				</div>
			</div>
			<div className="col-4">
				<div className="demo-stat-box">
					<div
						className="demo-stat-number"
						style={{ color: "var(--clr-accent2)" }}
					>
						{consonants}
					</div>
					<div className="demo-stat-label">Consonants</div>
				</div>
			</div>
			<div className="col-4">
				<div className="demo-stat-box">
					<div
						className="demo-stat-number"
						style={{ color: "var(--clr-muted)" }}
					>
						{total}
					</div>
					<div className="demo-stat-label">Characters</div>
				</div>
			</div>
		</div>
	);
};

export default Recap5Child;
