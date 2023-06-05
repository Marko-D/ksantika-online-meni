import React from "react";
import withClearCache from "./ClearCache";

// Screens
import Init from "./Init";

function MainApp() {
	return <Init />;
}

const ClearCacheComponent = withClearCache(MainApp);

function App() {
	return <ClearCacheComponent />;
}

export default App;
