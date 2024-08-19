document.addEventListener('DOMContentLoaded', function(){
  const petPosts = JSON.parse(localStorage.getItem('postRegister')) || [];
  const deletePostsButton = document.getElementById('deletePostsButton');
  const updateTableButton = document.getElementById('updateTableButton')

  function updateTable() {
    const tbody = document.querySelector('#dataTable tbody');
    tbody.innerHTML = '';

    petPosts.forEach(post =>{
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${post.postTitle}</td>
    <td>${post.postAuthor}</td>
    <td>${post.petCategory}</td>
    <td>${post.postDate}</td>
    <td>
      <button class="trashcan" onclick="deletar(this)"><i class="fa-solid fa-trash"></i></button>
    </td>
    `;
    tbody.appendChild(row);
    });
  }
    deletePostsButton.addEventListener('click', function(event) {
      event.preventDefault();

      if (confirm('Are you sure you want to delete all posts?')) {
        localStorage.removeItem('postRegister'); // zera o array na local storage
        updateTable();
        window.location.reload(); // atualiza a tabela e reflete as mudanças
      }
    });

    updateTableButton.addEventListener('click', function(event) {
      event.preventDefault();
      updateTable(); // Refresh the table
    });
     // window.editar = function(btn) {
    //   const row = btn.closest('tr');
    //   const cells = row.getElementsByTagName('td');

    // document.getElementById('postTitle').value = cells[0].innerText;
    // document.getElementById('postAuthor').value = cells[1].innerText;
    // document.getElementById('petCategory').value = cells[2].innerText;
    // document.getElementById('postDate').value = cells[3].innerText;

    // row.remove();
    // updateLocalStorage();
    // }

    window.deletar = function (index) {
      const row = btn.closest('tr');
      const cells = row.getElementsByTagName('td');

      const postTitle = cells[0].innerText;
      const postAuthor = cells[1].innerText;
      const petCategory = cells[2].innerText;
      const postDate = cells[3].innerText;

      petPosts = petPosts.filter(post =>
        !(post.postTitle === postTitle &&
          post.postAuthor === postAuthor &&
          post.petCategory === petCategory &&
          post.postDate === postDate)
        );
      localStorage.setItem('postRegister', JSON.stringify(petPosts));
      row.remove();
    }
    updateTable();
  });

