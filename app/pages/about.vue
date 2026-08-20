<script setup lang="ts">
const whatsappMessage = encodeURIComponent(
  'Assalamu Alaikum. I would like to enquire about learning at IBN MAS\'UD ONLINE ACADEMY.'
)

const whatsappUrl = `https://wa.me/2348074113418?text=${whatsappMessage}`

const values = [
  {
    icon: 'i-lucide-book-open',
    title: 'Knowledge',
    description:
      'We encourage meaningful learning that helps students develop a stronger understanding of the Qur’an, Arabic and Islamic knowledge.'
  },
  {
    icon: 'i-lucide-heart-handshake',
    title: 'Guidance',
    description:
      'Students learn with dedicated tutors who provide direction, encouragement and support throughout their learning journey.'
  },
  {
    icon: 'i-lucide-calendar-check',
    title: 'Consistency',
    description:
      'A structured learning approach helps students build regular habits and make steady progress over time.'
  },
  {
    icon: 'i-lucide-users',
    title: 'Individual Growth',
    description:
      'Learning is adapted to the student’s level, ability and needs, allowing each learner to progress meaningfully.'
  }
]

const strengths = [
  {
    number: '01',
    title: 'Flexible Online Learning',
    description:
      'Access structured Islamic learning from wherever you are, making it easier to balance education with everyday responsibilities.'
  },
  {
    number: '02',
    title: 'Dedicated Tutor Support',
    description:
      'Students receive guidance from tutors throughout their learning journey, with teaching focused on their individual needs.'
  },
  {
    number: '03',
    title: 'Structured Progress',
    description:
      'Regular learning sessions and progress-focused teaching help students remain consistent and intentional in their studies.'
  }
]

const learners = [
  'Children',
  'Teenagers',
  'University Students',
  'Adults'
]
</script>

