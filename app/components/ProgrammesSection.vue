<script setup lang="ts">
const programmes = [
  {
    number: '01',
    icon: 'i-lucide-book-open',
    title: 'Qur’an & Tajwīd',
    description:
      'Build stronger Qur’an reading, pronunciation and recitation through structured guidance from dedicated tutors.',
    subjects: ['Qur’an Reading', 'Tajwīd', 'Recitation']
  },
  {
    number: '02',
    icon: 'i-lucide-brain',
    title: 'Qur’an Memorisation',
    description:
      'Develop a consistent relationship with the Qur’an through guided memorisation, revision and retention.',
    subjects: ['New Memorisation', 'Revision', 'Ḥifẓ']
  },
  {
    number: '03',
    icon: 'i-lucide-languages',
    title: 'Arabic Language',
    description:
      'Progress from the Arabic alphabet to deeper language development according to your level and learning goals.',
    subjects: ['Beginners', 'Intermediate', 'Advanced']
  },
  {
    number: '04',
    icon: 'i-lucide-moon-star',
    title: 'Islamic Studies',
    description:
      'Learn essential Islamic knowledge and develop a deeper understanding of your Dīn through age-appropriate study.',
    subjects: ['Aqīdah', 'Fiqh', 'Hadith', 'Sīrah']
  },
  {
    number: '05',
    icon: 'i-lucide-shapes',
    title: 'NurulBayan',
    description:
      'A foundation programme for beginners learning Arabic letters, pronunciation and Qur’anic reading.',
    subjects: ['Arabic Letters', 'Pronunciation', 'Qur’anic Reading']
  }
]

const arabicAreas = [
  'Naḥw',
  'Ṣarf',
  'Vocabulary',
  'Reading',
  'Writing',
  'Conversation',
  'Comprehension',
  'Classical Arabic'
]
</script>

