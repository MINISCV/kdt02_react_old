import TailSearch from "../component/TailSearch"
import TailCard from "../component/TailCard"
import { useRef, useState } from "react"
export default function Gallery() {
    const kw = useRef();
    const [cdata, setCdata] = useState([])
    const onOk = (e) => {
        e.preventDefault();
        if (kw.current.value == ""){
            setCdata([]);
            kw.current.focus();
            return;
        }
        getFetchData();
    }
    const onCancel = (e) => {
        e.preventDefault();
        kw.current.value = ""
        kw.current.focus();
    }
    const getFetchData = async () => {
        const baseUrl = 'https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?';
        const url = `${baseUrl}serviceKey=${import.meta.env.VITE_DATA_API}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${encodeURIComponent(kw.current.value)}&_type=json`;
        const resp = await fetch(url);
        const data = await resp.json();
        setCdata(data.response.body.items.item);
    }
    return (
        <div className="w-8/10 h-full flex flex-col items-center justify-start">
            <TailSearch kw={kw} onOk={onOk} onCancel={onCancel} />
            <div className="w-8/10 grid grid-cols-1 xl:grid-cols-3 gap-4 overflow-y-auto">
                {cdata.map(item => <TailCard key={item.galContentId} imgurl={item.galWebImageUrl} title={item.galTitle} subtitle={item.galPhotographyLocation} content={item.galSearchKeyword}/>)}
            </div>
        </div>
    )
}
