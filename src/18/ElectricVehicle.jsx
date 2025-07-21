import kind from "./kind.json"
import zcode from "./zcode.json"
import zscode from "./zscode.json"
import stat from "./stat.json"
import TailSelect from "../component/TailSelect"
import TailButton from "../component/TailButton"
import TailPageNation from "../component/TailPageNation"
import TailCard from "../component/TailCard"
import { useRef, useState } from "react"

export default function ElectricVehicle() {
    const zcodeRef = useRef()
    const zscodeRef = useRef()
    const kindRef = useRef()

    const [zscodeKey, setZscodeKey] = useState([])
    const [zscodeValue, setZscodeValue] = useState([])
    const [tags, setTags] = useState([])
    const [cPage, setCpage] = useState(0)
    const [totalPage, setTotalPage] = useState(0)

    const zcodeChange = () => {
        setZscodeKey(Object.values(zscode[zcodeRef.current.value]))
        setZscodeValue(Object.keys(zscode[zcodeRef.current.value]))
    }

    const onClick = () => {
        if(zcodeRef.current.value == "" || zscodeRef.current.value == "" || kindRef.current.value == ""){
            alert("전부 선택")
            return
        }
        getFetchData(1)
    }
    const getFetchData = async (pageNo) => {
        const sZcode = zcodeRef.current.value
        const sZscode = zscodeRef.current.value
        const sKind = kindRef.current.value
        const url = `https://apis.data.go.kr/B552584/EvCharger/getChargerInfo?serviceKey=${import.meta.env.VITE_DATA_API}&pageNo=${pageNo}&numOfRows=12&period=5&zcode=${sZcode}&zscode=${sZscode}&kind=${sKind}&dataType=JSON`
        const resp = await fetch(url)
        const data = await resp.json()
        const tag = data.items.item.map(item => <TailCard key={item.statId + item.chgerId} content={`${item.useTime},충전기상태:${stat[item.stat]},충전용량:${item.output},충전방식:${item.method},주차료:${item.parkingFree == 'Y' ? "무료" : "유료"}`} subtitle={`${item.busiNm} (${item.addr}, Tel.${item.busiCall})`} title={item.statNm} />)
        setTags(tag)
        setCpage(pageNo)
        setTotalPage(Math.ceil(data.totalCount / 12))
    }

    return (
        <div className="w-9/10 h-full flex flex-col items-center justify-start">
            <div className="w-full grid lg:grid-cols-4 lg:gap-2 mb-2">
                <TailSelect selectRef={zcodeRef} caption="지역" keys={Object.keys(zcode)} values={Object.values(zcode)} onChange={zcodeChange} />
                <TailSelect selectRef={zscodeRef} caption="지역 동" keys={zscodeKey} values={zscodeValue} />
                <TailSelect selectRef={kindRef} caption="충전소 구분" keys={Object.keys(kind)} values={Object.values(kind)} />
                <TailButton caption="검색" color="blue" onClick={onClick} />
            </div>
            <div className="w-full grid lg:grid-cols-4 lg:grid-rows-3 lg:gap-2 flex-grow">
                {tags}
            </div>
            <TailPageNation currentPage={cPage} totalPage={totalPage} onPageChange={getFetchData} />
        </div>
    )
}