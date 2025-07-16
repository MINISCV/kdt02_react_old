import MyDiv2 from "./MyDiv2";
export default function MyDiv1({ n, setN }) {
  return (
      <div className="w-9/10 bg-green-800 flex flex-col items-center text-white font-bold p-10 text-2xl">
        <div className="w-9/10">
          <p>Div1</p>
        </div>
        <MyDiv2 n={n} setN={setN} />
      </div>
  )
}