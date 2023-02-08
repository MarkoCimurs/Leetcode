type Point = [number, number];

function calculateSlope(point1: Point, point2: Point): number {
  return (point2[1] - point1[1]) / (point2[0] - point1[0]);
}

function generatePointPairs(points: Point[]) {
  let result: any = [];
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      result.push([points[i], points[j]]);
    }
  }
  return result;
}

function maxPoints(points: Point[]): number {
  if (points.length === 1) return 1;

  const pairs = generatePointPairs(points);
  const counts: number[] = [];

  for (let [point1, point2] of pairs) {
    let pointsOnLine = 0;
    const slope = calculateSlope(point1, point2);

    for (let point of points) {
      const slope2 = calculateSlope(point1, point);
      if (slope2 == slope || point1 == point) {
        pointsOnLine++;
      }
    }

    counts.push(pointsOnLine);
  }

  return Math.max(...counts);
}
