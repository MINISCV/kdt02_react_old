import { useEffect, useRef } from "react";
import TailButton from "../component/TailButton"
export default function MyRef() {
    const n1Ref = useRef();
    const n2Ref = useRef();
    const n3Ref = useRef();
    const opRef = useRef();
    const handleCal = (e) => {
        e.preventDefault();
        const n1 = parseInt(n1Ref.current.value);
        const n2 = parseInt(n2Ref.current.value);
        switch(opRef.current.value) {
            case "+":
                n3Ref.current.value = n1 + n2;
                break;
            case "-":
                n3Ref.current.value = n1 - n2;
                break;
            case "×":
                n3Ref.current.value = n1 * n2;
                break;
            case "÷":
                n3Ref.current.value = n1 / n2;
                break;
        }
        n1Ref.current.focus();
    }
    useEffect(() => {
        n1Ref.current.focus();
    }, [])
    return (
        <form className="w-9/10 bg-amber-50 p-5 flex justify-center">
            <input type="number" name="n1" ref={n1Ref} className="block w-48 p-2 mx-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500" />
            <select name="op" defaultValue="×" ref={opRef} className="p-4 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block">
                <option value="+"> + </option>
                <option value="-"> - </option>
                <option value="×"> × </option>
                <option value="÷"> ÷ </option>
            </select>
            <input type="number" name="n2" ref={n2Ref} className="block w-48 p-2 mx-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500" />
            <TailButton caption=" = " color="lime" onClick={handleCal} />
            <input type="number" name="n3" ref={n3Ref} readOnly className="bg-lime-100 block w-62 p-2 mx-4 text-gray-900 border border-gray-300 rounded-lg  text-base focus:ring-blue-500 focus:border-blue-500" />
        </form>
    )
}
