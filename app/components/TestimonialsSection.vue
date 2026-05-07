<template>
  <section id="depoimentos" class="testimonials" ref="sectionRef">
    <div class="testimonials__inner">
      <header class="testimonials__header" :class="{ 'is-visible': visible }">
        <span class="testimonials__eyebrow">Depoimentos</span>
        <h2 class="testimonials__title">O que dizem<br>nossas pacientes</h2>
      </header>

      <div class="testimonials__carousel">
        <div class="testimonials__track" :style="{ transform: `translateX(-${active * 100}%)` }">
          <article
            v-for="(t, i) in testimonials"
            :key="i"
            class="testimonial"
            :class="{ 'is-visible': visible }"
            :style="{ transitionDelay: `${0.1 + i * 0.1}s` }"
            :aria-hidden="i !== active"
          >
            <div class="testimonial__quote" aria-hidden="true">"</div>
            <p class="testimonial__text">{{ t.text }}</p>
            <footer class="testimonial__footer">
              <div class="testimonial__author-info">
                <div class="testimonial__avatar">
                  <img :src="t.avatar" :alt="t.name" loading="lazy" />
                </div>
                <div class="testimonial__author">
                  <strong class="testimonial__name">{{ t.name }}</strong>
                  <span class="testimonial__tag">{{ t.tag }}</span>
                </div>
              </div>
              <div class="testimonial__stars" aria-label="5 estrelas">
                <span v-for="s in 5" :key="s">★</span>
              </div>
            </footer>
          </article>
        </div>

        <!-- Controls -->
        <div class="testimonials__controls" :class="{ 'is-visible': visible }">
          <button
            v-for="(_, i) in testimonials"
            :key="i"
            class="testimonials__dot"
            :class="{ active: i === active }"
            @click="active = i"
            :aria-label="`Depoimento ${i + 1}`"
          ></button>
        </div>

        <div class="testimonials__nav">
          <button class="testimonials__arrow" @click="prev" aria-label="Anterior">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M11 4L6 9L11 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <button class="testimonials__arrow" @click="next" aria-label="Próximo">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M7 4L12 9L7 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
const visible = ref(false)
const active = ref(0)
const sectionRef = ref<HTMLElement | null>(null)

const testimonials = [
  {
    text: 'Perfeita! Excelente profissional! Atenção e cuidado em cada etapa... Não é apenas um procedimento é uma experiência! Fiz Botox, Skinbooster e reposição de vitaminas. Recomendo e retornarei para novos procedimentos!',
    name: 'Eduardo C. Lichtenfels',
    tag: 'Editado 3 meses atrás',
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjVOeWiDwHaVx05VzPp-fbhJbIetJO1NPJ5ILGfgDvEBqdrA20Eg=w72-h72-p-rp-mo-br100'
  },
  {
    text: 'A Dra Ligia é uma profissional impecável, sempre muito atenciosa e cuidadosa com cada procedimento que realizamos. Sempre buscou realçar os melhores pontos do meu rosto, deixando muito mais bonito e harmônico. Uma harmonização facial respeitando a minha essência! Indico de olhos fechados 🥰',
    name: 'Soraia Steilein',
    tag: '3 meses atrás',
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjWLNqGiGB0OMWMtg_4qr_u9X7SsrummJjksjfqiGd-fC7rUuwpP=w72-h72-p-rp-mo-br100'
  },
  {
    text: 'Atendimento personalizado, resultados incríveis. Super recomendo',
    name: 'Helim Cassiani',
    tag: '3 meses atrás',
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjWGmUi5FANi8gDhwRQDooyBbNQuW1YNAef7mNZrtzNp_Inc1CQA=w72-h72-p-rp-mo-ba3-br100'
  },
]

function next() { active.value = (active.value + 1) % testimonials.length }
function prev() { active.value = (active.value - 1 + testimonials.length) % testimonials.length }

let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    if (entries[0]?.isIntersecting) { visible.value = true; observer?.disconnect() }
  }, { threshold: 0.1 })
  if (sectionRef.value) observer.observe(sectionRef.value)
})
onUnmounted(() => {
  observer?.disconnect()
})
</script>

<style scoped>
.testimonials {
  padding: 8rem 2.5rem;
  background: var(--color-cream-marble);
  overflow: hidden;
}
.testimonials__inner { max-width: 860px; margin: 0 auto; }

.testimonials__header {
  text-align: center;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  opacity: 0; transform: translateY(20px);
  transition: opacity 0.9s ease, transform 0.9s cubic-bezier(.25,.46,.45,.94);
}
.testimonials__header.is-visible { opacity: 1; transform: translateY(0); }
.testimonials__eyebrow {
  font-family: 'Jost', sans-serif;
  font-size: 0.62rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--color-gold);
}
.testimonials__title {
  font-family: 'Cormorant SC', serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 400;
  color: var(--color-navy);
  line-height: 1.2;
}

.testimonials__carousel {
  position: relative;
  overflow: hidden;
}

.testimonials__track {
  display: flex;
  transition: transform 0.7s cubic-bezier(.25,.46,.45,.94);
}

.testimonial {
  min-width: 100%;
  padding: 3.5rem 3.5rem 2.8rem;
  background: var(--color-cream);
  border: 1px solid rgba(196,164,86,0.15);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  opacity: 0;
  transition: opacity 0.6s ease;
}
.testimonial.is-visible { opacity: 1; }

.testimonial__quote {
  font-family: 'Great Vibes', cursive;
  font-size: 6rem;
  color: var(--color-gold);
  line-height: 0.5;
  opacity: 0.35;
  user-select: none;
}
.testimonial__text {
  font-family: 'Cormorant', serif;
  font-size: clamp(1.1rem, 2vw, 1.35rem);
  color: var(--color-navy);
  line-height: 1.8;
  font-style: italic;
}
.testimonial__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(196,164,86,0.18);
  flex-wrap: wrap;
}
.testimonial__author-info {
  display: flex;
  align-items: center;
  gap: 0.9rem;
}
.testimonial__avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  background: var(--color-sand);
  border: 1px solid rgba(196,164,86,0.25);
  flex-shrink: 0;
}
.testimonial__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.testimonial__stars { color: var(--color-gold); font-size: 0.85rem; letter-spacing: 2px; }
.testimonial__author { display: flex; flex-direction: column; gap: 0.15rem; align-items: flex-start; }
.testimonial__name {
  font-family: 'Cormorant SC', serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-navy);
  letter-spacing: 0.06em;
}
.testimonial__tag {
  font-family: 'Jost', sans-serif;
  font-size: 0.6rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-gold-dark);
}

.testimonials__controls {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
  opacity: 0; transition: opacity 0.8s ease 0.5s;
}
.testimonials__controls.is-visible { opacity: 1; }
.testimonials__dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--color-sand);
  border: none;
  cursor: pointer;
  transition: all 0.35s ease;
  padding: 0;
}
.testimonials__dot.active {
  background: var(--color-gold);
  width: 24px;
  border-radius: 3px;
}

.testimonials__nav {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  pointer-events: none;
  padding: 0 0.75rem;
}
.testimonials__arrow {
  pointer-events: all;
  background: var(--color-cream-marble);
  border: 1px solid rgba(196,164,86,0.25);
  color: var(--color-navy);
  width: 44px; height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.35s ease;
}
.testimonials__arrow:hover {
  background: var(--color-navy);
  color: var(--color-gold-light);
  border-color: var(--color-navy);
}

@media (max-width: 600px) {
  .testimonial { padding: 2.5rem 1.8rem 2rem; }
  .testimonials__nav { display: none; }
}
</style>
