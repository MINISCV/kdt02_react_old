import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import GroupText from './01/GroupText'
import MyClock from './02/MyClock'
import Lotto from './05/Lotto'
import FoodMain from './06/FoodMain'
import BoxOffice from './09/BoxOffice'
import Traffic from './10/Traffic'
import Gallery from './12/Gallery'
import Festival from './13/Festival'
import Fcst from './15/Fcst'
import FcstList from './15/FcstList'
import DivMain from './17/Divmain'
import AppNav from './AppNav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
export default function App() {
	return (
		<BrowserRouter>
			<div className="w-full xl:w-8/10 h-screen mx-auto flex justify-center items-start flex-col">
				<header className="w-full min-h-20 flex justify-between items-center bg-amber-50">
					<div className="flex ml-10">
						<img src={reactLogo} alt="react" /> + <img src={viteLogo} alt="react" />
					</div>
					<AppNav />
					<GroupText />
				</header>
				<main className="w-full flex-grow overflow-y-auto flex flex-col justify-start items-center py-10">
					<Routes>
						<Route path='/' element={<MyClock />} />
						<Route path='/lotto' element={<Lotto />} />
						<Route path='/food' element={<FoodMain />} />
						<Route path='/box' element={<BoxOffice />} />
						<Route path='/traffic' element={<Traffic />} />
						<Route path='/gallery' element={<Gallery />} />
						<Route path='/festival' element={<Festival />} />
						<Route path='/fcst' element={<Fcst />} />
						<Route path='/fcstlist' element={<FcstList />} />
						<Route path='/divmain' element={<DivMain />} />
					</Routes>
				</main>
				<footer className="w-full min-h-20 flex justify-center items-center bg-black text-white">
					K-digital 2025 2기
				</footer>
			</div>
		</BrowserRouter>
	)
}