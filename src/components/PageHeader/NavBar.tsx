export const NavBar: React.FunctionComponent = () => {
	return (
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
	);
};
