<script setup lang="ts">
const whatsappMessage = encodeURIComponent(
  'Assalamu Alaikum. I would like to enquire about learning at IBN MAS\'UD ONLINE ACADEMY.'
)

const whatsappUrl = `https://wa.me/2348074113418?text=${whatsappMessage}`

const highlights = [
  {
    icon: 'i-lucide-calendar-check',
    text: '3 weekly sessions'
  },
  {
    icon: 'i-lucide-book-open-check',
    text: 'Weekly Qur’an memorisation'
  },
  {
    icon: 'i-lucide-chart-no-axes-combined',
    text: 'Monthly progress reports'
  },
  {
    icon: 'i-lucide-clock-3',
    text: 'Flexible scheduling'
  }
]
</script>

<template>
  <section
    id="final-cta"
    class="relative overflow-hidden bg-[#faf9f5] py-24 sm:py-28 lg:py-32"
  >
    <!-- Background decoration -->
    <div
      aria-hidden="true"
      class="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d8c98b]/10 blur-3xl"
    />

    <div
      aria-hidden="true"
      class="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#073b29]/[0.035] blur-3xl"
    />

    <div
      aria-hidden="true"
      class="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#d8c98b]/[0.07] blur-3xl"
    />

    <UContainer>
      <div
        class="cta-shell relative overflow-hidden rounded-[2rem] bg-[#073b29] shadow-2xl shadow-[#073b29]/15 sm:rounded-[2.5rem]"
      >
        <!-- Islamic-inspired decorative pattern -->
        <div
          aria-hidden="true"
          class="pointer-events-none absolute inset-0 opacity-[0.045]"
        >
          <div class="cta-pattern absolute inset-0" />
        </div>

        <!-- Decorative circles -->
        <div
          aria-hidden="true"
          class="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full border border-[#f4e9ae]/20"
        />

        <div
          aria-hidden="true"
          class="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-[#f4e9ae]/10"
        />

        <div
          aria-hidden="true"
          class="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full border border-white/10"
        />

        <div
          class="relative grid gap-12 px-6 py-12 sm:px-10 sm:py-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-16 lg:px-14 lg:py-16"
        >
          <!-- Main content -->
          <div>
            <!-- Eyebrow -->
            <div
              class="cta-reveal inline-flex items-center gap-3"
            >
              <span class="h-px w-9 bg-[#d8c98b]" />

              <span
                class="text-xs font-bold uppercase tracking-[0.22em] text-[#f4e9ae]"
              >
                Begin Your Journey
              </span>
            </div>

            <!-- Heading -->
            <h2
              class="cta-reveal cta-delay-1 mt-5 max-w-2xl font-serif text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl"
            >
              Ready to begin your
              <span class="text-[#f4e9ae]">
                learning journey?
              </span>
            </h2>

            <!-- Description -->
            <p
              class="cta-reveal cta-delay-2 mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg"
            >
              Whether you are looking for Qur'an classes for your child,
              Arabic lessons, Islamic Studies or structured Qur'an
              memorisation, we are ready to help you take the next step.
            </p>

            <!-- CTA buttons -->
            <div
              class="cta-reveal cta-delay-3 mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <NuxtLink
                to="/enrol"
                class="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#f4e9ae] px-6 py-4 text-sm font-bold text-[#073b29] shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >
                <span>
                  Enrol Now
                </span>

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
                class="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-6 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d8c98b]/60 hover:bg-white/[0.12]"
              >
                <UIcon
                  name="i-lucide-message-circle"
                  class="h-5 w-5 text-[#f4e9ae]"
                />

                Talk to an Adviser

                <UIcon
                  name="i-lucide-arrow-up-right"
                  class="h-4 w-4 text-white/50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>

            <!-- Contact -->
            <div
              class="cta-reveal cta-delay-4 mt-7 flex flex-col gap-2 text-sm text-white/55 sm:flex-row sm:items-center sm:gap-5"
            >
              <a
                href="tel:+2348074113418"
                class="inline-flex items-center gap-2 transition-colors duration-300 hover:text-[#f4e9ae]"
              >
                <UIcon
                  name="i-lucide-phone"
                  class="h-4 w-4 text-[#d8c98b]"
                />
                +234 807 411 3418
              </a>

              <span class="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />

              <a
                href="mailto:ibnmasudonlineacademy@gmail.com"
                class="inline-flex items-center gap-2 transition-colors duration-300 hover:text-[#f4e9ae]"
              >
                <UIcon
                  name="i-lucide-mail"
                  class="h-4 w-4 text-[#d8c98b]"
                />
                ibnmasudonlineacademy@gmail.com
              </a>
            </div>
          </div>

          <!-- Value card -->
          <div
            class="cta-card cta-delay-3 relative rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-md sm:p-6"
          >
            <div
              class="flex items-center gap-3 border-b border-white/10 pb-5"
            >
              <div
                class="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f4e9ae]"
              >
                <UIcon
                  name="i-lucide-sparkles"
                  class="h-5 w-5 text-[#073b29]"
                />
              </div>

              <div>
                <p
                  class="text-[10px] font-bold uppercase tracking-[0.18em] text-[#f4e9ae]"
                >
                  Your learning experience
                </p>

                <p
                  class="mt-1 font-serif text-lg text-white"
                >
                  Structured. Personal. Meaningful.
                </p>
              </div>
            </div>

            <!-- Highlights -->
            <div class="mt-5 space-y-4">
              <div
                v-for="(highlight, index) in highlights"
                :key="highlight.text"
                class="cta-highlight flex items-center gap-3"
                :style="{
                  animationDelay: `${0.8 + index * 0.1}s`
                }"
              >
                <div
                  class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.08]"
                >
                  <UIcon
                    :name="highlight.icon"
                    class="h-4 w-4 text-[#f4e9ae]"
                  />
                </div>

                <span
                  class="text-sm font-medium text-white/75"
                >
                  {{ highlight.text }}
                </span>
              </div>
            </div>

            <!-- Bottom note -->
            <div
              class="mt-6 rounded-xl border border-[#f4e9ae]/10 bg-[#f4e9ae]/[0.05] px-4 py-3"
            >
              <p class="text-xs leading-5 text-white/55">
                <span class="font-semibold text-[#f4e9ae]">
                  Learn from wherever you are.
                </span>
                Our online programmes are designed for children, teenagers,
                university students and adults.
              </p>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
