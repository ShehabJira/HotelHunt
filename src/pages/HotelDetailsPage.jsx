import { Link, useParams } from "react-router"; // In v7 we no longer need "react-router-dom" as the packages have been simplified. We can import everything from "react-router"
import DOMPurify from "dompurify"; // DOMPurify => removes any harmful scripts or unwanted attributes before rendering
import parse from "html-react-parser"; // It allows to safely render raw HTML inside your React components
import PhotoGallery from "../components/PhotoGallery";
import { useEffect, useState } from "react";
import { getHotelDetails } from "../services/APIHotels";

function HotelDetailsPage() {
	const [hotel, setHotel] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [errMsg, setErrMsg] = useState("");
	const { id } = useParams();
	const parsedDescription = parse(DOMPurify.sanitize(hotel.description));

	useEffect(
		function () {
			async function fetchHotelDetails() {
				try {
					setIsLoading(true);
					setErrMsg("");
					const data = await getHotelDetails(id);
					setHotel(data);
				} catch (error) {
					setErrMsg(error.message);
					setHotel([]);
				} finally {
					setIsLoading(false);
				}
			}
			fetchHotelDetails();
		},
		[id]
	);

	if (isLoading) return <p className="text-brand text-center mt-6 text-large font-semibold">Loading...</p>;

	if (errMsg) return <p className="text-brand text-center mt-6 text-large font-semibold">{errMsg}</p>;

	if (!hotel._id) return <p className="text-brand text-center mt-6 text-large font-semibold">Couldn't fetch hotel details</p>;

	return (
		<div className="flex flex-col lg:flex-row pt-20 border-t border-t-slate-200 relative">
			<div className="lg:w-1/2">
				<Link to="/" className="absolute top-4 left-10 cursor-pointer block py-2 px-5 bg-amber-100 rounded-full">
					👈🏻 Back to List
				</Link>
				<PhotoGallery photos={hotel.photos} />
			</div>
			<div className="lg:w-1/2 px-10 mt-5 lg:mt-0 mb-10 lg:pl-0 flex flex-col gap-2">
				<h1 className="text-3xl font-semibold text-gray-900">{hotel.name}</h1>
				<p className="text-gray-600">{hotel.address}</p>
				<p className="text-yellow-500 text-xl">{"⭐".repeat(hotel.star_rating)}</p>
				<div className="description text-gray-700 space-y-4">{parsedDescription}</div>
				{hotel.Services.length > 0 && (
					<div className="border-t border-gray-300 pt-4">
						<h3 className="text-lg font-semibold text-gray-900">Services</h3>
						<ul className="list-disc list-inside text-gray-700">
							{hotel.Services.map((service, index) => (
								<li key={index}>{service}</li>
							))}
						</ul>
					</div>
				)}
				{hotel.Activities.length > 0 && (
					<div className="border-t border-gray-300 pt-4">
						<h3 className="text-lg font-semibold text-gray-900">Activities</h3>
						<ul className="list-disc list-inside text-gray-700">
							{hotel.Activities.map((activity, index) => (
								<li key={index}>{activity}</li>
							))}
						</ul>
					</div>
				)}
				{hotel.Parking?.length > 0 && (
					<div className="border-t border-gray-300 pt-4">
						<h3 className="text-lg font-semibold text-gray-900">Parking</h3>
						<p className="text-gray-700">{hotel.Parking.join(", ")}</p>
					</div>
				)}
			</div>
		</div>
	);
}

export default HotelDetailsPage;
