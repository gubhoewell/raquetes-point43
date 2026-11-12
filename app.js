(function () {
  const brl = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  const off = (r) => Math.round((1 - r.por / r.de) * 100);
  const qtd = (r) => r.estoque || r.unidades.length;

  const grade = document.getElementById("grade");
  const chipsEl = document.getElementById("chips-marca");
  const ordemEl = document.getElementById("ordem");
  const escolha = {}; // id -> índice da unidade escolhida

  let marcaAtiva = "Todas";

  const iconeWhats =
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4c-1-1.6-1.5-3.4-1.5-5.2 0-5.4 4.4-9.8 9.8-9.8 2.6 0 5.1 1 6.9 2.9 1.8 1.8 2.9 4.3 2.9 6.9 0 5.4-4.4 9.8-9.8 9.8zm8.3-18.1C18.1 1.5 15.1.2 12 .2 5.5.2.2 5.5.2 12c0 2.1.5 4.1 1.6 5.9L.1 24l6.3-1.7c1.7.9 3.7 1.4 5.6 1.4 6.5 0 11.8-5.3 11.8-11.8 0-3.1-1.2-6.1-3.5-8.2z"/></svg>';

  function linkWhats(r) {
    const i = escolha[r.id] || 0;
    const [peso, bal] = r.unidades[i];
    const spec = r.unidades.length > 1 ? ` (${peso}, balance ${bal})` : "";
    const msg =
      `Oi! Quero reservar a *${r.nome}*${spec} por ${brl(r.por)} do catálogo Black Friday da Point 43. ` +
      `Me manda o link de pagamento?`;
    return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
  }

  function card(r) {
    const el = document.createElement("article");
    el.className = "card" + (r.vendida ? " vendida" : "");
    const multi = r.unidades.length > 1 && !r.vendida;
    const specs = r.unidades
      .map(([p, b], i) =>
        multi
          ? `<button type="button" class="spec" data-i="${i}" aria-pressed="${i === (escolha[r.id] || 0)}">${p} <small>· bal ${b}</small></button>`
          : `<span class="spec">${p} <small>· balance ${b}</small></span>`
      )
      .join("");
    const n = qtd(r);
    el.innerHTML = `
      <div class="foto"><img src="img/${r.img}.webp" alt="${r.nome}" loading="lazy"></div>
      <span class="off">-${off(r)}%</span>
      ${!r.vendida && n > 1 ? `<span class="estoque">${n} unid.</span>` : ""}
      ${!r.vendida && n === 1 ? `<span class="estoque">Última unidade</span>` : ""}
      ${r.vendida ? `<span class="tarja">VENDIDA</span>` : ""}
      <div class="info">
        <span class="marca-tag">${r.marca}</span>
        <h2 class="nome">${r.nome}</h2>
        <div class="specs">${specs}</div>
        ${multi ? `<p class="dica">Toque no peso que você prefere</p>` : ""}
        <div class="precos">
          <div class="de">De ${brl(r.de)}</div>
          <div class="por">${brl(r.por)}</div>
        </div>
        <a class="btn" target="_blank" rel="noopener" href="${r.vendida ? "#" : linkWhats(r)}">
          ${r.vendida ? "Vendida" : iconeWhats + "Quero essa"}
        </a>
      </div>`;

    if (multi) {
      el.querySelectorAll("button.spec").forEach((b) =>
        b.addEventListener("click", () => {
          escolha[r.id] = Number(b.dataset.i);
          el.querySelectorAll("button.spec").forEach((x) => x.setAttribute("aria-pressed", x === b));
          el.querySelector(".btn").href = linkWhats(r);
        })
      );
    }
    return el;
  }

  function render() {
    let lista = RAQUETES.filter((r) => marcaAtiva === "Todas" || r.marca === marcaAtiva);
    const o = ordemEl.value;
    if (o === "menor") lista = [...lista].sort((a, b) => a.por - b.por);
    if (o === "maior") lista = [...lista].sort((a, b) => b.por - a.por);
    if (o === "desconto") lista = [...lista].sort((a, b) => off(b) - off(a));
    // vendidas sempre no fim
    lista = [...lista.filter((r) => !r.vendida), ...lista.filter((r) => r.vendida)];
    grade.replaceChildren(...lista.map(card));
  }

  function chips() {
    const marcas = ["Todas", ...new Set(RAQUETES.map((r) => r.marca))];
    chipsEl.replaceChildren(
      ...marcas.map((m) => {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "chip";
        b.textContent = m;
        b.setAttribute("aria-pressed", m === marcaAtiva);
        b.addEventListener("click", () => {
          marcaAtiva = m;
          chipsEl.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", c === b));
          render();
        });
        return b;
      })
    );
  }

  document.getElementById("max-off").textContent =
    Math.max(...RAQUETES.filter((r) => !r.vendida).map(off)) + "%";
  ordemEl.addEventListener("change", render);
  chips();
  render();
})();
