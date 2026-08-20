<script setup lang="ts">
const learners = [
  {
    icon: 'i-lucide-baby',
    title: 'Children',
    description:
      'Build strong foundations in Qur’an, Arabic and Islamic knowledge through age-appropriate learning.'
  },
  {
    icon: 'i-lucide-school',
    title: 'Teenagers',
    description:
      'Develop Islamic understanding, Arabic skills and a stronger connection with the Qur’an.'
  },
  {
    icon: 'i-lucide-graduation-cap',
    title: 'University Students',
    description:
      'Continue learning Islam alongside your academic life with a flexible online schedule.'
  },
  {
    icon: 'i-lucide-user-round',
    title: 'Adults',
    description:
      'Learn at your level, strengthen your Qur’an and deepen your understanding of Dīn.'
  }
]

const steps = [
  {
    number: '01',
    title: 'Enquire',
    description: 'Tell us what you or your child would like to learn.'
  },
  {
    number: '02',
    title: 'Register',
    description: 'Complete the academy registration form.'
  },
  {
    number: '03',
    title: 'Assessment',
    description:
      'A placement assessment may be conducted where necessary.'
  },
  {
    number: '04',
    title: 'Begin Learning',
    description:
      'Receive your programme, tutor and schedule, then start your classes.'
  }
]
</script>

