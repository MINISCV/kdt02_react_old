import bankImg from "../assets/bank.png";
import marketImg from "../assets/market.png";
import busanImg from "../assets/busan.png";
import { useState } from "react";

export default function FoodCard({ data }) {
	const imgs = {
		"기초푸드뱅크": bankImg,
		"기초푸드마켓": marketImg,
		"광역지원센터": busanImg,
	}
	const [flag, setFlag] = useState(false);
	const handleToggle = () => {
		setFlag(!flag);
	}

	return (
		<div className="w-full h-60 flex justify-start items-start rounded-xl border overflow-hidden border-gray-400">
			<div className="w-1/4 flex items-start justify-start">
				<img src={imgs[data["구분"]]} alt={data["구분"]} />
			</div>
			<div className="w-3/4 p-5 flex flex-col items-start justify-between">
				<div>
					<p className="text-2xl font-bold mb-2">
						{data["사업장명"]}
					</p>
					<p className="text-lg font-bold mb-2">
						{data["운영주체명"]}
					</p>
					<p className="text-gray-400">
						{data["사업장 소재지"]}
					</p>
				</div>
				<div className="w-full bg-black h-8 mt-4 p-2 flex items-center text-white hover:cursor-pointer" onClick={handleToggle}>
						{flag && data["연락처(대표번호)"]}
				</div>
			</div>
		</div>
	)
}
