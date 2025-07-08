import { useEffect, useRef, useState } from "react"

export default function BoxOffice() {
    const [tdata, setTdata] = useState([]);
    const [tag, setTag] = useState([]);
    const [info, setInfo] = useState('');
    const day = useRef();

    const yesterday = () => {
        return new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().split('T')[0];
    }

    const getFetchData = async () => {
        const apiKey = import.meta.env.VITE_MV_API;
        const date = day.current.value.replaceAll("-", "");
        let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apiKey}&targetDt=${date}&itemPerPage=10`;
        const resp = await fetch(url);
        const data = await resp.json();
        setTdata(data.boxOfficeResult.dailyBoxOfficeList);
    }

    useEffect(() => {
        getFetchData();
    }, []);

    const handleItem = (item) => {
        setInfo(`[${item.movieNm}] 개봉일: ${item.openDt}, 상영한 스크린 수: ${item.scrnCnt}, 상영횟수: ${item.showCnt}`);
    }

    useEffect(() => {
        console.log(tdata);
        const tm = tdata.map(item =>
            <tr key={item.movieCd} className="bg-white border-b border-gray-200 hover:bg-gray-100" onClick={() => handleItem(item)}>
                <th scope="row" className="px-6 py-4 font-2xl whitespace-nowrap">
                    {item.rank}
                </th>
                <td className="px-6 py-4 text-left">
                    {item.movieNm}
                </td>
                <td className="px-6 py-4">
                    {parseInt(item.salesAmt).toLocaleString() + "원"}
                </td>
                <td className="px-6 py-4">
                    {parseInt(item.audiCnt).toLocaleString() + "명"}
                </td>
                <td className="px-6 py-4">
                    {parseInt(item.salesAcc).toLocaleString() + "원"}
                </td>
                <td className="px-6 py-4">
                    {parseInt(item.audiAcc).toLocaleString() + "명"}
                </td>
                <td className="px-6 py-4">
                    {item.rankInten}
                </td>
                <td className="px-6 py-4 text-center">
                    {item.rankOldAndNew == 'OLD' ? '' : <span className="font-bold text-red-500">NEW</span>}
                </td>
            </tr>);
        setTag(tm);
    }, [tdata]);
    return (
        <>
            <div className="w-9/10 flex justify-end m-2">
                <input type="date" ref={day} defaultValue={yesterday()} onChange={getFetchData} max={yesterday()} />
            </div>
            <div className="w-9/10 relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-right rtl:text-right text-black">
                    <thead className="text-xl text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                순위
                            </th>
                            <th scope="col" className="px-6 py-3 text-left">
                                영화명
                            </th>
                            <th scope="col" className="px-6 py-3">
                                매출액
                            </th>
                            <th scope="col" className="px-6 py-3">
                                관객수
                            </th>
                            <th scope="col" className="px-6 py-3">
                                누적 매출액
                            </th>
                            <th scope="col" className="px-6 py-3">
                                누적 관객수
                            </th>
                            <th scope="col" className="px-6 py-3">
                                증감률
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                신규진입여부
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tag}
                        <tr className="bg-white">
                            <th scope="row" className="px-6 py-4 text-center h-13 font-medium text-black bg-yellow-100 whitespace-nowrap" colSpan={8}>
                                {info}
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
