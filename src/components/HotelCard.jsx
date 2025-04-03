import { useNavigate } from "react-router";

function HotelCard({ hotel }) {
	const navigate = useNavigate();

	return (
		<div className="bg-white rounded-xl overflow-hidden flex flex-col justify-between">
			<div>
				<div className="overflow-hidden rounded-xl mb-2">
					<img
						src={hotel.photos[0]}
						alt="Hotel"
						className="overflow-hidden aspect-square object-cover transform transition-transform duration-300 hover:scale-105"
					/>
				</div>
				<div>
					<div className="flex justify-between items-center">
						<h2 className="font-semibold">{hotel.name}</h2>
						<span>⭐{hotel.star_rating}</span>
					</div>
					<p className="text-[#6A6A6A] leading-5">{hotel.address}</p>
				</div>
			</div>

			<div className="flex justify-end items-center mt-2">
				<span
					role="button"
					onClick={() => navigate(`/${hotel._id}`)}
					title="See hotel details"
					className="bg-[#343a40] hover:bg-[#222222] transition duration-300 text-white py-0.5 px-3 rounded-full cursor-pointer"
				>
					View details
				</span>
			</div>
		</div>
	);
}

export default HotelCard;
