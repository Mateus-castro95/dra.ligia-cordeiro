<template>
  <section id="servicos" class="services" ref="sectionRef">
    <div class="services__inner">
      <header class="services__header" :class="{ 'is-visible': visible }">
        <span class="services__eyebrow">Especialidades</span>
        <h2 class="services__title">Nossos Serviços</h2>
        <p class="services__sub">Procedimentos personalizados com tecnologia avançada e resultados que realçam sua beleza natural.</p>
      </header>

      <div class="services__grid">
        <article
          v-for="(service, i) in services"
          :key="service.id"
          class="service-card"
          :class="{ 'is-visible': visible }"
          :style="{ transitionDelay: `${0.1 + i * 0.07}s, ${0.1 + i * 0.07}s, 0s` }"
          :id="`service-${service.id}`"
        >
          <div class="service-card__icon" aria-hidden="true">
            <component :is="service.icon" :size="20" stroke-width="1.5" />
          </div>
          <div class="service-card__content">
            <h3 class="service-card__title">{{ service.name }}</h3>
            <p class="service-card__desc">{{ service.desc }}</p>
          </div>
          <div class="service-card__cta">
            <a :href="`https://wa.me/5547997506989?text=Olá! Gostaria de saber mais sobre ${service.name}.`"
               target="_blank" rel="noopener"
               class="service-card__link">
              Saiba mais
              <LucideArrowRight :size="12" />

            </a>
          </div>
          <div class="service-card__accent" aria-hidden="true"></div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { 
  ArrowRight as LucideArrowRight,
  Sparkle,
  Syringe,
  Droplet,
  Smile,
  Sun,
  Feather,
  Zap,
  Sparkles
} from 'lucide-vue-next'

const visible = ref(false)
const sectionRef = ref<HTMLElement | null>(null)


const services = [
  { id: 'harmonizacao', icon: Sparkle, name: 'Harmonização Facial', desc: 'Técnica avançada que equilibra os traços do rosto, realçando a beleza natural com proporção e leveza.' },
  { id: 'botox', icon: Syringe, name: 'Toxina Botulínica (Botox)', desc: 'Suavização de linhas de expressão com precisão milimétrica, preservando a naturalidade dos movimentos.' },
  { id: 'hialuronico', icon: Droplet, name: 'Ácido Hialurônico', desc: 'Preenchimento, hidratação profunda e restauração do volume facial com resultados naturais e duradouros.' },
  { id: 'labial', icon: Smile, name: 'Preenchimento Labial', desc: 'Lábios mais definidos, volumosos e simétricos — com resultados sutis e totalmente naturais.' },
  { id: 'bioestimuladores', icon: Sun, name: 'Bioestimuladores', desc: 'Estimulam a produção natural de colágeno, melhorando a textura, firmeza e elasticidade da pele.' },
  { id: 'limpeza', icon: Feather, name: 'Limpeza de Pele', desc: 'Limpeza profissional que desintoxica, purifica e renova a pele, deixando-a mais saudável e luminosa.' },
  { id: 'laser', icon: Zap, name: 'Depilação a Laser', desc: 'Remoção definitiva dos pelos de forma segura, eficaz e indolor com tecnologia de última geração.' },
  { id: 'corporal', icon: Sparkles, name: 'Tratamentos Corporais', desc: 'Procedimentos estéticos completos para modelar, firmar e rejuvenescer a pele do corpo.' },
]

let observer: IntersectionObserver | null = null
onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    if (entries[0]?.isIntersecting) { visible.value = true; observer?.disconnect() }
  }, { threshold: 0.1 })
  if (sectionRef.value) observer.observe(sectionRef.value)
})
onUnmounted(() => observer?.disconnect())
</script>

<style scoped>
.services {
  padding: 8rem 2.5rem;
  background: linear-gradient(180deg, var(--color-cream-warm) 0%, var(--color-cream) 100%);
  overflow: hidden;
}
.services__inner { max-width: 1240px; margin: 0 auto; }

.services__header {
  text-align: center;
  max-width: 580px;
  margin: 0 auto 5rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
  opacity: 0; transform: translateY(24px);
  transition: opacity 0.9s ease, transform 0.9s cubic-bezier(.25,.46,.45,.94);
}
.services__header.is-visible { opacity: 1; transform: translateY(0); }

.services__eyebrow {
  font-family: 'Jost', sans-serif;
  font-size: 0.65rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--color-gold);
}
.services__title {
  font-family: 'Cormorant SC', serif;
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 400;
  color: var(--color-navy);
  line-height: 1.15;
}
.services__sub {
  font-family: 'Cormorant', serif;
  font-size: 1.05rem;
  color: #6a7480;
  line-height: 1.75;
}

/* Grid */
.services__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5px;
}

/* Card */
.service-card {
  position: relative;
  background: var(--color-cream-marble);
  padding: 2.4rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  overflow: hidden;
  cursor: default;
  opacity: 0; transform: translateY(30px);
  transition: opacity 0.7s ease, transform 0.7s cubic-bezier(.25,.46,.45,.94), background 0.25s ease;

}
.service-card.is-visible { opacity: 1; transform: translateY(0); }
.service-card:hover { background: var(--color-navy); }
.service-card:hover .service-card__icon,
.service-card:hover .service-card__title,
.service-card:hover .service-card__desc { color: rgba(247,244,239,0.9); }
.service-card:hover .service-card__link { color: var(--color-gold-light); }
.service-card:hover .service-card__accent { opacity: 1; }

.service-card__icon {
  color: var(--color-gold);
  transition: color 0.25s ease;

  display: flex;
}

.service-card__content { flex: 1; display: flex; flex-direction: column; gap: 0.7rem; }

.service-card__title {
  font-family: 'Cormorant SC', serif;
  font-size: 1.05rem;
  font-weight: 500;
  color: var(--color-navy);
  letter-spacing: 0.04em;
  transition: color 0.25s ease;

}
.service-card__desc {
  font-family: 'Cormorant', serif;
  font-size: 0.98rem;
  color: #6a7480;
  line-height: 1.7;
  transition: color 0.25s ease;

}

.service-card__cta { margin-top: auto; }
.service-card__link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: 'Jost', sans-serif;
  font-size: 0.68rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gold-dark);
  transition: color 0.25s ease, gap 0.25s ease;

}
.service-card__link:hover { gap: 0.7rem; }

.service-card__accent {
  position: absolute;
  bottom: 0; left: 0;
  width: 100%; height: 2px;
  background: linear-gradient(90deg, var(--color-gold-dark), var(--color-gold-light));
  opacity: 0;
  transition: opacity 0.25s ease;

}

@media (max-width: 1100px) {
  .services__grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 768px) {
  .services__grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 500px) {
  .services__grid { grid-template-columns: 1fr; }
}
</style>
