$(document).ready(() => {
  $('#btn_update_todo').hide()
  submitNewTodo()
  showAllTodos()
})

let submitNewTodo = () => {
  $('#btn_add_todo').on('click', (e) => {
    e.preventDefault()
    let data_todo = {
      content : $('#content').val()
    }
    // console.log(data_todo);

    $.ajax({
      url         : 'http://localhost:3000/api/todos',
      type        : 'POST',
      dataType    : 'JSON',
      contentType : 'application/x-www-form-urlencoded',
      data        : data_todo,
      success      : (new_todo) => {
        console.log(new_todo);
        let new_HTML = `
        <tr id=${new_todo._id}>
          <td>${new_todo.content}</td>
          <td>
            <button type="button" class="btn btn-warning" id="edit_todo" onclick="submitEditButton('${new_todo._id}')">Edit</button>
            <button type="button" class="btn btn-danger" id="delete_todo" onclick="submitDeleteButton('${new_todo._id}')">Delete</button>
          </td>
        </tr>`
      $('#body_table_todos').append(new_HTML)
      }
    })
    $('#form_new_todo')[0].reset()
  })
}

let showAllTodos = () => {
  $.ajax({
    url         : 'http://localhost:3000/api/todos',
    type        : 'GET',
    dataType    : 'JSON',
    contentType : 'application.x-www-form-urlencoded',
    success     : (all_todos) => {
      console.log(all_todos);
      let all_todos_HTML = ''
      for(var i = 0; i < all_todos.length; i++){
        all_todos_HTML += `<tr id=${all_todos[i]._id}>
        <td>${all_todos[i].content}</td>
        <td>
          <button type="button" class="btn btn-warning" id="edit_todo" onclick="submitEditButton('${all_todos[i]._id}')">Edit</button>
          <button type="button" class="btn btn-danger" id="delete_todo" onclick="submitDeleteButton('${all_todos[i]._id}')">Delete</button>
        </td>
        </tr>`
      }
      $('#body_table_todos').append(all_todos_HTML)
    }
  })
}

let submitEditButton = (id) => {
  $.ajax({
    url:  "http://localhost:3000/api/todos/"+id,
    method: 'PUT',
    contentType: 'application/x-www-form-urlencoded',
    success: (edited_todo) => {
      console.log(edited_todo)
      $('#content').val(edited_todo.content)
      console.log(edited_todo._id);

      let hidden_id = `
      <tr id="hidden_id">
        <td>
          <input type="hidden" id="id" value="${edited_todo._id}">
        </td>
      </tr>`

      $('#form_new_todo').append(hidden_id)

      $('#btn_add_todo').prop('disabled', true)
      $('#btn_update_todo').show()
      submitUpdateButton()
    }
  })
}

let submitUpdateButton = () => {
  $('#btn_update_todo').on('click', (e) => {
    e.preventDefault()
    let new_edit_todo = {
      _id : $('#id').val(),
      content : $('#content').val()
    }
    console.log('...................', new_edit_todo._id);
    $.ajax({
      url: "http://localhost:3000/api/todos/"+new_edit_todo._id,
      method: 'PUT',
      contentType: 'application/x-www-form-urlencoded',
      data : new_edit_todo,
      success: (new_edited_todo) => {
        console.log(new_edited_todo)
        let replace_row = `
        <tr id=${new_edited_todo._id}>
        <td>${new_edited_todo.content}</td>
        <td>
          <button type="button" class="btn btn-warning" id="edit_todo" onclick="submitEditButton('${new_edited_todo._id}')">Edit</button>
          <button type="button" class="btn btn-danger" id="delete_todo" onclick="submitDeleteButton('${new_edited_todo._id}')">Delete</button>
        </td>
        </tr>
        `
        $(`#${new_edited_todo._id}`).replaceWith(replace_row)
        $('#form_new_todo')[0].reset()
        $('#btn_update_todo').hide()
        $('#btn_add_todo').prop('disabled', false)
        $('#hidden_id').remove()
      }
    })
  })
}

let submitDeleteButton = (id) => {
  if(confirm('Are you sure want to delete?')){
    // alert(`yes`)
    $.ajax({
      url         : 'http://localhost:3000/api/todos/'+id,
      type        : 'DELETE',
      dataType    : 'json',
      contentType : 'application/x-www-form-urlencoded',
      success     : (deleted_todo) => {
        // console.log(deleted_todo);
        $(`#${deleted_todo._id}`).remove()
      }
    })

  }else{
    // alert(`no`)
    return false
  }
}
