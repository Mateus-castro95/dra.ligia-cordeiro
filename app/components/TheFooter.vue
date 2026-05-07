<template>
  <footer class="footer" role="contentinfo">
    <div class="footer__inner">
      <div class="footer__brand">
        <span class="footer__logo-script">Dra. Lígia Cordeiro</span>
        <span class="footer__logo-sub">Biomédica · Dermaticista & Cosmetóloga</span>
      </div>

      <nav class="footer__nav" aria-label="Rodapé">
        <a v-for="item in navItems" :key="item.href" :href="item.href" class="footer__link">{{ item.label }}</a>
      </nav>

      <div class="footer__social">
        <a href="https://instagram.com/dra.ligiacord" target="_blank" rel="noopener" class="footer__social-link" aria-label="Instagram">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        </a>
        <a href="https://wa.me/5547997506989" target="_blank" rel="noopener" class="footer__social-link" aria-label="WhatsApp">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </a>
      </div>
    </div>

    <div class="footer__bottom">
      <p>&copy; {{ year }} Dra. Lígia Cordeiro. Todos os direitos reservados.</p>
      <p class="footer__dev">Canoinhas – SC · (47) 99750-6989</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
const navItems = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
]
</script>

<style scoped>
.footer {
  background: var(--color-navy-dark);
  border-top: 1px solid rgba(196,164,86,0.15);
}
.footer__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3.5rem 2.5rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
}
.footer__brand { display: flex; flex-direction: column; gap: 0.3rem; }
.footer__logo-script {
  font-family: 'Great Vibes', cursive;
  font-size: 2rem;
  color: var(--color-cream-marble);
  line-height: 1;
}
.footer__logo-sub {
  font-family: 'Jost', sans-serif;
  font-size: 0.55rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-gold-muted);
}
.footer__nav {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}
.footer__link {
  font-family: 'Jost', sans-serif;
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  text-decoration: none;
  color: rgba(247,244,239,0.45);
  transition: color 0.3s ease;
}
.footer__link:hover { color: var(--color-gold-light); }

.footer__social { display: flex; gap: 1rem; }
.footer__social-link {
  width: 38px; height: 38px;
  border: 1px solid rgba(196,164,86,0.2);
  color: rgba(247,244,239,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.35s ease;
}
.footer__social-link:hover {
  border-color: var(--color-gold);
  color: var(--color-gold);
  background: rgba(196,164,86,0.06);
}

.footer__bottom {
  border-top: 1px solid rgba(255,255,255,0.05);
  padding: 1.4rem 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}
.footer__bottom p {
  font-family: 'Jost', sans-serif;
  font-size: 0.62rem;
  letter-spacing: 0.08em;
  color: rgba(247,244,239,0.25);
}
.footer__dev { color: rgba(196,164,86,0.35) !important; }

@media (max-width: 700px) {
  .footer__inner { flex-direction: column; text-align: center; }
  .footer__nav { justify-content: center; }
  .footer__social { justify-content: center; }
  .footer__bottom { justify-content: center; text-align: center; }
}
</style>
