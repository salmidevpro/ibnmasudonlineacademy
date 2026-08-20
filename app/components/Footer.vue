<script setup lang="ts">
const whatsappMessage = encodeURIComponent(
  'Assalamu Alaikum. I would like to enquire about learning at IBN MAS\'UD ONLINE ACADEMY.'
)

const whatsappUrl = `https://wa.me/2348074113418?text=${whatsappMessage}`

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Who Can Join', to: '/#who-can-join' },
  { label: 'Why Choose Us', to: '/#why-choose-us' },
  { label: 'Enrol', to: '/enrol' }
]

const learningLinks = [
  { label: 'Our Programmes', to: '/programmes' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Student Progress', to: '/student-progress' },
  { label: 'Contact Us', to: '/contact' }
]
</script>

<template>
  <footer class="relative overflow-hidden bg-[#073b29] text-white">
    <!-- =========================================
         FINAL CTA
         ========================================= -->
    <section class="relative border-b border-white/10">
      <!-- Decorative glow -->
      <div
        aria-hidden="true"
        class="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#d8c98b]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        class="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-white/[0.035] blur-3xl"
      />

      <!-- Subtle pattern -->
      <div
        aria-hidden="true"
        class="footer-pattern pointer-events-none absolute inset-0 opacity-[0.035]"
      />

      <UContainer>
        <div class="relative py-20 sm:py-24 lg:py-28">
          <div class="mx-auto max-w-4xl text-center">
            <!-- Label -->
            <div
              class="footer-reveal inline-flex items-center gap-3 rounded-full border border-[#f4e9ae]/20 bg-white/[0.04] px-4 py-2"
            >
              <span class="h-1.5 w-1.5 rounded-full bg-[#f4e9ae]" />

              <span
                class="text-[10px] font-bold uppercase tracking-[0.22em] text-[#f4e9ae] sm:text-xs"
              >
                Begin Your Journey
              </span>
            </div>

            <!-- Heading -->
            <h2
              class="footer-reveal footer-delay-1 mt-6 font-serif text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl"
            >
              Ready to begin your
              <span class="text-[#f4e9ae]">
                learning journey?
              </span>
            </h2>

            <!-- Description -->
            <p
              class="footer-reveal footer-delay-2 mx-auto mt-5 max-w-2xl text-base leading-8 text-white/65 sm:text-lg"
            >
              Start learning Qur'an, Tajwīd, Arabic and Islamic knowledge
              through structured online classes designed around your needs.
            </p>

            <!-- Buttons -->
            <div
              class="footer-reveal footer-delay-3 mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <NuxtLink
                to="/enrol"
                class="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#f4e9ae] px-7 py-4 text-sm font-bold text-[#073b29] shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white sm:w-auto"
              >
                <span>Start Your Journey</span>

                <span
                  class="flex h-7 w-7 items-center justify-center rounded-full bg-[#073b29]/10 transition-all duration-300 group-hover:bg-[#073b29] group-hover:text-[#f4e9ae]"
                >
                  <UIcon
                    name="i-lucide-arrow-right"
                    class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </span>
              </NuxtLink>

              <a
                :href="whatsappUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.05] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#f4e9ae]/50 hover:bg-white/10 sm:w-auto"
              >
                <UIcon
                  name="i-lucide-message-circle"
                  class="h-5 w-5 text-[#f4e9ae]"
                />

                Talk to an Adviser
              </a>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- =========================================
         MAIN FOOTER
         ========================================= -->
    <section>
      <UContainer>
        <div
          class="grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr] lg:gap-10"
        >
          <!-- Brand -->
          <div>
            <!-- Logo -->
            <NuxtLink
              to="/"
              class="inline-flex items-center"
              aria-label="IBN MAS'UD ONLINE ACADEMY home"
            >
              <span
                class="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-2 border-[#f4e9ae]/30 bg-white shadow-lg shadow-black/10 sm:h-[72px] sm:w-[72px]"
              >
                <img
                  src="/images/ibn-masud-online-academy-logo.jpeg"
                  alt="IBN MAS'UD ONLINE ACADEMY logo"
                  width="72"
                  height="72"
                  loading="lazy"
                  decoding="async"
                  class="h-full w-full object-cover"
                />
              </span>
            </NuxtLink>

            <!-- Academy name -->
            <h3
              class="mt-5 max-w-xs font-serif text-2xl font-semibold leading-tight text-white"
            >
              IBN MAS'UD
              <span class="block text-[#f4e9ae]">
                ONLINE ACADEMY
              </span>
            </h3>

            <p
              class="mt-4 max-w-sm text-sm leading-7 text-white/55"
            >
              Quality online Qur'an, Tajwīd, Arabic and Islamic education
              for children, teenagers, university students and adults.
            </p>

            <!-- WhatsApp -->
            <a
              :href="whatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/75 transition-colors duration-300 hover:text-[#f4e9ae]"
            >
              <UIcon
                name="i-lucide-message-circle"
                class="h-4 w-4 text-[#f4e9ae]"
              />

              Talk to us on WhatsApp

              <UIcon
                name="i-lucide-arrow-up-right"
                class="h-3.5 w-3.5"
              />
            </a>
          </div>

          <!-- Quick Links -->
          <div>
            <h4
              class="text-xs font-bold uppercase tracking-[0.2em] text-[#f4e9ae]"
            >
              Quick Links
            </h4>

            <nav class="mt-5 flex flex-col gap-3.5">
              <NuxtLink
                v-for="link in quickLinks"
                :key="link.label"
                :to="link.to"
                class="group flex w-fit items-center gap-2 text-sm text-white/55 transition-colors duration-300 hover:text-white"
              >
                <span
                  class="h-px w-0 bg-[#f4e9ae] transition-all duration-300 group-hover:w-3"
                />

                {{ link.label }}
              </NuxtLink>
            </nav>
          </div>

          <!-- Learning -->
          <div>
            <h4
              class="text-xs font-bold uppercase tracking-[0.2em] text-[#f4e9ae]"
            >
              Learning
            </h4>

            <nav class="mt-5 flex flex-col gap-3.5">
              <NuxtLink
                v-for="link in learningLinks"
                :key="link.label"
                :to="link.to"
                class="group flex w-fit items-center gap-2 text-sm text-white/55 transition-colors duration-300 hover:text-white"
              >
                <span
                  class="h-px w-0 bg-[#f4e9ae] transition-all duration-300 group-hover:w-3"
                />

                {{ link.label }}
              </NuxtLink>
            </nav>
          </div>

          <!-- Contact -->
          <div>
            <h4
              class="text-xs font-bold uppercase tracking-[0.2em] text-[#f4e9ae]"
            >
              Get In Touch
            </h4>

            <div class="mt-5 space-y-4">
              <!-- WhatsApp -->
              <a
                :href="whatsappUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="group flex items-start gap-3"
              >
                <span
                  class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] transition-colors duration-300 group-hover:bg-[#f4e9ae]/10"
                >
                  <UIcon
                    name="i-lucide-message-circle"
                    class="h-4 w-4 text-[#f4e9ae]"
                  />
                </span>

                <span>
                  <span class="block text-xs text-white/35">
                    WhatsApp
                  </span>

                  <span
                    class="mt-0.5 block text-sm font-medium text-white/70 transition-colors duration-300 group-hover:text-white"
                  >
                    +234 807 411 3418
                  </span>
                </span>
              </a>

              <!-- Email -->
              <a
                href="mailto:info@ibnmasudonlineacademy.com"
                class="group flex items-start gap-3"
              >
                <span
                  class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] transition-colors duration-300 group-hover:bg-[#f4e9ae]/10"
                >
                  <UIcon
                    name="i-lucide-mail"
                    class="h-4 w-4 text-[#f4e9ae]"
                  />
                </span>

                <span>
                  <span class="block text-xs text-white/35">
                    Email
                  </span>

                  <span
                    class="mt-0.5 block break-all text-sm font-medium text-white/70 transition-colors duration-300 group-hover:text-white"
                  >
                    info@ibnmasudonlineacademy.com
                  </span>
                </span>
              </a>

              <!-- Online -->
              <div class="flex items-start gap-3">
                <span
                  class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.06]"
                >
                  <UIcon
                    name="i-lucide-globe-2"
                    class="h-4 w-4 text-[#f4e9ae]"
                  />
                </span>

                <span>
                  <span class="block text-xs text-white/35">
                    Learning
                  </span>

                  <span class="mt-0.5 block text-sm font-medium text-white/70">
                    100% Online
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- =========================================
         BOTTOM BAR
         ========================================= -->
    <div class="border-t border-white/10">
      <UContainer>
        <div
          class="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p class="text-xs leading-5 text-white/35">
            © {{ new Date().getFullYear() }} IBN MAS'UD ONLINE ACADEMY.
            All rights reserved.
          </p>

          <div class="flex items-center gap-5">
            <NuxtLink
              to="/privacy"
              class="text-xs text-white/35 transition-colors duration-300 hover:text-white/70"
            >
              Privacy
            </NuxtLink>

            <span class="h-3 w-px bg-white/10" />

            <NuxtLink
              to="/terms"
              class="text-xs text-white/35 transition-colors duration-300 hover:text-white/70"
            >
              Terms
            </NuxtLink>

            <span class="h-3 w-px bg-white/10" />

            <a
              :href="whatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact IBN MAS'UD ONLINE ACADEMY on WhatsApp"
              class="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/45 transition-all duration-300 hover:border-[#f4e9ae]/40 hover:bg-[#f4e9ae]/10 hover:text-[#f4e9ae]"
            >
              <UIcon
                name="i-lucide-message-circle"
                class="h-4 w-4"
              />
            </a>
          </div>
        </div>
      </UContainer>
    </div>
  </footer>
