import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import {
	Navigation,
	Route,
	Screen,
	glide,
	cube,
	fade,
} from "react-tiger-transition";
import "react-tiger-transition/styles/main.min.css";

// Screens
import Main from "./screens/Main";
import List from "./screens/List";
import Cards from "./screens/Cards";

// Constants
// import { foodItems } from "./constants/food";
// import { drinksItems } from "./constants/drinks";

// Services
import { themeService } from "./services/themeService";

glide({
	name: "glide-left",
	direction: "left",
});
glide({
	name: "glide-right",
	direction: "right",
});
cube({
	name: "cube-left",
});
fade({
	name: "default-fade",
});

export const screenStyle = {
	overflow: "auto",
};

export const screenDarkTheme = {
	...screenStyle,
	backgroundColor: "#212529",
};

export const screenLightTheme = {
	...screenStyle,
	backgroundColor: "#E9ECEF",
};

export const textStyle = "text-gray-800";

const Init = () => {
	document.addEventListener('keydown', function(event) {
		if (event.ctrlKey && event.key === 'r' || event.key ==='F5') {
			console.log('aaaaaaaaaaa')
			window.location.reload(); // Refresh the page
		}
	});

	// you will need to set the height of  <Navigation /> wrapper,
	// in this case, it is the root node,
	// better to do this on your stylesheet
	document.getElementById("root").style.height = "100vh";
	// just to make opacity goes black on glide transition
	document.body.style.backgroundColor = "black";

	const [theme, setTheme] = useState(false);
	const [data, setData] = useState();
	// const [menu, setMenu] = useState();
	// const [food, setFood] = useState();
	// const [drinks, setDrinks] = useState();

	const toggleTheme = () => {
		setTheme((prevState) => !prevState);
	};

	const fetchFiles = async () => {
		const urls = [
			'/online-meni/data/menu.json',
			'/online-meni/data/food.json',
			'/online-meni/data/drinks.json'
		];

		const requests = urls.map(url => fetch(url));

		try {
			const responses = await Promise.all(requests);
			const data = await Promise.all(responses.map(response => response.json()));
			const menuItems = {
				menu: data[0],
				food: data[1],
				drinks: data[2]
			}
			setData(menuItems);
		} catch (error) {
			console.error('Error fetching files:', error);
		}
	};

	


	// const getData = () => {
	// 	fetch("/online-meni/food.json")
	// 		.then((response) => response.json())
	// 		.then((response) => {
	// 			setFood(response);
	// 		})
	// 		.catch((error) => {
	// 			console.error("Error:", error);
	// 		});
	// };

	useEffect(() => {
		// getData();
		fetchFiles();
		console.log(data);
	}, []);

	return (
		<Fragment>
			{!!data?.food && (
				<Router basename={"/online-meni"}>
					<Navigation>
						<Route exact path="/">
							<Screen
								style={theme ? { ...screenLightTheme } : { ...screenDarkTheme }}
							>
								<Main toggleTheme={toggleTheme} theme={themeService(theme)} />
							</Screen>
						</Route>

						<Route path="/food">
							<Screen
								style={theme ? { ...screenLightTheme } : { ...screenDarkTheme }}
							>
								<Cards
									items={data?.food}
									navigateFrom="/"
									theme={themeService(theme)}
								></Cards>
							</Screen>
						</Route>

						<Route path="/food/:id">
							<Screen
								style={theme ? { ...screenLightTheme } : { ...screenDarkTheme }}
							>
								{data?.food.map((d) => (
									<Route key={d.id} path={d.path}>
										<Screen
											style={
												theme ? { ...screenLightTheme } : { ...screenDarkTheme }
											}
										>
											<List
												items={d.items}
												navigateFrom="/food"
												theme={themeService(theme)}
											></List>
										</Screen>
									</Route>
								))}
							</Screen>
						</Route>

						<Route path="/food/meat-specialties">
							<Screen
								style={theme ? { ...screenLightTheme } : { ...screenDarkTheme }}
							>
								<Cards
									items={data?.food[10]?.items}
									navigateFrom="/food"
									theme={themeService(theme)}
								></Cards>
							</Screen>
						</Route>

						<Route path="/food/meat-specialties/:id">
							{data?.food[10]?.items.map((d) => {
								return (
									<Route key={d.id} path={d.path}>
										<Screen
											style={
												theme ? { ...screenLightTheme } : { ...screenDarkTheme }
											}
										>
											<List
												items={d.items}
												navigateFrom="/food/meat-specialties"
												theme={themeService(theme)}
											></List>
										</Screen>
									</Route>
								);
							})}
						</Route>

						<Route path="/drinks">
							<Screen
								style={theme ? { ...screenLightTheme } : { ...screenDarkTheme }}
							>
								<Cards
									items={data?.drinks}
									navigateFrom="/"
									theme={themeService(theme)}
								></Cards>
							</Screen>
						</Route>

						<Route path="/drinks/:id">
							<Screen
								style={theme ? { ...screenLightTheme } : { ...screenDarkTheme }}
							>
								{data?.drinks.map((d) => (
									<Route key={d.id} path={d.path}>
										<Screen
											style={
												theme ? { ...screenLightTheme } : { ...screenDarkTheme }
											}
										>
											<List
												items={d.items}
												navigateFrom="/drinks"
												theme={themeService(theme)}
											></List>
										</Screen>
									</Route>
								))}
							</Screen>
						</Route>
					</Navigation>
				</Router>
			)}
		</Fragment>
	);
};

export default Init;
