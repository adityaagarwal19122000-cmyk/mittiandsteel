// ===== Mitti & Steel site settings =====
// Add each social profile link here once the account exists.
// Example: instagram: "https://www.instagram.com/mittiandsteel/"
var SOCIAL = {
  instagram: "",
  youtube: "",
  tiktok: "",
  pinterest: ""
};

// Newsletter: paste the form action URL from Beehiiv, Kit or Buttondown.
var FORM_ACTION = "";

// ===== Shared header and footer =====
(function () {
  var pages = [["habits.html", "Habit Library"], ["book.html", "The Book"], ["newsletter.html", "Newsletter"], ["about.html", "About"]];
  var here = location.pathname.split("/").pop() || "index.html";
  var nav = pages.map(function (p) {
    return '<a href="' + p[0] + '"' + (p[0] === here ? ' class="on"' : "") + ">" + p[1] + "</a>";
  }).join("");

  var h = document.getElementById("site-header");
  if (h) {
    h.innerHTML = '<div class="wrap nav"><a class="brand" href="index.html"><img src="logo.svg" alt="">Mitti <em>&amp;</em> Steel</a><nav>' + nav + "</nav></div>";
  }

  var labels = { instagram: "Instagram", youtube: "YouTube", tiktok: "TikTok", pinterest: "Pinterest" };
  var soc = Object.keys(labels).filter(function (k) { return SOCIAL[k]; }).map(function (k) {
    return '<a href="' + SOCIAL[k] + '" target="_blank" rel="noopener">' + labels[k] + "</a>";
  }).join("");
  if (!soc) { soc = '<span class="soon">Profiles opening soon</span>'; }

  var f = document.getElementById("site-footer");
  if (f) {
    f.innerHTML = '<div class="wrap"><div class="cols">' +
      '<div><div class="fb">Mitti &amp; Steel</div><p>Everyday Indian habits, honestly examined.</p></div>' +
      "<div><h4>Explore</h4>" + nav + "</div>" +
      "<div><h4>Follow</h4>" + soc + "</div></div>" +
      '<p class="fine">&copy; Mitti &amp; Steel. Educational content only, not medical advice. Talk to a doctor before changing your diet, medicines or exercise, especially if you have a health condition.</p></div>';
  }

  // Newsletter forms
  document.querySelectorAll("form.signup-form").forEach(function (form) {
    if (FORM_ACTION) { form.action = FORM_ACTION; form.method = "post"; }
    form.addEventListener("submit", function (e) {
      if (!FORM_ACTION) {
        e.preventDefault();
        var m = form.parentElement.querySelector("#msg");
        if (m) { m.textContent = "Signup opens very soon. Please check back shortly."; }
      }
    });
  });
})();