/* =========================================
   CTA REVEAL
   ========================================= */

.cta-reveal {
  opacity: 0;
  transform: translateY(22px);
  filter: blur(6px);

  animation:
    cta-fade-up
    0.95s
    cubic-bezier(0.22, 1, 0.36, 1)
    forwards;
}

.cta-delay-1 {
  animation-delay: 0.12s;
}

.cta-delay-2 {
  animation-delay: 0.24s;
}

.cta-delay-3 {
  animation-delay: 0.4s;
}

.cta-delay-4 {
  animation-delay: 0.58s;
}

/* =========================================
   VALUE CARD
   ========================================= */

.cta-card {
  opacity: 0;
  transform: translateY(24px) scale(0.97);
  filter: blur(7px);

  animation:
    cta-card-fade
    1.1s
    cubic-bezier(0.22, 1, 0.36, 1)
    0.4s forwards;
}

/* =========================================
   HIGHLIGHTS
   ========================================= */

.cta-highlight {
  opacity: 0;
  transform: translateX(12px);

  animation:
    highlight-fade
    0.7s
    cubic-bezier(0.22, 1, 0.36, 1)
    forwards;
}

/* =========================================
   PATTERN
   ========================================= */

.cta-pattern {
  background-image:
    linear-gradient(
      30deg,
      #f4e9ae 12%,
      transparent 12.5%,
      transparent 87%,
      #f4e9ae 87.5%,
      #f4e9ae
    ),
    linear-gradient(
      150deg,
      #f4e9ae 12%,
      transparent 12.5%,
      transparent 87%,
      #f4e9ae 87.5%,
      #f4e9ae
    ),
    linear-gradient(
      60deg,
      #d8c98b 25%,
      transparent 25.5%,
      transparent 75%,
      #d8c98b 75%
    );

  background-size: 44px 76px;
}

/* =========================================
   KEYFRAMES
   ========================================= */

@keyframes cta-fade-up {
  0% {
    opacity: 0;
    transform: translateY(22px);
    filter: blur(6px);
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

@keyframes cta-card-fade {
  0% {
    opacity: 0;
    transform: translateY(24px) scale(0.97);
    filter: blur(7px);
  }

  60% {
    opacity: 0.85;
    filter: blur(2px);
  }

  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

@keyframes highlight-fade {
  0% {
    opacity: 0;
    transform: translateX(12px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

/* =========================================
   ACCESSIBILITY
   ========================================= */

@media (prefers-reduced-motion: reduce) {
  .cta-reveal,
  .cta-card,
  .cta-highlight {
    opacity: 1;
    transform: none;
    filter: none;
    animation: none;
  }
}
</style>
