import MyDiv5 from "./MyDiv5"

export default function MyDiv4() {
  return (
    <>
      <div className="w-9/10 h-9/10 bg-green-200 
     flex flex-col items-center
     text-white font-bold p-10 text-2xl  overflow-auto">
        <div className="w-9/10 flex justify-start">
          div1 &gt; div2 &gt; div3 &gt; div4
        </div>
        <MyDiv5 />
      </div>
    </>
  )
}