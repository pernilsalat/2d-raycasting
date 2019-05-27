function Particle() {
  const pos = createVector(width / 2, height / 2);
  const rays = [];
  for (let i = 0; i < 360; i += 2) {
    rays.push(Ray(pos, radians(i)));
  }
  return {
    show() {
      fill(255);
      ellipse(pos.x, pos.y, 4);
      for (let i = 0; i < rays.length; i++) {
        rays[i].show();
      }
    },
    look(boundaries) {
      rays.forEach(ray => {
        const { closest } = boundaries.reduce((acc, boundary) => {
          const point = ray.cast(boundary);
          if (point) {
            const distance = p5.Vector.dist(pos, point);
            if (distance < acc.record) {
              return {
                record: distance,
                closest: point,
              }
            }
          }
          return acc;
        }, { closest: null, record: Infinity });
        if (closest) {
          stroke(255, 100);
          line(pos.x, pos.y, closest.x, closest.y);
        }
      })
    },
    update(x, y) {
      pos.set(x, y);
    }
  };
}
