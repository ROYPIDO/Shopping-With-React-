import React from "react";
import { useDispatch } from "react-redux";
import { up } from "../../store/slices/cart-slice";
import { FaShoppingCart } from "react-icons/fa";

const getStatusClass = (status) => {
	if (!status || status === "Out of Stock") return "product-status-out";
	if (status === "Low Stock") return "product-status-low";
	return "product-status-in";
};

const ProductItem = ({ item }) => {
	const dispatch = useDispatch();
	const { title, stock, price, images, availabilityStatus } = item;
	const inStock = stock > 0 && availabilityStatus !== "Out of Stock";

	return (
		<div className="product-card">
			<div className="product-img-wrap">
				<img src={images[0]} className="product-img" alt={title} />
			</div>

			<div className="product-body">
				<div className="product-title">{title}</div>

				<div className="d-flex align-items-center justify-content-between">
					<span className="product-price">${price}</span>
					<span className={`product-status-badge ${getStatusClass(availabilityStatus)}`}>
						{availabilityStatus}
					</span>
				</div>

				<button
					className="product-add-btn btn"
					disabled={!inStock}
					onClick={() => dispatch(up(item))}
				>
					<FaShoppingCart className="me-2" />
					{inStock ? "Add to Cart" : "Out of Stock"}
				</button>
			</div>
		</div>
	);
};

export default ProductItem;
