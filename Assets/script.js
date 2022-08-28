//This is for the pothead section
window.addEventListener('load', () => {

  const form = document.querySelector("#new-name-form");
  const input = document.querySelector("#new-name-input");
  const list_el = document.querySelector("#names");

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = input.value

    if (!name) {
      alert("Please fillout the name");
      return;
    }

    const name_el = document.createElement("div");
    name_el.classList.add("name");

    const name_content_el = document.createElement("div");
    name_content_el.classList.add("content");
    name_content_el.innerText = name;

    name_el.appendChild(name_content_el);
    list_el.appendChild(name_el);


  })
})