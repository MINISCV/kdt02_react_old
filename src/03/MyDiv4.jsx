import MyDiv5 from "./MyDiv5"

export default function MyDiv4({ a, b, c, d, e }) {
  return (
    <>
      <div className="w-9/10 h-9/10 bg-green-200 
     flex flex-col items-center
     text-white font-bold p-10 text-2xl  overflow-auto">
        <div className="w-9/10 flex justify-start">
          {a} &gt; {b} &gt; {c} &gt; {d}
        </div>
        <MyDiv5 a={a} b={b} c={c} d={d} e={e} />
      </div>
    </>
  )
}