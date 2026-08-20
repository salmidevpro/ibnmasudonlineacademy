<script setup lang="ts">
const benefits = [
  {
    number: '01',
    icon: 'i-lucide-user-round-check',
    title: 'Qualified & Dedicated Tutors',
    description:
      'Students learn with committed male and female tutors who combine subject knowledge, patience, professionalism and Islamic character.'
  },
  {
    number: '02',
    icon: 'i-lucide-scan-heart',
    title: 'Personalised Learning',
    description:
      'Every learner has different needs. We consider age, ability, current level and learning pace when structuring their programme.'
  },
  {
    number: '03',
    icon: 'i-lucide-book-open-check',
    title: 'Weekly Qur’an Memorisation',
    description:
      'Every enrolled student receives a dedicated weekly 30-minute Ḥifẓ session to build a consistent relationship with the Qur’an.'
  },
  {
    number: '04',
    icon: 'i-lucide-chart-no-axes-combined',
    title: 'Monthly Progress Reports',
    description:
      'Parents are kept informed through regular reports covering achievements, areas for improvement, attendance and tutor recommendations.'
  },
  {
    number: '05',
    icon: 'i-lucide-calendar-clock',
    title: 'Flexible Scheduling',
    description:
      'Classes are arranged around student and tutor availability, making structured Islamic learning easier to fit into everyday life.'
  },
  {
    number: '06',
    icon: 'i-lucide-globe-2',
    title: 'Learn From Anywhere',
    description:
      'Whether at home or abroad, students can access quality Islamic education online without the need to travel to a physical classroom.'
  }
]
</script>

<template>
  <section
    id="why-us"
    class="relative overflow-hidden bg-[#fafbf9] py-24 sm:py-28 lg:py-32"
  >
    <!-- Decorative background -->
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#d8c98b]/10 blur-3xl"
    />

    <div
      aria-hidden="true"
      class="pointer-events-none absolute -left-40 bottom-10 h-96 w-96 rounded-full bg-[#073b29]/[0.035] blur-3xl"
    />

    <UContainer>
      <!-- Section heading -->
      <div class="mx-auto max-w-3xl text-center">
        <div class="why-item why-delay-1 inline-flex items-center gap-3">
          <span class="h-px w-8 bg-[#d8c98b]" />

          <span
            class="text-[10px] font-bold uppercase tracking-[0.25em] text-[#073b29] sm:text-xs"
          >
            Why IBN MAS'UD?
          </span>

          <span class="h-px w-8 bg-[#d8c98b]" />
        </div>

        <h2
          class="why-item why-delay-2 mt-5 font-serif text-4xl font-semibold leading-tight tracking-[-0.03em] text-slate-950 sm:text-5xl lg:text-6xl"
        >
          More Than Classes.
          <span class="block text-[#073b29]">
            A Learning Journey.
          </span>
        </h2>

        <p
          class="why-item why-delay-3 mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
        >
          We believe meaningful Islamic education requires more than simply
          attending lessons. It requires qualified guidance, consistency,
          personal attention and a clear understanding of each student's
          progress.
        </p>
      </div>

      <!-- Main content -->
      <div class="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(benefit, index) in benefits"
          :key="benefit.number"
          class="why-card group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#d8c98b]/60 hover:shadow-xl hover:shadow-slate-900/[0.06] sm:p-8"
          :style="{ animationDelay: `${0.2 + index * 0.1}s` }"
        >
          <!-- Number -->
          <div
            class="absolute right-6 top-5 font-serif text-5xl font-semibold text-slate-100 transition-colors duration-500 group-hover:text-[#073b29]/[0.07]"
          >
            {{ benefit.number }}
          </div>

          <!-- Icon -->
          <div
            class="relative flex h-13 w-13 items-center justify-center rounded-2xl bg-[#073b29]/[0.06] text-[#073b29] transition-all duration-500 group-hover:bg-[#073b29] group-hover:text-[#f4e9ae]"
          >
            <UIcon
              :name="benefit.icon"
              class="h-6 w-6 transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <!-- Content -->
          <div class="relative mt-7">
            <h3
              class="font-serif text-2xl font-semibold tracking-tight text-slate-950"
            >
              {{ benefit.title }}
            </h3>

            <p class="mt-4 text-sm leading-7 text-slate-600">
              {{ benefit.description }}
            </p>
          </div>

          <!-- Bottom accent -->
          <div
            class="absolute bottom-0 left-7 h-0.5 w-0 bg-[#073b29] transition-all duration-500 group-hover:w-16"
          />
        </article>
      </div>

      <!-- Parent-focused statement -->
      <div
        class="why-highlight relative mt-8 overflow-hidden rounded-[2rem] bg-[#073b29] px-7 py-9 shadow-2xl shadow-[#073b29]/10 sm:px-10 lg:px-12"
      >
        <!-- Decorative circle -->
        <div
          aria-hidden="true"
          class="absolute -right-16 -top-20 h-56 w-56 rounded-full border border-[#f4e9ae]/10"
        />

        <div
          aria-hidden="true"
          class="absolute -right-5 -top-10 h-36 w-36 rounded-full border border-[#f4e9ae]/10"
        />

        <div
          class="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between"
        >
          <div class="max-w-2xl">
            <div class="flex items-center gap-2">
              <UIcon
                name="i-lucide-sparkles"
                class="h-4 w-4 text-[#f4e9ae]"
              />

              <span
                class="text-[10px] font-bold uppercase tracking-[0.22em] text-[#f4e9ae]"
              >
                For Parents
              </span>
            </div>

            <h3
              class="mt-3 font-serif text-2xl font-semibold leading-tight text-white sm:text-3xl"
            >
              Know how your child is progressing.
            </h3>

            <p class="mt-3 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
              Your child's learning should never feel like a mystery. Through
              structured lessons and monthly progress reports, you remain
              connected to their learning journey.
            </p>
          </div>

          <NuxtLink
            to="/student-progress"
            class="group inline-flex shrink-0 items-center gap-3 self-start rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-[#073b29] transition-all duration-300 hover:-translate-y-1 hover:bg-[#f4e9ae] lg:self-center"
          >
            <span>See How We Track Progress</span>

            <UIcon
              name="i-lucide-arrow-up-right"
              class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </NuxtLink>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
/* =========================================
   FADE-IN ANIMATION
   ========================================= */

.why-item {
  opacity: 0;
  transform: translateY(22px);
  filter: blur(6px);
  animation: why-fade-up 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.why-delay-1 {
  animation-delay: 0.1s;
}

.why-delay-2 {
  animation-delay: 0.25s;
}

.why-delay-3 {
  animation-delay: 0.4s;
}

/* =========================================
   BENEFIT CARDS
   ========================================= */

.why-card {
  opacity: 0;
  transform: translateY(25px);
  filter: blur(5px);
  animation: why-card-fade 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

/* =========================================
   PARENT HIGHLIGHT
   ========================================= */

.why-highlight {
  opacity: 0;
  transform: translateY(25px);
  filter: blur(6px);
  animation: why-highlight-fade 1s
    cubic-bezier(0.22, 1, 0.36, 1)
    0.8s forwards;
}

/* =========================================
   KEYFRAMES
   ========================================= */

@keyframes why-fade-up {
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

@keyframes why-card-fade {
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

@keyframes why-highlight-fade {
  0% {
    opacity: 0;
    transform: translateY(25px);
    filter: blur(6px);
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
  .why-item,
  .why-card,
  .why-highlight {
    opacity: 1;
    transform: none;
    filter: none;
    animation: none;
  }
}
</style>
