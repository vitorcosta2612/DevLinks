function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatarlight.png")
    img.setAttribute(
      "alt",
      "Foto de Vitor Costa no espelho vestindo um paletó azul, colete azul, camisa branca e gravata azul",
    )
  } else {
    img.setAttribute("src", "./assets/Avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Vitor Costa sorrindo, usando blusa cinza e barba descolorida",
    )
  }
}
