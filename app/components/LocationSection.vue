<template>
  <section id="contato" class="location" ref="sectionRef">
    <div class="location__inner">
      <!-- Info -->
      <div class="location__info" :class="{ 'is-visible': visible }">
        <span class="location__eyebrow">Localização</span>
        <h2 class="location__title">Venha nos<br><em>visitar</em></h2>
        <div class="location__gold-line" aria-hidden="true"></div>

        <ul class="location__list">
          <li class="location__item">
              <LucideMapPin :size="18" />

            <div>
              <strong>Endereço</strong>
              <span>Rua Caetano Costa, 748<br>Centro, Canoinhas – SC</span>
            </div>
          </li>
          <li class="location__item">
              <LucidePhone :size="18" />

            <div>
              <strong>Telefone</strong>
              <span>(47) 99750-6989</span>
            </div>
          </li>
          <li class="location__item">
              <LucideInstagram :size="18" />

            <div>
              <strong>Instagram</strong>
              <span>@dra.ligiacord</span>
            </div>
          </li>
          <li class="location__item">
              <LucideClock :size="18" />

            <div>
              <strong>Horário</strong>
              <span>Segunda à Sexta: 9h – 18h<br>Sábado: 9h – 13h</span>
            </div>
          </li>
        </ul>

        <a href="https://wa.me/5547997506989" target="_blank" rel="noopener" class="location__whatsapp" id="location-whatsapp">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Falar no WhatsApp
        </a>
      </div>

      <!-- Map -->
      <div class="location__map" :class="{ 'is-visible': visible }">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.2!2d-50.38!3d-26.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRua+Caetano+Costa%2C+748%2C+Centro%2C+Canoinhas+-+SC!5e0!3m2!1spt-BR!2sbr!4v1"
          width="100%"
          height="100%"
          style="border:0;"
          :allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Localização Dra. Lígia Cordeiro — Canoinhas SC"
        ></iframe>
        <div class="location__map-overlay" aria-hidden="true">
          <div class="location__map-pin">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--color-gold)" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { MapPin as LucideMapPin, Phone as LucidePhone, Instagram as LucideInstagram, Clock as LucideClock } from 'lucide-vue-next'
const visible = ref(false)
const sectionRef = ref<HTMLElement | null>(null)

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
.location {
  padding: 8rem 2.5rem;
  background: linear-gradient(180deg, var(--color-cream-warm) 0%, var(--color-cream) 100%);
  overflow: hidden;
}
.location__inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 5rem;
  align-items: start;
}

/* Info */
.location__info {
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  opacity: 0; transform: translateX(-30px);
  transition: opacity 1s ease, transform 1s cubic-bezier(.25,.46,.45,.94);
}
.location__info.is-visible { opacity: 1; transform: translateX(0); }

.location__eyebrow {
  font-family: 'Jost', sans-serif;
  font-size: 0.62rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--color-gold);
}
.location__title {
  font-family: 'Cormorant SC', serif;
  font-size: clamp(2rem, 3.5vw, 3rem);
  font-weight: 400;
  color: var(--color-navy);
  line-height: 1.2;
}
.location__title em { font-style: italic; color: var(--color-gold-dark); }
.location__gold-line { width: 40px; height: 1px; background: linear-gradient(90deg, var(--color-gold), transparent); }

.location__list { list-style: none; display: flex; flex-direction: column; gap: 1.4rem; }
.location__item {
  display: flex;
  align-items: flex-start;
  gap: 1.1rem;
}
.location__item-icon {
  width: 40px; height: 40px;
  background: var(--color-navy);
  color: var(--color-gold);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.location__item div { display: flex; flex-direction: column; gap: 0.25rem; }
.location__item strong {
  font-family: 'Jost', sans-serif;
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-navy);
}
.location__item span {
  font-family: 'Cormorant', serif;
  font-size: 1rem;
  color: #5a6470;
  line-height: 1.5;
}

.location__whatsapp {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-family: 'Jost', sans-serif;
  font-size: 0.73rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-navy);
  background: linear-gradient(135deg, #C4A456, #D4B870);
  padding: 0.95rem 2rem;
  font-weight: 600;
  align-self: flex-start;
  transition: all 0.4s cubic-bezier(.25,.46,.45,.94);
}
.location__whatsapp:hover { box-shadow: 0 8px 28px rgba(196,164,86,0.4); transform: translateY(-2px); }

/* Map */
.location__map {
  height: 480px;
  position: relative;
  overflow: hidden;
  opacity: 0; transform: translateX(30px);
  transition: opacity 1s ease 0.2s, transform 1s cubic-bezier(.25,.46,.45,.94) 0.2s;
  border: 1px solid rgba(196,164,86,0.15);
}
.location__map.is-visible { opacity: 1; transform: translateX(0); }
.location__map iframe { display: block; }
.location__map-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(to bottom, transparent 60%, rgba(240,235,227,0.15) 100%);
}

@media (max-width: 900px) {
  .location__inner { grid-template-columns: 1fr; gap: 3rem; }
  .location__map { height: 320px; }
  .location__whatsapp { align-self: center; }
}
</style>
