export default function MyClockTime() {
    return (
        <>
            <div className="text-3xl font-bold">
                현재 시각 : {new Date().toLocaleTimeString()}
            </div>
        </>
    )
}