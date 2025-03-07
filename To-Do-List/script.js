const todoList = [];
  
  renderTodoList();
  
  function renderTodoList() {
    let todoListHTML = '';
  
    for (let i = 0; i < todoList.length; i++) {
      const todoObject = todoList[i];
      //const name = todoObject.name;
      //const dueDate = todoObject.dueDate;
      const { name, dueDate } = todoObject;
      const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
          todoList.splice(${i}, 1);
          renderTodoList();
        " class="delete-todo-button">Delete</button> 
      `;
      todoListHTML += html;
    }
  
    document.querySelector('.todo-list')
      .innerHTML = todoListHTML;
  }
  
  function addTodo() {
    const inputElement = document.querySelector('.nameInput');
    const name = inputElement.value;
  
    const dateInputElement = document.querySelector('.due-dateInput');
    const dueDate = dateInputElement.value;
  
    todoList.push({
      //name: name,
      //dueDate: dueDate,
      name,
      dueDate
    });
  
    inputElement.value = '';
  
    renderTodoList();
  }