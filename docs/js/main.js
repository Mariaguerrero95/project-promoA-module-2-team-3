const q = document.querySelector(".js-div-container__form"),
  h = document.querySelector(".js-fieldset-diseña");
document.querySelector(".js-nubes");
document.querySelector(".js-naves");
document.querySelector(".js-forky");
document.querySelector(".js-legend-design");
const a = document.querySelector(".js-form-design"),
  c = document.querySelector(".js-arrow");
h.addEventListener("click", (e) => {
  console.log("event"),
    e.target.id === "option1"
      ? (t.classList.add("card-background-nubes"),
        t.classList.remove("card-background-naves"),
        t.classList.remove("card-background-forky"))
      : e.target.id === "option2"
      ? (t.classList.add("card-background-naves"),
        t.classList.remove("card-background-nubes"),
        t.classList.remove("card-background-forky"))
      : e.target.id === "option3" &&
        (t.classList.add("card-background-forky"),
        t.classList.remove("card-background-naves"),
        t.classList.remove("card-background-nubes"));
});
const b = document.querySelector(".js-fieldset-rellena");
document.querySelector(".js-input-nameAddressee");
document.querySelector(".js-input-message");
document.querySelector(".js-input-img");
const i = document.querySelector(".js-input-phone");
document.querySelector(".js-input-nameSender");
document.querySelector(".js-input-insta");
document.querySelector(".js-legend-fillout");
const l = document.querySelector(".js-arrow-fillout"),
  n = document.querySelector(".js-form-fillout");
i.addEventListener("input", k);
function k() {
  i.value = i.value.replace(/[^0-9]/g, "");
}
document.querySelector(".js-legend-share");
const d = document.querySelector(".js-form-share"),
  u = document.querySelector(".js-icon-arrow-share"),
  v = document.querySelector(".js-card-create"),
  w = document.querySelector(".js-share-open");
function C(e) {
  e.preventDefault(), w.classList.remove("collapse");
}
v.addEventListener("click", C);
const I = document.querySelectorAll(".js-legend"),
  E = (e) => {
    console.log("hago click", e.currentTarget),
      e.currentTarget.classList.contains("js-legend-design")
        ? (a.classList.toggle("collapse"),
          c.classList.toggle("rotate"),
          n.classList.add("collapse"),
          l.classList.remove("rotate"),
          d.classList.add("collapse"),
          u.classList.remove("rotate"))
        : e.currentTarget.classList.contains("js-legend-fillout")
        ? (n.classList.toggle("collapse"),
          l.classList.toggle("rotate"),
          a.classList.add("collapse"),
          c.classList.remove("rotate"),
          d.classList.add("collapse"),
          u.classList.remove("rotate"))
        : e.currentTarget.classList.contains("js-legend-share") &&
          (d.classList.toggle("collapse"),
          u.classList.toggle("rotate"),
          a.classList.add("collapse"),
          c.classList.remove("rotate"),
          n.classList.add("collapse"),
          l.classList.remove("rotate"));
  };
for (const e of I) console.log("legend: ", e), e.addEventListener("click", E);
const o = new FileReader(),
  T = document.querySelector(".js__profile-upload-btn"),
  g = document.querySelector(".js__profile-image"),
  A = document.querySelector(".js-card-photo-img");
function F(e) {
  const s = e.currentTarget.files[0];
  o.addEventListener("load", P), o.readAsDataURL(s);
}
function P() {
  (g.style.backgroundImage = `url(${o.result})`),
    (A.style.backgroundImage = `url(${o.result})`);
}
T.addEventListener("change", F);
document.querySelector(".js-card");
const t = document.querySelector(".js-card-found-img"),
  m = document.querySelector(".js-card-nameAddressee"),
  y = document.querySelector(".js-card-message"),
  f = document.querySelector(".js-card-photo-img"),
  S = document.querySelector(".js-card-phone"),
  L = document.querySelector(".js-card-nameSender"),
  p = document.querySelector(".js-card-insta"),
  _ = document.querySelector(".js-button-reset");
function r(e, s, j) {
  e.target.id === s && (j.innerHTML = e.target.value);
}
const x = (e) => {
  e.target.id,
    (e.target.id === "nameAddressee" ||
      e.target.id === "message" ||
      e.target.id === "phone" ||
      e.target.id === "nameSender" ||
      e.target.id === "insta" ||
      e.target.id === "photo") &&
      e.target.value;
};
b.addEventListener("input", (e) => {
  r(e, "nameAddressee", m),
    r(e, "message", y),
    r(e, "img", f),
    r(e, "phone", S),
    r(e, "nameSender", L),
    r(e, "insta", p),
    x(e);
});
_.addEventListener("click", () => {
  (m.textContent = "To: Buddy"),
    (y.textContent = "Te voy a echar mucho de menos"),
    (S.textContent = "612345678"),
    (L.textContent = "Mr. Potato"),
    (p.textContent = "@mrpotato"),
    (f.style.backgroundImage = 'url("images/mr-potato.png")'),
    t.classList.add("card-background-nubes"),
    t.classList.remove("card-background-naves"),
    t.classList.remove("card-background-forky"),
    q.reset(),
    (g.style.backgroundImage = "");
});
//# sourceMappingURL=main.js.map
