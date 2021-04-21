import BMap from 'vue-baidu-map'
; (function () {
  function ComplexCustomOverlay(point , marker){	 
    this._point = point;
    this._marker = marker;
  }

  ComplexCustomOverlay.prototype = new BMap.Overlay();
  ComplexCustomOverlay.prototype.initialize = function(map){
    this._map = map;
    var div = this._div = document.createElement("div");
    div.style.position = "absolute";  
    var arrow = this._arrow = document.createElement("div");

    arrow.style.position = "absolute"; 
    arrow.style.overflow = "hidden";
    div.appendChild(arrow);
    arrow.className="css_animation";  

    if(this._marker ){
      map.addOverlay(this._marker );
    } 

    map.getPanes().labelPane.appendChild(div);

    return div;
  }
  ComplexCustomOverlay.prototype.draw = function(){
    var map = this._map;
    var pixel = map.pointToOverlayPixel(this._point);
    this._div.style.left = pixel.x - 30 + "px";
    this._div.style.top  = pixel.y - 30 + "px";
  }

  ComplexCustomOverlay.prototype.setPosition = function(point) {
    this._point = point ;
    this.draw();
    if(this._marker)
      this._marker.setPosition(this._point);
  }

  ComplexCustomOverlay.prototype.getPosition = function() {
    return this._point ; 
  }
})();