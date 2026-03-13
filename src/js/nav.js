// ── Elementos del DOM ──
const navbar       = document.getElementById('navbar')
const mobileMenu   = document.getElementById('mobile-menu')
const btnHamburger = document.getElementById('btn-hamburger')
const iconOpen     = document.getElementById('icon-open')
const iconClose    = document.getElementById('icon-close')

// ── Estado ──
let menuAbierto = false

// ── Sombra al hacer scroll ──
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10)
}, { passive: true })

// ── Toggle menú móvil ──
btnHamburger.addEventListener('click', () => {
  menuAbierto = !menuAbierto

  mobileMenu.style.maxHeight = menuAbierto
    ? mobileMenu.scrollHeight + 'px'
    : '0'

  iconOpen.classList.toggle('hidden', menuAbierto)
  iconClose.classList.toggle('hidden', !menuAbierto)
})

// ── Cerrar menú móvil (usado desde los links) ──
window.cerrarMenuMovil = () => {
  menuAbierto = false
  mobileMenu.style.maxHeight = '0'
  iconOpen.classList.remove('hidden')
  iconClose.classList.add('hidden')
}