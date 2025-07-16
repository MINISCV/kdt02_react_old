import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import getcode from "./getcode.json"

export default function FcstList() {
  const [sparams] = useSearchParams();
  const type = sparams.get("type");
  const date = sparams.get("date");
  const location = sparams.get("location");
  const x = sparams.get("x");
  const y = sparams.get("y");
  const [data, setData] = useState();
  const [tag, setTag] = useState([]);
  const selectRef = useRef();

  const getFetchData = async () => {
    let option = type == "초단기" ? ["getUltraSrtFcst", "0630"] : ["getVilageFcst", "0500"];
    const url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/${option[0]}?serviceKey=${import.meta.env.VITE_DATA_API}&pageNo=1&numOfRows=1000&dataType=json&base_date=${date.replaceAll("-", "")}&nx=${x}&ny=${y}&base_time=${option[1]}`;
    const resp = await fetch(url);
    const data = await resp.json();
    setData(data.response.body.items.item);
  };

  useEffect(() => {
    getFetchData();
  }, []);

  const getData = () => {
    const SKY = ['', '맑음☀️', '','구름많음☁️', '흐림🌤️']
    const PTY = ['없음', '비🌧️', '비/눈🌧️🌨️', '눈🌨️', '소나기🌧️🌧️', '빗방울💧', '빗방울눈날림💧❄️', '눈날림❄️']

    if (!data) return;
    const name = getcode.find(item => item['항목값'] == selectRef.current.value)['항목명'];
    const tags = data.filter(item => item['category'] == selectRef.current.value).map(item => 
      <tr key={`${item.fcstDate}-${item.fcstTime}`} className="bg-white border-b border-gray-200 ">
        <td scope="row" className="px-6 py-4 whitespace-nowrap">
          {name}[{item['category']}]
        </td>
        <td className="px-6 py-4">
          {item.fcstDate.substring(0, 4)}.{item.fcstDate.substring(4, 6)}.{item.fcstDate.substring(6, 8)}
        </td>
        <td className="px-6 py-4">
          {item.fcstTime.substring(0, 2)}:{item.fcstTime.substring(2, 4)}
        </td>
        <td className="px-6 py-4">
          {item['category'] == 'SKY' ? SKY[item.fcstValue] : 
           item['category'] == 'PTY' ? PTY[item.fcstValue] : item.fcstValue}
        </td>
      </tr>
    );
    setTag(tags);
  };

  return (
    <>
      <div className="w-9/10 grid grid-cols-2">
        <h2 className="font-bold text-2xl">
          {location} {type}예보 ({date.replaceAll("-", ".")})
        </h2>
        <select ref={selectRef} className="border border-black" defaultValue="" onChange={getData}>
          <option value="" disabled>-- 항목 --</option>
          {getcode.filter(item => item["예보구분"] == type + "예보").map(item => <option key={item['항목값']} value={item['항목값']}>{item['항목명']}[{item['항목값']}]</option>)}
        </select>
      </div>
      <table className="w-9/10 text-left rtl:text-right mt-5">
        <thead className="text-white bg-black ">
          <tr>
            <th scope="col" className="px-6 py-3">
              항목명
            </th>
            <th scope="col" className="px-6 py-3">
              예측일자
            </th>
            <th scope="col" className="px-6 py-3">
              예측시간
            </th>
            <th scope="col" className="px-6 py-3">
              예측값
            </th>
          </tr>
        </thead>
        <tbody>
          {tag}
        </tbody>
      </table>
    </>
  )
}
