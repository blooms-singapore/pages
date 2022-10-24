const readMoreBtn = document.querySelector('.read-more-button');
const text = document.querySelector(".text');
                                    
readMoreBtn.addEventListener ('click',(e)=>{
  text.classList.toggle ('show-more');
  
  if(readMoreBtn.innerText === 'Read More'){
    readMoreBtn.innerText === 'Read Less'};
    
   else(readMoreBtn.innerText === 'Read Less'{
   readMoreBtn.innerText === 'Read More'}
}
)
