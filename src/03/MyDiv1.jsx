import MyDiv2 from "./MyDiv2";
export default function MyDiv1() {
  const a = "div1";
  const b = "div2";
  const c = "div3";
  const d = "div4";
  const e = "div5";

  return (
    <>
      <div className="w-9/10 h-3/5 bg-green-900 
     flex flex-col items-center
     text-white font-bold p-10 text-2xl  overflow-auto">
        <div className="w-9/10 flex justify-start">
          {a}
        </div>
        <MyDiv2 a={a} b={b} c={c} d={d} e={e} />
      </div>
    </>
  )
}