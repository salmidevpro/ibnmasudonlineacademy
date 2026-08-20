<script setup lang="ts">
const whatsappMessage = encodeURIComponent(
  'Assalamu Alaikum. I would like to enquire about the programmes offered by IBN MAS\'UD ONLINE ACADEMY.'
)

const whatsappUrl = `https://wa.me/2348074113418?text=${whatsappMessage}`

const programmes = [
  {
    icon: 'i-lucide-book-open',
    number: '01',
    title: 'Qur\'an',
    description:
      'Develop a stronger relationship with the Qur\'an through structured online learning guided by dedicated tutors.',
    points: [
      'Structured weekly learning',
      'Individual learning guidance',
      'Suitable for different learning levels'
    ]
  },
  {
    icon: 'i-lucide-book-marked',
    number: '02',
    title: 'Tajwīd',
    description:
      'Improve Qur\'an recitation with focused Tajwīd learning designed to help students recite with greater accuracy and confidence.',
    points: [
      'Guided recitation practice',
      'Learning according to ability',
      'Consistent tutor support'
    ]
  },
  {
    icon: 'i-lucide-languages',
    number: '03',
    title: 'Arabic',
    description:
      'Build your Arabic skills through flexible online lessons designed around the learner’s current level and needs.',
    points: [
      'Level-appropriate instruction',
      'Personalised learning',
      'Flexible online scheduling'
    ]
  },
  {
    icon: 'i-lucide-moon-star',
    number: '04',
    title: 'Islamic Education',
    description:
      'Deepen your understanding of Islam through structured learning delivered by dedicated tutors in an accessible online environment.',
    points: [
      'Structured Islamic learning',
      'Guidance from dedicated tutors',
      'Learning for different age groups'
    ]
  }
]

const learningFeatures = [
  {
    icon: 'i-lucide-calendar-check',
    title: '3 Weekly Sessions',
    description:
      'Students receive three weekly learning sessions arranged around student and tutor availability.'
  },
  {
    icon: 'i-lucide-book-open-check',
    title: 'Weekly Qur’an Memorisation',
    description:
      'Every enrolled student receives a dedicated weekly 30-minute Ḥifẓ session for memorisation, revision and recitation.'
  },
  {
    icon: 'i-lucide-chart-no-axes-combined',
    title: 'Monthly Progress Reports',
    description:
      'Parents stay informed about their child’s achievements, strengths, areas for improvement and tutor recommendations.'
  }
]
</script>

