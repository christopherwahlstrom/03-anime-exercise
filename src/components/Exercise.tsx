import anime from 'animejs'
import './Exercise.css'

const Exercise = () => {
	// 1a Skapa ett React-projekt och installera anime.js. Gör en komponent som har en fix storlek och innehåller en button. När man klickar på knappen ska den krympa något, för att skapa illusionen av att den trycks ihop. Använd anime-funktionen i stället för vanlig CSS.
	// 1b Lägg till en "drop shadow". (box-shadow) Knappen ska alltså använda en skugga för att se ut som om den vore tredimensionell. När knappen klickas ska skuggan först minska, sedan öka igen; för att simulera att knappen trycks in.

	const handleClick = () => {
		anime({
			// inställningar
			targets: '.exercise button',
			duration: 1000,
			direction: 'alternate',
			easing: 'easeInOutQuad',

			// det som animeras
			scale: [1, 0.5],
			boxShadow: ['0.5em 0.5em 0.3em 0px #59BBF7', '0.0em 0.0em 0.1em 0px #59BBF7']
		})
	}


	return (
		<div className="exercise">
			<button onClick={handleClick}> Click me </button>
		</div>
	)
}

export default Exercise
