import TailButton from '../component/TailButton'
import { useAtom } from "jotai";
import { cntAtom, cntAtom2 } from "./CountAtoms"
export default function MyDiv3() {
  const [n, setN] = useAtom(cntAtom);
  const [n2] = useAtom(cntAtom2);
  return (
      <div className="w-9/10 h-9/10 bg-green-400 flex flex-col items-center text-white font-bold p-10 text-2xl">
        <div className="w-9/10">
          <p>Div3</p>
        </div>
        <div className="w-9/10 flex justify-start">
          <TailButton caption="증가" color="blue" onClick={() => setN(n + 1)} />
          <TailButton caption="감소" color="blue" onClick={() => setN(n - 1)} />
        </div>
      </div>
  )
}