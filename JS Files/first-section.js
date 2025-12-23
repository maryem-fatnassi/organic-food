// Show and hide menu 
  const barsIcon = document.getElementById('bars-icon');
  const arrowUpIcon = document.getElementById('arrow-up-icon');
  const menu = document.getElementById('menu-all-department');

    barsIcon.addEventListener('click',function(){
     menu.classList.remove('hide-menu');
     menu.style.transition='0.5s ease';
    });
    arrowUpIcon.addEventListener('click',function(){  
      menu.classList.add('hide-menu');
    });

  
   