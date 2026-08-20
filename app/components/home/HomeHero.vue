<script setup lang="ts">
const whatsappMessage = encodeURIComponent(
  'Assalamu Alaikum. I would like to enquire about learning at IBN MAS\'UD ONLINE ACADEMY.'
)

const whatsappUrl = `https://wa.me/2348074113418?text=${whatsappMessage}`

const highlights = [
  '3 Weekly Sessions',
  'Weekly Qur\'an Memorisation',
  'Monthly Progress Reports'
]
</script>

<template>
  <section class="hero-section relative isolate overflow-hidden bg-white">
    <!-- =====================================================
         BACKGROUND
    ====================================================== -->
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <!-- Green ambient glow -->
      <div
        class="absolute -left-40 top-40 h-96 w-96 rounded-full bg-[#073b29]/[0.045] blur-3xl"
      />

      <!-- Cream ambient glow -->
      <div
        class="absolute -right-32 top-10 h-96 w-96 rounded-full bg-[#f4e9ae]/[0.18] blur-3xl"
      />

      <!-- Subtle Islamic geometric pattern -->
      <div class="hero-pattern absolute inset-0 opacity-[0.025]" />

      <!-- Soft bottom fade -->
      <div
        class="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-white to-transparent"
      />
    </div>

    <UContainer>
      <div
        class="grid min-h-[calc(100vh-5rem)] items-center gap-14 pb-20 pt-32 lg:grid-cols-[1fr_0.9fr] lg:gap-20 lg:pb-16 lg:pt-28"
      >
        <!-- =================================================
             LEFT — CONTENT
        ================================================== -->
        <div class="relative z-10">
          <!-- Eyebrow -->
          <div
            class="hero-item hero-delay-1 inline-flex items-center gap-3 rounded-full border border-[#073b29]/10 bg-[#073b29]/[0.035] px-4 py-2"
          >
            <span class="flex h-2 w-2 rounded-full bg-[#073b29]" />

            <span
              class="text-[10px] font-bold uppercase tracking-[0.2em] text-[#073b29] sm:text-xs"
            >
              Online Islamic Education
            </span>
          </div>

          <!-- Heading -->
          <h1
            class="hero-item hero-delay-2 mt-7 max-w-3xl font-serif text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-7xl xl:text-[5.15rem]"
          >
            Learn Islam.

            <span class="block text-[#073b29]">
              Build Your Qur'an Connection.
            </span>
          </h1>

          <!-- Gold divider -->
          <div
            class="hero-item hero-delay-3 mt-7 flex items-center gap-3"
          >
            <div class="h-0.5 w-12 bg-[#073b29]" />

            <div class="h-2 w-2 rotate-45 bg-[#d8c98b]" />

            <div class="h-0.5 w-20 bg-[#d8c98b]/40" />
          </div>

          <!-- Description -->
          <p
            class="hero-item hero-delay-3 mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg"
          >
            Quality online Qur'an, Tajwīd, Arabic and Islamic education for
            children, teenagers and adults — delivered by dedicated tutors
            through flexible, structured learning.
          </p>

          <!-- CTA -->
          <div
            class="hero-item hero-delay-4 mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <!-- Primary -->
            <NuxtLink
              to="/enrol"
              class="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#073b29] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-[#073b29]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#f4e9ae] hover:text-[#073b29]"
            >
              <span>Enrol Now</span>

              <span
                class="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:bg-[#073b29] group-hover:text-[#f4e9ae]"
              >
                <UIcon
                  name="i-lucide-arrow-right"
                  class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </span>
            </NuxtLink>

            <!-- Secondary -->
            <a
              :href="whatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 text-sm font-semibold text-[#073b29] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d8c98b] hover:bg-[#fff8dc]"
            >
              <UIcon
                name="i-lucide-message-circle"
                class="h-5 w-5"
              />

              Talk to an Adviser
            </a>
          </div>

          <!-- Highlights -->
          <div
            class="hero-item hero-delay-5 mt-10 flex flex-wrap gap-x-6 gap-y-3"
          >
            <div
              v-for="highlight in highlights"
              :key="highlight"
              class="flex items-center gap-2 text-xs font-medium text-slate-500 sm:text-sm"
            >
              <span
                class="flex h-5 w-5 items-center justify-center rounded-full bg-[#073b29]/[0.07]"
              >
                <UIcon
                  name="i-lucide-check"
                  class="h-3 w-3 text-[#073b29]"
                />
              </span>

              {{ highlight }}
            </div>
          </div>

          <!-- Small trust statement -->
          <div
            class="hero-item hero-delay-5 mt-8 flex items-center gap-3 text-xs text-slate-400"
          >
            <UIcon
              name="i-lucide-globe-2"
              class="h-4 w-4 text-[#073b29]"
            />

            <span>
              Accessible to learners wherever they are.
            </span>
          </div>
        </div>

        <!-- =================================================
             RIGHT — VISUAL
        ================================================== -->
        <div class="relative mx-auto w-full max-w-140 lg:ml-auto">
          <!-- Decorative ring -->
          <div
            aria-hidden="true"
            class="absolute -right-8 -top-10 h-32 w-32 rounded-full border border-[#d8c98b]/50 sm:h-44 sm:w-44"
          />

          <!-- Decorative green glow -->
          <div
            aria-hidden="true"
            class="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[#073b29]/[0.045] blur-2xl"
          />

          <!-- =================================================
               IMAGE
          ================================================== -->
          <div class="hero-image relative">
            <!-- Image border glow -->
            <div
              class="absolute -inset-1 rounded-[2.5rem] bg-linear-to-br from-[#073b29]/20 via-[#d8c98b]/20 to-transparent"
            />

            <div
              class="relative overflow-hidden rounded-[2.25rem] border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-900/10"
            >
              <div class="relative overflow-hidden rounded-[1.85rem]">
                <img
                  src="/images/ibn-masud-online-academy-quran-tajweed-classes.jpg"
                  alt="Students learning Qur'an and Tajwīd through IBN MAS'UD ONLINE ACADEMY"
                  width="900"
                  height="700"
                  fetchpriority="high"
                  decoding="async"
                  class="h-[430px] w-full object-cover transition-transform duration-1400 hover:scale-[1.04] sm:h-[520px]"
                />

                <!-- Image overlay -->
                <div
                  class="absolute inset-0 bg-linear-to-t from-[#073b29]/75 via-[#073b29]/5 to-transparent"
                />

                <!-- Image information -->
                <div class="absolute bottom-5 left-5 right-5">
                  <div class="flex items-end justify-between gap-4">
                    <div>
                      <p
                        class="text-xs font-bold uppercase tracking-[0.18em] text-[#f4e9ae]"
                      >
                        IBN MAS'UD ONLINE ACADEMY
                      </p>

                      <p
                        class="mt-1 font-serif text-xl text-white sm:text-2xl"
                      >
                        Learning with purpose.
                      </p>
                    </div>

                    <div
                      class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md"
                    >
                      <UIcon
                        name="i-lucide-book-open"
                        class="h-5 w-5 text-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- =================================================
               FLOATING LEARNER CARD
          ================================================== -->
          <div
            class="hero-card absolute -bottom-7 -left-4 z-20 w-[235px] rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-900/10 sm:-left-8"
          >
            <div class="flex items-start gap-3">
              <div
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#073b29]"
              >
                <UIcon
                  name="i-lucide-graduation-cap"
                  class="h-5 w-5 text-[#f4e9ae]"
                />
              </div>

              <div>
                <p
                  class="text-xs font-semibold uppercase tracking-wider text-slate-400"
                >
                  Learn at your level
                </p>

                <p class="mt-1 text-sm font-bold text-[#073b29]">
                  Children • Teens • Adults
                </p>
              </div>
            </div>
          </div>

          <!-- =================================================
               FLOATING LOGO
          ================================================== -->
          <div
            class="hero-logo absolute -right-4 bottom-20 z-20 hidden h-20 w-20 overflow-hidden rounded-full border-4 border-white bg-white shadow-xl sm:block"
          >
            <img
              src="/images/ibn-masud-online-academy-logo.jpeg"
              alt="IBN MAS'UD ONLINE ACADEMY official logo"
              width="80"
              height="80"
              loading="eager"
              decoding="async"
              class="h-full w-full object-cover"
            />
          </div>

          <!-- =================================================
               SMALL SESSION CARD
          ================================================== -->
          <div
            class="hero-session-card absolute -right-3 top-24 z-20 hidden rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-xl shadow-slate-900/10 backdrop-blur-md md:block"
          >
            <div class="flex items-center gap-3">
              <div
                class="flex h-9 w-9 items-center justify-center rounded-full bg-[#073b29]/[0.08]"
              >
                <UIcon
                  name="i-lucide-clock-3"
                  class="h-4 w-4 text-[#073b29]"
                />
              </div>

              <div>
                <p class="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  Weekly learning
                </p>

                <p class="mt-0.5 text-sm font-bold text-[#073b29]">
                  90 minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UContainer>

    <!-- =====================================================
         SCROLL INDICATOR
    ====================================================== -->
    <div
      class="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-400 lg:flex"
    >
      <span
        class="text-[9px] font-semibold uppercase tracking-[0.3em]"
      >
        Explore
      </span>

      <div
        class="flex h-9 w-6 justify-center rounded-full border border-slate-300 pt-2"
      >
        <span
          class="h-1.5 w-1 rounded-full bg-[#073b29] animate-bounce"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* =========================================================
   HERO FADE-IN SYSTEM