<template>
  <section
    id="programmes"
    class="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
  >
    <!-- Background decoration -->
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#f4e9ae]/10 blur-3xl"
    />

    <div
      aria-hidden="true"
      class="pointer-events-none absolute -left-32 bottom-20 h-80 w-80 rounded-full bg-[#073b29]/[0.035] blur-3xl"
    />

    <UContainer>
      <!-- Header -->
      <div class="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <div class="programme-item programme-delay-1 inline-flex items-center gap-3">
            <span class="h-px w-8 bg-[#d8c98b]" />

            <span
              class="text-[10px] font-bold uppercase tracking-[0.25em] text-[#073b29] sm:text-xs"
            >
              Our Programmes
            </span>
          </div>

          <h2
            class="programme-item programme-delay-2 mt-5 max-w-xl font-serif text-4xl font-semibold leading-tight tracking-[-0.03em] text-slate-950 sm:text-5xl lg:text-6xl"
          >
            A Pathway For
            <span class="text-[#073b29]">Every Learner.</span>
          </h2>
        </div>

        <p
          class="programme-item programme-delay-3 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:ml-auto"
        >
          From first learning the Arabic letters to developing advanced
          knowledge of Arabic and Islamic Studies, our programmes are designed
          to meet learners at their current level and help them progress with
          confidence.
        </p>
      </div>

      <!-- Featured Qur'an programme -->
      <div
        class="programme-feature relative mt-14 overflow-hidden rounded-[2.25rem] bg-[#073b29] shadow-2xl shadow-[#073b29]/10"
      >
        <!-- Decorative geometry -->
        <div
          aria-hidden="true"
          class="absolute -right-24 -top-32 h-80 w-80 rounded-full border border-[#f4e9ae]/10"
        />

        <div
          aria-hidden="true"
          class="absolute -right-8 top-8 h-48 w-48 rounded-full border border-[#f4e9ae]/10"
        />

        <div
          aria-hidden="true"
          class="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#f4e9ae]/[0.035] blur-3xl"
        />

        <div
          class="relative grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:p-14"
        >
          <!-- Left -->
          <div>
            <div class="flex items-center gap-3">
              <div
                class="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f4e9ae]/10"
              >
                <UIcon
                  name="i-lucide-book-open-check"
                  class="h-5 w-5 text-[#f4e9ae]"
                />
              </div>

              <span
                class="text-[10px] font-bold uppercase tracking-[0.22em] text-[#f4e9ae]"
              >
                Qur’an Education
              </span>
            </div>

            <h3
              class="mt-7 max-w-xl font-serif text-4xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-5xl"
            >
              Build a stronger
              <span class="text-[#f4e9ae]">connection with the Qur’an.</span>
            </h3>

            <p class="mt-6 max-w-xl text-sm leading-8 text-white/70 sm:text-base">
              Whether you are improving your Qur’an reading, learning Tajwīd or
              beginning your memorisation journey, our tutors provide structured
              guidance according to your ability and pace.
            </p>

            <div class="mt-8 flex flex-wrap gap-2">
              <span
                v-for="subject in programmes[0]?.subjects ?? []"
                :key="subject"
                class="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-medium text-white/80"
              >
                {{ subject }}
              </span>
            </div>

            <NuxtLink
              to="/programmes"
              class="group mt-9 inline-flex items-center gap-3 text-sm font-bold text-[#f4e9ae]"
            >
              Explore Qur’an programmes

              <span
                class="flex h-8 w-8 items-center justify-center rounded-full border border-[#f4e9ae]/30 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#f4e9ae] group-hover:text-[#073b29]"
              >
                <UIcon
                  name="i-lucide-arrow-right"
                  class="h-4 w-4"
                />
              </span>
            </NuxtLink>
          </div>

          <!-- Right learning summary -->
          <div
            class="flex flex-col justify-end rounded-3xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur-sm sm:p-7"
          >
            <p
              class="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40"
            >
              Qur’an Learning
            </p>

            <div class="mt-6 space-y-5">
              <div class="flex gap-4">
                <span
                  class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f4e9ae] text-[#073b29]"
                >
                  <UIcon
                    name="i-lucide-volume-2"
                    class="h-4 w-4"
                  />
                </span>

                <div>
                  <p class="font-semibold text-white">
                    Qur’an Reading
                  </p>

                  <p class="mt-1 text-sm leading-6 text-white/50">
                    Improve fluency, accuracy and confidence.
                  </p>
                </div>
              </div>

              <div class="h-px bg-white/10" />

              <div class="flex gap-4">
                <span
                  class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f4e9ae] text-[#073b29]"
                >
                  <UIcon
                    name="i-lucide-sparkles"
                    class="h-4 w-4"
                  />
                </span>

                <div>
                  <p class="font-semibold text-white">
                    Tajwīd
                  </p>

                  <p class="mt-1 text-sm leading-6 text-white/50">
                    Learn correct pronunciation and recitation rules.
                  </p>
                </div>
              </div>

              <div class="h-px bg-white/10" />

              <div class="flex gap-4">
                <span
                  class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f4e9ae] text-[#073b29]"
                >
                  <UIcon
                    name="i-lucide-brain"
                    class="h-4 w-4"
                  />
                </span>

                <div>
                  <p class="font-semibold text-white">
                    Ḥifẓ
                  </p>

                  <p class="mt-1 text-sm leading-6 text-white/50">
                    Memorise and revise according to your pace.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Other programmes -->
      <div class="mt-6 grid gap-5 md:grid-cols-2">
        <!-- Arabic -->
        <article
          class="programme-card group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-[#fafbf9] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#d8c98b]/70 hover:bg-white hover:shadow-xl hover:shadow-slate-900/[0.05] sm:p-9"
        >
          <div class="flex items-start justify-between gap-5">
            <div
              class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#073b29]/[0.07] text-[#073b29] transition-all duration-500 group-hover:bg-[#073b29] group-hover:text-[#f4e9ae]"
            >
              <UIcon
                name="i-lucide-languages"
                class="h-6 w-6"
              />
            </div>

            <span
              class="font-serif text-4xl font-semibold text-slate-200 transition-colors duration-500 group-hover:text-[#073b29]/10"
            >
              03
            </span>
          </div>

          <h3
            class="mt-7 font-serif text-3xl font-semibold tracking-tight text-slate-950"
          >
            Arabic Language
          </h3>

          <p class="mt-4 max-w-xl text-sm leading-7 text-slate-600">
            Develop Arabic progressively from the basics to advanced language
            study, according to your level.
          </p>

          <div class="mt-6 flex flex-wrap gap-2">
            <span
              v-for="area in arabicAreas"
              :key="area"
              class="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-medium text-slate-600"
            >
              {{ area }}
            </span>
          </div>

          <NuxtLink
            to="/programmes"
            class="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#073b29]"
          >
            View Arabic programme
            <UIcon
              name="i-lucide-arrow-up-right"
              class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </NuxtLink>
        </article>

        <!-- Islamic Studies -->
        <article
          class="programme-card group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-[#fafbf9] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#d8c98b]/70 hover:bg-white hover:shadow-xl hover:shadow-slate-900/[0.05] sm:p-9"
        >
          <div class="flex items-start justify-between gap-5">
            <div
              class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#073b29]/[0.07] text-[#073b29] transition-all duration-500 group-hover:bg-[#073b29] group-hover:text-[#f4e9ae]"
            >
              <UIcon
                name="i-lucide-moon-star"
                class="h-6 w-6"
              />
            </div>

            <span
              class="font-serif text-4xl font-semibold text-slate-200 transition-colors duration-500 group-hover:text-[#073b29]/10"
            >
              04
            </span>
          </div>

          <h3
            class="mt-7 font-serif text-3xl font-semibold tracking-tight text-slate-950"
          >
            Islamic Studies
          </h3>

          <p class="mt-4 max-w-xl text-sm leading-7 text-slate-600">
            Build sound foundational knowledge of Islam while developing a
            deeper understanding of your Dīn and Islamic character.
          </p>

          <div class="mt-6 flex flex-wrap gap-2">
            <span
              v-for="subject in programmes[3]?.subjects ?? []"
              :key="subject"
              class="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-medium text-slate-600"
            >
              {{ subject }}
            </span>

            <span
              class="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-medium text-slate-600"
            >
              Adhkār
            </span>

            <span
              class="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-medium text-slate-600"
            >
              Islamic History
            </span>
          </div>

          <NuxtLink
            to="/programmes"
            class="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#073b29]"
          >
            View Islamic Studies
            <UIcon
              name="i-lucide-arrow-up-right"
              class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </NuxtLink>
        </article>
      </div>

      <!-- NurulBayan strip -->
      <div
        class="programme-nurul mt-5 flex flex-col gap-6 rounded-[2rem] border border-[#d8c98b]/40 bg-[#fffdf2] p-7 sm:p-9 lg:flex-row lg:items-center lg:justify-between"
      >
        <div class="flex items-start gap-5">
          <div
            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#073b29] text-[#f4e9ae]"
          >
            <UIcon
              name="i-lucide-shapes"
              class="h-6 w-6"
            />
          </div>

          <div>
            <div class="flex flex-wrap items-center gap-3">
              <h3
                class="font-serif text-2xl font-semibold text-slate-950"
              >
                NurulBayan
              </h3>

              <span
                class="rounded-full bg-[#073b29]/[0.07] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#073b29]"
              >
                Foundation Programme
              </span>
            </div>

            <p class="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
              A gentle starting point for beginners learning Arabic letters,
              pronunciation and Qur’anic reading.
            </p>
          </div>
        </div>

        <NuxtLink
          to="/programmes"
          class="group inline-flex shrink-0 items-center gap-3 text-sm font-bold text-[#073b29]"
        >
          Learn about NurulBayan

          <span
            class="flex h-8 w-8 items-center justify-center rounded-full border border-[#073b29]/15 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#073b29] group-hover:text-white"
          >
            <UIcon
              name="i-lucide-arrow-right"
              class="h-4 w-4"
            />
          </span>
        </NuxtLink>
      </div>

      <!-- Bottom note -->
      <div
        class="programme-note mt-8 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between"
      >
        <div class="flex items-start gap-3">
          <UIcon
            name="i-lucide-circle-help"
            class="mt-0.5 h-5 w-5 shrink-0 text-[#073b29]"
          />

          <p class="text-sm leading-6 text-slate-600">
            Not sure which programme is right for you?
            <span class="font-semibold text-slate-900">
              We can help determine the appropriate level.
            </span>
          </p>
        </div>

        <NuxtLink
          to="/enrol"
          class="shrink-0 text-sm font-bold text-[#073b29] underline decoration-[#d8c98b] decoration-2 underline-offset-4"
        >
          Book an assessment
        </NuxtLink>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
/* =========================================
   HEADER ANIMATION
   ========================================= */

.programme-item {
  opacity: 0;
  transform: translateY(22px);
  filter: blur(6px);
  animation: programme-fade-up 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.programme-delay-1 {
  animation-delay: 0.1s;
}

.programme-delay-2 {
  animation-delay: 0.25s;
}

.programme-delay-3 {
  animation-delay: 0.4s;
}

/* =========================================
   FEATURE
   ========================================= */

.programme-feature {
  opacity: 0;
  transform: translateY(28px);
  filter: blur(7px);
  animation: programme-fade-up 1.1s
    cubic-bezier(0.22, 1, 0.36, 1)
    0.5s forwards;
}

/* =========================================
   CARDS
   ========================================= */

.programme-card {
  opacity: 0;
  transform: translateY(24px);
  filter: blur(5px);
  animation: programme-fade-up 0.95s
    cubic-bezier(0.22, 1, 0.36, 1)
    0.7s forwards;
}

.programme-card:nth-child(2) {
  animation-delay: 0.82s;
}

/* =========================================
   NURULBAYAN
   ========================================= */

.programme-nurul {
  opacity: 0;
  transform: translateY(20px);
  filter: blur(5px);
  animation: programme-fade-up 0.9s
    cubic-bezier(0.22, 1, 0.36, 1)
    0.95s forwards;
}

/* =========================================
   NOTE
   ========================================= */

.programme-note {
  opacity: 0;
  transform: translateY(18px);
  filter: blur(4px);
  animation: programme-fade-up 0.8s
    cubic-bezier(0.22, 1, 0.36, 1)
    1.1s forwards;
}

/* =========================================
   KEYFRAME
   ========================================= */

@keyframes programme-fade-up {
  0% {
    opacity: 0;
    transform: translateY(24px);
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

/* =========================================
   ACCESSIBILITY
   ========================================= */

@media (prefers-reduced-motion: reduce) {
  .programme-item,
  .programme-feature,
  .programme-card,
  .programme-nurul,
  .programme-note {
    opacity: 1;
    transform: none;
    filter: none;
    animation: none;
  }
}
</style>
