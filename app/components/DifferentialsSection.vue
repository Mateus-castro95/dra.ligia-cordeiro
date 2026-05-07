<template>
  <section id="diferenciais" class="diff" ref="sectionRef">
    <!-- Background decorativo -->
    <div class="diff__bg-text" aria-hidden="true">EXCELÊNCIA</div>

    <div class="diff__inner">
      <div class="diff__left" :class="{ 'is-visible': visible }">
        <span class="diff__eyebrow">Por que nos escolher</span>
        <h2 class="diff__title">Uma experiência<br><em>verdadeiramente</em><br>exclusiva</h2>
        <div class="diff__gold-line" aria-hidden="true"></div>
        <p class="diff__lead">
          Cada detalhe do nosso atendimento foi pensado para que você se sinta única, cuidada e em plena confiança — do primeiro contato ao resultado final.
        </p>
        <a href="https://wa.me/5547997506989" target="_blank" rel="noopener" class="diff__cta" id="diff-cta">
          Agende sua avaliação
        </a>
      </div>

      <div class="diff__right">
        <div
          v-for="(item, i) in items"
          :key="item.title"
          class="diff__item"
          :class="{ 'is-visible': visible }"
          :style="{ transitionDelay: `${0.15 + i * 0.12}s` }"
        >
          <div class="diff__item-num" aria-hidden="true">{{ String(i + 1).padStart(2, '0') }}</div>
          <div class="diff__item-content">
            <h3 class="diff__item-title">{{ item.title }}</h3>
            <p class="diff__item-desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
const visible = ref(false)
const sectionRef = ref<HTMLElement | null>(null)

const items = [
  {
    title: 'Atendimento Individualizado',
    desc: 'Cada consulta é única. Escutamos, analisamos e criamos um plano personalizado que respeita sua história e seus objetivos.',
  },
  {
    title: 'Resultados Naturais',
    desc: 'Nossa filosofia é realçar o que há de mais belo em você — nunca alterar, sempre revelar. Resultados que parecem parte de você.',
  },
  {
    title: 'Tecnologia de Ponta',
    desc: 'Trabalhamos com os equipamentos e insumos mais avançados do mercado, garantindo segurança, eficácia e conforto em cada procedimento.',
  },
  {
    title: 'Experiência Única',
    desc: 'Do ambiente acolhedor ao pós-procedimento cuidadoso, cada etapa foi desenhada para ser uma experiência memorável e transformadora.',
  },
]

let observer: IntersectionObserver | null = null
onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    if (entries[0]?.isIntersecting) { visible.value = true; observer?.disconnect() }
  }, { threshold: 0.12 })
  if (sectionRef.value) observer.observe(sectionRef.value)
})
onUnmounted(() => observer?.disconnect())
</script>

<style scoped>
.diff {
  position: relative;
  padding: 9rem 2.5rem;
  background: var(--color-navy);
  overflow: hidden;
}

.diff__bg-text {
  position: absolute;
  bottom: -2%;
  right: -2%;
  font-family: 'Cormorant SC', serif;
  font-size: clamp(6rem, 14vw, 16rem);
  font-weight: 700;
  color: rgba(255,255,255,0.025);
  letter-spacing: 0.08em;
  pointer-events: none;
  user-select: none;
  line-height: 1;
  white-space: nowrap;
}

.diff__inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 6rem;
  align-items: start;
}

/* Left */
.diff__left {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  position: sticky;
  top: 6rem;
  opacity: 0; transform: translateX(-30px);
  transition: opacity 1s ease, transform 1s cubic-bezier(.25,.46,.45,.94);
}
.diff__left.is-visible { opacity: 1; transform: translateX(0); }

.diff__eyebrow {
  font-family: 'Jost', sans-serif;
  font-size: 0.62rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--color-gold);
}
.diff__title {
  font-family: 'Cormorant SC', serif;
  font-size: clamp(2rem, 3.5vw, 3rem);
  font-weight: 400;
  color: var(--color-cream-marble);
  line-height: 1.2;
}
.diff__title em { font-style: italic; color: var(--color-gold-light); }
.diff__gold-line {
  width: 40px; height: 1px;
  background: linear-gradient(90deg, var(--color-gold), transparent);
}
.diff__lead {
  font-family: 'Cormorant', serif;
  font-size: 1.08rem;
  color: rgba(247,244,239,0.65);
  line-height: 1.85;
  max-width: 380px;
}
.diff__cta {
  display: inline-block;
  align-self: flex-start;
  font-family: 'Jost', sans-serif;
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-navy);
  background: linear-gradient(135deg, #C4A456, #D4B870);
  padding: 0.9rem 2rem;
  font-weight: 600;
  transition: all 0.4s cubic-bezier(.25,.46,.45,.94);
}
.diff__cta:hover { box-shadow: 0 8px 28px rgba(196,164,86,0.4); transform: translateY(-2px); }

/* Right items */
.diff__right {
  display: flex;
  flex-direction: column;
  gap: 0;
}
.diff__item {
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 1.5rem;
  align-items: start;
  padding: 2.2rem 0;
  border-bottom: 1px solid rgba(196,164,86,0.12);
  opacity: 0; transform: translateX(30px);
  transition: opacity 0.8s ease, transform 0.8s cubic-bezier(.25,.46,.45,.94);
}
.diff__item:first-child { border-top: 1px solid rgba(196,164,86,0.12); }
.diff__item.is-visible { opacity: 1; transform: translateX(0); }

.diff__item-num {
  font-family: 'Cormorant SC', serif;
  font-size: 2.2rem;
  color: rgba(196,164,86,0.18);
  font-weight: 700;
  line-height: 1;
  padding-top: 0.1rem;
  transition: color 0.4s ease;
}
.diff__item:hover .diff__item-num { color: rgba(196,164,86,0.5); }

.diff__item-content { display: flex; flex-direction: column; gap: 0.6rem; }
.diff__item-title {
  font-family: 'Cormorant SC', serif;
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--color-cream);
  letter-spacing: 0.03em;
  transition: color 0.4s ease;
}
.diff__item:hover .diff__item-title { color: var(--color-gold-light); }
.diff__item-desc {
  font-family: 'Cormorant', serif;
  font-size: 1rem;
  color: rgba(247,244,239,0.55);
  line-height: 1.75;
}

@media (max-width: 900px) {
  .diff__inner { grid-template-columns: 1fr; gap: 3.5rem; }
  .diff__left { position: static; }
  .diff__cta { align-self: center; }
  .diff__bg-text {
    right: auto;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    font-size: clamp(2.5rem, 12vw, 7rem);
    letter-spacing: 0.08em;
    white-space: nowrap;
  }
}
</style>
