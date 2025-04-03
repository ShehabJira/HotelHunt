import { useNavigate } from "react-router";
function SearchBar({ setHotels, setIsLoading, setErrMsg }) {
	const navigate = useNavigate();
	async function handleSearch(e) {
		const searchQuery = e.target.value.trim();

		if (!searchQuery) {
			setHotels([]);
			return;
		}

		try {
			setIsLoading(true);
			setErrMsg("");

			const res = await fetch(`https://hotels.expotb.com/api/searchHotels?search=${encodeURIComponent(searchQuery)}`);
			if (!res.ok) throw new Error(`Something went wrong with fetching hotels!`);

			const results = await res.json();

			if (!results.data || results.data.length === 0) throw new Error("No hotels found!");

			setHotels(results.data);
		} catch (error) {
			setErrMsg(error.message);
			setHotels([]);
		} finally {
			setIsLoading(false);
		}
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
				placeholder="Search by hotel name..."
				aria-label="Search hotels"
			/>
			<span className="absolute left-3 cursor-pointer" role="button" onClick={() => navigate("/")}>
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
					<circle cx="11" cy="11" r="8" />
					<path d="M21 21l-4.35-4.35" />
				</svg>
			</span>
		</form>
	);
}

export default SearchBar;
