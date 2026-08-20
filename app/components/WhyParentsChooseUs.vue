<script setup lang="ts">
const benefits = [
  {
    icon: 'i-lucide-users-round',
    title: 'Qualified Tutors',
    description:
      'Learn under dedicated instructors who bring knowledge, patience, professionalism and commitment to every lesson.'
  },
  {
    icon: 'i-lucide-user-round-check',
    title: 'Personalised Learning',
    description:
      'Students learn according to their current level, ability and pace, with guidance adapted to their individual needs.'
  },
  {
    icon: 'i-lucide-book-open-check',
    title: 'Weekly Qur\'an Memorisation',
    description:
      'Every enrolled student receives a dedicated weekly 30-minute Ḥifẓ session for memorisation, revision and recitation.'
  },
  {
    icon: 'i-lucide-chart-no-axes-combined',
    title: 'Monthly Progress Reports',
    description:
      'Parents stay informed about their child\'s achievements, strengths, areas for improvement and tutor recommendations.'
  },
  {
    icon: 'i-lucide-calendar-clock',
    title: 'Flexible Scheduling',
    description:
      'Class times are arranged around student and tutor availability, making learning easier to fit into everyday life.'
  },
  {
    icon: 'i-lucide-shield-check',
    title: 'Appropriate Tutor Assignment',
    description:
      'For children, male tutors are assigned to male students and female tutors to female students, subject to availability.'
  },
  {
    icon: 'i-lucide-route',
    title: 'Structured Learning',
    description:
      'A clear weekly structure keeps students consistent while giving families a predictable learning routine.'
  },
  {
    icon: 'i-lucide-message-circle-heart',
    title: 'Parent Communication',
    description:
      'Parents can remain connected with the academy and stay informed about their child’s learning journey.'
  }
]
</script>

<template>
  <section
    id="why-choose-us"
    class="relative overflow-hidden bg-white py-24 sm:py-28"
  >
    <!-- Background decoration -->
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#073b29]/[0.035] blur-3xl"
    />

    <div
      aria-hidden="true"
      class="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#f4e9ae]/[0.12] blur-3xl"
    />

    <UContainer>
      <!-- Heading -->
      <div class="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <!-- Section label -->
          <div class="section-reveal inline-flex items-center gap-3">
            <span class="h-px w-9 bg-[#d8c98b]" />

            <span
              class="text-xs font-bold uppercase tracking-[0.22em] text-[#073b29]"
            >
              Why Choose Us
            </span>
          </div>

          <!-- Heading -->
          <h2
            class="section-reveal section-delay-1 mt-5 max-w-xl font-serif text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-5xl"
          >
            More than classes.
            <span class="text-[#073b29]">
              A learning journey.
            </span>
          </h2>
        </div>

        <!-- Description -->
        <div class="section-reveal section-delay-2 lg:pb-1">
          <p
            class="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
          >
            We want learning Islam to be meaningful, consistent and
            measurable. Your child receives dedicated teaching while you
            remain connected to their progress.
          </p>
        </div>
      </div>

      <!-- Parent trust statement -->
      <div
        class="section-reveal section-delay-2 mt-12 overflow-hidden rounded-[2rem] bg-[#073b29] shadow-2xl shadow-[#073b29]/10"
      >
        <div
          class="relative grid gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10"
        >
          <!-- Decorative pattern -->
          <div
            aria-hidden="true"
            class="pointer-events-none absolute right-0 top-0 h-full w-1/3 opacity-[0.06]"
          >
            <div
              class="h-full w-full"
              style="
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
                  );
                background-size: 36px 62px;
              "
            />
          </div>

          <!-- Trust content -->
          <div class="relative">
            <div class="flex items-start gap-4">
              <div
                class="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 sm:flex"
              >
                <UIcon
                  name="i-lucide-heart-handshake"
                  class="h-5 w-5 text-[#f4e9ae]"
                />
              </div>

              <div>
                <p
                  class="text-xs font-bold uppercase tracking-[0.18em] text-[#f4e9ae]"
                >
                  For Parents
                </p>

                <h3
                  class="mt-2 max-w-2xl font-serif text-2xl font-semibold leading-tight text-white sm:text-3xl"
                >
                  Know that your child's learning is being guided,
                  monitored and supported.
                </h3>
              </div>
            </div>
          </div>

          <!-- Progress CTA -->
          <NuxtLink
            to="/student-progress"
            class="group relative inline-flex w-fit items-center gap-3 rounded-xl bg-[#f4e9ae] px-5 py-3 text-sm font-bold text-[#073b29] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
          >
            <span>
              See How We Monitor Progress
            </span>

            <UIcon
              name="i-lucide-arrow-up-right"
              class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </NuxtLink>
        </div>
      </div>

      <!-- Benefits -->
      <div
        class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        <article
          v-for="(benefit, index) in benefits"
          :key="benefit.title"
          class="group section-reveal rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-900/[0.025] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#d8c98b]/70 hover:shadow-xl hover:shadow-slate-900/[0.06]"
          :style="{
            animationDelay: `${0.1 + index * 0.07}s`
          }"
        >
          <!-- Icon + number -->
          <div class="flex items-start justify-between gap-4">
            <div
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#073b29]/[0.06] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#073b29]"
            >
              <UIcon
                :name="benefit.icon"
                class="h-5 w-5 text-[#073b29] transition-colors duration-300 group-hover:text-[#f4e9ae]"
              />
            </div>

            <span
              class="font-serif text-sm text-slate-200 transition-colors duration-300 group-hover:text-[#d8c98b]"
            >
              {{ String(index + 1).padStart(2, '0') }}
            </span>
          </div>

          <!-- Content -->
          <h3
            class="mt-6 font-semibold text-slate-950 transition-colors duration-300 group-hover:text-[#073b29]"
          >
            {{ benefit.title }}
          </h3>

          <p
            class="mt-2 text-sm leading-6 text-slate-500"
          >
            {{ benefit.description }}
          </p>

          <!-- Bottom accent -->
          <div
            class="mt-5 h-px w-0 bg-[#d8c98b] transition-all duration-500 group-hover:w-12"
          />
        </article>
      </div>

      <!-- Bottom reassurance -->
      <div
        class="section-reveal mt-10 flex flex-col items-center justify-center gap-3 text-center sm:flex-row"
      >
        <div
          class="flex h-8 w-8 items-center justify-center rounded-full bg-[#073b29]/[0.06]"
        >
          <UIcon
            name="i-lucide-check"
            class="h-4 w-4 text-[#073b29]"
          />
        </div>

        <p class="text-sm text-slate-500">
          Learning designed for
          <span class="font-semibold text-[#073b29]">
            children, teenagers, university students and adults.
          </span>
        </p>
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

  animation:
    section-reveal
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
   REVEAL ANIMATION
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
}
</style>
