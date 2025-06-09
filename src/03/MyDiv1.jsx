import MyDiv2 from "./MyDiv2";
export default function MyDiv1() {
  return (
    <>
      <div className="w-9/10 h-3/5 bg-green-900 
     flex flex-col items-center
     text-white font-bold p-10 text-2xl  overflow-auto">
        <div className="w-9/10 flex justify-start">
          div1
        </div>
        <MyDiv2 />
      </div>
    </>
  )
}