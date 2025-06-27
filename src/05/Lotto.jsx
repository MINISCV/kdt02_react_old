import TailBall from "../assets/component/TailBall"
import TailButton from "../assets/component/TailButton"
import { useState } from "react"

export default function Lotto() {
	const [lottoTag, setLottoTag] = useState([])

	const handleNum = () => {
		let num = []
		while(num.length < 7) {
			let n = Math.floor(Math.random() * 45 + 1)
			if(!num.includes(n)) 
				num.push(n)
		}
		let bonus = num.pop();
		num.sort((a,b) => a - b)

		let lottos = [...num, "+", bonus]
		setLottoTag(lottos.map(num => num == '+' ? <span className="font-bold text-3xl m-2" key={`n${num}`}>{num}</span>
											     : <TailBall key = {`n${num}`} n = {num}/>))
}
	
	return (
		<div className="w-full flex flex-col justify-center items-center">
			<div className="flex justify-center items-center mb-10 h-10">
				{lottoTag}
			</div>
			<TailButton caption="로또번호생성" color="amber" onClick={handleNum} />
		</div >
	)
}
