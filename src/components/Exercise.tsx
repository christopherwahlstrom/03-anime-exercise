import anime from 'animejs'
import './Exercise.css'

const Exercise = () => {
	// 1a Skapa ett React-projekt och installera anime.js. Gör en komponent som har en fix storlek och innehåller en button. När man klickar på knappen ska den krympa något, för att skapa illusionen av att den trycks ihop. Använd anime-funktionen i stället för vanlig CSS.
	// 1b Lägg till en "drop shadow". (box-shadow) Knappen ska alltså använda en skugga för att se ut som om den vore tredimensionell. När knappen klickas ska skuggan först minska, sedan öka igen; för att simulera att knappen trycks in.
	// 1c* Sparkle! När knappen klickas ska en liten ruta röra sig runt knappen. Den ska ungefär följa knappens kantlinje. Animationen ska gå fort och rutan ska byta färg på ett festligt sätt.

	const handleClick = () => {
		const duration = 1000
		anime({
			// inställningar
			targets: '.exercise button',
			duration: duration,
			direction: 'alternate',
			easing: 'easeInOutQuad',

			// det som animeras
			scale: [1, 0.75],
			boxShadow: ['0.5em 0.5em 0.3em 0px #59BBF7', '0.0em 0.0em 0.1em 0px #59BBF7'],
		})
		anime({
			targets: '.exercise .sparkle',
			duration: duration / 2,
			loop: 4,
			easing: 'easeInOutQuad',

			keyframes: [
				{ left: 'calc(100% - 0.5em)' },
				{ top: 'calc(100% - 0.5em)' },
				{ left: '0%' },
				{ top: '0%' }
			],
			backgroundColor: ['#dce579', '#F03252', '#CB81D1'],
			opacity: [
				{ value: [1, 1], duration: duration / 2 },
				{ value: 0, duration: 1 }
			]
		})
	}


	return (
		<div className="exercise">
			<button onClick={handleClick}>
				<div className="sparkle"> </div>
				Click me
			</button>
		</div>
	)
}

export default Exercise
