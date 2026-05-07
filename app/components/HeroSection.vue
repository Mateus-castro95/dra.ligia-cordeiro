<template>
  <section id="hero" class="hero" aria-label="Hero">
    <div class="hero__bg" ref="bgRef">
      <div class="hero__bg-image"></div>
      <div class="hero__overlay"></div>
    </div>

    <div class="hero__ornament hero__ornament--tl" aria-hidden="true"></div>
    <div class="hero__ornament hero__ornament--br" aria-hidden="true"></div>

    <div class="hero__content">
      <div class="hero__badge" :class="{ 'is-visible': visible }">
        <span>Biomédica · Dermaticista & Cosmetóloga</span>
      </div>

      <h1 class="hero__name" :class="{ 'is-visible': visible }">
        Dra. Lígia Cordeiro
      </h1>

      <div class="hero__divider" :class="{ 'is-visible': visible }" aria-hidden="true">
        <span class="hero__divider-line"></span>
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
          <path d="M10 2C10 2 6 6 6 10C6 14 10 18 10 18C10 18 14 14 14 10C14 6 10 2 10 2Z" stroke="#C4A456" stroke-width="1"/>
          <circle cx="10" cy="10" r="2" fill="#C4A456" opacity="0.6"/>
        </svg>
        <span class="hero__divider-line"></span>
      </div>

      <h2 class="hero__headline" :class="{ 'is-visible': visible }">
        Realce sua beleza com<br>
        <em>naturalidade e sofisticação</em>
      </h2>

      <p class="hero__sub" :class="{ 'is-visible': visible }">
        Tecnologia avançada e atendimento personalizado para resultados naturais e duradouros
      </p>

      <div class="hero__actions" :class="{ 'is-visible': visible }">
        <a href="https://wa.me/5547997506989" target="_blank" rel="noopener" class="hero__btn hero__btn--primary" id="hero-cta-primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Agendar Avaliação
        </a>
        <a href="#servicos" class="hero__btn hero__btn--ghost" @click.prevent="scrollTo('#servicos')" id="hero-cta-secondary">
          Conhecer Serviços
        </a>
      </div>
    </div>

    <div class="hero__scroll" :class="{ 'is-visible': visible }" aria-hidden="true">
      <span class="hero__scroll-line"></span>
      <span class="hero__scroll-text">Rolar</span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
const visible = ref(false)
const bgRef = ref<HTMLElement | null>(null)

