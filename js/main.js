const hamburguer = document.querySelector('.hamburguer')
const navbar = document.querySelector('.navbar')
const btn = document.querySelector('.btn-close')
const a = document.getElementById('a')
const b = document.getElementById('b')
const c = document.getElementById('c')
const d = document.getElementById('d')
const e = document.getElementById('e')


hamburguer.addEventListener('click',()=>{
    navbar.classList.add('show')
})
btn.addEventListener('click',()=>{
    navbar.classList.remove('show')
})

a.addEventListener('click',()=>{
    navbar.classList.remove('show')
})
b.addEventListener('click',()=>{
    navbar.classList.remove('show')
})
c.addEventListener('click',()=>{
    navbar.classList.remove('show')
})
d.addEventListener('click',()=>{
    navbar.classList.remove('show')
})
e.addEventListener('click',()=>{
    navbar.classList.remove('show')
})