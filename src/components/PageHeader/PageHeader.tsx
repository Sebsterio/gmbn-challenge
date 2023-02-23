export const PageHeader: React.FunctionComponent = () => {
	return (
		<header>
			<div className="row align-middle">
				<div className="small-3 medium-4 columns">
					<a className="navbar-brand" href="/">
						<img className="mainLogoMobile" src="/imgs/gmbnLogo-text.svg" />
						<img className="mainLogoDesktop" src="/imgs/gmbnLogo.svg" />
					</a>
				</div>
				<div className="small-9 medium-8 columns">
					<div className="prim-nav">
						<ul className="social-links social-links--header">
							<li>
								<a
									className="facebook"
									target="_blank"
									href="https://facebook.com/globalmountainbikenetwork"
								>
									<i className="fa fa-facebook" />
								</a>
							</li>
							<li>
								<a
									className="twitter"
									target="_blank"
									href="https://twitter.com/gmbntweet"
								>
									<i className="fa fa-twitter" />
								</a>
							</li>
							<li>
								<a
									className="instagram"
									target="_blank"
									href="https://instagram.com/globalmountainbikenetwork/?hl=en"
								>
									<i className="fa fa-instagram" />
								</a>
							</li>
							<li>
								<a
									className="google-plus"
									target="_blank"
									href="https://plus.google.com/b/111484933163927771519/111484933163927771519/posts"
								>
									<i className="fa fa-google-plus" />
								</a>
							</li>
							<li>
								<a
									className="snapchat"
									target="_blank"
									href="https://www.snapchat.com/add/gmbnsnaps"
								>
									<i className="fa fa-snapchat-ghost" />
								</a>
							</li>
						</ul>
						<a className="prim-nav__btn" href="https://shop.gmbn.com">
							<img
								className="prim-nav__btn--shop"
								src="/imgs/gmbnTextBlack.svg"
							/>
							<p>Shop</p>
						</a>
						<a
							className="prim-nav__btn"
							href="https://www.youtube.com/subscription_center?add_user=globalmtb"
						>
							<img
								className="prim-nav__btn--subscribe"
								src="/imgs/YouTubeLogo.png"
							/>
							<p>Subscribe</p>
						</a>
					</div>
				</div>
			</div>
			<div className="row">
				<div
					className="columns title-bar"
					data-responsive-toggle="gcn-menu"
					data-hide-for="large"
					style={{ display: "block" }}
				>
					<button className="menu-icon" type="button" data-toggle="gcn-menu" />
				</div>
				<div className="columns shrink social-links--header-m">
					<ul className="social-links">
						<li>
							<a
								className="facebook"
								target="_blank"
								href="https://facebook.com/globalmountainbikenetwork"
							>
								<i className="fa fa-facebook" />
							</a>
						</li>
						<li>
							<a
								className="twitter"
								target="_blank"
								href="https://twitter.com/gmbntweet"
							>
								<i className="fa fa-twitter" />
							</a>
						</li>
						<li>
							<a
								className="instagram"
								target="_blank"
								href="https://instagram.com/globalmountainbikenetwork/?hl=en"
							>
								<i className="fa fa-instagram" />
							</a>
						</li>
						<li>
							<a
								className="google-plus"
								target="_blank"
								href="https://plus.google.com/b/111484933163927771519/111484933163927771519/posts"
							>
								<i className="fa fa-google-plus" />
							</a>
						</li>
						<li>
							<a
								className="snapchat"
								target="_blank"
								href="https://www.snapchat.com/add/gmbnsnaps"
							>
								<i className="fa fa-snapchat-ghost" />
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="nav__sub-nav">
				<div className="row align-middle">
					<div className="columns">
						<div className="top-bar" id="gcn-menu" style={{ display: "none" }}>
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
										<a
											className="dropdown__list__item"
											href="/category/ask-gmbn"
										>
											Ask GMBN
										</a>
									</li>
									<li className="dropdown__list" role="menuitem">
										<a
											className="dropdown__list__item"
											href="/category/features"
										>
											Features
										</a>
									</li>
									<li className="dropdown__list" role="menuitem">
										<a
											className="dropdown__list__item"
											href="/category/top-10s"
										>
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
		</header>
	);
};
