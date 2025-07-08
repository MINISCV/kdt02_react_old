import FoodCard from "./FoodCard";
import fooddata from "./fooddata.json";
import TailButton from "../component/TailButton";
import { useState } from "react";

export default function FoodMain() {
	const group = [...new Set(fooddata.map(item => item["운영주체 분류"].replaceAll(" ", "")))]
	const [selectedGroup, setSelectedGroup] = useState([]);
	const handleClick = (item) => {		
		setSelectedGroup(fooddata.filter(data => data["운영주체 분류"].replaceAll(" ", "") == item));
	}
	return (
		<div className="w-full h-full flex flex-col justify-start items-center">
			<div className="w-8/10 h-20 bg-amber-400 p-5 mb-5 flex items-center justify-center" >
				{group.map(item => <TailButton key={item} caption={item} color="sky" onClick={() => handleClick(item)} />)}
			</div>
			<div className="w-8/10 grid grid-cols-1 xl:grid-cols-2 gap-4 overflow-y-auto">
				{selectedGroup.map(item => <FoodCard key={item["사업장명"]} data={item} />)}
			</div>
		</div>
	)
}
