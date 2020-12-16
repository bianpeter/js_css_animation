function pageLoad() {

  let myObjects = [
    {
      tag: "h1",
      content: "Péter"
    },
    {
      tag: "p",
      content: "Front-end developer"
    }
  ];

  let myRoot = document.getElementById("root");
  for(myObject of myObjects) {
    console.log(myObject.tag);
    
    myRoot.insertAdjacentHTML("beforeend", `
      <${myObject.tag}>${myObject.content}</${myObject.tag}>
    `);
  }

  myRoot.addEventListener("click", function() {
    myRoot.classList.toggle("clicked");
  });

}
window.addEventListener("load",pageLoad);