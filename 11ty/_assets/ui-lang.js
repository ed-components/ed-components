// language of the components interface, chosen in the navigation. The page
// head sets it on <html ui-lang> from ?ui-lang=fr or the stored choice,
// before the components render: they don't update when it changes, hence the
// reload.
const uiLangSelect = document.querySelector("#ui-lang");

if (uiLangSelect) {
  uiLangSelect.value =
    document.documentElement.getAttribute("ui-lang") ??
    document.documentElement.lang.split("-")[0];

  uiLangSelect.addEventListener("change", () => {
    try {
      localStorage.setItem("ui-lang", uiLangSelect.value);
    } catch {
      // no storage: the URL parameter keeps the choice for this page
    }
    const url = new URL(location.href);
    url.searchParams.set("ui-lang", uiLangSelect.value);
    location.assign(url);
  });
}
