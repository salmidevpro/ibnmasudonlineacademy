<script setup lang="ts">
const whatsappMessage = encodeURIComponent(
  'Assalamu Alaikum. I would like to enquire about the fees and payment options at IBN MAS\'UD ONLINE ACADEMY.'
)

const whatsappUrl = `https://wa.me/2348074113418?text=${whatsappMessage}`

const feePlans = [
  {
    icon: 'i-lucide-book-open',
    number: '01',
    title: 'Qur’an',
    description:
      'Structured Qur’an learning designed to help students build consistency, improve recitation and develop a stronger relationship with the Qur’an.',
    features: [
      '3 weekly learning sessions',
      'Individual learning guidance',
      'Weekly 30-minute Ḥifẓ session',
      'Monthly progress reports'
    ]
  },
  {
    icon: 'i-lucide-book-marked',
    number: '02',
    title: 'Tajwīd',
    description:
      'Focused recitation and Tajwīd instruction helping students develop greater accuracy, confidence and consistency.',
    features: [
      'Guided recitation practice',
      'Individual learning support',
      'Level-appropriate instruction',
      'Regular tutor feedback'
    ]
  },
  {
    icon: 'i-lucide-languages',
    number: '03',
    title: 'Arabic',
    description:
      'Flexible Arabic learning tailored to the student’s current level, learning goals and pace.',
    features: [
      'Level-appropriate lessons',
      'Personalised instruction',
      '3 weekly learning sessions',
      'Tutor guidance and support'
    ]
  },
  {
    icon: 'i-lucide-moon-star',
    number: '04',
    title: 'Islamic Education',
    description:
      'Structured Islamic education designed to help students grow in knowledge and understanding of their faith.',
    features: [
      'Structured learning',
      'Dedicated tutor support',
      'Learning adapted to ability',
      'Monthly progress guidance'
    ]
  }
]

const feeFeatures = [
  {
    icon: 'i-lucide-calendar-check',
    title: 'Flexible Scheduling',
    description:
      'Learning sessions are arranged around student and tutor availability, making online learning easier to maintain.'
  },
  {
    icon: 'i-lucide-users',
    title: 'Dedicated Tutors',
    description:
      'Students learn under the guidance of dedicated tutors who support their progress throughout their learning journey.'
  },
  {
    icon: 'i-lucide-chart-no-axes-combined',
    title: 'Progress Tracking',
    description:
      'Monthly progress reports help parents and students understand achievements, areas for improvement and tutor recommendations.'
  },
  {
    icon: 'i-lucide-heart-handshake',
    title: 'Personalised Support',
    description:
      'Learning is adapted according to the student’s level, ability and individual learning needs.'
  }
]
</script>

