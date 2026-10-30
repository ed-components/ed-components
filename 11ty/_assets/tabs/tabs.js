// Tabs showing one panel at a time, adapted from
// https://github.com/argyleink/gui-challenges/blob/main/tabs/app/js/index.js
//
// Panels are hidden instead of being scrolled horizontally: a scrolling
// container would break position: sticky in the panels (ed-pb progress bars).

const tabgroup = document.querySelector("snap-tabs");
const tabnav = tabgroup.querySelector(":scope nav");
const tabnavitems = [...tabnav.querySelectorAll(":scope a")];
const panels = [...tabgroup.querySelectorAll(":scope > section > article")];

// show the tab matching a hash, or the first one
const showTab = (hash) => {
  const active =
    tabnavitems.find((item) => item.hash === hash) ?? tabnavitems[0];
  tabnavitems.forEach((item) => {
    item.toggleAttribute("active", item === active);
    if (item === active) {
      item.setAttribute("aria-current", "page");
    } else {
      item.removeAttribute("aria-current");
    }
  });
  panels.forEach((panel) => {
    panel.hidden = `#${panel.id}` !== active.hash;
  });
};

tabnav.addEventListener("click", (e) => {
  const item = e.target.closest("a");
  if (!item) return;
  // keep the hash for shared links without jumping to the panel
  e.preventDefault();
  history.replaceState(null, "", item.hash);
  showTab(item.hash);
});

// links to a tab elsewhere in the page; other anchors are in the first tab
window.addEventListener("hashchange", () => showTab(location.hash));

showTab(location.hash);
