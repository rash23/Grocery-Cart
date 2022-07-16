import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectGoods } from '../store/goodsSlice';

import Goods from '../components/Goods';
import { increment } from '../store/cartSlice';

const GoodsList = () => {
	const goods = useSelector(selectGoods);
	const dispatch = useDispatch();

	let clickHandler = (event) => {
		event.preventDefault();
		const { target } = event;
		if (!target.classList.contains('add-to-cart')) {
			return true;
		}

		dispatch(increment(target.getAttribute('data-key')));
	};

	return (
		<div className="goods-field" onClick={clickHandler}>
			{goods.map((item) => (
				<Goods title={item.title} cost={item.cost} image={item.image} articul={item.articul} key={item.articul} />
			))}
		</div>
	);
};

export default GoodsList;
