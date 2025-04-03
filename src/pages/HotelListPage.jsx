import HotelList from "../components/HotelList";

function HotelListPage({ hotels, isLoading, errMsg }) {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10 mx-4 md:mx-10 xl:mx-20 border-t border-gray-200">
			{isLoading && <p className="text-brand text-center mt-6 text-large font-semibold">Loading...</p>}
			{errMsg && <p className="text-brand text-center mt-6 text-large font-semibold">{errMsg}</p>}
			{!isLoading && !errMsg && <HotelList hotels={hotels} />}
		</div>
	);
}

export default HotelListPage;
