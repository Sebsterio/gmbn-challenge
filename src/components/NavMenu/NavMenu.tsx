import { menuItems } from "./menuItems";
import { MenuItem } from "./MenuItem";

export const NavMenu: React.FunctionComponent = () => {
	return (
		<div className="header" /* temp workaround to preserve original styles */>
			<div className="nav__sub-nav">
				<div className="row align-middle">
					<div className="columns">
						<div className="top-bar" id="gcn-menu" style={{ display: "flex" }}>
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
				</div>
			</div>
		</div>
	);
};
