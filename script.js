
const likeButtons = document.querySelectorAll('.like-button');
likeButtons.forEach(button => {
  let likesCount = 0;  
  button.addEventListener('click', () => {
    likesCount++; 
    const likesCountElement = button.parentElement.nextElementSibling; 
    likesCountElement.textContent = `${likesCount} curtida${likesCount > 1 ? 's' : ''}`;
  });
});