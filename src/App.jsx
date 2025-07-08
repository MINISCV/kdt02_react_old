import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import GroupText from './01/GroupText'
import MyClock from './02/MyClock'
import MyList from './04/MyList'
import Lotto from './05/Lotto'
import FoodMain from './06/FoodMain'
import MyToggle from './07/MyToggle'
import MyEffect from './08/MyEffect'
import BoxOffice from './09/BoxOffice'
import Traffic from './10/Traffic'
import MyRef from './11/MyRef'

function App() {
	return (
		<>
			<div className="w-full xl:w-8/10 h-screen mx-auto flex justify-center items-start flex-col">
				<header className="w-full min-h-20 flex justify-between items-center bg-amber-50">
					<div className="flex ml-10">
						<img src={reactLogo} alt="react" /> + <img src={viteLogo} alt="react" />
					</div>
					<GroupText />
				</header>
				<main className="w-full flex-grow overflow-y-auto flex flex-col justify-start items-center py-10">
					<BoxOffice />
				</main>
				<footer className="w-full min-h-20 flex justify-center items-center bg-black text-white">
					K-digital 2025 2기
				</footer>
			</div>
		</>
	)
}

export default App
