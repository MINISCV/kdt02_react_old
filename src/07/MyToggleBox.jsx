import { useState } from "react"
import TailButtonLine from "../component/TailButtonLine"

export default function MyToggleBox({color}) {
    const colors = {
		"red": "bg-red-400",
		"amber": "bg-amber-400",
		"lime": "bg-lime-400",
		"sky": "bg-sky-400",
		"blue": "bg-blue-400",
		"violet": "bg-violet-400",
		"orange": "bg-orange-400",
	}
    const [flag, setFlag] = useState();
    const handleToggle = () => {
        setFlag(!flag);
    }
    return (
        <div className={`flex flex-col justify-center items-center gap-10 w-full h-60 ${flag && colors[color]}`}>
            <TailButtonLine caption={color} color={"white"} onClick={handleToggle} />
            <TailButtonLine caption={`${color} Toggle`} color={color} onClick={handleToggle} />
        </div>
    )
}
