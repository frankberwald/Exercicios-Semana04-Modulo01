document.addEventListener('DOMContentLoaded',function(){
  const form = document.getElementById('postForm');
  let petPosts = JSON.parse(localStorage.getItem('postRegister')) || [];

  function addPost(event){
    event.preventDefault();

  const postTitle = (document.getElementById('postTitle').value);
  const postAuthor = (document.getElementById('postAuthor').value);
  const petCategory = (document.getElementById('petCategory').value)
  const postDate = (document.getElementById('postDate').value);

  const newPetPost = {
    postTitle,
    postAuthor,
    petCategory,
    postDate
  };

  if (postTitle && postAuthor && petCategory && postDate){
    const newPetPost = {postTitle, postAuthor, petCategory, postDate};
  petPosts.push(newPetPost);
  localStorage.setItem('postRegister', JSON.stringify(petPosts));

  form.reset();

  alert('Post registrado com sucesso!')
    }else {'Por favor, preencha todos os campos.'}
  }
  form.addEventListener('submit', addPost);
});


