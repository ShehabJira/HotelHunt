import { useNavigate } from "react-router";
import { searchHotels } from "../services/APIHotels";
import { useEffect, useRef } from "react";

function SearchBar({ setHotels, setIsLoading, setErrMsg }) {
	const navigate = useNavigate();
	const timeoutRef = useRef(null);

	// Clear the timeout when the component unmounts to avoid memory leaks
	useEffect(() => {
		return () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
		};
	}, []);

	function handleSearch(e) {
		const searchQuery = e.target.value.trim();

		// Clear previous timeout and error
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		setErrMsg("");

		// Won't send till user stops typing for 300ms (each keystroke will reset the timeout)
		timeoutRef.current = setTimeout(async () => {
			try {
				setIsLoading(true);
				const results = await searchHotels(searchQuery);
				setHotels(results);
			} catch (error) {
				setErrMsg(error.message);
				setHotels([]);
			} finally {
				setIsLoading(false);
			}
		}, 300);
	}

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				navigate("/");
			}}
			role="search"
			className="flex items-center justify-between w-2/3 md:w-1/2 rounded-full bg-gray-100 relative"
		>
			<input
				onChange={handleSearch}
				type="search"
				name="query"
				id="query"
				className="p-2.5 ml-8 w-full block border-none outline-none"
				placeholder="Hotel name..."
				aria-label="Search hotels"
			/>
			<span className="absolute left-3" aria-hidden="true">
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
					<circle cx="11" cy="11" r="8" />
					<path d="M21 21l-4.35-4.35" />
				</svg>
			</span>
		</form>
	);
}

export default SearchBar;
