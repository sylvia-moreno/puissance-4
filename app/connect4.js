const EMPTY_GRID = [
    ['.','.','.','.','.','.','.'],
    ['.','.','.','.','.','.','.'],
    ['.','.','.','.','.','.','.'],
    ['.','.','.','.','.','.','.'],
    ['.','.','.','.','.','.','.'],
    ['.','.','.','.','.','.','.']
];

const BOTTOM_START_INDEX = EMPTY_GRID.length - 1;
class Connect4 {

    constructor(){
        this.cleanGrid();
    }

    showGrid() {
        let gridStr = '';
        for (let line of this.grid)
            gridStr += line.join('') + '\n';
        return gridStr;
    }

    insertCoin(column = 0) {
        for (let line = BOTTOM_START_INDEX; line >= 0; line--)
            if (this.grid[line][column] === '.') {
                this.grid[line][column] = '*';
                return 'ok';
            }
        return 'error';
    }

    lookAt(line, column) {
        return this.grid[BOTTOM_START_INDEX - line][column];
    }

    cleanGrid() {
        this.grid = [  ];
        EMPTY_GRID.forEach(line => {
            this.grid.push([... line]);
        })
    }
}

module.exports = Connect4
