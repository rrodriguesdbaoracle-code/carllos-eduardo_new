const lightbox=document.getElementById('lightbox');let lastPhoto;
document.querySelectorAll('.photo').forEach(button=>button.addEventListener('click',()=>{lastPhoto=button;lightbox.querySelector('img').src=button.dataset.src;lightbox.querySelector('img').alt=button.dataset.alt;lightbox.querySelector('p').textContent=button.dataset.alt;lightbox.showModal()}));
lightbox.querySelector('.close').addEventListener('click',()=>lightbox.close());lightbox.addEventListener('click',event=>{if(event.target===lightbox)lightbox.close()});lightbox.addEventListener('close',()=>lastPhoto?.focus());
