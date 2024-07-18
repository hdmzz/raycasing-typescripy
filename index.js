"use strict";
const GRID_ROWS = 10;
const GRID_COLUMNS = 10;
(() => {
    //recuperer l'element id canvqs
    const canva = document.getElementById('game');
    if (canva === null) {
        throw new Error('Impossible de trouver le canvas');
    }
    const ctx = canva.getContext('2d');
    if (ctx === null) {
        throw new Error('Impossible de récupérer le contexte 2D');
    }
    ctx.fillStyle = "#181818"; // définit la couleur de remplissage du rectangle
    ctx.fillRect(0, 0, canva.width, canva.height); // dessine un rectangle plein
    //dessiner la grille 
    const cellWidth = canva.width / GRID_COLUMNS;
    const cellHeight = canva.height / GRID_ROWS;
    ctx.strokeStyle = '#303030';
    for (let x = 0; x < GRID_ROWS; x++) {
        ctx.moveTo(x * cellWidth, 0); //move the pen to a particularplace in the canvas without drawing anything
        ctx.lineTo(x * cellWidth, x * canva.height);
        ctx.stroke(); //stroke the current path with the current stroke style
    }
    ;
    for (let y = 0; y <= GRID_COLUMNS; y++) {
        ctx.moveTo(0, y * cellHeight);
        ctx.lineTo(canva.width, y * cellHeight);
        ctx.stroke();
    }
})();
