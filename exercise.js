function isValid(result) {
    const rows = new Array(9).fill(0).map(() => new Set());
    const columns = new Array(9).fill(0).map(() => new Set());
    const subGrids = new Array(9).fill(0).map(() => new Set());
  
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        const boxValue = result[row][col];
        
        if (boxValue < 1 || boxValue > 9) return false;
  
        const subGridsIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);
  
        if (rows[row].has(boxValue) || columns[col].has(boxValue) || subGrids[subGridsIndex].has(boxValue)) {
          return false;
        }

        rows[row].add(boxValue);
        columns[col].add(boxValue);
        subGrids[subGridsIndex].add(boxValue);
      }
    }
  
    return true;
  }
  
  const correctSudoku = [
    [7, 8, 4, 1, 5, 9, 3, 2, 6],
    [5, 3, 9, 6, 7, 2, 8, 4, 1],
    [6, 1, 2, 4, 3, 8, 7, 5, 9],
    
    [9, 2, 8, 7, 1, 5, 4, 6, 3],
    [3, 5, 7, 8, 4, 6, 1, 9, 2],
    [4, 6, 1, 9, 2, 3, 5, 8, 7],
    
    [8, 7, 6, 3, 9, 4, 2, 1, 5],
    [2, 4, 3, 5, 6, 1, 9, 7, 8],
    [1, 9, 5, 2, 8, 7, 6, 3, 4]
  ];

  const notCorrectSudoku = [
    [7, 4, 4, 1, 5, 9, 3, 2, 6],
    [5, 3, 9, 6, 7, 2, 8, 4, 1],
    [6, 1, 2, 4, 3, 8, 7, 5, 9],
    
    [9, 2, 8, 7, 1, 5, 4, 6, 3],
    [3, 5, 7, 8, 4, 6, 1, 9, 2],
    [4, 6, 1, 9, 2, 3, 5, 8, 7],
    
    [8, 7, 6, 3, 9, 4, 8, 1, 5],
    [2, 4, 3, 5, 6, 1, 9, 7, 8],
    [1, 9, 5, 2, 8, 7, 6, 3, 4]
  ];
  
  console.log(isValid(correctSudoku));
  console.log(isValid(notCorrectSudoku));
  