</template>

<style scoped>
/* =========================================
   FOOTER PATTERN
   ========================================= */

.footer-pattern {
  background-image:
    linear-gradient(
      30deg,
      rgba(244, 233, 174, 0.5) 12%,
      transparent 12.5%,
      transparent 87%,
      rgba(244, 233, 174, 0.5) 87.5%,
      rgba(244, 233, 174, 0.5)
    ),
    linear-gradient(
      150deg,
      rgba(244, 233, 174, 0.5) 12%,
      transparent 12.5%,
      transparent 87%,
      rgba(244, 233, 174, 0.5) 87.5%,
      rgba(244, 233, 174, 0.5)
    );

  background-size: 42px 72px;
}

/* =========================================
   REVEAL ANIMATION
   ========================================= */

.footer-reveal {
  opacity: 0;
  transform: translateY(20px);
  filter: blur(5px);

  animation: footer-reveal 0.9s
    cubic-bezier(0.22, 1, 0.36, 1)
    forwards;
}

.footer-delay-1 {
  animation-delay: 0.12s;
}

.footer-delay-2 {
  animation-delay: 0.24s;
}

.footer-delay-3 {
  animation-delay: 0.36s;
}

@keyframes footer-reveal {
  0% {
    opacity: 0;
    transform: translateY(20px);
    filter: blur(5px);
  }

  60% {
    opacity: 0.85;
    filter: blur(2px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

/* =========================================
   ACCESSIBILITY
   ========================================= */

@media (prefers-reduced-motion: reduce) {
  .footer-reveal {
    opacity: 1;
    transform: none;
    filter: none;
    animation: none;
  }
}
</style>
