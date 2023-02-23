export type ItemProps = {
	href: string;
	label: string;
	subItems?: ItemProps[];
	isHome?: boolean;
};

export const menuItems: ItemProps[] = [
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
