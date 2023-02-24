import { Banner } from "./Banner";
import { NavBar } from "./NavBar";

type Props = {
	isMenuOpen: boolean;
	toggleMenu: () => void;
};

export const PageHeader: React.FunctionComponent<Props> = ({
	isMenuOpen,
	toggleMenu,
}) => {
	return (
		<header>
			<Banner />
			<NavBar {...{ isMenuOpen, toggleMenu }} />
		</header>
	);
};
