import { useState } from "react";
export default function MyListItem({title, imgUrl,  content}) {
	const [cnt, setCnt] = useState(0);
	const handleUp = () => {
		setCnt(cnt + 1);
	}
	const handleDown = () => {
		cnt - 1 <= 0 ? setCnt(0) : setCnt(cnt - 1);
	}
	return (
		<>
			<div className="w-full h-50 flex justify-start items-start border rounded-xl overflow-hidden border-gray-400">
				<div className="w-1/4 h-full flex items-start justify-start">
					<img src={imgUrl} alt={title} />
				</div>
				<div className="w-3/4 h-full p-5 flex flex-col items-start justify-between">
					<div className="w-full flex flex-col items-start justify-start">
						<h1 className="text-2xl font-bold">
							{title}
						</h1>
						<p className="w-full flex flex-col items-start justify-start">
							{content}
						</p>
					</div>
					<div className="w-full h-4 flex justify-end items-center">
						<span className="mx-4 cursor-pointer hover:text-red-500 hover:font-bold" onClick={handleUp}>🧡좋아요</span>
						<span className="mx-4 cursor-pointer hover:text-red-500 hover:font-bold" onClick={handleDown}>💔싫어요</span>
						<span className="text-2xl font-bold">{cnt}</span>
					</div>
				</div>
			</div>
		</>
	)
}
