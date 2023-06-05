import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navigation, Route, Screen, glide, cube, fade } from "react-tiger-transition";
import "react-tiger-transition/styles/main.min.css";

import withClearCache from "./ClearCache";

// Screens
import Main from "./screens/Main";
import List from "./screens/List";
import Cards from "./screens/Cards";

// Constants
import { foodItems } from "./constants/food";
import { drinksItems } from "./constants/drinks";

// Services
import { themeService } from "./services/themeService";

glide({
	name: "glide-left",
	direction: "left"
});
glide({
	name: "glide-right",
	direction: "right",
});
cube({
	name: "cube-left",
});
fade({
  name: "default-fade"
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
// you will need to set the height of  <Navigation /> wrapper,
// in this case, it is the root node,
// better to do this on your stylesheet
document.getElementById("root").style.height = "100vh";
// just to make opacity goes black on glide transition
document.body.style.backgroundColor = "black";



const ClearCacheComponent = withClearCache(MainApp);

function App() {
  return <ClearCacheComponent />;
}

// function MainApp(props) {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Build date: {getBuildDate(packageJson.buildDate)}</p>
//       </header>
//     </div>
//   );
// }


function MainApp() {
	const [theme, setTheme] = useState(false);

	const toggleTheme = () => {
		setTheme((prevState) => !prevState);
	};

	return (
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
							items={foodItems}
							navigateFrom="/"
							theme={themeService(theme)}
						></Cards>
					</Screen>
				</Route>

				<Route path="/food/:id">
					<Screen
						style={theme ? { ...screenLightTheme } : { ...screenDarkTheme }}
					>
						{foodItems.map((d) => (
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
							items={foodItems[9]?.items}
							navigateFrom="/food"
							theme={themeService(theme)}
						></Cards>
					</Screen>
				</Route>

				<Route path="/food/meat-specialties/:id">
					{foodItems[9]?.items.map((d) => {
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
							items={drinksItems}
							navigateFrom="/"
							theme={themeService(theme)}
						></Cards>
					</Screen>
				</Route>

				<Route path="/drinks/:id">
					<Screen
						style={theme ? { ...screenLightTheme } : { ...screenDarkTheme }}
					>
						{drinksItems.map((d) => (
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
	);
};
export default App;