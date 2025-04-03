import HotelCard from "../components/HotelCard";

function HotelList({ hotels }) {
	if (!hotels || hotels.length === 0) return <p className="text-brand text-center mt-6 text-large font-semibold">Search for your favourite hotel</p>;

	return hotels.map((hotel, i) => <HotelCard hotel={hotel} key={i} />);
}

export default HotelList;
