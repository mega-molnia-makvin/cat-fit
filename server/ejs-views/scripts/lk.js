const lk=document.querySelector('[data-modal_butt="exit"]');
if (lk){
lk.addEventListener("click", async _ => {
    try {     
      const response = await fetch('user/logout', {
        method: 'post',
        body: {
          // Your body
        }
      });
    } catch(err) {
      console.error(`Error: ${err}`);
    }
  });
}
