const S = window.SITE, $ = s => document.querySelector(s);
const esc = t => String(t ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const live = a => (a || []).filter(x => typeof x === "string" || !x.hidden);

// Poster: your own still if set, else the YouTube thumbnail, else plain purple.
const poster = v => v.poster ? `images/${v.poster}` : v.type === "youtube" ? `https://i.ytimg.com/vi/${v.id}/maxresdefault.jpg` : "";
const embed = (t, id) => {
  const q = id.includes("?") ? "&" : "?";
  return t === "vimeo"
    ? `https://player.vimeo.com/video/${id}${q}autoplay=1`
    : `https://www.youtube-nocookie.com/embed/${id}${q}autoplay=1&rel=0`;
};
const vid = (v, label) => `<div class="vid" role="button" tabindex="0" aria-label="Play ${esc(label)}" data-t="${v.type}" data-id="${esc(v.id)}" style="${poster(v) ? `background-image:url('${poster(v)}')` : ""}"><span class="play"></span><span class="vt">${esc(label)}</span></div>`;

document.title = `${S.name} — ${S.role}`;
$("#nav").innerHTML = `<b>${esc(S.name)}</b><div>${S.nav.map(n => `<a href="#${n[1]}">${esc(n[0])}</a>`).join("")}</div>`;
$("#hero").innerHTML = `<div class="w"><h1>${esc(S.name)}</h1><p class="tl">${esc(S.tagline)}</p>${vid(S.showreel, S.showreel.title)}<p class="cap">${esc(S.showreel.note)}</p></div>`;

const A = S.awards;
$("#awards").innerHTML = `<div class="w g"><img src="images/${esc(A.logo)}" alt="${esc(A.festival)} logo"><div><h2>${esc(A.title)}</h2><ul>${A.list.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div></div>`;

$("#film-list").innerHTML = live(S.films).map(f => `<article class="film">${vid(f.video, f.title)}<div class="tx"><div class="meta">${esc(f.meta)}</div><h3>${esc(f.title)}</h3>${f.highlight ? `<blockquote class="big">${esc(f.highlight)}</blockquote>` : ""}<p>${esc(f.text)}</p>${f.quote ? `<blockquote>${esc(f.quote)}</blockquote>` : ""}${f.badge ? `<span class="tag">${esc(f.badge)}</span>` : ""}</div></article>`).join("");

$("#still-list").innerHTML = live(S.stills).map(s => `<img loading="lazy" src="images/${esc(s)}" alt="Still from a film by ${esc(S.name)}">`).join("");

const B = S.about;
$("#about-c").innerHTML = `<h2>About</h2><div class="g"><div>${B.paras.map(p => `<p>${esc(p)}</p>`).join("")}<blockquote>${esc(B.quote)}</blockquote><cite>${esc(B.cite)}</cite></div><div>${B.lists.map(l => `<h3>${esc(l.title)}</h3><ul>${l.items.map(i => `<li>${esc(i)}</li>`).join("")}</ul>`).join("")}</div></div>`;

const C = S.contact;
$("#contact-c").innerHTML = `<h2>${esc(C.heading)}</h2><a class="big" href="mailto:${esc(C.email)}">${esc(C.email)}</a><div class="links">${C.links.filter(l => l.url).map(l => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join("")}</div>`;
$("#year").textContent = new Date().getFullYear();
$("#foot-name").textContent = S.name;

const play = el => {
  if (el.classList.contains("on")) return;
  el.classList.add("on");
  el.innerHTML = `<iframe src="${embed(el.dataset.t, el.dataset.id)}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Video player"></iframe>`;
};
document.addEventListener("click", e => {
  const v = e.target.closest(".vid");
  if (v) return play(v);
  const i = e.target.closest(".stills img");
  if (i) { $("#lb img").src = i.src; $("#lb").classList.add("on"); }
  else if (e.target.closest("#lb")) $("#lb").classList.remove("on");
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") $("#lb").classList.remove("on");
  if (e.key === "Enter" && e.target.classList && e.target.classList.contains("vid")) play(e.target);
});
