import SearchBar from "./SearchBar";

function Header({ setHotels, setIsLoading, setErrMsg }) {
	return (
		<header className="flex items-center justify-between h-20 px-4 md:px-10 xl:px-20 sticky top-0 backdrop-blur-md z-10 bg-[hsl(210 17% 98% / 65%)] ">
			<picture>
				<source srcSet="/logo-mini.png" media="(max-width: 768px)" />
				<source srcSet="/logo.png" media="(min-width: 769px)" />
				<img src="/logo.png" alt="HotelHunt Logo" className="h-10 md:h-9" />
			</picture>
			<SearchBar setHotels={setHotels} setIsLoading={setIsLoading} setErrMsg={setErrMsg} />
		</header>
	);
}

export default Header;
