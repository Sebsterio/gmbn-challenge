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
								<li
									className="dropdown__list dropdown__list--home"
									role="menuitem"
								>
									{/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
									<a className="dropdown__list__item" href="/">
										Home
									</a>
								</li>
								<li className="dropdown__list" role="menuitem">
									<a
										className="dropdown__list__item"
										href="/category/the-dirt-shed-show"
									>
										Dirt Shed Show
									</a>
								</li>
								<li className="dropdown__list" role="menuitem">
									<a className="dropdown__list__item" href="/category/how-to">
										How To
									</a>
								</li>
								<li className="dropdown__list" role="menuitem">
									<a
										className="dropdown__list__item"
										href="/category/mtb-maintenance"
									>
										MTB Maintenance
									</a>
								</li>
								<li className="dropdown__list" role="menuitem">
									<a
										className="dropdown__list__item"
										href="/category/martyn-ashton"
									>
										Martyn Ashton
									</a>
								</li>
								<li className="dropdown__list" role="menuitem">
									<a className="dropdown__list__item" href="/category/ask-gmbn">
										Ask GMBN
									</a>
								</li>
								<li className="dropdown__list" role="menuitem">
									<a className="dropdown__list__item" href="/category/features">
										Features
									</a>
								</li>
								<li className="dropdown__list" role="menuitem">
									<a className="dropdown__list__item" href="/category/top-10s">
										Top 10s
									</a>
								</li>
								<li className="dropdown__list" role="menuitem">
									<a
										className="dropdown__list__item"
										href="/category/gmbn-tech"
									>
										GMBN Tech
									</a>
								</li>
								<li
									className="dropdown__list dropdown__list--mobile"
									role="menuitem"
								>
									<a className="dropdown__list__item" href="/presenters">
										Presenters
									</a>
								</li>
								<li
									className="dropdown__list dropdown__list--mobile"
									role="menuitem"
								>
									<a
										className="dropdown__list__item"
										href="/presenters/martyn-ashton"
									>
										Martyn Ashton
									</a>
								</li>
								<li
									className="dropdown__list dropdown__list--mobile"
									role="menuitem"
								>
									<a
										className="dropdown__list__item"
										href="/presenters/neil-donoghue"
									>
										Neil Donoghue
									</a>
								</li>
								<li
									className="dropdown__list dropdown__list--mobile"
									role="menuitem"
								>
									<a
										className="dropdown__list__item"
										href="/presenters/blake-samson"
									>
										Blake Samson
									</a>
								</li>
								<li
									className="dropdown__list dropdown__list--mobile"
									role="menuitem"
								>
									<a
										className="dropdown__list__item"
										href="/presenters/andrew-dodd"
									>
										Andrew Dodd{" "}
									</a>
								</li>
								<li
									className="dropdown__list dropdown__list--submenu is-dropdown-submenu-parent opens-right"
									role="menuitem"
									aria-haspopup="true"
									aria-label="Presenters"
								>
									<a
										className="dropdown__list__item dropdown__list__item--submenu"
										href="/presenters"
									>
										Presenters
									</a>
									<ul
										className="menu dropdown__list__submenu is-dropdown-submenu submenu first-sub vertical"
										data-submenu
										role="menu"
									>
										<li
											className="dropdown__list__submenulist is-submenu-item is-dropdown-submenu-item"
											role="menuitem"
										>
											<a
												className="dropdown__list__submenulist__item"
												href="/presenters/martyn-ashton"
											>
												Martyn Ashton
											</a>
										</li>
										<li
											className="dropdown__list__submenulist is-submenu-item is-dropdown-submenu-item"
											role="menuitem"
										>
											<a
												className="dropdown__list__submenulist__item"
												href="/presenters/neil-donoghue"
											>
												Neil Donoghue
											</a>
										</li>
										<li
											className="dropdown__list__submenulist is-submenu-item is-dropdown-submenu-item"
											role="menuitem"
										>
											<a
												className="dropdown__list__submenulist__item"
												href="/presenters/blake-samson"
											>
												Blake Samson
											</a>
										</li>
										<li
											className="dropdown__list__submenulist is-submenu-item is-dropdown-submenu-item"
											role="menuitem"
										>
											<a
												className="dropdown__list__submenulist__item"
												href="/presenters/andrew-dodd"
											>
												Andrew Dodd{" "}
											</a>
										</li>
									</ul>
								</li>
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
