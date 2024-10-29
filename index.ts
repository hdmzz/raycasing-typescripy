const GRID_ROWS = 10;
const GRID_COLUMNS = 10;

class Vector2 {
	x: number;
	y: number;
	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}
	//! no oprations overload in typescript we have to deal with methods Plus Minus
	array(): [number, number] {
		return [this.x, this.y];
	}
}

(() => {
	//recuperer l'element id canvqs
	const	canva = document.getElementById('game') as (HTMLCanvasElement | null);
	if (canva === null) {
		throw new Error('Impossible de trouver le canvas');
	}
	const	ctx = canva.getContext('2d');
	if (ctx === null) {
		throw new Error('Impossible de récupérer le contexte 2D');
	}
	ctx.fillStyle = "#181818"; // définit la couleur de remplissage du rectangle
	ctx.fillRect(0, 0, canva.width, canva.height); // dessine un rectangle plein

	ctx.scale(canva.width / GRID_COLUMNS, canva.height / GRID_ROWS);//scale the canvas so the vector2 can be used as a percentage of the grid

	ctx.strokeStyle = '#303030';//stroke = coup de pinceau en francais
	ctx.lineWidth = 0.01;

	for (let x = 0; x <= GRID_ROWS; ++x) {//columns
		ctx.beginPath();
		ctx.moveTo( x, 0 );
		ctx.lineTo( x, GRID_ROWS );
		ctx.stroke();
	};

	for (let y = 0; y <= GRID_COLUMNS; ++y) {
		ctx.beginPath()
		ctx.moveTo(0, y);
		ctx.lineTo(GRID_COLUMNS, y);
		ctx.stroke();
	};

	//Player position since the canvas is sclaed to the grid we can use the vector2 as a percentage of the grid
	let playerPosition = new Vector2(0.5, 0.5);

	//Draw the player
	ctx.fillStyle = 'purple';
	ctx.beginPath();
	ctx.arc( playerPosition.x, playerPosition.y, 0.2, 0, 2*Math.PI );
	ctx.fill();

	console.log(playerPosition)
})();
