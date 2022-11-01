const imgComponent = (imgUrl, parent) => {
  const imgEl = document.createElement("img");

  imgEl.setAttribute("src", imgUrl);
  parent.appendChild(imgEl);
};

export default imgComponent;
