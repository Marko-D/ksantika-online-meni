import React, { useEffect, useState } from "react";
import { Link } from "react-tiger-transition";

// Components
import Icon from "./../components/Icon";
import Button from "../components/Button";
import Card from "../components/Card";
import Container from "../components/Container";

// Utils
import { getBuildDate } from "../utils/utils";
import packageJson from "../../package.json";

// Constants
import { menuItems } from "../constants/menu";
import { textStyle } from "../constants/theme";

// Style
import linkStyle from "./../App";

const Main = ({ toggleTheme, theme }) => {
	const [logoTheme, setLogoTheme] = useState(theme);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setLogoTheme((prevState) => {
			setLoading(false);
			return logoTheme;
		});
	}, [theme]);

	return (
		<>
			<Container>
				<div className="flex justify-center mt-5 mb-10">
					{!loading && (
						<div>
							<Icon name={`logo-${theme}`} width="120" className="flex" />
						</div>
					)}
				</div>
				<div className="mt-10 mb-5">
					<h1
						className={`flex-1 text-3xl uppercase font-medium text-center text-white ${textStyle[theme]}`}
					>
						Мени
					</h1>
				</div>
				<div className="grid grid-cols-2 gap-3">
					{menuItems.map((d) => (
						<Link
							key={d.id}
							to={d.path}
							style={{ ...linkStyle }}
							transition="glide-left"
						>
							<Card item={d} key={d?.id} theme={theme} />
						</Link>
					))}
				</div>

				<div
					className={`pt-3 pb-3 pl-3 pr-3 text-red-800 flex text-center mt-10`}
				>
					<div
						className={`font-medium text-white rounded-lg m-auto items-center`}
					>
						<Button title={`Смени тема`} onClick={toggleTheme} />
						<div className="mt-5">
							<Icon
								name={theme}
								width="20"
								style={
									theme == "light" ? { fill: "#ffb703" } : { fill: "#fff" }
								}
								className="justify-center m-auto mb-1"
							/>
							<p
								className={`flex-1 uppercase text-xs text-white ${textStyle[theme]}`}
							>
								{theme}
							</p>
						</div>
					</div>
				</div>

				<div className="mt-5 text-sm font-small text-gray-500 text-center">
					<p>070 864 864</p>
					<p>ул.1640 бр.9, Хиподром</p>
				</div>
				<div className="absolute m-auto left-0 right-0 bottom-5 mt-5 text-xs font-small text-gray-500 text-center">
					<p>Build date: {getBuildDate(packageJson.buildDate)}</p>
				</div>
			</Container>
		</>
	);
};

export default Main;
