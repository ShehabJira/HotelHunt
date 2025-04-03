import { BrowserRouter, Routes, Route } from "react-router";

import Header from "./components/Header";
import HotelListPage from "./pages/HotelListPage";
import HotelDetailsPage from "./pages/HotelDetailsPage";
import { useState } from "react";

function App() {
	const [hotels, setHotels] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [errMsg, setErrMsg] = useState("");

	return (
		<>
			<BrowserRouter>
				<Header setHotels={setHotels} setIsLoading={setIsLoading} setErrMsg={setErrMsg} />
				<Routes>
					<Route path="/" element={<HotelListPage hotels={hotels} isLoading={isLoading} errMsg={errMsg} />} />
					<Route path="/:id" element={<HotelDetailsPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
