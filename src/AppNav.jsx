import { Link } from "react-router-dom"
export default function AppNav() {
    return (
        <div className="w-full flex justify-center items-center">
            <Link to="/">
                <div className="p-4 m-2 border border-amber-800 rounded bg-amber-50 font-bold hover:bg-amber-200">
                    시계
                </div>
            </Link>
            <Link to="/lotto">
                <div className="p-4 m-2 border border-amber-800 rounded bg-amber-50 font-bold hover:bg-amber-200">
                    로또
                </div>
            </Link>
            <Link to="/food">
                <div className="p-4 m-2 border border-amber-800 rounded bg-amber-50 font-bold hover:bg-amber-200">
                    음식
                </div>
            </Link>
            <Link to="/box">
                <div className="p-4 m-2 border border-amber-800 rounded bg-amber-50 font-bold hover:bg-amber-200">
                    박스오피스
                </div>
            </Link>
            <Link to="/traffic">
                <div className="p-4 m-2 border border-amber-800 rounded bg-amber-50 font-bold hover:bg-amber-200">
                    교통사고
                </div>
            </Link>
            <Link to="/gallery">
                <div className="p-4 m-2 border border-amber-800 rounded bg-amber-50 font-bold hover:bg-amber-200">
                    관광사진
                </div>
            </Link>
            <Link to="/festival">
                <div className="p-4 m-2 border border-amber-800 rounded bg-amber-50 font-bold hover:bg-amber-200">
                    축제
                </div>
            </Link>
            <Link to="/fcst">
                <div className="p-4 m-2 border border-amber-800 rounded bg-amber-50 font-bold hover:bg-amber-200">
                    일기예보
                </div>
            </Link>
            <Link to="/divmain">
                <div className="p-4 m-2 border border-amber-800 rounded bg-amber-50 font-bold hover:bg-amber-200">
                    prob상태변경
                </div>
            </Link>
        </div>
    )
}