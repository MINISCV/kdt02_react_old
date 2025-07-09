import TailCard from "../component/TailCard"
import { useEffect, useRef, useState } from "react"
export default function Festival() {
    const sLoc = useRef();
    const [cdata, setCdata] = useState([]);
    const [option, setOption] = useState();
    const [tag, setTag] = useState();

    const onSelect = () => {
        setTag(cdata.filter(item => item.GUGUN_NM == sLoc.current.value)
                .map(item => <TailCard key={item.TITLE} imgurl={item.MAIN_IMG_NORMAL} title={item.TITLE} subtitle={item.TRFC_INFO} content={item.USAGE_DAY_WEEK_AND_TIME} />));
    }
    const getFetchData = async () => {
        const baseUrl = 'https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?';
        const url = `${baseUrl}serviceKey=${import.meta.env.VITE_DATA_API}&pageNo=1&numOfRows=50&resultType=json`;
        const resp = await fetch(url);
        const data = await resp.json();
        setCdata(data.getFestivalKr.item);
    }

    useEffect(() => {
        getFetchData();
    }, []);

    useEffect(() => {
        if(!cdata || !cdata.length) return;
        setOption([...new Set(cdata.map(item => item.GUGUN_NM))].map(item => <option key={item} value={item}>{item}</option>));
    }, [cdata])
    return (
        <div className="w-8/10 h-full flex flex-col items-center justify-start">
            <div className="text-3xl font-bold">
                부산축제정보
            </div>
            <select ref={sLoc} id="user-color" required onChange={onSelect} defaultValue={""} className="my-5 w-1/5 border border-blue-300 text-center">
                <option value="" disabled>--지역 선택--</option>
                {option}
            </select>
            <div className="w-8/10 grid grid-cols-1 xl:grid-cols-3 gap-4 overflow-y-auto">
                {tag}
            </div>
        </div>
    )
}


