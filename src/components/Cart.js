const Cart = (props) => {
	const singleGoods = props.singleGoods;
	const count = props.count;
	return (
		<tr>
			<td>
				<img src={singleGoods.image} alt="fruit" />
			</td>
			<td>{singleGoods.title}</td>
			<td>{singleGoods.cost}</td>
			<td>{count}</td>
			<td>{singleGoods.cost * count}</td>
			<td>
				<button className="minus" data-key={singleGoods.articul}>
					-
				</button>
			</td>
			<td>
				<button className="delete" data-key={singleGoods.articul}>
					delete
				</button>
			</td>
		</tr>
	);
};

export default Cart;
