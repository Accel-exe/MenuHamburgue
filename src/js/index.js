const lista = [...document.getElementsByClassName('list')];
const btn = document.getElementById('btn');

btn.addEventListener('click',(evt) => {

    lista.forEach((el) => {
        if (el.classList.contains('active')) {
            el.classList.remove('active');
            el.classList.add('off');
        } else {
            el.classList.remove('off');
            el.classList.add('active')
        }
    })
})
