import React, { useEffect, useState } from "react";
import employees from "../data/employees.json";

const Recap6Child = () => {
	const [currentDepartment, setCurrentDepartment] = useState("");
	const [departments, setDepartments] = useState([]);
	const [totalSalary, setTotalSalary] = useState(0);
	const [employeeCount, setEmployeeCount] = useState(0);

	useEffect(() => {
		let arr = employees.map((item) => item.department);
		arr = [...new Set(arr)].sort();
		setDepartments(arr);
	}, []);

	useEffect(() => {
		if (!currentDepartment) return;
		const filtered = employees.filter(
			(item) => item.department === currentDepartment
		);
		const salary = filtered.reduce((total, item) => total + item.salary, 0);
		setTotalSalary(salary);
		setEmployeeCount(filtered.length);
	}, [currentDepartment]);

	return (
		<div>
			<span className="demo-section-label">Select a Department</span>
			<div className="d-flex flex-wrap gap-2 mb-4">
				{departments.map((item) => (
					<button
						key={item}
						className={`btn btn-sm ${
							currentDepartment === item
								? "btn-primary"
								: "btn-outline-secondary"
						}`}
						onClick={() => setCurrentDepartment(item)}
					>
						{item}
					</button>
				))}
			</div>

			{currentDepartment ? (
				<div className="row g-3">
					<div className="col-md-6">
						<div className="demo-stat-box">
							<div className="demo-stat-number">{employeeCount}</div>
							<div className="demo-stat-label">
								Employees in {currentDepartment}
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="demo-stat-box">
							<div
								className="demo-stat-number"
								style={{ color: "var(--clr-success)", fontSize: "1.9rem" }}
							>
								${totalSalary.toLocaleString()}
							</div>
							<div className="demo-stat-label">Total Salary Budget</div>
						</div>
					</div>
				</div>
			) : (
				<div
					className="demo-output"
					style={{ justifyContent: "center", color: "var(--clr-muted)" }}
				>
					Select a department to see analytics
				</div>
			)}
		</div>
	);
};

export default Recap6Child;