function scrollTo(href: string) {
  const el = document.querySelector(href)
  if (el) window.scrollTo({ top: (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
}

function handleParallax() {
  const imgEl = bgRef.value?.querySelector('.hero__bg-image') as HTMLElement
  if (imgEl) imgEl.style.transform = `translateY(${window.scrollY * 0.28}px)`
}

onMounted(() => {
  setTimeout(() => { visible.value = true }, 200)
  window.addEventListener('scroll', handleParallax, { passive: true })
})
onUnmounted(() => window.removeEventListener('scroll', handleParallax))
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.hero__bg { position: absolute; inset: 0; overflow: hidden; }
.hero__bg-image {
  position: absolute;
  inset: -12%;
  background-image: url('https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1800&q=90');
  background-size: cover;
  background-position: center 20%;
  will-change: transform;
}
.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(17,30,43,0.85) 0%, rgba(28,43,58,0.7) 50%, rgba(28,43,58,0.45) 100%);
}
.hero__ornament { position: absolute; pointer-events: none; }
.hero__ornament--tl {
  top: 6%; left: 5%;
  width: 160px; height: 160px;
  border-top: 1px solid rgba(196,164,86,0.3);
  border-left: 1px solid rgba(196,164,86,0.3);
}
.hero__ornament--br {
  bottom: 14%; right: 5%;
  width: 100px; height: 100px;
  border-bottom: 1px solid rgba(196,164,86,0.3);
  border-right: 1px solid rgba(196,164,86,0.3);
}
.hero__content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 860px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.4rem;
}
.hero__badge {
  border: 1px solid rgba(196,164,86,0.45);
  padding: 0.4rem 1.3rem;
  margin-bottom: 1.5rem;
  opacity: 0; transform: translateY(18px);
  transition: opacity 0.8s ease 0.1s, transform 0.8s cubic-bezier(.25,.46,.45,.94) 0.1s;
}
.hero__badge.is-visible { opacity: 1; transform: translateY(0); }
.hero__badge span {
  font-family: 'Jost', sans-serif;
  font-size: 0.62rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--color-gold-light);
}
.hero__name {
  font-family: 'Great Vibes', cursive;
  font-size: clamp(3.5rem, 9vw, 7.5rem);
  color: #ffffff;
  line-height: 1;
  text-shadow: 0 2px 30px rgba(0,0,0,0.35);
  opacity: 0; transform: translateY(28px);
  transition: opacity 1s ease 0.35s, transform 1s cubic-bezier(.25,.46,.45,.94) 0.35s;
}
.hero__name.is-visible { opacity: 1; transform: translateY(0); }
.hero__divider {
  display: flex; align-items: center; gap: 1rem;
  width: 100%; max-width: 280px;
  opacity: 0; transition: opacity 0.8s ease 0.55s;
}
.hero__divider.is-visible { opacity: 1; }
.hero__divider-line {
  flex: 1; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(196,164,86,0.55), transparent);
}
.hero__headline {
  font-family: 'Cormorant SC', serif;
  font-size: clamp(1.4rem, 3.2vw, 2.5rem);
  font-weight: 300;
  color: #ffffff;
  letter-spacing: 0.03em;
  line-height: 1.35;
  opacity: 0; transform: translateY(22px);
  transition: opacity 0.9s ease 0.65s, transform 0.9s cubic-bezier(.25,.46,.45,.94) 0.65s;
}
.hero__headline.is-visible { opacity: 1; transform: translateY(0); }
.hero__headline em { font-style: italic; color: var(--color-gold-light); }
.hero__sub {
  font-family: 'Jost', sans-serif;
  font-size: clamp(0.82rem, 1.4vw, 0.95rem);
  letter-spacing: 0.05em;
  color: rgba(247,244,239,0.72);
  line-height: 1.9;
  max-width: 520px;
  opacity: 0; transform: translateY(18px);
  transition: opacity 0.8s ease 0.85s, transform 0.8s cubic-bezier(.25,.46,.45,.94) 0.85s;
}
.hero__sub.is-visible { opacity: 1; transform: translateY(0); }
.hero__actions {
  display: flex; gap: 1.2rem; flex-wrap: wrap; justify-content: center;
  opacity: 0; transform: translateY(18px);
  transition: opacity 0.8s ease 1.05s, transform 0.8s cubic-bezier(.25,.46,.45,.94) 1.05s;
}
.hero__actions.is-visible { opacity: 1; transform: translateY(0); }
.hero__btn {
  display: inline-flex; align-items: center; gap: 0.55rem;
  font-family: 'Jost', sans-serif;
  font-size: 0.75rem; letter-spacing: 0.2em; text-transform: uppercase; text-decoration: none;
  padding: 0.95rem 2rem;
  transition: all 0.4s cubic-bezier(.25,.46,.45,.94);
  position: relative; overflow: hidden;
}
.hero__btn--primary {
  background: linear-gradient(135deg, #C4A456 0%, #D4B870 50%, #A8883C 100%);
  color: var(--color-navy-dark);
  font-weight: 600;
}
.hero__btn--primary:hover { box-shadow: 0 8px 32px rgba(196,164,86,0.45); transform: translateY(-2px); }
.hero__btn--ghost { border: 1px solid rgba(255,255,255,0.45); color: #ffffff; }
.hero__btn--ghost:hover { border-color: var(--color-gold); color: var(--color-gold-light); background: rgba(196,164,86,0.08); }
.hero__scroll {
  position: absolute; bottom: 2.5rem; left: 50%; transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 0.5rem;
  opacity: 0; transition: opacity 0.8s ease 1.5s; z-index: 2;
}
.hero__scroll.is-visible { opacity: 1; }
.hero__scroll-line {
  display: block; width: 1px; height: 44px;
  background: linear-gradient(to bottom, rgba(196,164,86,0.8), transparent);
  animation: scrollPulse 2s ease-in-out infinite;
}
@keyframes scrollPulse { 0%,100%{opacity:.4} 50%{opacity:1} }
.hero__scroll-text {
  font-family: 'Jost', sans-serif; font-size: 0.58rem;
  letter-spacing: 0.3em; text-transform: uppercase; color: rgba(196,164,86,0.65);
}
@media (max-width: 640px) {
  .hero__ornament { display: none; }
  .hero__actions { flex-direction: column; width: 100%; }
  .hero__btn { justify-content: center; }
}
</style>
