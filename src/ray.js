function Ray(position, angle) {
  const pos = position;
  const dir = p5.Vector.fromAngle(angle);

  return {
    show() {
      stroke(255);
      push();
      translate(pos.x, pos.y);
      line(0, 0, dir.x * 10, dir.y * 10);
      pop();
    },
    lookAt(x, y) {
      dir.x = x - pos.x;
      dir.y = y - pos.y;
      dir.normalize();
    },
    cast(boundary) {
      const x1 = boundary.a.x;
      const y1 = boundary.a.y;
      const x2 = boundary.b.x;
      const y2 = boundary.b.y;

      const x3 = pos.x;
      const y3 = pos.y;
      const x4 = pos.x + dir.x;
      const y4 = pos.y + dir.y;

      const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
      if (den === 0) {
        return;
      }

      const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
      const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;

      if (t > 0 && t < 1 && u > 0) {
        const point = createVector();
        point.x = x1 + t * (x2 - x1);
        point.y = y1 + t * (y2 - y1);
        return point;
      }
    },
  };
}
