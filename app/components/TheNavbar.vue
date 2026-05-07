<template>
  <header :class="['navbar', { 'navbar--scrolled': isScrolled, 'navbar--open': menuOpen }]" role="banner">
    <div class="navbar__inner">
      <!-- Logo -->
      <a href="#hero" class="navbar__logo" @click.prevent="scrollTo('#hero')" aria-label="Dra. Lígia Cordeiro">
        <span class="navbar__logo-script">Dra. Lígia Cordeiro</span>
        <span class="navbar__logo-sub">Biomédica · Dermaticista & Cosmetóloga</span>
      </a>

      <!-- Navigation Desktop -->
      <nav class="navbar__nav" aria-label="Menu principal">
        <a v-for="item in navItems" :key="item.href"
           :href="item.href"
           class="navbar__link"
           @click.prevent="scrollTo(item.href)">
          {{ item.label }}
        </a>
        <a href="https://wa.me/5547997506989"
           target="_blank"
           rel="noopener noreferrer"
           class="navbar__cta">
          Agendar
        </a>
      </nav>

      <!-- Hamburger -->
      <button class="navbar__hamburger" :class="{ active: menuOpen }"
              @click="menuOpen = !menuOpen"
              :aria-expanded="menuOpen"
              aria-label="Abrir menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div class="navbar__mobile" :class="{ 'navbar__mobile--open': menuOpen }">
      <nav aria-label="Menu mobile">
        <a v-for="item in navItems" :key="item.href"
           :href="item.href"
           class="navbar__mobile-link"
           @click.prevent="scrollTo(item.href); menuOpen = false">
          {{ item.label }}
        </a>
        <a href="https://wa.me/5547997506989"
           target="_blank"
           rel="noopener noreferrer"
           class="navbar__mobile-cta"
           @click="menuOpen = false">
          Agendar Avaliação
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const menuOpen = ref(false)

const navItems = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
]

function scrollTo(href: string) {
  const el = document.querySelector(href)
  if (el) {
    const offset = 80
    const top = (el as HTMLElement).getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

function handleScroll() {
  isScrolled.value = window.scrollY > 60
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: background 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              box-shadow 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              padding 0.4s ease;
  padding: 1.5rem 0;
}

.navbar--scrolled {
  background: rgba(250, 249, 247, 0.96);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 1px 0 rgba(196, 164, 86, 0.2), 0 4px 24px rgba(28, 43, 58, 0.06);
  padding: 1rem 0;
}

.navbar__inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar__logo {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  line-height: 1;
}

.navbar__logo-script {
  font-family: 'Great Vibes', cursive;
  font-size: 1.75rem;
  color: var(--color-navy);
  transition: color 0.3s ease;
  line-height: 1.1;
}

.navbar--scrolled .navbar__logo-script {
  color: var(--color-navy);
}

.navbar:not(.navbar--scrolled) .navbar__logo-script {
  color: var(--color-cream-marble);
  text-shadow: 0 1px 8px rgba(0,0,0,0.3);
}

.navbar__logo-sub {
  font-family: 'Jost', sans-serif;
  font-size: 0.55rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-gold);
  transition: color 0.3s ease;
}

.navbar__nav {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}

.navbar__link {
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-cream-marble);
  transition: color 0.3s ease;
  position: relative;
}

.navbar__link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--color-gold);
  transition: width 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.navbar__link:hover::after {
  width: 100%;
}

.navbar--scrolled .navbar__link {
  color: var(--color-navy);
}

.navbar__link:hover {
  color: var(--color-gold);
}

.navbar__cta {
  font-family: 'Jost', sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-navy);
  background: linear-gradient(135deg, #C4A456, #D4B870, #A8883C);
  padding: 0.65rem 1.6rem;
  transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
}

.navbar__cta::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #D4B870, #C4A456);
  opacity: 0;
  transition: opacity 0.35s ease;
}

.navbar__cta:hover::before {
  opacity: 1;
}

.navbar__cta span,
.navbar__cta {
  position: relative;
  z-index: 1;
}

/* Hamburger */
.navbar__hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.navbar__hamburger span {
  display: block;
  width: 24px;
  height: 1.5px;
  background: var(--color-cream-marble);
  transition: all 0.35s ease;
  transform-origin: center;
}

.navbar--scrolled .navbar__hamburger span {
  background: var(--color-navy);
}

.navbar__hamburger.active span:nth-child(1) {
  transform: translateY(6.5px) rotate(45deg);
}
.navbar__hamburger.active span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}
.navbar__hamburger.active span:nth-child(3) {
  transform: translateY(-6.5px) rotate(-45deg);
}

/* Mobile Menu */
.navbar__mobile {
  display: none;
  flex-direction: column;
  background: var(--color-cream-marble);
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.navbar__mobile--open {
  max-height: 500px;
}

.navbar__mobile nav {
  display: flex;
  flex-direction: column;
  padding: 1.5rem 2.5rem 2rem;
  gap: 1.25rem;
  border-top: 1px solid rgba(196, 164, 86, 0.2);
}

.navbar__mobile-link {
  font-family: 'Jost', sans-serif;
  font-size: 0.9rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-navy);
  transition: color 0.3s ease;
}

.navbar__mobile-link:hover {
  color: var(--color-gold);
}

.navbar__mobile-cta {
  display: inline-block;
  font-family: 'Jost', sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-navy);
  background: linear-gradient(135deg, #C4A456, #D4B870);
  padding: 0.85rem 2rem;
  text-align: center;
  margin-top: 0.5rem;
}

@media (max-width: 900px) {
  .navbar__nav { display: none; }
  .navbar__hamburger { display: flex; }
  .navbar__mobile { display: flex; }
}
</style>
