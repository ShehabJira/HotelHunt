export async function searchHotels(query) {
	if (!query.trim()) return [];

	const res = await fetch(`https://hotels.expotb.com/api/searchHotels?search=${encodeURIComponent(query)}`);

	if (!res.ok) throw new Error(`Cannot get hotels! Status: ${res.status}`);

	const { data } = await res.json();

	if (!data) throw new Error("Invalid response format from server");

	return data;
}

export async function getHotelDetails(id) {
	if (!id) throw new Error("Invalid hotel ID");

	const res = await fetch(`https://hotels.expotb.com/api/displayHotel/${id}`);

	if (!res.ok) throw new Error(`Cannot get hotel details! Status: ${res.status}`);

	const { data } = await res.json();

	if (!data) throw new Error("Invalid response format from server");

	return data;
}
