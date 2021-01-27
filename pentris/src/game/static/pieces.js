const PIECES = [
  // F
  {
    name: "F",
    pieces: [
      [0, -1],
      [0, -2],
      [1, -2],
      [0, 0],
      [-1, -1],
    ],
  },
  // R
  {
    name: "R",
    pieces: [
      [0, -1],
      [0, -2],
      [-1, -2],
      [0, 0],
      [1, -1],
    ],
  },
  // I
  {
    name: "I",
    pieces: [
      [0, -2],
      [0, -1],
      [0, 0],
      [0, 1],
      [0, 2],
    ],
  },
  // L
  {
    name: "L",
    pieces: [
      [0, -2],
      [0, -1],
      [0, 0],
      [0, 1],
      [1, 1],
    ],
  },
  // J
  {
    name: "J",
    pieces: [
      [0, -2],
      [0, -1],
      [0, 0],
      [0, 1],
      [-1, 1],
    ],
  },
  // N
  {
    name: "N",
    pieces: [
      [1, -2],
      [1, -1],
      [0, -1],
      [0, 0],
      [0, 1],
    ],
  },
  // N Reverse
  {
    name: "N Reverse",
    pieces: [
      [-1, -2],
      [-1, -1],
      [0, -1],
      [0, 0],
      [0, 1],
    ],
  },
  // P
  {
    name: "P",
    pieces: [
      [0, -1],
      [0, -2],
      [1, -2],
      [1, -1],
      [0, 0],
    ],
  },
  // P Reverse
  {
    name: "P Reverse",
    pieces: [
      [0, -1],
      [0, -2],
      [-1, -2],
      [-1, -1],
      [0, 0],
    ],
  },
  // T
  {
    name: "T",
    pieces: [
      [0, -1],
      [0, -2],
      [0, 0],
      [-1, -2],
      [1, -2],
    ],
  },
];

export default PIECES;