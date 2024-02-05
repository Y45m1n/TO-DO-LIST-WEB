document.addEventListener("DOMContentLoaded", function () {
    const inputArea = document.querySelector(".to-do__input-area");
    const inputText = document.getElementById("toDoInput");
    const button = document.querySelector(".button-purpple");
    const toDoWrapper = document.querySelector(".add-itens");

    const selectAllArea = document.querySelector(".select-all__area");
    const allDone = document.querySelector(".all-done");
    const removeAll = document.querySelector(".remove-all");

    let dragged;

    button.addEventListener("click", function (event) {
        event.preventDefault();

        // VALIDAÇÃO DO CAMPO DE TEXTO
        if (inputText.value === "" || inputText.value.trim() === "") {
            inputText.focus();
            return false;
        }

        // TO DO LISTS ADICIONADAS 
        const toDoBox = document.createElement("div");
        toDoBox.classList.add("to-do__box-inside");
        toDoBox.style.backgroundColor = "#fff";
        toDoBox.style.display = "flex";
        toDoBox.style.justifyContent = "space-between";
        toDoBox.style.padding = "0px 10px";
        toDoBox.setAttribute("draggable", "true");

        toDoBox.addEventListener("dragstart", function (event) {
            dragged = event.target.closest('.to-do__box-inside');
        });

        toDoBox.addEventListener("dragend", function (event1) {
            console.log(event1.target);
            dropItem = event.target;

            if (event.target.className == "dropzone") {
                event.target.style.background = "";
                dropItem.parentNode.removeChild(dropItem);
                dropItem.target.appendChild(dragged);
            }
        });

        const toDoItem = document.createElement("p");
        toDoItem.classList.add("to-do__box-text");
        toDoItem.innerHTML = inputText.value;

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "x";
        deleteButton.classList.add("button");

        toDoBox.appendChild(toDoItem);
        toDoBox.appendChild(deleteButton);
        toDoWrapper.appendChild(toDoBox);

        // DRAG AND DROP TO DO ITENS
        toDoWrapper.addEventListener("dragover", function (e) {
            e.preventDefault();
            const reference = e.target.closest('.to-do__box-inside');
            toDoWrapper.insertBefore(dragged, reference);
        });

        // DELETE ITEM
        deleteButton.addEventListener("click", function (event2) {
            event2.preventDefault();
            toDoBox.remove();
        });

        // MARCAR ITEM
        toDoBox.addEventListener("click", function (evento3) {
            if (toDoItem.classList.contains("to-do__box-text")) {
                toDoItem.classList.remove("to-do__box-text");
                toDoItem.classList.add("to-do__box-text_checked");
            } else if (toDoItem.classList.contains("to-do__box-text_checked")) {
                toDoItem.classList.remove("to-do__box-text_checked");
                toDoItem.classList.add("to-do__box-text");
            }
        });

        inputText.value = "";
    });

    // MARCAR TODOS OS ITENS
    allDone.addEventListener("click", function (e) {
        const toDoItems = document.querySelectorAll('.container .to-do__box-inside');

        toDoItems.forEach(function (item) {
            const toDoItem = item.querySelector(".to-do__box-text");

            if (toDoItem.classList.contains("to-do__box-text")) {
                toDoItem.classList.remove("to-do__box-text");
                toDoItem.classList.add("to-do__box-text_checked");
            } else if (toDoItem.classList.contains("to-do__box-text_checked")) {
                toDoItem.classList.remove("to-do__box-text_checked");
                toDoItem.classList.add("to-do__box-text");
            }
        });
    });

    // DELETAR TODOS OS ITENS
    removeAll.addEventListener("click", function (event1) {
        event1.preventDefault();

        const toDoItems = document.querySelectorAll('.container .to-do__box-inside');
        toDoItems.forEach(function (item) {
            item.remove();
        });
    });
});
