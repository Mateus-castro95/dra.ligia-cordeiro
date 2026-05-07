<template>
  <section class="final-cta" ref="sectionRef">
    <div class="final-cta__bg" aria-hidden="true">
      <div class="final-cta__bg-image"></div>
      <div class="final-cta__overlay"></div>
    </div>

    <div class="final-cta__ornament final-cta__ornament--tl" aria-hidden="true"></div>
    <div class="final-cta__ornament final-cta__ornament--br" aria-hidden="true"></div>

    <div class="final-cta__content" :class="{ 'is-visible': visible }">
      <div class="final-cta__icon" aria-hidden="true">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path d="M18 4C18 4 10 10 10 18C10 26 18 32 18 32C18 32 26 26 26 18C26 10 18 4 18 4Z" stroke="#C4A456" stroke-width="1" fill="none"/>
          <path d="M18 10C18 10 14 13 14 18C14 23 18 26 18 26C18 26 22 23 22 18C22 13 18 10 18 10Z" fill="#C4A456" opacity="0.25"/>
          <circle cx="18" cy="18" r="2.5" fill="#C4A456"/>
        </svg>
      </div>

      <h2 class="final-cta__title">
        Agende sua avaliação e descubra<br>
        <em>a melhor versão de você</em>
      </h2>

      <div class="final-cta__divider" aria-hidden="true">
        <span class="final-cta__divider-line"></span>
        <span class="final-cta__divider-diamond">◆</span>
        <span class="final-cta__divider-line"></span>
      </div>

      <p class="final-cta__sub">
        Entre em contato agora e dê o primeiro passo para uma nova experiência de beleza.
      </p>

      <div class="final-cta__actions">
        <a href="https://wa.me/5547997506989" target="_blank" rel="noopener" class="final-cta__btn final-cta__btn--gold" id="final-cta-whatsapp">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Agendar pelo WhatsApp
        </a>
        <a href="https://instagram.com/dra.ligiacord" target="_blank" rel="noopener" class="final-cta__btn final-cta__btn--ghost" id="final-cta-instagram">
          Seguir no Instagram
        </a>
      </div>

      <address class="final-cta__address">
        Rua Caetano Costa, 748 – Centro, Canoinhas – SC &nbsp;·&nbsp; (47) 99750-6989
      </address>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
const visible = ref(false)
const sectionRef = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null
onMounted(() => {
  observer = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) { visible.value = true; observer?.disconnect() }
  }, { threshold: 0.15 })
  if (sectionRef.value) observer.observe(sectionRef.value)
})
onUnmounted(() => observer?.disconnect())
</script>

<style scoped>
.final-cta {
  position: relative;
  padding: 9rem 2.5rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
}
.final-cta__bg { position: absolute; inset: 0; overflow: hidden; }
.final-cta__bg-image {
  position: absolute; inset: -10%;
  background-image: url('https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1600&q=85');
  background-size: cover;
  background-position: center;
  filter: saturate(0.6);
}
.final-cta__overlay {
  position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(17,30,43,0.93) 0%, rgba(28,43,58,0.88) 100%);
}

.final-cta__ornament {
  position: absolute; pointer-events: none;
}
.final-cta__ornament--tl {
  top: 8%; left: 6%;
  width: 120px; height: 120px;
  border-top: 1px solid rgba(196,164,86,0.25);
  border-left: 1px solid rgba(196,164,86,0.25);
}
.final-cta__ornament--br {
  bottom: 8%; right: 6%;
  width: 90px; height: 90px;
  border-bottom: 1px solid rgba(196,164,86,0.25);
  border-right: 1px solid rgba(196,164,86,0.25);
}

.final-cta__content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 760px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;
  opacity: 0; transform: translateY(28px);
  transition: opacity 1s ease, transform 1s cubic-bezier(.25,.46,.45,.94);
}
.final-cta__content.is-visible { opacity: 1; transform: translateY(0); }

.final-cta__icon { opacity: 0.85; }

.final-cta__title {
  font-family: 'Cormorant SC', serif;
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 400;
  color: var(--color-cream-marble);
  line-height: 1.3;
  letter-spacing: 0.02em;
}
.final-cta__title em { font-style: italic; color: var(--color-gold-light); }

.final-cta__divider {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 220px;
}
.final-cta__divider-line {
  flex: 1; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(196,164,86,0.4), transparent);
}
.final-cta__divider-diamond {
  color: var(--color-gold);
  font-size: 0.4rem;
}

.final-cta__sub {
  font-family: 'Cormorant', serif;
  font-size: 1.1rem;
  color: rgba(247,244,239,0.65);
  line-height: 1.75;
  max-width: 460px;
}

.final-cta__actions {
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.final-cta__btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-family: 'Jost', sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 1rem 2.2rem;
  transition: all 0.4s cubic-bezier(.25,.46,.45,.94);
  font-weight: 600;
}
.final-cta__btn--gold {
  background: linear-gradient(135deg, #C4A456, #D4B870);
  color: var(--color-navy-dark);
}
.final-cta__btn--gold:hover { box-shadow: 0 8px 32px rgba(196,164,86,0.45); transform: translateY(-2px); }
.final-cta__btn--ghost {
  border: 1px solid rgba(255,255,255,0.35);
  color: rgba(255,255,255,0.85);
}
.final-cta__btn--ghost:hover { border-color: var(--color-gold); color: var(--color-gold-light); }

.final-cta__address {
  font-family: 'Jost', sans-serif;
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  color: rgba(196,164,86,0.5);
  font-style: normal;
  text-transform: uppercase;
}

@media (max-width: 600px) {
  .final-cta__actions { flex-direction: column; width: 100%; }
  .final-cta__btn { justify-content: center; }
}
</style>
