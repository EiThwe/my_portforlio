export const twistedBackground = () => {
  var canvas = document
      .querySelector("body")
      .appendChild(document.createElement("canvas")),
    context = canvas.getContext("2d"),
    width = window.innerWidth,
    height = window.innerHeight,
    radius = Math.min(window.innerWidth, window.innerHeight) * 1,
    quality = radius > 300 ? 180 : 90,
    layers = [],
    layerSize = radius * 0.3,
    layerOverlap = Math.round(quality * 0.1);
  canvas.setAttribute("id", "canvas-twisted");
  jQuery("#canvas-twisted").css("opacity", 0.5);
  jQuery("#canvas-twisted").css("transform", "translateX(" + "10%" + ")");
  jQuery("body").append(
    '<div class="bg-color" style="background-color:' + "#212121" + '"></div>'
  );
  function initialize() {
    resize();
    update();
  }
  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    radius = Math.min(window.innerWidth, window.innerHeight) * 1;
    layerSize = radius * 0.3;
    layerOverlap = Math.round(quality * 0.1);
    layers = [];
    for (var i = 0; i < quality; i++) {
      layers.push({
        x:
          window.innerWidth / 1 +
          Math.sin((i / quality) * 2 * Math.PI) * (radius - layerSize),
        y:
          window.innerHeight / 2 +
          Math.cos((i / quality) * 2 * Math.PI) * (radius - layerSize),
        r: (i / quality) * Math.PI,
      });
    }
  }
  window.addEventListener("resize", resize);
  function update() {
    requestAnimationFrame(update);
    step();
    clear();
    paint();
  }
  function step() {
    for (var i = 0, len = layers.length; i < len; i++) {
      layers[i].r += 0.005;
    }
  }
  function clear() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }
  function paint() {
    var layersLength = layers.length;
    for (
      var i = layersLength - layerOverlap, len = layersLength;
      i < len;
      i++
    ) {
      context.save();
      context.globalCompositeOperation = "destination-over";
      paintLayer(layers[i]);
      context.restore();
    }
    context.save();
    context.globalCompositeOperation = "destination-in";
    paintLayer(layers[0], !0);
    context.restore();
    for (var i = 0, len = layersLength; i < len; i++) {
      context.save();
      context.globalCompositeOperation = "destination-over";
      paintLayer(layers[i]);
      context.restore();
    }
  }
  function paintLayer(layer, mask) {
    let size = layerSize + (mask ? 10 : 0);
    let size2 = size / 2;
    context.translate(layer.x, layer.y);
    context.rotate(layer.r);
    if (!mask) {
      context.strokeStyle = "#c90076";
      context.lineWidth = 1;
      context.strokeRect(-size2, -size2, size, size);
    }
    context.fillStyle = "#0c0c0c";
    context.fillRect(-size2, -size2, size, size);
  }
  (function () {
    var lastTime = 0;
    var vendors = ["ms", "moz", "webkit", "o"];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame =
        window[vendors[x] + "RequestAnimationFrame"];
      window.cancelAnimationFrame =
        window[vendors[x] + "CancelAnimationFrame"] ||
        window[vendors[x] + "CancelRequestAnimationFrame"];
    }
    if (!window.requestAnimationFrame)
      window.requestAnimationFrame = function (callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function () {
          callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };
    if (!window.cancelAnimationFrame)
      window.cancelAnimationFrame = function (id) {
        clearTimeout(id);
      };
  })();
  initialize();
};
