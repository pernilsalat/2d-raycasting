function Boundary(x1, y1, x2, y2) {
  const a = createVector(x1, y1);
  const b = createVector(x2, y2);
  return {
    get a() {
      return a;
    },
    get b() {
      return b;
    },
    show() {
      stroke(255);
      line(a.x, a.y, b.x, b.y);
    }
  };
}