<template>
  <main class="overflow-hidden bg-white">
    <!-- =====================================================
         HERO
    ====================================================== -->

    <section class="relative isolate overflow-hidden bg-[#faf9f5]">
      <!-- Background -->
      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-0 -z-10"
      >
        <div
          class="absolute -left-48 top-20 h-[420px] w-[420px] rounded-full bg-[#073b29]/[0.035] blur-3xl"
        />

        <div
          class="absolute -right-48 -top-20 h-[500px] w-[500px] rounded-full bg-[#d8c98b]/[0.12] blur-3xl"
        />

        <div
          class="absolute inset-0 opacity-[0.025] about-pattern"
        />
      </div>

      <UContainer>
        <div
          class="grid min-h-[72vh] items-center gap-14 pb-20 pt-32 sm:pb-24 sm:pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:pb-28"
        >

          <!-- Content -->
          <div class="relative z-10">

            <div
              class="about-reveal about-delay-1 inline-flex items-center gap-3"
            >
              <span class="h-px w-10 bg-[#d8c98b]" />

              <span
                class="text-xs font-bold uppercase tracking-[0.22em] text-[#073b29]"
              >
                About the Academy
              </span>
            </div>

            <h1
              class="about-reveal about-delay-2 mt-6 max-w-3xl font-serif text-5xl font-semibold leading-[1.04] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-7xl"
            >
              Learning with purpose.
              <span class="block text-[#073b29]">
                Growing with knowledge.
              </span>
            </h1>

            <div
              class="about-reveal about-delay-3 mt-7 flex items-center gap-3"
            >
              <div class="h-0.5 w-12 bg-[#073b29]" />
              <div class="h-2 w-2 rotate-45 bg-[#d8c98b]" />
              <div class="h-0.5 w-20 bg-[#d8c98b]/40" />
            </div>

            <p
              class="about-reveal about-delay-3 mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg"
            >
              IBN MAS'UD ONLINE ACADEMY provides quality online Qur'an,
              Tajwīd, Arabic and Islamic education through flexible,
              structured learning for children, teenagers, university
              students and adults.
            </p>

            <div
              class="about-reveal about-delay-4 mt-8 flex max-w-xl items-start gap-4"
            >
              <div
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#073b29]/[0.07]"
              >
                <UIcon
                  name="i-lucide-book-open-check"
                  class="h-5 w-5 text-[#073b29]"
                />
              </div>

              <p class="text-sm leading-7 text-slate-500">
                Our approach combines structured teaching, dedicated tutor
                support and flexible online learning to help students remain
                consistent in their studies.
              </p>
            </div>

            <div
              class="about-reveal about-delay-5 mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <NuxtLink
                to="/enrol"
                class="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#073b29] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-[#073b29]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#f4e9ae] hover:text-[#073b29]"
              >
                <span>Start Your Journey</span>

                <span
                  class="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:bg-[#073b29]"
                >
                  <UIcon
                    name="i-lucide-arrow-right"
                    class="h-4 w-4 text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-[#f4e9ae]"
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

          <!-- Visual -->
          <div
            class="about-visual relative mx-auto flex w-full max-w-[500px] items-center justify-center"
          >

            <div
              aria-hidden="true"
              class="absolute h-[310px] w-[310px] rounded-full border border-[#d8c98b]/50 sm:h-[410px] sm:w-[410px]"
            />

            <div
              aria-hidden="true"
              class="absolute h-[255px] w-[255px] rounded-full border border-[#073b29]/10 sm:h-[350px] sm:w-[350px]"
            />

            <div
              aria-hidden="true"
              class="absolute right-[7%] top-[10%] h-3 w-3 rounded-full bg-[#d8c98b]"
            />

            <div
              aria-hidden="true"
              class="absolute bottom-[12%] left-[7%] h-2 w-2 rounded-full bg-[#073b29]"
            />

            <!-- Logo -->
            <div
              class="about-logo relative z-10 flex h-[230px] w-[230px] items-center justify-center rounded-full border-[10px] border-white bg-white p-4 shadow-2xl shadow-slate-900/[0.10] sm:h-[290px] sm:w-[290px]"
            >
              <div
                class="flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-[#d8c98b]/50 bg-[#faf9f5]"
              >
                <img
                  src="/images/ibn-masud-online-academy-logo.jpeg"
                  alt="IBN MAS'UD ONLINE ACADEMY official logo"
                  width="290"
                  height="290"
                  fetchpriority="high"
                  decoding="async"
                  class="h-full w-full object-cover"
                />
              </div>
            </div>

            <!-- Floating label -->
            <div
              class="about-label absolute bottom-[6%] right-0 z-20 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-xl shadow-slate-900/[0.07] sm:right-[-2%]"
            >
              <div class="flex items-center gap-3">

                <span
                  class="flex h-9 w-9 items-center justify-center rounded-xl bg-[#073b29]"
                >
                  <UIcon
                    name="i-lucide-graduation-cap"
                    class="h-4 w-4 text-[#f4e9ae]"
                  />
                </span>

                <div>
                  <p
                    class="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400"
                  >
                    Online Islamic
                  </p>

                  <p
                    class="mt-0.5 text-sm font-bold text-[#073b29]"
                  >
                    Education
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </UContainer>
    </section>


    <!-- =====================================================
         INTRODUCTION
    ====================================================== -->

    <section class="bg-white py-24 sm:py-28">

      <UContainer>

        <div
          class="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"
        >

          <div>
            <div class="inline-flex items-center gap-3">
              <span class="h-px w-8 bg-[#d8c98b]" />

              <span
                class="text-xs font-bold uppercase tracking-[0.22em] text-[#073b29]"
              >
                Who We Are
              </span>
            </div>

            <h2
              class="mt-5 max-w-lg font-serif text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-5xl"
            >
              A learning environment built around
              <span class="text-[#073b29]">
                meaningful progress.
              </span>
            </h2>
          </div>

          <div class="space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
            <p>
              IBN MAS'UD ONLINE ACADEMY is an online learning environment
              focused on making Qur'anic and Islamic education accessible,
              structured and purposeful.
            </p>

            <p>
              Through online lessons, students can study Qur'an, Tajwīd,
              Arabic and Islamic Education while receiving guidance suited
              to their learning level and needs.
            </p>

            <p>
              We believe that meaningful Islamic learning is not only about
              gaining information. It is also about building consistency,
              understanding and a lasting relationship with beneficial
              knowledge.
            </p>
          </div>

        </div>

      </UContainer>
    </section>


    <!-- =====================================================
         MISSION & VISION
    ====================================================== -->

    <section
      class="relative overflow-hidden bg-[#faf9f5] py-24 sm:py-28"
    >

      <div
        aria-hidden="true"
        class="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#073b29]/[0.035] blur-3xl"
      />

      <div
        aria-hidden="true"
        class="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#d8c98b]/10 blur-3xl"
      />

      <UContainer>

        <div class="mx-auto max-w-3xl text-center">

          <div class="inline-flex items-center gap-3">
            <span class="h-px w-8 bg-[#d8c98b]" />

            <span
              class="text-xs font-bold uppercase tracking-[0.22em] text-[#073b29]"
            >
              Our Direction
            </span>

            <span class="h-px w-8 bg-[#d8c98b]" />
          </div>

          <h2
            class="mt-5 font-serif text-4xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-5xl"
          >
            Guided by purpose,
            <span class="text-[#073b29]">
              driven by learning.
            </span>
          </h2>

        </div>


        <div class="mt-12 grid gap-6 lg:grid-cols-2">

          <!-- Mission -->
          <article
            class="direction-card group relative overflow-hidden rounded-[2rem] bg-[#073b29] p-7 shadow-xl shadow-[#073b29]/10 sm:p-9"
          >

            <div
              aria-hidden="true"
              class="absolute -right-16 -top-16 h-44 w-44 rounded-full border border-[#f4e9ae]/20"
            />

            <div
              aria-hidden="true"
              class="absolute inset-0 opacity-[0.06] mission-pattern"
            />

            <div class="relative">

              <div
                class="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4e9ae] transition-transform duration-500 group-hover:scale-105"
              >
                <UIcon
                  name="i-lucide-target"
                  class="h-7 w-7 text-[#073b29] transition-transform duration-500 group-hover:rotate-6"
                />
              </div>

              <p
                class="mt-8 text-xs font-bold uppercase tracking-[0.22em] text-[#f4e9ae]"
              >
                Our Mission
              </p>

              <h3
                class="mt-3 font-serif text-3xl font-semibold text-white sm:text-4xl"
              >
                Making meaningful learning accessible.
              </h3>

              <p
                class="mt-5 text-base leading-8 text-white/70"
              >
                Our mission is to provide quality, structured and accessible
                online Qur'an and Islamic education that helps learners
                develop knowledge, consistency and confidence in their
                learning journey.
              </p>

            </div>
          </article>


          <!-- Vision -->
          <article
            class="direction-card group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-900/[0.05] sm:p-9"
          >

            <div
              aria-hidden="true"
              class="absolute -right-16 -top-16 h-44 w-44 rounded-full border border-[#d8c98b]/30"
            />

            <div class="relative">

              <div
                class="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#073b29]/[0.07] transition-all duration-500 group-hover:bg-[#073b29]"
              >
                <UIcon
                  name="i-lucide-eye"
                  class="h-7 w-7 text-[#073b29] transition-all duration-500 group-hover:scale-105 group-hover:text-[#f4e9ae]"
                />
              </div>

              <p
                class="mt-8 text-xs font-bold uppercase tracking-[0.22em] text-[#073b29]"
              >
                Our Vision
              </p>

              <h3
                class="mt-3 font-serif text-3xl font-semibold text-slate-950 sm:text-4xl"
              >
                A generation grounded in beneficial knowledge.
              </h3>

              <p
                class="mt-5 text-base leading-8 text-slate-600"
              >
                Our vision is to contribute to a generation of learners who
                value Qur'anic and Islamic knowledge, pursue learning with
                purpose and continue growing in understanding throughout
                their lives.
              </p>

            </div>
          </article>

        </div>

      </UContainer>
    </section>


    <!-- =====================================================
         VALUES
    ====================================================== -->

    <section class="bg-white py-24 sm:py-28">

      <UContainer>

        <div class="max-w-2xl">

          <div class="inline-flex items-center gap-3">
            <span class="h-px w-8 bg-[#d8c98b]" />

            <span
              class="text-xs font-bold uppercase tracking-[0.22em] text-[#073b29]"
            >
              What Guides Us
            </span>
          </div>

          <h2
            class="mt-5 font-serif text-4xl font-semibold leading-tight tracking-[-0.035em] text-slate-950 sm:text-5xl"
          >
            Principles that shape the
            <span class="text-[#073b29]">
              learning experience.
            </span>
          </h2>

          <p class="mt-5 text-base leading-8 text-slate-600">
            Every part of the learning experience is built around helping
            students learn consistently, receive proper guidance and grow
            in beneficial knowledge.
          </p>

        </div>


        <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <article
            v-for="value in values"
            :key="value.title"
            class="value-card group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#d8c98b]/60 hover:shadow-xl hover:shadow-slate-900/[0.06]"
          >

            <div
              class="value-icon flex h-12 w-12 items-center justify-center rounded-2xl bg-[#073b29]/[0.06] transition-all duration-500 group-hover:bg-[#073b29] group-hover:scale-105"
            >
              <UIcon
                :name="value.icon"
                class="h-5 w-5 text-[#073b29] transition-all duration-500 group-hover:text-[#f4e9ae]"
              />
            </div>

            <h3
              class="mt-6 font-serif text-xl font-semibold text-slate-950"
            >
              {{ value.title }}
            </h3>

            <p
              class="mt-3 text-sm leading-7 text-slate-500"
            >
              {{ value.description }}
            </p>

          </article>

        </div>

      </UContainer>
    </section>


    <!-- =====================================================
         WHY LEARN WITH US
    ====================================================== -->

    <section class="bg-[#faf9f5] py-24 sm:py-28">

      <UContainer>

        <div
          class="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"
        >

          <div>

            <div class="inline-flex items-center gap-3">
              <span class="h-px w-8 bg-[#d8c98b]" />

              <span
                class="text-xs font-bold uppercase tracking-[0.22em] text-[#073b29]"
              >
                Why Learn With Us
              </span>
            </div>

            <h2
              class="mt-5 max-w-lg font-serif text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-5xl"
            >
              Designed to make learning
              <span class="text-[#073b29]">
                easier to sustain.
              </span>
            </h2>

            <p
              class="mt-5 max-w-lg text-base leading-8 text-slate-600"
            >
              Online learning should provide more than convenience. It
              should create a clear path that encourages students to remain
              engaged and continue progressing.
            </p>

          </div>


          <div class="space-y-4">

            <article
              v-for="strength in strengths"
              :key="strength.number"
              class="strength-card group flex gap-5 rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#d8c98b]/60 hover:shadow-lg sm:p-6"
            >

              <span
                class="font-serif text-2xl font-semibold text-[#d8c98b] transition-colors duration-300 group-hover:text-[#073b29]"
              >
                {{ strength.number }}
              </span>

              <div>

                <h3
                  class="font-semibold text-slate-950"
                >
                  {{ strength.title }}
                </h3>

                <p
                  class="mt-2 text-sm leading-7 text-slate-500"
                >
                  {{ strength.description }}
                </p>

              </div>

            </article>

          </div>

        </div>

      </UContainer>
    </section>


    <!-- =====================================================
         WHO WE SERVE
    ====================================================== -->

    <section class="bg-white py-24 sm:py-28">

      <UContainer>

        <div
          class="relative overflow-hidden rounded-[2rem] bg-[#073b29] px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14"
        >

          <div
            aria-hidden="true"
            class="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#f4e9ae]/10"
          />

          <div
            aria-hidden="true"
            class="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#d8c98b]/[0.04] blur-3xl"
          />

          <div
            class="relative grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center"
          >

            <div>

              <p
                class="text-xs font-bold uppercase tracking-[0.22em] text-[#f4e9ae]"
              >
                Learning for every stage
              </p>

              <h2
                class="mt-4 max-w-2xl font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl"
              >
                Wherever you are in your learning journey,
                <span class="text-[#f4e9ae]">
                  there is room to grow.
                </span>
              </h2>

              <p
                class="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base"
              >
                Our programmes are designed to support learners at different
                stages of life and different levels of learning.
              </p>

            </div>


            <div class="grid grid-cols-2 gap-3">

              <div
                v-for="learner in learners"
                :key="learner"
                class="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-4 transition-all duration-300 hover:border-[#f4e9ae]/40 hover:bg-white/[0.1]"
              >

                <span
                  class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f4e9ae]"
                >
                  <UIcon
                    name="i-lucide-check"
                    class="h-3.5 w-3.5 text-[#073b29]"
                  />
                </span>

                <span class="text-sm font-medium text-white">
                  {{ learner }}
                </span>

              </div>

            </div>

          </div>

        </div>

      </UContainer>
    </section>


    <!-- =====================================================
         FINAL CTA
    ====================================================== -->

    <section class="bg-[#faf9f5] py-24 sm:py-28">

      <UContainer>

        <div class="mx-auto max-w-3xl text-center">

          <div class="mx-auto inline-flex items-center gap-3">
            <span class="h-px w-8 bg-[#d8c98b]" />

            <span
              class="text-xs font-bold uppercase tracking-[0.22em] text-[#073b29]"
            >
              Begin Your Journey
            </span>

            <span class="h-px w-8 bg-[#d8c98b]" />
          </div>

          <h2
            class="mt-6 font-serif text-4xl font-semibold leading-tight tracking-[-0.035em] text-slate-950 sm:text-5xl lg:text-6xl"
          >
            Make learning a consistent
            <span class="text-[#073b29]">
              part of your journey.
            </span>
          </h2>

          <p
            class="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
          >
            Explore our programmes and discover a structured way to learn
            Qur'an, Tajwīd, Arabic and Islamic Education online.
          </p>

          <div
            class="mt-9 flex flex-col justify-center gap-3 sm:flex-row"
          >

            <NuxtLink
              to="/enrol"
              class="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#073b29] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-[#073b29]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#f4e9ae] hover:text-[#073b29]"
            >
              <span>Enrol Now</span>

              <UIcon
                name="i-lucide-arrow-right"
                class="h-4 w-4 text-white transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#073b29]"
              />
            </NuxtLink>

            <a
              :href="whatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 text-sm font-semibold text-[#073b29] transition-all duration-300 hover:-translate-y-1 hover:border-[#d8c98b] hover:bg-[#fffdf3]"
            >
              <UIcon
                name="i-lucide-message-circle"
                class="h-5 w-5"
              />

              Talk to an Adviser
            </a>

          </div>

        </div>

      </UContainer>
    </section>

  </main>
