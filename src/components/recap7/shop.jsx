import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../api/products";
import { Col, Row, Spinner } from "react-bootstrap";
import ProductItem from "./product-item";

const Shop = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const loadProducts = async () => {
			try {
				const res = await getAllProducts();
				setProducts(res.products);
			} catch (err) {
				setError("Failed to load products. Please check your connection.");
			} finally {
				setLoading(false);
			}
		};

		loadProducts();
	}, []);

	if (loading) {
		return (
			<div className="loading-container">
				<Spinner animation="border" />
				<span style={{ color: "var(--clr-muted)", fontSize: "0.9rem" }}>
					Fetching products...
				</span>
			</div>
		);
	}

	if (error) {
		return (
			<div className="error-container">
				<p style={{ fontSize: "1.25rem" }}>⚠️</p>
				<p>{error}</p>
			</div>
		);
	}

	return (
		<Row xs={1} sm={2} lg={3} xl={4} className="g-4">
			{products.map((item) => (
				<Col key={item.id}>
					<ProductItem item={item} />
				</Col>
			))}
		</Row>
	);
};

export default Shop;
