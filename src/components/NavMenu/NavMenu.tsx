import { menuItems } from "./menuItems";
import { MenuItem } from "./MenuItem";

type Props = {
	isMenuOpen: boolean;
};

export const NavMenu: React.FunctionComponent<Props> = ({
	isMenuOpen,
	// setIsMenuOpen,
}) => {
	return (
		<div className="nav__sub-nav">
			<div className="row align-middle">
				<div className="columns">
					<div
						className="top-bar"
						id="gcn-menu"
						style={{ display: isMenuOpen ? "flex" : "none" }}
					>
						<div className="top-bar-left">
							<ul
								className="dropdown menu"
								data-dropdown-menu="r2ecvi-dropdown-menu"
								role="menubar"
							>
								{menuItems.map((itemProps) => (
									<MenuItem key={itemProps.href} {...itemProps} />
								))}
							</ul>
						</div>
					</div>
				</div>
				<div className="columns shrink toggle-search">
					<a data-search-toggle>
						<i className="fa fa-search" />
					</a>
				</div>
			</div>
		</div>
	);
};
