type ItemProps = {
	href: string;
	label: string;
	subItems?: ItemProps[];
	isHome?: boolean;
};

const menuItems: ItemProps[] = [
	{
		isHome: true,
		href: "/",
		label: "Home",
	},
	{
		href: "/category/the-dirt-shed-show",
		label: "Dirt Shed Show",
	},
	{
		href: "/category/how-to",
		label: "How To",
	},
	{
		href: "/category/mtb-maintenance",
		label: "MTB Maintenance",
	},
	{
		href: "/category/martyn-ashton",
		label: "Martyn Ashton",
	},
	{
		href: "/category/ask-gmbn",
		label: "Ask GMBN",
	},
	{
		href: "/category/features",
		label: "Features",
	},
	{
		href: "/category/top-10s",
		label: "Top 10s",
	},
	{
		href: "/category/gmbn-tech",
		label: "GMBN Tech",
	},
	{
		href: "/presenters",
		label: "Presenters",
		subItems: [
			{
				href: "/presenters/martyn-ashton",
				label: "Martyn Ashton",
			},
			{
				href: "/presenters/neil-donoghue",
				label: "Neil Donoghue",
			},
			{
				href: "/presenters/blake-samson",
				label: "Blake Samson",
			},
			{
				href: "/presenters/andrew-dodd",
				label: "Andrew Dodd",
			},
		],
	},
];

const makeClassName = (...chunks: (string | false | undefined)[]) =>
	chunks.filter((x) => x).join(" ");

export const MenuItem: React.FunctionComponent<ItemProps> = ({
	href,
	label,
	subItems,
	isHome,
}) => (
	<li
		key={href}
		className={makeClassName(
			"dropdown__list",
			isHome && "dropdown__list--home",
			subItems &&
				"dropdown__list dropdown__list--submenu is-dropdown-submenu-parent opens-right"
		)}
		role="menuitem"
		// aria-haspopup="true"
	>
		<a
			className={makeClassName(
				"dropdown__list__item",
				subItems && "dropdown__list__item--submenu"
			)}
			{...{ href }}
		>
			{label}
		</a>

		{subItems && (
			<ul
				className="menu dropdown__list__submenu is-dropdown-submenu submenu first-sub vertical"
				data-submenu
				role="menu"
			>
				{subItems?.map(({ href, label }) => (
					<li
						key={href}
						className="dropdown__list__submenulist is-submenu-item is-dropdown-submenu-item"
						role="menuitem"
						// aria-haspopup="true"
					>
						<a className="dropdown__list__submenulist__item" {...{ href }}>
							{label}
						</a>
					</li>
				))}
			</ul>
		)}
	</li>
);

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
