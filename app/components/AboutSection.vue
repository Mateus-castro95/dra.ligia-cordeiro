<template>
  <section id="sobre" class="about" ref="sectionRef">
    <div class="about__inner">
      <!-- Visual Side -->
      <div class="about__visual" :class="{ 'is-visible': visible }">
        <div class="about__img-frame">
          <div class="about__img-main">
            <img
              src="/img/sobre-dra.jpg"
              alt="Dra. Lígia Cordeiro — Biomédica, Dermaticista e Cosmetóloga"
              loading="lazy"
            />
          </div>
          <div class="about__img-accent" aria-hidden="true"></div>
          <div class="about__img-badge">
            <span class="about__img-badge-number">+5</span>
            <span class="about__img-badge-text">Anos de<br>Experiência</span>
          </div>
        </div>
      </div>

      <!-- Text Side -->
      <div class="about__text" :class="{ 'is-visible': visible }">
        <div class="about__eyebrow">Sobre</div>
        <h2 class="about__title">
          Cuidado que<br>
          <em>transforma</em> com ciência
        </h2>
        <div class="about__gold-line" aria-hidden="true"></div>

        <p class="about__desc">
          A <strong>Dra. Lígia Cordeiro</strong> é biomédica especializada em estética, dermaticista e cosmetóloga com formação completa e dedicação total ao bem-estar de cada paciente.
        </p>
        <p class="about__desc">
          Com uma abordagem única que combina tecnologia avançada e olhar artístico, ela realiza procedimentos que respeitam a individualidade de cada rosto — proporcionando resultados naturais, equilibrados e duradouros.
        </p>

        <ul class="about__pillars">
          <li v-for="pillar in pillars" :key="pillar.title" class="about__pillar">
            <span class="about__pillar-icon" aria-hidden="true">{{ pillar.icon }}</span>
            <div>
              <strong>{{ pillar.title }}</strong>
              <span>{{ pillar.desc }}</span>
            </div>
          </li>
        </ul>

        <a href="https://wa.me/5547997506989" target="_blank" rel="noopener" class="about__cta" id="about-cta">
          Agendar Consulta
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
const visible = ref(false)
const sectionRef = ref<HTMLElement | null>(null)

const pillars = [
  { icon: '✦', title: 'Atendimento Personalizado', desc: 'Cada paciente recebe um plano único.' },
  { icon: '✦', title: 'Tecnologia de Ponta', desc: 'Equipamentos e técnicas mais avançadas.' },
  { icon: '✦', title: 'Resultados Naturais', desc: 'Beleza que respeita sua essência.' },
]

let observer: IntersectionObserver | null = null
onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    if (entries[0]?.isIntersecting) { visible.value = true; observer?.disconnect() }
  }, { threshold: 0.15 })
  if (sectionRef.value) observer.observe(sectionRef.value)
})
onUnmounted(() => observer?.disconnect())
</script>

<style scoped>
.about {
  padding: 8rem 2.5rem;
  background: var(--color-cream-marble);
  overflow: hidden;
}
.about__inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;
}

/* Visual */
.about__visual {
  opacity: 0; transform: translateX(-40px);
  transition: opacity 1s ease, transform 1s cubic-bezier(.25,.46,.45,.94);
}
.about__visual.is-visible { opacity: 1; transform: translateX(0); }
.about__img-frame {
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 440px;
}
.about__img-main {
  position: relative;
  z-index: 2;
  overflow: hidden;
}
.about__img-main img {
  width: 100%;
  aspect-ratio: 4/5;
  object-fit: cover;
  display: block;
  filter: saturate(0.9) contrast(1.03);
  transition: transform 0.8s cubic-bezier(.25,.46,.45,.94);
}
.about__img-main:hover img { transform: scale(1.04); }
.about__img-accent {
  position: absolute;
  bottom: -18px;
  right: -18px;
  width: 75%;
  height: 75%;
  border: 1px solid rgba(196,164,86,0.35);
  z-index: 1;
  pointer-events: none;
}
.about__img-badge {
  position: absolute;
  top: -20px;
  left: -20px;
  z-index: 3;
  background: var(--color-navy);
  padding: 1.2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;
  box-shadow: 0 8px 32px rgba(28,43,58,0.25);
}
.about__img-badge-number {
  font-family: 'Cormorant SC', serif;
  font-size: 2.2rem;
  color: var(--color-gold);
  line-height: 1;
  font-weight: 500;
}
.about__img-badge-text {
  font-family: 'Jost', sans-serif;
  font-size: 0.6rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(247,244,239,0.75);
  text-align: center;
  line-height: 1.4;
}

/* Text */
.about__text {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  opacity: 0; transform: translateX(40px);
  transition: opacity 1s ease 0.2s, transform 1s cubic-bezier(.25,.46,.45,.94) 0.2s;
}
.about__text.is-visible { opacity: 1; transform: translateX(0); }

.about__eyebrow {
  font-family: 'Jost', sans-serif;
  font-size: 0.65rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--color-gold);
}
.about__title {
  font-family: 'Cormorant SC', serif;
  font-size: clamp(2rem, 3.5vw, 3rem);
  font-weight: 400;
  color: var(--color-navy);
  line-height: 1.2;
}
.about__title em { font-style: italic; color: var(--color-gold-dark); }

.about__gold-line {
  width: 48px; height: 1px;
  background: linear-gradient(90deg, var(--color-gold), transparent);
}
.about__desc {
  font-family: 'Cormorant', serif;
  font-size: 1.1rem;
  color: #4a5462;
  line-height: 1.85;
}
.about__desc strong { color: var(--color-navy); font-weight: 600; }

.about__pillars {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem 0;
  border-top: 1px solid rgba(196,164,86,0.18);
  border-bottom: 1px solid rgba(196,164,86,0.18);
}
.about__pillar {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}
.about__pillar-icon {
  color: var(--color-gold);
  font-size: 0.7rem;
  margin-top: 0.2rem;
  flex-shrink: 0;
}
.about__pillar div { display: flex; flex-direction: column; gap: 0.1rem; }
.about__pillar strong {
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-navy);
}
.about__pillar span {
  font-family: 'Cormorant', serif;
  font-size: 0.95rem;
  color: #6a7480;
}

.about__cta {
  display: inline-block;
  align-self: flex-start;
  font-family: 'Jost', sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-navy);
  background: linear-gradient(135deg, #C4A456, #D4B870);
  padding: 1rem 2.2rem;
  transition: all 0.4s cubic-bezier(.25,.46,.45,.94);
  font-weight: 600;
}
.about__cta:hover {
  box-shadow: 0 8px 28px rgba(196,164,86,0.4);
  transform: translateY(-2px);
}

@media (max-width: 900px) {
  .about__inner { grid-template-columns: 1fr; gap: 3rem; }
  .about__visual { max-width: 360px; margin: 0 auto; }
  .about__cta { align-self: center; }
}
</style>
