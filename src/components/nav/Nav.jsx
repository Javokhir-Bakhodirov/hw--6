import $ from "./Nav.module.css";
import { NavLink, Link } from "react-router-dom";

const Nav = () => {
	return (
		<header className={$.header}>
			<div className="container">
				<div className={$.head}>
					<Link to="/" className={$.site_logo}>
						Javokhir Bakhodirov
					</Link>
					<nav className={$.nav}>
						<ul className={$.nav__list}>
							<li className={$.nav__item}>
								<NavLink to="/">Home</NavLink>
							</li>
							<li className={$.nav__item}>
								<NavLink to="/about">About</NavLink>
							</li>
							<li className={$.nav__item}>
								<NavLink to="/work">Work</NavLink>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Nav;
