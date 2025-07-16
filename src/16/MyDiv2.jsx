import MyDiv3 from "./MyDiv3";
export default function MyDiv2({ n, setN }) {
  return (
      <div className="w-9/10 bg-green-600 flex flex-col items-center text-white font-bold p-10 text-2xl">
        <div className="w-9/10">
          <p>Div2</p>
        </div>
        <MyDiv3 n={n} setN={setN} />
      </div>
  )
}