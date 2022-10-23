const readMoreBtn = document.querySelector('.read-more-button');
const text = document.querySelector(".text');
                                    
readMoreBtn.addEventListener('click',(e)=>{
  text.classList.toggle ('show-more')
