import MyDiv4 from "./MyDiv4"

export default function MyDiv3() {
  return (
    <>
      <div className="w-9/10 h-9/10 bg-green-400 
     flex flex-col items-center
     text-white font-bold p-10 text-2xl  overflow-auto">
        <div className="w-9/10 flex justify-start">
          div1 &gt; div2 &gt; div3
        </div>
        <MyDiv4 />
      </div>
    </>
  )
}