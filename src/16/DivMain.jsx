import { useEffect, useState } from "react";
import MyDiv1 from "./MyDiv1";
export default function DivMain() {
  const [n, setN] = useState(0);
  const [n2, setN2] = useState(0);

  useEffect(() => {
    setN2(n * 2);
  }, [n]);
  return (
      <div className="w-9/10 bg-green-900 flex flex-col items-center text-white font-bold p-10 text-2xl">
        <div className="w-9/10">
          <p>DivMain</p>
          <p>n = {n}</p>
          <p>n2 = {n2}</p>
        </div>
        <MyDiv1 n={n} setN={setN} />
      </div>
  )
}