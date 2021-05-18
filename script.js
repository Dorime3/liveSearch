window.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input'),
          list = document.querySelectorAll('li');
    input.addEventListener('input', function() {
        if (this.value != '') {
            list.forEach(li => {
                if(li.textContent.search(this.value) == -1) {
                    li.classList.add('hide');
                }
                console.log(this.value);    
            });
        } else {
            list.forEach(li => {
                li.classList.remove('hide');
            });
        }
    })
})