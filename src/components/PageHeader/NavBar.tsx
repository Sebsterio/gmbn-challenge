import styles from "./NavBar.module.scss";

type Props = {
	isMenuOpen: boolean;
	isSearchOpen: boolean;
	toggleMenu: () => void;
	toggleSearch: () => void;
};

export type { Props as NavBarProps };

export const NavBar: React.FunctionComponent<Props> = ({
	isMenuOpen,
	isSearchOpen,
	toggleMenu,
	toggleSearch,
}) => {
	return (
		<div className="row">
			<div className="columns title-bar" style={{ display: "block" }}>
				<button className={styles["menu-button"]} onClick={toggleMenu}>
					<span
						className={isMenuOpen ? styles["back-icon"] : styles["menu-icon"]}
					/>
				</button>
			</div>

			<div className="columns shrink social-links--header-m">
				{socialIconsJsx}
			</div>

			<div
				className="columns title-bar"
				style={{ display: "block", textAlign: "right" }}
			>
				<button className={styles["menu-button"]} onClick={toggleSearch}>
					{isSearchOpen ? (
						<span className={styles["up-icon"]} />
					) : (
						<i className="fa fa-search" style={{ color: "white" }} />
					)}
				</button>
			</div>
		</div>
	);
};

const socialIconsJsx = (
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
);
