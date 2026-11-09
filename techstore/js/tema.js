(function () {
  var temas = [
    { clase: "", boton: "Oscurecer" },
    { clase: "tema-negro", boton: "Azul" },
    { clase: "tema-azul", boton: "Original" },
  ];
  var claves = ["tema-negro", "tema-azul"];
  var i = 0;

  try {
    var guardado = parseInt(localStorage.getItem("techstore-tema"), 10);
    if (guardado >= 0 && guardado < temas.length) i = guardado;
  } catch (e) {}

  function aplicar() {
    var btn = document.getElementById("btntema");
    claves.forEach(function (c) {
      document.body.classList.remove(c);
    });
    if (temas[i].clase) document.body.classList.add(temas[i].clase);
    if (btn) btn.textContent = temas[i].boton;
    try {
      localStorage.setItem("techstore-tema", String(i));
    } catch (e) {}
  }

  document.addEventListener("click", function (e) {
    if (!e.target.closest("#btntema")) return;
    i = (i + 1) % temas.length;
    aplicar();
  });

  aplicar();
})();