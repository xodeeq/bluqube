import { IconContext } from "react-icons";

import "./App.css";
import Page from "./components/Page";

function App() {
	return (
		<div className='App'>
			<IconContext.Provider value={{ className: "react-icons" }}>
				<Page />
			</IconContext.Provider>
		</div>
	);
}

export default App;
