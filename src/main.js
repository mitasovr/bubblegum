function Point (x, y) {
  this.x = x;
  this.y = y;
}
function Segment (point1, point2) {
  this.point1 = point1;
  this.point2 = point2;
}
Segment.prototype = {
  fx: function (x) {
    var
      x1 = this.point1.x,
      x2 = this.point2.x,
      y1 = this.point1.y,
      y2 = this.point2.y;
    return (y2 - y1) * (x - x1) / (x2 - x1) + y1;
  },
  getDistance: function () {
    return Math.sqrt( Math.pow(this.point2.x - this.point1.x, 2) + Math.pow(this.point2.y - this.point1.y, 2) );
  },
  getPerpendicular: function () {
    return new Segment();
  }
};
var p1 = new Point(1, 1);
var p2 = new Point(10, 9);
var s = new Segment(p1, p2);
console.log(s.fx(10));


