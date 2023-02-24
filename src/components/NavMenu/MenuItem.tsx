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
			isHome && "dropdown__list--home"
		)}
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
				className="dropdown menu"
				data-submenu
				role="menu"
				style={{
					paddingLeft: 20,
				}}
			>
				{subItems?.map((props) => (
					<MenuItem key={props.href} {...props} />
				))}
			</ul>
		)}
	</li>
);
