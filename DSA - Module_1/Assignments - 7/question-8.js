/*
You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

**Example 1:**

**Input:** coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]

**Output:** true
*/

const CheckStraightLine = (coordinates) => {
  const [x1, y1] = coordinates[0];
  const [x2, y2] = coordinates[1];

  // Check if the points are vertically aligned
  if (x1 === x2) {
    for (let i = 2; i < coordinates.length; i++) {
      const [xi, _] = coordinates[i];
      if (xi !== x1) {
        return false;
      }
    }
    return true;
  }

  const initialSlope = (y2 - y1) / (x2 - x1);

  for (let i = 2; i < coordinates.length; i++) {
    const [xi, yi] = coordinates[i];
    const [xPrev, yPrev] = coordinates[i - 1];
    const slope = (yi - yPrev) / (xi - xPrev);

    if (slope !== initialSlope) {
      return false;
    }
  }

  return true;
};

const coordinates = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
];
console.log(CheckStraightLine(coordinates));
