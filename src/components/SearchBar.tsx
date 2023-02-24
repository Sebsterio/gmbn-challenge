export const SearchBar: React.FunctionComponent = () => {
	return (
		<div className="search__container">
			<form className="search" data-search action="/search" method="get">
				<div className="row" id="remote">
					<div className="columns">
						<span
							className="twitter-typeahead"
							style={{ position: "relative", display: "inline-block" }}
						>
							<input
								className="typeahead columns searchbox tt-hint"
								type="text"
								readOnly
								autoComplete="off"
								spellCheck="false"
								tabIndex={-1}
								dir="ltr"
								style={{
									position: "absolute",
									top: "0px",
									left: "0px",
									borderColor: "transparent",
									boxShadow: "none",
									opacity: 1,
									background:
										"none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255)",
								}}
							/>
							<input
								className="typeahead columns searchbox tt-input"
								name="q"
								required
								type="text"
								placeholder="Search for videos"
								autoComplete="off"
								spellCheck="false"
								dir="auto"
								style={{
									position: "relative",
									verticalAlign: "top",
									backgroundColor: "transparent",
								}}
							/>
							<pre
								aria-hidden="true"
								style={{
									position: "absolute",
									visibility: "hidden",
									whiteSpace: "pre",
									fontFamily: '"Libre Franklin", sans-serif',
									fontSize: "16px",
									fontStyle: "normal",
									fontVariant: "normal",
									fontWeight: 400,
									wordSpacing: "0px",
									letterSpacing: "0px",
									textIndent: "0px",
									textRendering: "auto",
									textTransform: "none",
								}}
							/>
							<div
								className="tt-menu"
								style={{
									position: "absolute",
									top: "100%",
									left: "0px",
									zIndex: 100,
									display: "none",
								}}
							>
								<div className="tt-dataset tt-dataset-search-results" />
							</div>
						</span>
					</div>
					<button className="shrink columns searchbox__button" type="submit">
						{" "}
						<span>Search</span>
						<i className="fa fa-search" />
					</button>
				</div>
			</form>
		</div>
	);
};
