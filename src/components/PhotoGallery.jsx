import { useState } from "react";

const arrow = `absolute top-0 w-12 h-full text-center bg-[hsl(210 17% 98% / 65%)] backdrop-blur-[5px] z-9 text-black text-4xl font-bold flex items-center justify-center`;

function PhotoGallery({ photos }) {
	const [current, setCurrent] = useState(0);
	const [src, setSrc] = useState(photos[current]);

	function handleIncrease() {
		if (current < photos.length - 1) {
			setCurrent((cur) => cur + 1);
			setSrc(photos[current + 1]);
		}
	}
	function handleDecrease() {
		if (current >= 1) {
			setCurrent((cur) => cur - 1);
			setSrc(photos[current - 1]);
		}
	}

	return (
		<div className="relative w-[90%] h-fit mx-auto">
			<span className={`${arrow} left-0 ${current === 0 ? "cursor-not-allowed" : "cursor-pointer"}`} onClick={handleDecrease}>
				<svg
					width="24"
					height="24"
					className=" bg-white rounded-full size-6"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M15 18l-6-6 6-6" />
				</svg>
			</span>
			<img
				src={src}
				onError={() => {
					setSrc("/No-Image-Placeholder-Wide.jpg");
				}}
				alt="Hotel"
				style={{ aspectRatio: "3/2" }}
				className="w-full object-cover"
			/>
			<span className={`${arrow} right-0 ${current === photos.length - 1 ? "cursor-not-allowed" : "cursor-pointer"} `} onClick={handleIncrease}>
				<svg
					width="24"
					height="24"
					className="transform rotate-180 bg-white rounded-full size-6"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M15 18l-6-6 6-6" />
				</svg>
			</span>
		</div>
	);
}

export default PhotoGallery;
