import MyDiv3 from "./MyDiv3";
export default function MyDiv2() {
  return (
    <>
      <div className="w-9/10 h-9/10 bg-green-600
     flex flex-col items-center
     text-white font-bold p-10 text-2xl overflow-auto">
        <div className="w-9/10 flex justify-start">
          div1 &gt; div2
        </div>
        <MyDiv3 />
      </div>
    </>
  )
}