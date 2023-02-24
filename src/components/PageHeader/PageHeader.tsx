import { Banner } from "./Banner";
import { NavBar, NavBarProps } from "./NavBar";

type Props = NavBarProps;

export const PageHeader: React.FunctionComponent<Props> = (props) => {
	return (
		<header className="header">
			<Banner />
			<NavBar {...props} />
		</header>
	);
};
