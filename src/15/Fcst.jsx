import { useRef } from "react"
import TailButton from "../component/TailButton"
import getxy from "./getxy.json"
import { useNavigate } from "react-router-dom";
export default function Fcst() {
  const locRef = useRef();
  const dateRef = useRef();
  const navigate = useNavigate();

  const handleLink = (type) => {
    if(locRef.current.value == "") return;
    const x = getxy.find(item => item['1단계'] == locRef.current.value)['격자 X']
    const y = getxy.find(item => item['1단계'] == locRef.current.value)['격자 Y']
    navigate(`/fcstlist?type=${type}&location=${locRef.current.value}&x=${x}&y=${y}&date=${dateRef.current.defaultValue}`)
  };
  return (
    <>
      <div className="font-bold text-2xl mb-5">
        일기예보 선택
      </div>
      <div className="w-8/10 grid lg:grid-cols-2 lg:grid-rows-2 gap-4">
        <input type="date" defaultValue={new Date().toISOString().split('T')[0]} ref={dateRef} className="border border-gray-200 rounded"/>
        <select ref={locRef} className="border border-blue-300 rounded" defaultValue="">
          <option value="" disabled>--시도선택--</option>
          {getxy.map(item => item['1단계']).map(item => <option key={item} value={item}>{item}</option>)}
        </select>
        <TailButton caption="초단기예보" color="blue" onClick={() => {handleLink('초단기')}} />
        <TailButton caption="단기예보" color="blue" onClick={() => {handleLink('단기')}} />
      </div>
    </>
  )
}
