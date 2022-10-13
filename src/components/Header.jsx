import React, {useState, useContext} from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import MobileMenu from '@components/MobileMenu';
import AppContext from '@context/AppContext';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';


const Header = () => {
	const [toggle, setToggle] = useState(false);
	const {state} = useContext(AppContext);
	const [toogleOrders, setToggleOrders] = useState(false);
	const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
	const handleToggleMenues = toggleOption => {
		switch (toggleOption){
			case "menu" : 
				setToggle(!toggle);
				setToggleOrders(false);
				setToggleMobileMenu(false);
				break;
			case "cart" : 
				setToggleOrders(!toogleOrders);
				setToggle(false);
				setToggleMobileMenu(false);
				break;
			case "mobileMenu" :
				setToggleMobileMenu(!toggleMobileMenu);
				setToggle(false);
				setToggleOrders(false);
				break;
		}
	  };
	return (
		<nav>
			<img src={menu} alt="menu" className="menu"
				onClick={ () => handleToggleMenues("mobileMenu")}
			/>
			<div className="navbar-left">
				<a href="/" className="nav-logo">
					<img src={logo} alt="logo" />
				</a>
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={ () => handleToggleMenues("menu")}>
						myemail@example.com
					</li>
					<li 
						className="navbar-shopping-cart"
						onClick={ () => handleToggleMenues("cart")}
					>
						<img src={shoppingCart} alt="shopping cart" />
						{state.cart.length > 0 ? <div>{state.cart.length}</div>: null}
					</li>
				</ul>
			</div>
			{toggle ? <Menu/> : null}
			{toogleOrders ? <MyOrder onHandleMyOrder = {setToggleOrders}/> : null}
			{toggleMobileMenu ? <MobileMenu onHandleMobileMenu ={setToggleMobileMenu}/> : null}
		</nav>
	);
};

export default Header;