const GRID_ROWS = 10;
const GRID_COLUMNS = 10;

(() => {
    //recuperer l'element id canvqs
    const canva = document.getElementById('game') as (HTMLCanvasElement | null);
    if (canva === null) {
        throw new Error('Impossible de trouver le canvas');
    }
    const ctx = canva.getContext('2d');
    if (ctx === null) {
        throw new Error('Impossible de récupérer le contexte 2D');
    }
    ctx.fillStyle = "rgb(200,0,0)"; // définit la couleur de remplissage du rectangle
    ctx.fillRect(0, 0, canva.width, canva.height); // dessine un rectangle plein

    //dessiner la grille 
    const cellWidth = canva.width / GRID_COLUMNS;
    const cellHeight = canva.height / GRID_ROWS;
    ctx.strokeStyle = 'black';
    for (let x = 0; x < GRID_ROWS; x++) {
        ctx.moveTo(x*cellWidth, 0);
        ctx.lineTo
    };
})();