</template>


<style scoped>

/* =========================================================
   BACKGROUND PATTERN
========================================================= */

.about-pattern {
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
   MISSION PATTERN
========================================================= */

.mission-pattern {
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


/* =========================================================
   REVEAL ANIMATIONS
========================================================= */

.about-reveal {
  opacity: 0;
  transform: translateY(24px);
  filter: blur(6px);

  animation:
    about-fade-up
    0.9s
    cubic-bezier(0.22, 1, 0.36, 1)
    forwards;
}

.about-delay-1 {
  animation-delay: 0.1s;
}

.about-delay-2 {
  animation-delay: 0.22s;
}

.about-delay-3 {
  animation-delay: 0.38s;
}

.about-delay-4 {
  animation-delay: 0.54s;
}

.about-delay-5 {
  animation-delay: 0.7s;
}


/* =========================================================
   HERO VISUAL
========================================================= */

.about-visual {
  opacity: 0;

  transform:
    translateY(25px)
    scale(0.95);

  filter: blur(8px);

  animation:
    about-visual-fade
    1.2s
    cubic-bezier(0.22, 1, 0.36, 1)
    0.35s
    forwards;
}


.about-logo {
  animation:
    about-logo-fade
    1s
    cubic-bezier(0.22, 1, 0.36, 1)
    0.75s
    forwards,

    about-logo-float
    7s
    ease-in-out
    1.9s
    infinite;
}


.about-label {
  opacity: 0;

  transform: translateY(15px);

  filter: blur(4px);

  animation:
    about-label-fade
    0.8s
    cubic-bezier(0.22, 1, 0.36, 1)
    1s
    forwards,

    about-label-float
    5s
    ease-in-out
    2.2s
    infinite;
}


/* =========================================================
   KEYFRAMES
========================================================= */

@keyframes about-fade-up {

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


@keyframes about-visual-fade {

  0% {
    opacity: 0;
    transform: translateY(25px) scale(0.95);
    filter: blur(8px);
  }

  60% {
    opacity: 0.8;
    filter: blur(2px);
  }

  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }

}


@keyframes about-logo-fade {

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


@keyframes about-logo-float {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-7px);
  }

}


@keyframes about-label-fade {

  0% {
    opacity: 0;
    transform: translateY(15px);
    filter: blur(4px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }

}


@keyframes about-label-float {

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

  .about-reveal,
  .about-visual,
  .about-logo,
  .about-label {

    opacity: 1;
    transform: none;
    filter: none;
    animation: none;
  }

}

</style>
