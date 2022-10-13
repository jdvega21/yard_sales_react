import React, {useContext, useCallback} from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext'
import '@styles/MyOrder.scss';
import flecha from '@icons/flechita.svg';

const MyOrder = ({onHandleMyOrder}) => {
	const {state} = useContext(AppContext);
	const sumTotal = () =>{
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = state.cart.reduce(reducer,0);
		return sum;
	}
	const hideOrderMenu = useCallback(event => {
		onHandleMyOrder(event.target.value)}, [false] 
		);
	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={flecha} alt="arrow" 
					onClick={hideOrderMenu}
				/>
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map((product,index) => (
					<OrderItem product={product} key={`orderItem-${index}`} indexValue={index} ></OrderItem>
				))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;