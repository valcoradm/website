var iz = 0;
const n = "mm"
  , a = 1
  , e = 2
  , o = 3;
var l = 0
  , p = -1
  , t = !1
  , r = new Array
  , d = 1;
function W() {}
function u() {}
function g(t, o) {
    t = parseFloat(t);
    return Math.round(t * Math.pow(10, o)) / Math.pow(10, o)
}
function c() {
    r.pop(),
    M()
}
function Y() {
    0 == iz ? alert("Regla no disponible para esta imagen") : (-1 !== p && (l = a,
    p = 0,
    M()),
    u())
}
function X() {
    -1 !== p && (l = e,
    p = 0,
    M()),
    u()
}
function P() {
    -1 !== p && (C = t ? k : b,
    t = !t,
    M()),
    u()
}
function s(t) {
    d = $(t).val() / 100,
    M()
}
function j() {
    d = 1,
    $("#zoom-range").val(100)
}
var f = "";
function m() {
    var t = $("#contraste").val()
      , o = $("#brillo").val() / 100;
    f = "brightness(" + o + ") contrast(" + t + "%)",
    M()
}
function M() {
    A.width = w * d,
    A.height = h * d,
    E.filter = f,
    E.drawImage(C, 0, 0, w * d, h * d),
    E.filter = "brightness(1)",
    r.forEach(function(t) {
        var o;
        t.tipo == a && (pointX1 = t.x1 * d,
        pointY1 = t.y1 * d,
        pointX2 = t.x2 * d,
        pointY2 = t.y2 * d,
        puntoTituloX = (pointX2 - pointX1) / 2,
        puntoTituloY = (pointY2 - pointY1) / 2,
        pointX1 > pointX2 ? puntoTituloX = pointX2 - puntoTituloX : puntoTituloX += pointX1,
        pointY1 > pointY2 ? puntoTituloY = pointY2 - puntoTituloY : puntoTituloY += pointY1,
        E.beginPath(),
        E.moveTo(pointX1, pointY1),
        E.strokeStyle = "orange",
        E.lineTo(pointX2, pointY2),
        E.stroke(),
        E.closePath(),
        E.beginPath(),
        (grd = E.createRadialGradient(pointX1, pointY1, 3, pointX1, pointY1, 2)).addColorStop(0, "white"),
        grd.addColorStop(1, "red"),
        E.fillStyle = grd,
        E.arc(pointX1, pointY1, 2, 0, 2 * Math.PI, !0),
        E.fill(),
        E.closePath(),
        E.beginPath(),
        (grd = E.createRadialGradient(pointX2, pointY2, 3, pointX2, pointY2, 2)).addColorStop(0, "white"),
        grd.addColorStop(1, "red"),
        E.fillStyle = grd,
        E.arc(pointX2, pointY2, 2, 0, 2 * Math.PI, !0),
        E.fill(),
        E.closePath(),
        G = pointX1 - pointX2,
        my = pointY1 - pointY2,
        dist = Math.sqrt(G * G + my * my),
        angle = 180 * Math.atan2(my, G) / Math.PI,
        E.beginPath(),
        E.strokeStyle = "blue",
        E.lineWidth = 3,
        E.stroke(),
        o = g(dist * iz / d, 2) + " " + n,
        E.font = "30px Arial",
        E.fillStyle = "#E0EA27",
        E.textAlign = "center",
        E.fillText(o, puntoTituloX + 0, puntoTituloY + 50)),
        t.tipo == e && (pointX1 = t.x1 * d,
        pointY1 = t.y1 * d,
        pointX2 = t.x2 * d,
        pointY2 = t.y2 * d,
        pointX3 = t.x3 * d,
        pointY3 = t.y3 * d,
        T = pointX3,
        R = pointY3,
        E.beginPath(),
        E.moveTo(pointX1, pointY1),
        E.strokeStyle = "orange",
        E.lineTo(pointX2, pointY2),
        E.stroke(),
        E.closePath(),
        E.beginPath(),
        E.moveTo(pointX2, pointY2),
        E.strokeStyle = "orange",
        E.lineTo(pointX3, pointY3),
        E.stroke(),
        E.closePath(),
        E.beginPath(),
        (grd = E.createRadialGradient(pointX1, pointY1, 3, pointX1, pointY1, 2)).addColorStop(0, "white"),
        grd.addColorStop(1, "red"),
        E.fillStyle = grd,
        E.arc(pointX1, pointY1, 2, 0, 2 * Math.PI, !0),
        E.fill(),
        E.closePath(),
        E.beginPath(),
        (grd = E.createRadialGradient(pointX3, pointY3, 3, pointX3, pointY3, 2)).addColorStop(0, "white"),
        grd.addColorStop(1, "red"),
        E.fillStyle = grd,
        E.arc(pointX3, pointY3, 2, 0, 2 * Math.PI, !0),
        E.fill(),
        E.closePath(),
        mx1 = pointX1 - pointX2,
        my1 = pointY1 - pointY2,
        mx3 = pointX3 - pointX2,
        my3 = pointY3 - pointY2,
        angle1 = 180 * Math.atan2(my1, mx1) / Math.PI,
        angle2 = 180 * Math.atan2(my3, mx3) / Math.PI,
        360 < (angle = 180 * (angle1 * Math.PI / 180 - angle2 * Math.PI / 180) / Math.PI) && (angle -= 360),
        angle < 0 && (angle += 360),
        E.beginPath(),
        E.arc(pointX2, pointY2, 60, angle2 * Math.PI / 180, angle1 * Math.PI / 180),
        E.stroke(),
        E.font = "30px Arial",
        E.fillStyle = "#E0EA27",
        E.textAlign = "center",
        E.fillText(g(angle, 2) + "º", pointX2 + 10, pointY2 + 10))
    })
}
function S(t) {
    switch (p) {
    case 0:
        I = t.pageX,
        V = t.pageY,
        V -= 110,
        E.beginPath(),
        (grd = E.createRadialGradient(I, V, 3, I, V, 2)).addColorStop(0, "white"),
        grd.addColorStop(1, "orange"),
        E.fillStyle = grd,
        E.arc(I, V, 2, 0, 2 * Math.PI, !0),
        E.fill(),
        E.closePath();
        break;
    case 1:
        pointX1 = I,
        pointY1 = V,
        pointX2 = t.pageX,
        pointY2 = t.pageY,
        x = t.pageX,
        y = t.pageY,
        pointY2 -= 110,
        y -= 110,
        E.beginPath(),
        E.moveTo(pointX1, pointY1),
        E.strokeStyle = "red",
        E.lineTo(pointX2, pointY2),
        E.stroke(),
        E.closePath(),
        E.beginPath(),
        (grd = E.createRadialGradient(pointX2, pointY2, 3, pointX2, pointY2, 2)).addColorStop(0, "white"),
        grd.addColorStop(1, "orange"),
        E.fillStyle = grd,
        E.arc(pointX2, pointY2, 2, 0, 2 * Math.PI, !0),
        E.fill(),
        E.closePath(),
        E.beginPath(),
        (grd = E.createRadialGradient(pointX1, pointY1, 3, pointX1, pointY1, 2)).addColorStop(0, "white"),
        grd.addColorStop(1, "red"),
        E.fillStyle = grd,
        E.arc(pointX1, pointY1, 2, 0, 2 * Math.PI, !0),
        E.fill(),
        E.closePath(),
        puntoTituloX = (pointX2 - pointX1) / 2,
        puntoTituloY = (pointY2 - pointY1) / 2,
        pointX1 > pointX2 ? puntoTituloX = pointX2 - puntoTituloX : puntoTituloX += pointX1,
        pointY1 > pointY2 ? puntoTituloY = pointY2 - puntoTituloY : puntoTituloY += pointY1,
        G = pointX1 - pointX2,
        my = pointY1 - pointY2,
        dist = Math.sqrt(G * G + my * my),
        angle = 180 * Math.atan2(my, G) / Math.PI,
        E.beginPath(),
        E.strokeStyle = "blue",
        E.lineWidth = 3,
        E.stroke();
        var o = g(dist / d * iz, 2) + " " + n;
        E.font = "30px Arial",
        E.fillStyle = "#E0EA27",
        E.textAlign = "center",
        E.fillText(o, puntoTituloX + 0, puntoTituloY + 50)
    }
}
function B(t) {
    switch (p) {
    case 0:
        I = t.pageX,
        V = t.pageY,
        V -= 110,
        E.beginPath(),
        (grd = E.createRadialGradient(I, V, 3, I, V, 2)).addColorStop(0, "white"),
        grd.addColorStop(1, "orange"),
        E.fillStyle = grd,
        E.arc(I, V, 2, 0, 2 * Math.PI, !0),
        E.fill(),
        E.closePath();
        break;
    case 1:
        pointX1 = I,
        pointY1 = V,
        pointX2 = t.pageX,
        pointY2 = t.pageY,
        x2 = pointX2,
        y2 = pointY2,
        pointY2 -= 110,
        y2 -= 110,
        E.beginPath(),
        E.moveTo(pointX1, pointY1),
        E.strokeStyle = "red",
        E.lineTo(pointX2, pointY2),
        E.stroke(),
        E.closePath(),
        E.beginPath(),
        (grd = E.createRadialGradient(pointX2, pointY2, 3, pointX2, pointY2, 2)).addColorStop(0, "white"),
        grd.addColorStop(1, "orange"),
        E.fillStyle = grd,
        E.arc(pointX2, pointY2, 2, 0, 2 * Math.PI, !0),
        E.fill(),
        E.closePath(),
        E.beginPath(),
        (grd = E.createRadialGradient(pointX1, pointY1, 3, pointX1, pointY1, 2)).addColorStop(0, "white"),
        grd.addColorStop(1, "red"),
        E.fillStyle = grd,
        E.arc(pointX1, pointY1, 2, 0, 2 * Math.PI, !0),
        E.fill(),
        E.closePath();
        break;
    case 2:
        pointX1 = I,
        pointY1 = V,
        pointX2 = x2,
        pointY2 = y2,
        pointX3 = t.pageX,
        pointY3 = t.pageY,
        T = pointX3,
        R = pointY3,
        pointY3 -= 110,
        R -= 110,
        E.beginPath(),
        E.moveTo(pointX1, pointY1),
        E.strokeStyle = "red",
        E.lineTo(pointX2, pointY2),
        E.stroke(),
        E.closePath(),
        E.beginPath(),
        E.moveTo(pointX2, pointY2),
        E.strokeStyle = "red",
        E.lineTo(pointX3, pointY3),
        E.stroke(),
        E.closePath(),
        E.beginPath(),
        (grd = E.createRadialGradient(pointX2, pointY2, 3, pointX2, pointY2, 2)).addColorStop(0, "white"),
        grd.addColorStop(1, "red"),
        E.fillStyle = grd,
        E.arc(pointX2, pointY2, 2, 0, 2 * Math.PI, !0),
        E.fill(),
        E.closePath(),
        E.beginPath(),
        (grd = E.createRadialGradient(pointX1, pointY1, 3, pointX1, pointY1, 2)).addColorStop(0, "white"),
        grd.addColorStop(1, "red"),
        E.fillStyle = grd,
        E.arc(pointX1, pointY1, 2, 0, 2 * Math.PI, !0),
        E.fill(),
        E.closePath(),
        E.beginPath(),
        (grd = E.createRadialGradient(pointX3, pointY3, 3, pointX3, pointY3, 2)).addColorStop(0, "white"),
        grd.addColorStop(1, "orange"),
        E.fillStyle = grd,
        E.arc(pointX3, pointY3, 2, 0, 2 * Math.PI, !0),
        E.fill(),
        E.closePath(),
        mx1 = pointX1 - pointX2,
        my1 = pointY1 - pointY2,
        mx3 = pointX3 - pointX2,
        my3 = pointY3 - pointY2,
        angle1 = 180 * Math.atan2(my1, mx1) / Math.PI,
        angle2 = 180 * Math.atan2(my3, mx3) / Math.PI,
        360 < (angle = 180 * (angle1 * Math.PI / 180 - angle2 * Math.PI / 180) / Math.PI) && (angle -= 360),
        angle < 0 && (angle += 360),
        E.beginPath(),
        E.arc(pointX2, pointY2, 60, angle2 * Math.PI / 180, angle1 * Math.PI / 180),
        E.stroke(),
        E.font = "30px Arial",
        E.fillStyle = "#E0EA27",
        E.textAlign = "center",
        E.fillText(g(angle, 2) + "º", pointX2 + 10, pointY2 + 10)
    }
}
function v(t) {
    M(),
    l == a && S(t),
    l == e && B(t),
    o
}
var I, V, T, b = new Image, k = new Image, C = new Image, A = (C.crossOrigin = "anonymous", C.src = valorImagenExterno,
C.onload = function() {
    var t = {};
    window.inputArchivo && (t.nombre = window.inputArchivo),
    window.valorImagenExterno && (t.archivo = window.valorImagenExterno),
    window.anioInput && (t.anio = anioInput),
    window.idInput && (t.ide = idInput),
    window.etapaInput && (t.etapa = etapaInput),

    new Promise((resolve, reject) => {
        iz = Number(window.ZOOM)
    })

    A.height = h = C.height,
    A.width = w = C.width,
    k = C,
    E.drawImage(C, 0, 0);
    for (var t = E.getImageData(0, 0, E.canvas.width, E.canvas.height), o = t.data, i = 0; i < o.length; i += 4)
        o[i] = 255 - o[i],
        o[i + 1] = 255 - o[i + 1],
        o[i + 2] = 255 - o[i + 2];
    E.putImageData(t, 0, 0, 0, 0, E.canvas.width, E.canvas.height),
    b.src = document.getElementById("medicion").toDataURL(),
    d = $(window).width() / C.width,
    $("#zoom-range").val(100 * d),
    p = 0,
    M()
}
,
document.querySelector("canvas")), E = A.getContext("2d"), F = {
    angle: document.querySelector("#angle"),
    length: document.querySelector("#length"),
    vertical: document.querySelector("#vd"),
    horizontal: document.querySelector("#hd")
}, R = 0, G = my = angle = x = y = dist = grd = 0;
function O() {
    l = o
}
A.height = h = C.height,
A.width = w = C.width,
A.addEventListener("click", function(t) {
    l == a && (2 === (p += 1) && (r.push({
        tipo: a,
        x1: I / d,
        y1: V / d,
        x2: x / d,
        y2: y / d
    }),
    p = 0),
    v(t)),
    l == e && 3 == (p += 1) && (r.push({
        tipo: e,
        x1: I / d,
        y1: V / d,
        x2: x2 / d,
        y2: y2 / d,
        x3: T / d,
        y3: R / d
    }),
    p = 0,
    v(t)),
    o
}, !1),
A.addEventListener("mousemove", function(t) {
    v(t)
}, !1);
var q = !1
  , z = 0
  , U = 0
  , D = 0
  , L = 0;
