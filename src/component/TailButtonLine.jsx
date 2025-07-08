export default function TailButtonLine({ caption, color, onClick }) {
    const colors = {
        "white": "bg-white",
        "red": "bg-red-200",
        "amber": "bg-amber-200",
        "lime": "bg-lime-200",
        "sky": "bg-sky-200",
        "blue": "bg-blue-200",
        "violet": "bg-violet-200",
        "orange": "bg-orange-200",
    }

    const bgHover = {
        "white": "hover:bg-white",
        "red": "hover:bg-red-600",
        "amber": "hover:bg-amber-600",
        "lime": "hover:bg-lime-600",
        "sky": "hover:bg-sky-600",
        "blue": "hover:bg-blue-600",
        "violet": "hover:bg-violet-600",
        "orange": "hover:bg-orange-600",
    }
    return (
        <button className={`p-4 rounded-xl ${colors[color]} mx-2 hover:cursor-pointer font-bold ${bgHover[color]}`} onClick={onClick}>
            {caption}
        </button>
    )
}