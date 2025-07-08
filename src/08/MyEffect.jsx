import { useEffect, useState } from "react"
import TailButton from "../component/TailButton";

export default function MyEffect() {
    const [cnt, setCnt] = useState(0);
    useEffect(() => {console.log("빈거")},[]);
    useEffect(() => {console.log("cnt든거" + cnt)},[cnt]);
    useEffect(() => {console.log("없는거")});
    const plus = () => {
        setCnt(cnt + 1);
    };
    const minus = () => {
        setCnt(cnt - 1);      
    };
    return (
        <div className="flex text-2xl font-bold justify-center items-center">
            {cnt}
            <TailButton caption={"＋"} color={"red"} onClick={plus}/>
            <TailButton caption={"－"} color={"blue"} onClick={minus}/>
        </div>
    )
}
