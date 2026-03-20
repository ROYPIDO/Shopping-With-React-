import React from "react";
import { Dropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { down, removeAll } from "../../store/slices/cart-slice";
import { FaShoppingCart, FaMinus } from "react-icons/fa";

const Cart = () => {
	const cartItems = useSelector((state) => state.cart.items);
	const dispatch = useDispatch();

	const totalAmount = cartItems.reduce((total, item) => total + item.amount, 0);
	const totalPrice = cartItems.reduce(
		(total, item) => total + item.amount * item.product.price,
		0
	);

	return (
		<Dropdown align="end">
			<Dropdown.Toggle className="cart-toggle" id="cart-dropdown">
				<FaShoppingCart />
				{totalAmount > 0 && (
					<span
						style={{
							background: "var(--clr-accent)",
							color: "#0d1117",
							borderRadius: "20px",
							fontSize: "0.7rem",
							fontWeight: 700,
							padding: "0.1rem 0.45rem",
							lineHeight: 1.4,
						}}
					>
						{totalAmount}
					</span>
				)}
				<span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem" }}>
					${totalPrice.toFixed(2)}
				</span>
			</Dropdown.Toggle>

			<Dropdown.Menu className="cart-dropdown">
				<div className="cart-header">
					Shopping Cart
					{totalAmount > 0 && (
						<span style={{ color: "var(--clr-muted)", fontWeight: 400 }}>
							{" "}
							({totalAmount} item{totalAmount !== 1 ? "s" : ""})
						</span>
					)}
				</div>

				{cartItems.length === 0 ? (
					<div className="cart-empty">
						<div className="cart-empty-icon">
							<FaShoppingCart />
						</div>
						<p style={{ margin: 0, fontSize: "0.85rem" }}>Your cart is empty</p>
						<p style={{ margin: 0, fontSize: "0.75rem", marginTop: "4px" }}>
							Visit the Shop to add items
						</p>
					</div>
				) : (
					<>
						<div style={{ maxHeight: "320px", overflowY: "auto" }}>
							{cartItems.map((item) => {
								const { id, images, title, price } = item.product;
								return (
									<div className="cart-item" key={id}>
										<img
											src={images[0]}
											className="cart-item-img"
											alt={title}
										/>
										<div className="cart-item-info">
											<div className="cart-item-title">{title}</div>
											<div className="cart-item-meta">
												{item.amount} &times; ${price}
											</div>
										</div>
										<button
											className="cart-qty-btn"
											onClick={() => dispatch(down(id))}
											title="Remove one"
										>
											<FaMinus style={{ fontSize: "0.6rem" }} />
										</button>
									</div>
								);
							})}
						</div>
						<div className="cart-footer">
							<div>
								<div className="cart-total-label">Total</div>
								<div className="cart-total-price">${totalPrice.toFixed(2)}</div>
							</div>
							<button
								className="btn btn-sm btn-outline-danger"
								style={{ fontSize: "0.75rem" }}
								onClick={() => dispatch(removeAll())}
							>
								Clear All
							</button>
						</div>
					</>
				)}
			</Dropdown.Menu>
		</Dropdown>
	);
};

export default Cart;
