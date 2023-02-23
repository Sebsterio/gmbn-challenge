import { makeClassName } from "./helpers";
import { ItemProps } from "./menuItems";

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