========================================================= */

.hero-item {
  opacity: 0;
  transform: translateY(22px);
  filter: blur(6px);

  animation-name: hero-fade-up;
  animation-duration: 1.1s;
  animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
  animation-fill-mode: forwards;
}

.hero-delay-1 {
  animation-delay: 0.15s;
}

.hero-delay-2 {
  animation-delay: 0.3s;
}

.hero-delay-3 {
  animation-delay: 0.48s;
}

.hero-delay-4 {
  animation-delay: 0.68s;
}

.hero-delay-5 {
  animation-delay: 0.88s;
}

/* =========================================================
   HERO IMAGE
========================================================= */

.hero-image {
  opacity: 0;
  transform: translateY(25px) scale(0.94);
  filter: blur(8px);

  animation: hero-image-fade 1.5s
    cubic-bezier(0.22, 1, 0.36, 1)
    0.35s forwards;
}

/* =========================================================
   FLOATING CARD
========================================================= */

.hero-card {
  opacity: 0;
  transform: translateY(25px);
  filter: blur(5px);

  animation:
    hero-card-fade 1s
      cubic-bezier(0.22, 1, 0.36, 1)
      1s forwards,
    hero-card-float 5s ease-in-out 2.2s infinite;
}

/* =========================================================
   LOGO
========================================================= */

