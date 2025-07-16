import MyDiv1 from "./MyDiv1";
import { useAtom } from "jotai";
import { cntAtom, cntAtom2 } from "./CountAtoms"
export default function DivMain() {
  const [n, setN] = useAtom(cntAtom);
  const [n2] = useAtom(cntAtom2);

  return (
      <div className="w-9/10 bg-green-900 flex flex-col items-center text-white font-bold p-10 text-2xl">
        <div className="w-9/10">
          <p>DivMain</p>
          <p>n = {n}</p>
          <p>n2 = {n2}</p>
        </div>
        <MyDiv1 />
      </div>
  )
}