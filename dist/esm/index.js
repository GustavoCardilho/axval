var u = (r, e, t, o) => {
  if (t) {
    if (typeof r == "string" && r.length < t)
      return {
        success: !1,
        message: "O valor \xE9 menor que o m\xEDnimo permitido",
        type: e,
      };
    if (typeof r == "number" && r < t)
      return {
        success: !1,
        message: "O valor \xE9 menor que o m\xEDnimo permitido",
        type: e,
      };
  }
  if (o) {
    if (typeof r == "string" && r.length > o)
      return {
        success: !1,
        message: "O valor \xE9 maior que o m\xE1ximo permitido",
        type: e,
      };
    if (typeof r == "number" && r > o)
      return {
        success: !1,
        message: "O valor \xE9 maior que o m\xE1ximo permitido",
        type: e,
      };
  }
};
var c = (r) => {
  try {
    let e = r;
    return !!/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(e);
  } catch (e) {
    return !1;
  }
};
var p = (r) => {
  try {
    let i = r.toString();
    if (((i = i.replace(/[^\d]+/g, "")), i.length !== 11)) return !1;
    for (var e = 0; e < 10 && i.charAt(e) === i.charAt(e + 1); e++)
      if (e === 9) return !1;
    for (var t = 0, o = 0; o < 9; o++) t += parseInt(i.charAt(o)) * (10 - o);
    var n = t % 11,
      A = n < 2 ? 0 : 11 - n;
    if (parseInt(i.charAt(9)) !== A) return !1;
    t = 0;
    for (var s = 0; s < 10; s++) t += parseInt(i.charAt(s)) * (11 - s);
    n = t % 11;
    var M = n < 2 ? 0 : 11 - n;
    return parseInt(i.charAt(10)) === M;
  } catch (i) {
    return !1;
  }
};
var y = (r) => {
  try {
    let t = r.replace(/\D/g, "");
    return !!/^[+]\d{1,3}\s?[(]?\d{1,4}[)]?\s?\d{4,}$/.test(t);
  } catch (e) {
    return !1;
  }
};
var d = (r) => {
  try {
    return !!/^[a-f\d]{8}(-[a-f\d]{4}){4}[a-f\d]{8}$/i.test(r);
  } catch (e) {
    return !1;
  }
};
var g = (r) => {
  try {
    return typeof r == "string";
  } catch (e) {
    return !1;
  }
};
var h = (r) => {
  try {
    return typeof r == "number";
  } catch (e) {
    return !1;
  }
};
var m = class {
    constructor() {
      this.email = c;
      this.phone = y;
      this.uuid = d;
      this.cpf = p;
      this.string = g;
      this.number = h;
    }
  },
  f = new m();
var l = (r, e) => {
  let t,
    o = 0;
  return (
    typeof e == "string" &&
      (r == "email" || (Array.isArray(r) && r.indexOf("email") !== -1)) &&
      ((t = f.email(e)), (o = t ? o + 1 : o)),
    typeof e == "string" &&
      (r == "phone" || (Array.isArray(r) && r.indexOf("phone") !== -1)) &&
      ((t = f.phone(e)), (o = t ? o + 1 : o)),
    (r == "cpf" || (Array.isArray(r) && r.indexOf("cpf") !== -1)) &&
      ((t = f.cpf(e)), (o = t ? o + 1 : o)),
    typeof e == "string" &&
      (r == "uuid" || (Array.isArray(r) && r.indexOf("uuid") !== -1)) &&
      ((t = f.uuid(e)), (o = t ? o + 1 : o)),
    typeof e == "number" &&
      (r == "number" || (Array.isArray(r) && r.indexOf("number") !== -1)) &&
      ((t = f.number(e)), (o = t ? o + 1 : o)),
    typeof e == "string" &&
      (r == "string" || (Array.isArray(r) && r.indexOf("string") !== -1)) &&
      ((t = f.string(e)), (o = t ? o + 1 : o)),
    Array.isArray(r) && o !== r.length && (console.log(r.length, o), (t = !1)),
    t
  );
};
var x = (r) => {
  try {
    let e = l(r.type, r.value),
      t = u(r.value, r.type, r.min, r.max);
    return (
      t ||
      (e
        ? { success: !0, message: "O valor \xE9 v\xE1lido", type: r.type }
        : { success: !1, message: "O valor \xE9 inv\xE1lido", type: r.type })
    );
  } catch (e) {
    return { success: !1, message: "Error", type: r.type };
  }
};
var a = class {
    constructor() {
      this.verify = x;
    }
  },
  F = new a();
export { F as default };
//# sourceMappingURL=index.js.map