.hero-logo {
  opacity: 0;
  transform: scale(0.75) rotate(-8deg);
  filter: blur(5px);

  animation:
    hero-logo-fade 1s
      cubic-bezier(0.22, 1, 0.36, 1)
      1.15s forwards,
    hero-logo-float 6s ease-in-out 2.4s infinite;
}

/* =========================================================
   SESSION CARD
========================================================= */

.hero-session-card {
  opacity: 0;
  transform: translateX(15px) translateY(-5px);
  filter: blur(5px);

  animation:
    session-card-fade 1s
      cubic-bezier(0.22, 1, 0.36, 1)
      1.25s forwards,
    session-card-float 5s ease-in-out 2.6s infinite;
}

/* =========================================================
   BACKGROUND PATTERN
========================================================= */

.hero-pattern {
  background-image:
    linear-gradient(
      30deg,
      rgba(7, 59, 41, 0.12) 12%,
      transparent 12.5%,
      transparent 87%,
      rgba(7, 59, 41, 0.12) 87.5%,
      rgba(7, 59, 41, 0.12)
    ),
    linear-gradient(
      150deg,
      rgba(7, 59, 41, 0.12) 12%,
      transparent 12.5%,
      transparent 87%,
      rgba(7, 59, 41, 0.12) 87.5%,
      rgba(7, 59, 41, 0.12)
    ),
    linear-gradient(
      60deg,
      rgba(216, 201, 139, 0.12) 25%,
      transparent 25.5%,
      transparent 75%,
      rgba(216, 201, 139, 0.12) 75%
    );

  background-size: 40px 70px;
}

/* =========================================================
   KEYFRAMES
========================================================= */

@keyframes hero-fade-up {
  0% {
    opacity: 0;
    transform: translateY(22px);
    filter: blur(6px);
  }

  60% {
    opacity: 0.8;
    filter: blur(2px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

@keyframes hero-image-fade {
  0% {
    opacity: 0;
    transform: translateY(25px) scale(0.94);
    filter: blur(8px);
  }

  55% {
    opacity: 0.75;
    filter: blur(3px);
  }

  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

@keyframes hero-card-fade {
  0% {
    opacity: 0;
    transform: translateY(25px);
    filter: blur(5px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

@keyframes hero-logo-fade {
  0% {
    opacity: 0;
    transform: scale(0.75) rotate(-8deg);
    filter: blur(5px);
  }

  100% {
    opacity: 1;
    transform: scale(1) rotate(0);
    filter: blur(0);
  }
}

@keyframes session-card-fade {
  0% {
    opacity: 0;
    transform: translateX(15px) translateY(-5px);
    filter: blur(5px);
  }

  100% {
    opacity: 1;
    transform: translateX(0) translateY(0);
    filter: blur(0);
  }
}

/* =========================================================
   CONTINUOUS FLOATING
========================================================= */

@keyframes hero-card-float {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-8px);
  }
}

@keyframes hero-logo-float {
  0%,
  100% {
    transform: translateY(0) rotate(0);
  }

  50% {
    transform: translateY(-7px) rotate(2deg);
  }
}

@keyframes session-card-float {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-6px);
  }
}

/* =========================================================
   ACCESSIBILITY
========================================================= */

@media (prefers-reduced-motion: reduce) {
  .hero-item,
  .hero-image,
  .hero-card,
  .hero-logo,
  .hero-session-card {
    opacity: 1;
    transform: none;
    filter: none;
    animation: none;
  }
}
</style>
