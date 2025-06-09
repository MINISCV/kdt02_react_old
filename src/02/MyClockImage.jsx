import clock from './clock.png';
export default function MyClockImage() {
    return (
        <>
            <div className='flex items-center justify-center m-9'>
                <img src={clock} alt="Clock" />
            </div>
        </>
    )
}