<template>
  <main class="overflow-hidden bg-white">
    <!-- =====================================================
         HERO
    ====================================================== -->
    <section class="relative isolate overflow-hidden bg-[#faf9f5]">
      <!-- Background decoration -->
      <div
        aria-hidden="true"
        class="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#073b29]/[0.04] blur-3xl"
      />

      <div
        aria-hidden="true"
        class="pointer-events-none absolute -right-32 -top-10 h-96 w-96 rounded-full bg-[#d8c98b]/[0.14] blur-3xl"
      />

      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-0 opacity-[0.025] fees-pattern"
      />

      <UContainer>
        <div
          class="relative grid min-h-[68vh] items-center gap-12 py-28 sm:py-32 lg:grid-cols-[1fr_0.8fr] lg:gap-20 lg:py-36"
        >
          <!-- Hero content -->
          <div class="relative z-10">
            <div
              class="fees-reveal inline-flex items-center gap-3 rounded-full border border-[#073b29]/10 bg-[#073b29]/[0.035] px-4 py-2"
            >
              <span class="h-2 w-2 rounded-full bg-[#073b29]" />

              <span
                class="text-[10px] font-bold uppercase tracking-[0.2em] text-[#073b29] sm:text-xs"
              >
                Fees & Learning
              </span>
            </div>

            <h1
              class="fees-reveal fees-delay-1 mt-7 max-w-3xl font-serif text-5xl font-semibold leading-[1.03] tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl"
            >
              Invest in knowledge.

              <span class="block text-[#073b29]">
                Grow with purpose.
              </span>
            </h1>

            <div
              class="fees-reveal fees-delay-2 mt-7 flex items-center gap-3"
            >
              <div class="h-0.5 w-12 bg-[#073b29]" />
              <div class="h-2 w-2 rotate-45 bg-[#d8c98b]" />
              <div class="h-0.5 w-20 bg-[#d8c98b]/40" />
            </div>

            <p
              class="fees-reveal fees-delay-2 mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg"
            >
              Quality Islamic education delivered through structured,
              flexible online learning with dedicated tutor support and
              regular progress guidance.
            </p>

            <div
              class="fees-reveal fees-delay-3 mt-9 flex flex-col gap-3 sm:flex-row"
            >
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

                Ask About Fees
              </a>
            </div>
          </div>

          <!-- Hero visual -->
          <div
            class="fees-visual relative mx-auto w-full max-w-md lg:ml-auto"
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
                  class="absolute inset-0 opacity-[0.07] fees-card-pattern"
                />

                <div class="relative">
                  <div
                    class="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4e9ae]"
                  >
                    <UIcon
                      name="i-lucide-wallet-cards"
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
                    Simple, structured learning.
                  </h2>

                  <p class="mt-5 max-w-sm text-sm leading-7 text-white/70">
                    Our learning structure combines regular sessions,
                    dedicated tutor support and ongoing progress guidance.
                  </p>

                  <div class="mt-8 space-y-3">
                    <div
                      v-for="(feature, index) in feeFeatures.slice(0, 3)"
                      :key="feature.title"
                      class="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3"
                    >
                      <span
                        class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#f4e9ae]"
                      >
                        <UIcon
                          :name="feature.icon"
                          class="h-4 w-4 text-[#073b29]"
                        />
                      </span>

                      <div class="min-w-0">
                        <p class="text-sm font-semibold text-white">
                          {{ feature.title }}
                        </p>

                        <p class="mt-0.5 text-xs text-white/50">
                          {{ index === 0
                            ? 'Built around your schedule'
                            : index === 1
                              ? 'Guidance throughout learning'
                              : 'Regular learning feedback' }}
                        </p>
                      </div>
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
         FEES INTRO
    ====================================================== -->
    <section class="bg-white py-24 sm:py-28">
      <UContainer>
        <div class="mx-auto max-w-3xl text-center">
          <div class="fees-reveal inline-flex items-center gap-3">
            <span class="h-px w-8 bg-[#d8c98b]" />

            <span
              class="text-xs font-bold uppercase tracking-[0.22em] text-[#073b29]"
            >
              Learning Investment
            </span>

            <span class="h-px w-8 bg-[#d8c98b]" />
          </div>

          <h2
            class="fees-reveal fees-delay-1 mt-5 font-serif text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-5xl"
          >
            A learning structure built around
            <span class="text-[#073b29]">
              real progress.
            </span>
          </h2>

          <p
            class="fees-reveal fees-delay-2 mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
          >
            We believe quality Islamic education should be structured,
            accessible and focused on helping every student make meaningful
            progress.
          </p>
        </div>

        <!-- Notice -->
        <div
          class="mx-auto mt-12 max-w-4xl rounded-[1.75rem] border border-[#d8c98b]/40 bg-[#faf9f5] p-6 sm:p-8"
        >
          <div class="flex flex-col gap-5 sm:flex-row sm:items-start">
            <div
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#073b29]"
            >
              <UIcon
                name="i-lucide-info"
                class="h-5 w-5 text-[#f4e9ae]"
              />
            </div>

            <div>
              <h3
                class="font-serif text-xl font-semibold text-slate-950"
              >
                Fees are arranged according to the learning programme.
              </h3>

              <p class="mt-2 text-sm leading-7 text-slate-600">
                Because learning needs differ between students, families are
                encouraged to contact the academy for the current fee,
                programme availability and enrolment details.
              </p>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- =====================================================
         PROGRAMME CARDS
    ====================================================== -->
    <section class="relative overflow-hidden bg-[#faf9f5] py-24 sm:py-28">
      <div
        aria-hidden="true"
        class="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#d8c98b]/10 blur-3xl"
      />

      <UContainer>
        <div class="mx-auto max-w-3xl text-center">
          <div class="inline-flex items-center gap-3">
            <span class="h-px w-8 bg-[#d8c98b]" />

            <span
              class="text-xs font-bold uppercase tracking-[0.22em] text-[#073b29]"
            >
              Programmes
            </span>

            <span class="h-px w-8 bg-[#d8c98b]" />
          </div>

          <h2
            class="mt-5 font-serif text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-5xl"
          >
            Choose the right path
            <span class="text-[#073b29]">
              for your learning.
            </span>
          </h2>

          <p
            class="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600"
          >
            Each programme is supported by a structured learning approach
            designed around the student's level and needs.
          </p>
        </div>

        <!-- Cards -->
        <div class="mt-12 grid gap-5 sm:grid-cols-2">
          <article
            v-for="(plan) in feePlans"
            :key="plan.title"
            class="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#d8c98b]/70 hover:shadow-2xl hover:shadow-slate-900/[0.06] sm:p-7"
          >
            <!-- Card top -->
            <div class="flex items-start justify-between gap-5">
              <!-- FIXED HOVER ICON -->
              <div
                class="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#073b29]/[0.06] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#073b29]"
              >
                <UIcon
                  :name="plan.icon"
                  class="h-6 w-6 text-[#073b29] transition-colors duration-300 group-hover:text-[#f4e9ae]"
                />
              </div>

              <span
                class="font-serif text-sm font-medium text-slate-200"
              >
                {{ plan.number }}
              </span>
            </div>

            <h3
              class="mt-7 font-serif text-2xl font-semibold text-slate-950"
            >
              {{ plan.title }}
            </h3>

            <p
              class="mt-3 text-sm leading-7 text-slate-500 sm:text-base"
            >
              {{ plan.description }}
            </p>

            <!-- Features -->
            <div class="mt-6 space-y-3 border-t border-slate-100 pt-5">
              <div
                v-for="feature in plan.features"
                :key="feature"
                class="flex items-start gap-3"
              >
                <span
                  class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#073b29]/[0.07] transition-colors duration-300 group-hover:bg-[#f4e9ae]"
                >
                  <UIcon
                    name="i-lucide-check"
                    class="h-3 w-3 text-[#073b29]"
                  />
                </span>

                <span
                  class="text-sm font-medium leading-6 text-slate-600"
                >
                  {{ feature }}
                </span>
              </div>
            </div>

            <!-- Card bottom -->
            <div
              class="mt-7 flex items-center gap-2 text-sm font-bold text-[#073b29]"
            >
              Discuss this programme

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
         WHAT YOUR LEARNING INCLUDES
    ====================================================== -->
    <section class="bg-white py-24 sm:py-28">
      <UContainer>
        <div
          class="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"
        >
          <!-- Intro -->
          <div>
            <div class="inline-flex items-center gap-3">
              <span class="h-px w-8 bg-[#d8c98b]" />

              <span
                class="text-xs font-bold uppercase tracking-[0.22em] text-[#073b29]"
              >
                More Than Lessons
              </span>
            </div>

            <h2
              class="mt-5 max-w-lg font-serif text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-5xl"
            >
              Your learning journey includes
              <span class="text-[#073b29]">
                ongoing support.
              </span>
            </h2>

            <p
              class="mt-5 max-w-lg text-base leading-8 text-slate-600"
            >
              Enrolment is not simply about attending lessons. Our learning
              structure is designed to encourage consistency, guidance and
              measurable progress.
            </p>

            <div class="mt-8">
              <a
                :href="whatsappUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="group inline-flex items-center gap-3 rounded-xl bg-[#073b29] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#f4e9ae] hover:text-[#073b29]"
              >
                <span>Ask About Enrolment</span>

                <UIcon
                  name="i-lucide-arrow-right"
                  class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          <!-- Features -->
          <div class="grid gap-4 sm:grid-cols-2">
            <article
              v-for="feature in feeFeatures"
              :key="feature.title"
              class="group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d8c98b]/60 hover:shadow-xl hover:shadow-slate-900/[0.05]"
            >
              <!-- FIXED HOVER ICON -->
              <div
                class="flex h-12 w-12 items-center justify-center rounded-xl bg-[#073b29]/[0.06] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#073b29]"
              >
                <UIcon
                  :name="feature.icon"
                  class="h-5 w-5 text-[#073b29] transition-colors duration-300 group-hover:text-[#f4e9ae]"
                />
              </div>

              <h3
                class="mt-5 font-semibold text-slate-950"
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
         FAQ / FEE CLARIFICATION
    ====================================================== -->
    <section class="bg-[#faf9f5] py-24 sm:py-28">
      <UContainer>
        <div class="mx-auto max-w-3xl">
          <div class="text-center">
            <div class="inline-flex items-center gap-3">
              <span class="h-px w-8 bg-[#d8c98b]" />

              <span
                class="text-xs font-bold uppercase tracking-[0.22em] text-[#073b29]"
              >
                Fee Questions
              </span>

              <span class="h-px w-8 bg-[#d8c98b]" />
            </div>

            <h2
              class="mt-5 font-serif text-4xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-5xl"
            >
              Need more information?
            </h2>

            <p
              class="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600"
            >
              We are happy to help you understand the available programmes,
              current fees and enrolment process.
            </p>
          </div>

          <div class="mt-10 space-y-4">
            <div
              class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div class="flex items-start gap-4">
                <div
                  class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#073b29]/[0.06]"
                >
                  <UIcon
                    name="i-lucide-circle-help"
                    class="h-5 w-5 text-[#073b29]"
                  />
                </div>

                <div>
                  <h3 class="font-semibold text-slate-950">
                    How do I know the current fee?
                  </h3>

                  <p class="mt-2 text-sm leading-7 text-slate-500">
                    Contact the academy directly for the current fee
                    applicable to your chosen programme and learning
                    arrangement.
                  </p>
                </div>
              </div>
            </div>

            <div
              class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div class="flex items-start gap-4">
                <div
                  class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#073b29]/[0.06]"
                >
                  <UIcon
                    name="i-lucide-message-circle"
                    class="h-5 w-5 text-[#073b29]"
                  />
                </div>

                <div>
                  <h3 class="font-semibold text-slate-950">
                    Can I speak with someone before enrolling?
                  </h3>

                  <p class="mt-2 text-sm leading-7 text-slate-500">
                    Yes. You can speak with an adviser before making your
                    enrolment decision and ask questions about the learning
                    structure, programme and fees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- =====================================================
         FINAL CTA
    ====================================================== -->
    <section class="bg-white py-24 sm:py-28">
      <UContainer>
        <div
          class="relative overflow-hidden rounded-[2rem] bg-[#073b29] px-6 py-12 shadow-2xl shadow-[#073b29]/10 sm:px-10 sm:py-14 lg:px-14"
        >
          <div
            aria-hidden="true"
            class="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#f4e9ae]/10"
          />

          <div
            aria-hidden="true"
            class="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#f4e9ae]/[0.04] blur-3xl"
          />

          <div
            class="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center"
          >
            <div>
              <p
                class="text-xs font-bold uppercase tracking-[0.2em] text-[#f4e9ae]"
              >
                Ready to begin?
              </p>

              <h2
                class="mt-3 max-w-3xl font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl"
              >
                Give yourself or your child a structured path to meaningful
                Islamic learning.
              </h2>

              <p
                class="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base"
              >
                Contact IBN MAS'UD ONLINE ACADEMY to discuss programmes,
                current fees and the next steps towards enrolment.
              </p>
            </div>

            <div class="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <NuxtLink
                to="/enrol"
                class="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#f4e9ae] px-6 py-3.5 text-sm font-bold text-[#073b29] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
              >
                <span>Enrol Now</span>

                <UIcon
                  name="i-lucide-arrow-right"
                  class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </NuxtLink>

              <a
                :href="whatsappUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#f4e9ae]/50 hover:bg-white/[0.1]"
              >
                <UIcon
                  name="i-lucide-message-circle"
                  class="h-5 w-5 transition-colors duration-300 group-hover:text-[#f4e9ae]"
                />

                Talk to an Adviser
              </a>
            </div>
          </div>
        </div>
      </UContainer>
    </section>
  </main>
</template>

<style scoped>
/* =====================================================
   REVEAL ANIMATIONS
===================================================== */

.fees-reveal {
  opacity: 0;
  transform: translateY(24px);
  filter: blur(6px);
  animation: fees-reveal 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.fees-delay-1 {
  animation-delay: 0.12s;
}

.fees-delay-2 {
  animation-delay: 0.24s;
}

.fees-delay-3 {
  animation-delay: 0.4s;
}

.fees-visual {
  opacity: 0;
  transform: translateY(25px) scale(0.96);
  filter: blur(7px);
  animation: fees-visual 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.35s forwards;
}

/* =====================================================
   BACKGROUND PATTERN
===================================================== */

.fees-pattern {
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

.fees-card-pattern {
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

/* =====================================================
   KEYFRAMES
===================================================== */

@keyframes fees-reveal {
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

@keyframes fees-visual {
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

/* =====================================================
   ACCESSIBILITY
===================================================== */

@media (prefers-reduced-motion: reduce) {
  .fees-reveal,
  .fees-visual {
    opacity: 1;
    transform: none;
    filter: none;
    animation: none;
  }
}
</style>
