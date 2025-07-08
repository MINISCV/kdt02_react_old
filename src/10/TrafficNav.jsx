import TailButton from "../component/TailButton"

export default function TrafficNav({ label, category, selCategory, setSelC }) {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="font-bold text-2xl">
        {label}
      </div>
      <div>
        {category.map(item => <TailButton key={item} caption={item} color={selCategory == item ? "orange" : "blue"} onClick={() => setSelC(item)} />)}
      </div>
    </div>
  )
}
