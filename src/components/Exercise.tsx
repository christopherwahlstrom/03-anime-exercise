import anime from 'animejs'
import './Exercise.css'

const Exercise = () => {
	// 1a Skapa ett React-projekt och installera anime.js. Gör en komponent som har en fix storlek och innehåller en button. När man klickar på knappen ska den krympa något, för att skapa illusionen av att den trycks ihop. Använd anime-funktionen i stället för vanlig CSS.
	const handleClick = () => {
		anime({
			targets: '.exercise button',
			scale: [1, 0.5],
			duration: 1000,
			direction: 'alternate',
			easing: 'easeInOutQuad'
		})
	}


	return (
		<div className="exercise">
			<button onClick={handleClick}> Click me </button>
		</div>
	)
}

export default Exercise
