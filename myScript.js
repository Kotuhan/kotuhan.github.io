var content = document.getElementById("content");

function addChildren() {
  for (let index = 0; index < 16; index++) {
    let newImage = document.createElement("img");

    let src = "http://picsum.photos/100/100/?" + index;

    newImage.setAttribute("src", src);

    newImage.setAttribute("class", "image");

    content.appendChild(newImage);
  }
}

addChildren();