<template>
  <main class="overflow-hidden bg-white">
    <!-- =====================================================
         HERO
    ====================================================== -->

    <section class="relative isolate overflow-hidden bg-[#faf9f5]">
      <!-- Decorative background -->
      <div
        aria-hidden="true"
        class="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#073b29]/[0.04] blur-3xl"
      />

      <div
        aria-hidden="true"
        class="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-[#d8c98b]/[0.14] blur-3xl"
      />

      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-0 opacity-[0.025] programme-pattern"
      />

      <UContainer>
        <div
          class="relative grid min-h-[75vh] items-center gap-12 pb-20 pt-36 lg:grid-cols-[1fr_0.8fr] lg:gap-20 lg:pb-24 lg:pt-36"
        >
          <!-- Hero content -->
          <div class="relative z-10">
            <div
              class="programme-reveal inline-flex items-center gap-3 rounded-full border border-[#073b29]/10 bg-[#073b29]/[0.035] px-4 py-2"
            >
              <span class="h-2 w-2 rounded-full bg-[#073b29]" />

              <span
                class="text-[10px] font-bold uppercase tracking-[0.2em] text-[#073b29] sm:text-xs"
              >
                Our Programmes
              </span>
            </div>

            <h1
              class="programme-reveal programme-delay-1 mt-7 max-w-3xl font-serif text-5xl font-semibold leading-[1.03] tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl"
            >
              Learn with purpose.

              <span class="block text-[#073b29]">
                Grow with knowledge.
              </span>
            </h1>

            <div
              class="programme-reveal programme-delay-2 mt-7 flex items-center gap-3"
            >
              <div class="h-0.5 w-12 bg-[#073b29]" />
              <div class="h-2 w-2 rotate-45 bg-[#d8c98b]" />
              <div class="h-0.5 w-20 bg-[#d8c98b]/40" />
            </div>

            <p
              class="programme-reveal programme-delay-2 mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg"
            >
              Quality online Qur'an, Tajwīd, Arabic and Islamic education
              for children, teenagers, university students and adults —
              delivered through flexible, structured learning.
            </p>

            <div
              class="programme-reveal programme-delay-3 mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <NuxtLink
                to="/enrol"
                class="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#073b29] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-[#073b29]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#f4e9ae] hover:text-[#073b29]"
              >
                <span>Start Your Journey</span>

                <span
                  class="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:bg-[#073b29] group-hover:text-[#f4e9ae]"
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
                class="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 text-sm font-semibold text-[#073b29] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d8c98b] hover:bg-[#fffdf3]"
              >
                <UIcon
                  name="i-lucide-message-circle"
                  class="h-5 w-5"
                />

                Talk to an Adviser
              </a>
            </div>
          </div>

          <!-- Hero visual -->
          <div
            class="programme-visual programme-delay-2 relative mx-auto w-full max-w-md lg:ml-auto"
          >
            <div
              aria-hidden="true"
              class="absolute -right-8 -top-8 h-36 w-36 rounded-full border border-[#d8c98b]/50 sm:h-44 sm:w-44"
            />

            <div
              aria-hidden="true"
              class="absolute -bottom-12 -left-12 h-44 w-44 rounded-full bg-[#073b29]/[0.04] blur-2xl"
            />

            <div
              class="relative rounded-[2rem] border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-900/[0.08]"
            >
              <div
                class="relative overflow-hidden rounded-[1.5rem] bg-[#073b29] px-7 py-9 sm:px-9 sm:py-11"
              >
                <div
                  aria-hidden="true"
                  class="absolute inset-0 opacity-[0.07] programme-card-pattern"
                />

                <div class="relative">
                  <div
                    class="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4e9ae]"
                  >
                    <UIcon
                      name="i-lucide-book-open"
                      class="h-7 w-7 text-[#073b29]"
                    />
                  </div>

                  <p
                    class="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#f4e9ae]"
                  >
                    IBN MAS'UD ONLINE ACADEMY
                  </p>

                  <h2
                    class="mt-3 max-w-xs font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl"
                  >
                    Knowledge for every stage of life.
                  </h2>

                  <div class="mt-8 space-y-3">
                    <div
                      v-for="programme in programmes"
                      :key="programme.title"
                      class="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3"
                    >
                      <UIcon
                        :name="programme.icon"
                        class="h-4 w-4 shrink-0 text-[#f4e9ae]"
                      />

                      <span class="text-sm font-medium text-white">
                        {{ programme.title }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- =====================================================
         PROGRAMMES
    ====================================================== -->

    <section class="relative bg-white py-24 sm:py-28">
      <UContainer>
        <!-- Heading -->
        <div class="mx-auto max-w-3xl text-center">
          <div
            class="programme-reveal inline-flex items-center gap-3"
          >
            <span class="h-px w-8 bg-[#d8c98b]" />

            <span
              class="text-xs font-bold uppercase tracking-[0.22em] text-[#073b29]"
            >
              What We Teach
            </span>

            <span class="h-px w-8 bg-[#d8c98b]" />
          </div>

          <h2
            class="programme-reveal programme-delay-1 mt-5 font-serif text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-5xl"
          >
            Programmes designed around

            <span class="text-[#073b29]">
              meaningful learning.
            </span>
          </h2>

          <p
            class="programme-reveal programme-delay-2 mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
          >
            Our online programmes provide structured learning while allowing
            students to learn according to their current level, ability and
            pace.
          </p>
        </div>

        <!-- Programme cards -->
        <div class="mt-12 grid gap-5 sm:grid-cols-2">
          <article
            v-for="(programme, index) in programmes"
            :key="programme.title"
            class="programme-card programme-reveal group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#d8c98b]/70 hover:shadow-2xl hover:shadow-slate-900/[0.06] sm:p-7"
            :style="{
              animationDelay: `${0.1 + index * 0.08}s`
            }"
          >
            <div class="flex items-start justify-between gap-5">
              <!-- FIXED ICON HOVER -->
              <div
                class="programme-icon flex h-14 w-14 items-center justify-center rounded-2xl bg-[#073b29]/[0.06] text-[#073b29] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#073b29] group-hover:text-[#f4e9ae]"
              >
                <UIcon
                  :name="programme.icon"
                  class="h-6 w-6 transition-colors duration-300"
                />
              </div>

              <span
                class="font-serif text-sm font-medium text-slate-200"
              >
                {{ programme.number }}
              </span>
            </div>

            <h3
              class="mt-7 font-serif text-2xl font-semibold text-slate-950"
            >
              {{ programme.title }}
            </h3>

            <p
              class="mt-3 text-sm leading-7 text-slate-500 sm:text-base"
            >
              {{ programme.description }}
            </p>

            <div class="mt-6 space-y-3 border-t border-slate-100 pt-5">
              <div
                v-for="point in programme.points"
                :key="point"
                class="flex items-center gap-3"
              >
                <span
                  class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#073b29]/[0.07]"
                >
                  <UIcon
                    name="i-lucide-check"
                    class="h-3 w-3 text-[#073b29]"
                  />
                </span>

                <span class="text-sm font-medium text-slate-600">
                  {{ point }}
                </span>
              </div>
            </div>

            <div
              class="mt-7 flex items-center gap-2 text-sm font-bold text-[#073b29]"
            >
              Learn with guidance

              <UIcon
                name="i-lucide-arrow-up-right"
                class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </div>
          </article>
        </div>
      </UContainer>
    </section>

    <!-- =====================================================
         LEARNING STRUCTURE
    ====================================================== -->

    <section class="relative overflow-hidden bg-[#faf9f5] py-24 sm:py-28">
      <div
        aria-hidden="true"
        class="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#d8c98b]/10 blur-3xl"
      />

      <UContainer>
        <div
          class="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"
        >
          <!-- Intro -->
          <div class="programme-reveal">
            <div class="inline-flex items-center gap-3">
              <span class="h-px w-8 bg-[#d8c98b]" />

              <span
                class="text-xs font-bold uppercase tracking-[0.22em] text-[#073b29]"
              >
                Learning Structure
              </span>
            </div>

            <h2
              class="mt-5 max-w-lg font-serif text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-5xl"
            >
              Structured enough to keep you

              <span class="text-[#073b29]">
                consistent.
              </span>
            </h2>

            <p
              class="mt-5 max-w-lg text-base leading-8 text-slate-600"
            >
              We combine dedicated teaching with a predictable learning
              structure, helping students remain consistent while allowing
              families to manage learning alongside everyday life.
            </p>

            <div class="mt-8">
              <NuxtLink
                to="/how-it-works"
                class="group inline-flex items-center gap-3 rounded-xl bg-[#073b29] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#f4e9ae] hover:text-[#073b29]"
              >
                <span>See How It Works</span>

                <UIcon
                  name="i-lucide-arrow-right"
                  class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </NuxtLink>
            </div>
          </div>

          <!-- Features -->
          <div class="grid gap-4 sm:grid-cols-3">
            <article
              v-for="(feature, index) in learningFeatures"
              :key="feature.title"
              class="programme-reveal rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              :style="{
                animationDelay: `${0.15 + index * 0.1}s`
              }"
            >
              <div
                class="flex h-11 w-11 items-center justify-center rounded-xl bg-[#073b29]/[0.06] text-[#073b29]"
              >
                <UIcon
                  :name="feature.icon"
                  class="h-5 w-5"
                />
              </div>

              <h3
                class="mt-5 font-semibold leading-6 text-slate-950"
              >
                {{ feature.title }}
              </h3>

              <p
                class="mt-2 text-sm leading-6 text-slate-500"
              >
                {{ feature.description }}
              </p>
            </article>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- =====================================================
         WHO THE PROGRAMMES ARE FOR
    ====================================================== -->

    <section class="bg-white py-24 sm:py-28">
      <UContainer>
        <div
          class="rounded-[2rem] bg-[#073b29] px-6 py-10 shadow-2xl shadow-[#073b29]/10 sm:px-10 sm:py-12 lg:px-14"
        >
          <div
            class="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center"
          >
            <div>
              <p
                class="text-xs font-bold uppercase tracking-[0.2em] text-[#f4e9ae]"
              >
                Learning for everyone
              </p>

              <h2
                class="mt-3 max-w-3xl font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl"
              >
                Whether you're beginning or continuing your journey,
                there is room to learn.
              </h2>

              <p
                class="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base"
              >
                Our programmes are designed for children, teenagers,
                university students and adults, with learning adapted to
                individual levels and needs.
              </p>
            </div>

            <NuxtLink
              to="/enrol"
              class="group inline-flex w-fit items-center gap-3 rounded-xl bg-[#f4e9ae] px-6 py-3.5 text-sm font-bold text-[#073b29] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            >
              <span>Enrol Now</span>

              <UIcon
                name="i-lucide-arrow-right"
                class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </NuxtLink>
          </div>
        </div>
      </UContainer>
    </section>
  </main>
</template>

<style scoped>
.programme-reveal {
  opacity: 0;
  transform: translateY(24px);
  filter: blur(6px);
  animation: programme-reveal 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.programme-delay-1 {
  animation-delay: 0.12s;
}

.programme-delay-2 {
  animation-delay: 0.24s;
}

.programme-delay-3 {
  animation-delay: 0.4s;
}

.programme-visual {
  opacity: 0;
  transform: translateY(25px) scale(0.96);
  filter: blur(7px);
  animation: programme-visual 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.35s
    forwards;
}

.programme-pattern {
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

.programme-card-pattern {
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
}

@keyframes programme-reveal {
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

@keyframes programme-visual {
  0% {
    opacity: 0;
    transform: translateY(25px) scale(0.96);
    filter: blur(7px);
  }

  55% {
    opacity: 0.8;
    filter: blur(2px);
  }

  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .programme-reveal,
  .programme-visual {
    opacity: 1;
    transform: none;
    filter: none;
    animation: none;
  }
}
</style>
