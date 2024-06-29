import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routers/home/Home.jsx";
import About from "./routers/about/About.jsx";
import Nav from "./components/nav/Nav.jsx";
import Work from "./routers/work/Work.jsx";

function App() {
	return (
		<>
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/work" element={<Work />} />
			</Routes>
		</>
	);
}

export default App;
