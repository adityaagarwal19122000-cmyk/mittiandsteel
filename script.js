// Newsletter form handling.
// 1) Create a free newsletter account (Beehiiv, Kit or Buttondown).
// 2) Paste its form action URL into FORM_ACTION below.
var FORM_ACTION = "";

document.querySelectorAll("form.signup-form").forEach(function (f) {
  if (FORM_ACTION) { f.action = FORM_ACTION; f.method = "post"; }
  f.addEventListener("submit", function (e) {
    if (!FORM_ACTION) {
      e.preventDefault();
      var m = f.parentElement.querySelector("#msg");
      if (m) m.textContent = "Signup opens very soon. Please check back shortly.";
    }
  });
});
