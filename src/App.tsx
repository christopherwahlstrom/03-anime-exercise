import { useState } from 'react'
import './App.css'
import Exercise from './components/Exercise'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className="App">
			<header></header>
			<main>
				<Exercise />
			</main>
		</div>
	)
}

export default App
