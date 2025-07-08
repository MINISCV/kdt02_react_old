import { useEffect, useState } from "react";
import TrafficNav from "./TrafficNav";

export default function Traffic() {
    const [tdata, setTdata] = useState([]);
    const [c1, setC1] = useState();
    const [selC1, setSelC1] = useState();
    const [c2, setC2] = useState();
    const [selC2, setSelC2] = useState();
    const [info, setInfo] = useState();
    const [infoTag, setInfoTag] = useState([]);
    const getFetchData = async () => {
        const baseUrl = 'https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?';
        const url = `${baseUrl}page=1&perPage=20&serviceKey=${import.meta.env.VITE_DATA_API}`;
        const resp = await fetch(url);
        const data = await resp.json();
        setTdata(data['data']);
    };

    useEffect(() => {
        getFetchData();
    }, []);

    useEffect(() => {
        if (!tdata.length) return;
        const group = [...new Set(tdata.map(item => item["사고유형대분류"].replaceAll(" ", "")))]
        setC1(group);
    }, [tdata]);

    useEffect(() => {
        if (!tdata.length || !selC1) return;
        const group = [...new Set(tdata.filter(item => item["사고유형대분류"].replaceAll(" ", "") == selC1).map(item => item["사고유형"].replaceAll(" ", "")))]
        setC2(group);
        setInfoTag('');
    }, [selC1]);

    useEffect(() => {
        if (!tdata.length || !selC1 || !selC2) return;
        const group = [...new Set(tdata.filter(item => item["사고유형대분류"] == selC1 && item["사고유형"] == selC2))]
        setInfo(group[0]);
    }, [selC2])

    useEffect(() => {
        if (!info || !selC1 || !selC2) return;
        const group = ["사고건수", "사망자수", "중상자수", "경상자수", "부상신고자수"].map(item => 
        <div key={item}className="flex text-lg p-2 mx-2 border">
            <div className="bg-amber-600 p-2 text-white font-bold">{item}</div>
            <div className="text-amber-800 p-2 font-bold">{parseInt(info[item]).toLocaleString()}</div>
        </div>);
        setInfoTag(group);
    }, [info])
    return (
        <div className="w-8/10">
            {c1 && <TrafficNav label="교통사고 대분류" category={c1} selCategory={selC1} setSelC={setSelC1} />}
            {c2 && <TrafficNav label="교통사고 중분류" category={c2} selCategory={selC2} setSelC={setSelC2} />}
            {infoTag && <div className="w-full bg-lime-50 p-5 grid grid-cols-5 justify-between items-center mt-10">
                {infoTag}
            </div>}
        </div>
    )
}
