jQuery(function($) {
    
   const blocks = document.querySelectorAll('.block');

blocks.forEach(block => {
   block.addEventListener('click', function () {
       if (block.classList.contains('expanded')) {
           block.classList.remove('expanded');
       } else {
           block.classList.add('expanded');
       }
   });
});
});