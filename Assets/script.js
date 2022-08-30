//This is for the pothead section
  const form = document.querySelector("#new-name-form");
  const input = document.querySelector("#new-name-input");
  const list_el = document.querySelector("#names");

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = input.value

    if (!name) {
      alert("Please add a name");
      return;
    }

    const name_el = document.createElement("div");
    name_el.classList.add("name");

    const name_content_el = document.createElement("div");
    name_content_el.classList.add("content");

    name_el.appendChild(name_content_el);

    const name_input_el = document.createElement("input");
    name_input_el.classList.add("name_text");
    name_input_el.type =  "text";
    name_input_el.value = name;
    name_input_el.setAttribute("readonly", "readonly");

    name_content_el.appendChild(name_input_el);

    const name_actions_el = document.createElement("div");
    name_actions_el.classList.add("actions");


    const name_edit_el = document.createElement("button");
    name_edit_el.classList.add("edit_button")
    name_edit_el.innerHTML = "Edit"

    const name_delete_el = document.createElement("button");
    name_delete_el.classList.add("delete_button")
    name_delete_el.innerHTML = "Delete"

    name_actions_el.appendChild(name_edit_el);
    name_actions_el.appendChild(name_delete_el);
    
    name_el.appendChild(name_actions_el)

    list_el.appendChild(name_el);

    input.value = "";

    name_edit_el.addEventListener('click', () => {
      if (name_edit_el.innerText.toLowerCase() == "edit") {
        name_input_el.removeAttribute("readonly");
        name_input_el.focus();
        name_edit_el.innerHTML = "Save";
      } else {
        name_input_el.setAttribute("readonly", "readonly"),
        name_edit_el.innerText = "Edit";
      }
    })

    name_delete_el.addEventListener('click', () => {
      list_el.removeChild(name_el);
    })
  })