$("#medicion").mousedown(function() {
    l == o && (q = !0)
}),
$("#medicion").mouseup(function() {
    D = L = U = z = 0,
    l == o && (q = !1)
}),
$("#medicion").mousemove(function(t) {
    if (l == o && q) {
        var i, n;
        if (0 == z)
            return i = event.pageX / d,
            n = (event.pageY - 110) / d,
            r.forEach(function(t, o) {
                return PointXVirtual = t.x1,
                PointYVirtual = t.y1,
                PointXVirtualMax = PointXVirtual + 50,
                PointXVirtualMin = PointXVirtual - 50,
                PointYVirtualMax = PointYVirtual + 50,
                PointYVirtualMin = PointYVirtual - 50,
                i <= PointXVirtualMax && i >= PointXVirtualMin && n <= PointYVirtualMax && n >= PointYVirtualMin ? (D = o,
                !(L = z = 1)) : (PointXVirtual = t.x2,
                PointYVirtual = t.y2,
                PointXVirtualMax = PointXVirtual + 50,
                PointXVirtualMin = PointXVirtual - 50,
                PointYVirtualMax = PointYVirtual + 50,
                PointYVirtualMin = PointYVirtual - 50,
                i <= PointXVirtualMax && i >= PointXVirtualMin && n <= PointYVirtualMax && n >= PointYVirtualMin ? (z = 1,
                D = o,
                !(L = 2)) : (PointXVirtual = t.x3,
                PointYVirtual = t.y3,
                PointXVirtualMax = PointXVirtual + 50,
                PointXVirtualMin = PointXVirtual - 50,
                PointYVirtualMax = PointYVirtual + 50,
                PointYVirtualMin = PointYVirtual - 50,
                i <= PointXVirtualMax && i >= PointXVirtualMin && n <= PointYVirtualMax && n >= PointYVirtualMin ? (z = 1,
                D = o,
                !(L = 3)) : void 0))
            }),
            !1;
        1 == z && (i = event.pageX / d,
        n = (event.pageY - 110) / d,
        1 == L && (r[D].x1 = i,
        r[D].y1 = n),
        2 == L && (r[D].x2 = i,
        r[D].y2 = n),
        3 == L) && (r[D].x3 = i,
        r[D].y3 = n)
    }
}),
$("#seleccionar-regla").click(function() {
    Y()
}),
$("#seleccionar-angulo").click(function() {
    X()
}),
$("#deshacer").click(function() {
    c()
}),
$("#invertir").click(function() {
    P()
}),
$("#mover-punto").click(function() {
    O()
}),
$("#contraste").on("input", function() {
    m()
}),
$("#brillo").on("input", function() {
    m()
}),
$("#zoom-range").on("input", function() {
    s(this)
});
