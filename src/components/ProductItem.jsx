import React, {useContext} from "react";
import "@styles/ProductItem.scss";
import AppContext from '@context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg';

const ProductItem = ({product}) => {
	const {state, addToCart, removeFromCart} = useContext(AppContext);
	const handleClick = item => {
		!state.cart.includes(item)
								? addToCart(item)
								: removeFromCart(item);
	}
	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title}/>
			<div className="ProductItem-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					{	state.cart.includes(product) 
													? <img src={addedToCartImage} alt="add-to-card" />
													: <img src={addToCartImage} alt="add-to-card" />
					}
					
				</figure>
			</div>
		</div>
	);
};

export default ProductItem;
