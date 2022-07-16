import React from 'react';
import Cart from '../components/Cart';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectGoods } from '../store/goodsSlice';
import { dicriment, del, selectCart } from '../store/cartSlice';

const CartList = () => {
	const goods = useSelector(selectGoods);
	const cart = useSelector(selectCart);
	const dispatch = useDispatch();
	const goodsObj = goods.reduce((accum, item) => {
		accum[item['articul']] = item;
		return accum;
	}, {});

	const totalPrice = Object.keys(cart)
		.map((item) => Number(goodsObj[item]['cost']) * cart[item])
		.reduce((sum, elem) => {
			return sum + elem;
		}, 0);

	const clickHandler = (event) => {
		event.preventDefault();
		const { target } = event;

		if (target.classList.contains('minus')) {
			dispatch(dicriment(target.getAttribute('data-key')));
		} else if (target.classList.contains('delete')) {
			dispatch(del(target.getAttribute('data-key')));
		}
	};

	return (
		<div onClick={clickHandler}>
			<table className={totalPrice ? '' : 'dont_show'}>
				<thead>
					<tr>
						<td colSpan="2">Goods</td>
						<td>Price</td>
						<td>Count</td>
						<td>Total</td>
						<td>Remove</td>
						<td>Delete</td>
					</tr>
				</thead>
				<tbody>
					{Object.keys(cart).map((item) => (
						<Cart key={item} singleGoods={goodsObj[item]} count={cart[item]} />
					))}
				</tbody>
				<tfoot>
					<tr>
						<td colSpan="5">Total: </td>
						<td colSpan="2">{totalPrice}</td>
					</tr>
				</tfoot>
			</table>
		</div>
	);
};

export default CartList;