<template>
  <section
    id="who-can-join"
    class="relative overflow-hidden bg-[#faf9f5] py-24 sm:py-28"
  >
    <!-- Decorative background -->
    <div
      aria-hidden="true"
      class="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] translate-x-1/3 -translate-y-1/3 rounded-full bg-[#d8c98b]/10 blur-3xl"
    />

    <div
      aria-hidden="true"
      class="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/3 translate-y-1/3 rounded-full bg-[#073b29]/[0.035] blur-3xl"
    />

    <UContainer>
      <!-- Header -->
      <div class="mx-auto max-w-3xl text-center">
        <div
          class="section-reveal inline-flex items-center gap-3"
        >
          <span class="h-px w-8 bg-[#d8c98b]" />

          <span
            class="text-xs font-bold uppercase tracking-[0.22em] text-[#073b29]"
          >
            Who Can Join
          </span>

          <span class="h-px w-8 bg-[#d8c98b]" />
        </div>

        <h2
          class="section-reveal section-delay-1 mt-5 font-serif text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-5xl"
        >
          Learning for every
          <span class="text-[#073b29]">
            stage of life.
          </span>
        </h2>

        <p
          class="section-reveal section-delay-2 mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
        >
          Whether you're looking for a strong Islamic foundation for your
          child or continuing your own journey, our programmes can accommodate
          different ages and learning levels.
        </p>
      </div>

      <!-- Learner cards -->
      <div
        class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        <article
          v-for="(learner, index) in learners"
          :key="learner.title"
          class="section-reveal learner-card group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#d8c98b]/70 hover:shadow-xl hover:shadow-slate-900/[0.05]"
          :style="{
            animationDelay: `${0.12 + index * 0.08}s`
          }"
        >
          <!-- Icon -->
          <div
            class="learner-icon flex h-12 w-12 items-center justify-center rounded-2xl bg-[#073b29]/[0.06] text-[#073b29] transition-all duration-500 group-hover:scale-105 group-hover:bg-[#073b29] group-hover:text-[#f4e9ae]"
          >
            <UIcon
              :name="learner.icon"
              class="h-5 w-5 text-current transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <!-- Title -->
          <h3
            class="mt-6 font-serif text-xl font-semibold text-slate-950 transition-colors duration-500 group-hover:text-[#073b29]"
          >
            {{ learner.title }}
          </h3>

          <!-- Description -->
          <p
            class="mt-2 text-sm leading-6 text-slate-500"
          >
            {{ learner.description }}
          </p>

          <!-- Small hover accent -->
          <div
            class="mt-5 h-0.5 w-0 bg-[#d8c98b] transition-all duration-500 group-hover:w-10"
            aria-hidden="true"
          />
        </article>
      </div>

      <!-- Divider -->
      <div class="my-16 flex items-center justify-center gap-4">
        <span class="h-px flex-1 bg-slate-200" />

        <div
          class="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white"
        >
          <UIcon
            name="i-lucide-arrow-down"
            class="h-4 w-4 text-[#073b29]"
          />
        </div>

        <span class="h-px flex-1 bg-slate-200" />
      </div>

      <!-- Enrolment journey -->
      <div
        class="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center"
      >
        <!-- Intro -->
        <div class="section-reveal">
          <div class="inline-flex items-center gap-3">
            <span class="h-px w-8 bg-[#d8c98b]" />

            <span
              class="text-xs font-bold uppercase tracking-[0.22em] text-[#073b29]"
            >
              Getting Started
            </span>
          </div>

          <h3
            class="mt-5 max-w-md font-serif text-3xl font-semibold leading-tight tracking-[-0.03em] text-slate-950 sm:text-4xl"
          >
            Your learning journey can begin
            <span class="text-[#073b29]">
              in a few simple steps.
            </span>
          </h3>

          <p
            class="mt-5 max-w-md text-sm leading-7 text-slate-600 sm:text-base"
          >
            We keep the enrolment process straightforward while taking the
            time to understand each student's learning needs.
          </p>

          <div class="mt-7 flex flex-wrap gap-3">
            <NuxtLink
              to="/enrol"
              class="group inline-flex items-center gap-3 rounded-xl bg-[#073b29] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#073b29]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#f4e9ae] hover:text-[#073b29]"
            >
              <span>Enrol Now</span>

              <UIcon
                name="i-lucide-arrow-right"
                class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </NuxtLink>

            <NuxtLink
              to="/how-it-works"
              class="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-[#073b29] transition-all duration-300 hover:-translate-y-1 hover:border-[#d8c98b] hover:bg-[#fffdf3]"
            >
              How It Works
            </NuxtLink>
          </div>
        </div>

        <!-- Steps -->
        <div
          class="section-reveal section-delay-2 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/[0.04] sm:p-7"
        >
          <div class="space-y-2">
            <div
              v-for="(step, index) in steps"
              :key="step.number"
              class="group relative flex gap-4 rounded-2xl p-4 transition-all duration-300 hover:bg-[#faf9f5] sm:p-5"
            >
              <!-- Connector -->
              <div
                v-if="index !== steps.length - 1"
                aria-hidden="true"
                class="absolute left-[38px] top-[62px] h-[calc(100%-30px)] w-px bg-slate-200"
              />

              <!-- Number -->
              <div
                class="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white font-serif text-sm font-semibold text-[#073b29] shadow-sm transition-all duration-300 group-hover:border-[#d8c98b] group-hover:bg-[#fffdf3]"
              >
                {{ step.number }}
              </div>

              <!-- Content -->
              <div class="pt-1">
                <h4 class="font-semibold text-slate-950">
                  {{ step.title }}
                </h4>

                <p
                  class="mt-1 text-sm leading-6 text-slate-500"
                >
                  {{ step.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
/* =========================================
   SECTION REVEAL
   ========================================= */

.section-reveal {
  opacity: 0;
  transform: translateY(24px);
  filter: blur(6px);

  animation: section-reveal
    0.9s
    cubic-bezier(0.22, 1, 0.36, 1)
    forwards;
}

.section-delay-1 {
  animation-delay: 0.12s;
}

.section-delay-2 {
  animation-delay: 0.24s;
}

/* =========================================
   LEARNER ICON
   ========================================= */

/*
 * Important:
 * The icon uses text-current.
 * This means the parent controls its colour.
 * We no longer depend on :deep(svg).
 */

.learner-icon {
  color: #073b29;
}

.learner-card:hover .learner-icon {
  color: #f4e9ae;
  background-color: #073b29;
  transform: scale(1.05);
}

/* =========================================
   KEYFRAMES
   ========================================= */

@keyframes section-reveal {
  0% {
    opacity: 0;
    transform: translateY(24px);
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

/* =========================================
   ACCESSIBILITY
   ========================================= */

@media (prefers-reduced-motion: reduce) {
  .section-reveal {
    opacity: 1;
    transform: none;
    filter: none;
    animation: none;
  }

  .learner-card,
  .learner-icon {
    transition: none;
  }
}
</style>
