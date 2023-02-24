import Link from "next/link";

export const Banner: React.FunctionComponent = () => {
	return (
		<div className="row align-middle">
			<div className="small-3 medium-4 columns">
				<Link className="navbar-brand" href="/">
					<img className="mainLogoMobile" src="/imgs/gmbnLogo-text.svg" />
					<img className="mainLogoDesktop" src="/imgs/gmbnLogo.svg" />
				</Link>
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
	);
};
