import TailButton from "../component/TailButton"

export default function TailSearch({ kw, onOk, onCancel }) {
    return (
        <form className="w-full lg:w-6/10 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4">
            <input type="text" id="kw" ref={kw} className="block p-1 mx-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base" />
            <TailButton caption="확인" color="blue" onClick={onOk} />
            <TailButton caption="취소" color="blue" onClick={onCancel} />
        </form>
    )
}