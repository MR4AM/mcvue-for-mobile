/*
  在一定区域内产生不重叠的圆
*/
class Circle {
  constructor(x, y, r, color) {
    this.x = x;
    this.y = y;
    (this.r = r), (this.c = color ? color : this.getRandomColor());
  }
  getRandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var color = "#" + r.toString(16) + g.toString(16) + b.toString(16);
    return this.getContrast50(color);
  }
  getContrast50(hexcolor) {
    return parseInt(hexcolor, 16) > 0xffffff / 2 ? "orange" : hexcolor;
  }
}

class RandomCircle {
  constructor(obj) {
    this.c = document.getElementById(obj.id);
    this.ctx = this.c.getContext("2d");
    this.dWidth = this.c.width;
    this.dHeight = this.c.height;

    this.fix = obj.fix || false;
    this.minMargin = obj.minMargin || 10;
    this.minRadius = obj.minRadius || 30;
    this.radiuArr = obj.radiuArr || [80, 70, 60, 50, 45, 40, 40, 35, 35, 30];
    this.total = obj.total || 10;
    this.circleArray = [];
    this.circleNumber = 1;
    this.data = obj.data || [];
  }

  drawOneCircle(c) {
    let ctx = this.ctx;
    ctx.beginPath();
    ctx.font = "100px";
    ctx.strokeStyle = c.c;
    ctx.fillStyle = c.c;
    ctx.arc(c.x, c.y, c.r, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    ctx.fillStyle = "#ffffff";
    let index = JSON.parse(JSON.stringify(this.circleNumber));
    ctx.fillText(this.data[index - 1].name, c.x, c.y);
    ctx.fillText(this.data[this.circleNumber - 1].value, c.x, c.y + 15);
    this.circleNumber++;
  }

  check(x, y, r) {
    return !(
      x + r > this.dWidth ||
      x - r < 0 ||
      y + r > this.dHeight ||
      y - r < 0
    );
  }

  // 获取一个新圆的半径，主要判断半径与最近的一个圆的距离
  getR(x, y) {
    if (this.circleArray.length === 0)
      return Math.floor(Math.random() * 20 + 80);
    let lenArr = this.circleArray.map(c => {
      let xSpan = c.x - x;
      let ySpan = c.y - y;
      return (
        Math.floor(Math.sqrt(Math.pow(xSpan, 2) + Math.pow(ySpan, 2))) - c.r
      );
    });
    let minCircleLen = Math.min(...lenArr);
    let minC = this.circleArray[lenArr.indexOf(minCircleLen)];
    let tempR = this.fix
      ? this.radiuArr[this.circleArray.length]
      : minCircleLen - this.minMargin;
    let bool = this.fix
      ? tempR <= minCircleLen - minC.r
      : tempR >= this.minRadius;
    return bool ? tempR : false;
  }

  // 生成一个圆，随机生成圆心。
  // 如果连续生成200次半径都没有合适的话，终止进程
  createOneCircle() {
    let b = true;
    let x, y, r;
    let createCircleTimes = 0;
    while (b) {
      createCircleTimes++;
      x = Math.floor(Math.random() * this.dWidth);
      y = Math.floor(Math.random() * this.dHeight);
      let TR = this.getR(x, y);
      if (!TR) {
        continue;
      } else {
        r = TR;
      }
      if (this.check(x, y, r) || createCircleTimes > 200) {
        break;
      }
    }
    this.check(x, y, r) && this.circleArray.push(new Circle(x, y, r));
  }

  // 如果生成100次新圆都失败的话，终止方案。
  // 如果生成100种方案都没有合适可用的话，终止进程。
  init() {
    let n = 0;
    while (this.circleArray.length < this.total) {
      this.circleArray = [];
      let i = 0;
      while (this.circleArray.length < this.total) {
        this.createOneCircle();
        i++;
        if (i >= 100) {
          break;
        }
      }
      n++;
      if (n > 100) {
        break;
      }
    }
    // 根据半径从大到小画圆。
    this.circleArray
      .sort((a, b) => b.r - a.r)
      .forEach(c => {
        this.drawOneCircle(c);
      });
  }
}
export default {
  circleInit(options) {
    let rCircle = new RandomCircle({
      id: options.id,
      total: options.total,
      radiuArr: options.radiuArr,
      data: options.data
    });
    rCircle.init();
  }
};
