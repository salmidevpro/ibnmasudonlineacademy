<template>
  <section
    id="how-it-works"
    class="relative overflow-hidden bg-[#faf9f5] py-24 sm:py-28"
  >
    <!-- Decorative background -->
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#d8c98b]/10 blur-3xl"
    />

    <div
      aria-hidden="true"
      class="pointer-events-none absolute -left-32 bottom-10 h-72 w-72 rounded-full bg-[#073b29]/[0.04] blur-3xl"
    />

    <UContainer>
      <!-- Section heading -->
      <div class="mx-auto max-w-3xl text-center">
        <div class="section-reveal inline-flex items-center gap-3">
          <span class="h-px w-8 bg-[#d8c98b]" />

          <span
            class="text-xs font-bold uppercase tracking-[0.22em] text-[#073b29]"
          >
            How Our Classes Work
          </span>

          <span class="h-px w-8 bg-[#d8c98b]" />
        </div>

        <h2
          class="section-reveal section-delay-1 mt-5 font-serif text-4xl font-semibold leading-tight tracking-[-0.03em] text-slate-950 sm:text-5xl"
        >
          A simple structure.
          <span class="text-[#073b29]">
            Meaningful progress.
          </span>
        </h2>

        <p
          class="section-reveal section-delay-2 mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
        >
          Every student receives a balanced weekly learning routine that
          combines academic study with a dedicated Qur'an memorisation
          session.
        </p>
      </div>

      <!-- Weekly structure -->
      <div
        class="mt-14 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]"
      >
        <!-- Main weekly card -->
        <div
          class="section-reveal section-delay-2 relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/[0.04] sm:p-8"
        >
          <!-- Top -->
          <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p
                class="text-xs font-bold uppercase tracking-[0.18em] text-[#073b29]"
              >
                Your weekly rhythm
              </p>

              <h3
                class="mt-2 font-serif text-2xl font-semibold text-slate-950 sm:text-3xl"
              >
                3 focused sessions
              </h3>
            </div>

            <div
              class="inline-flex w-fit items-center gap-2 rounded-full bg-[#073b29]/[0.05] px-4 py-2"
            >
              <UIcon
                name="i-lucide-clock-3"
                class="h-4 w-4 text-[#073b29]"
              />

              <span class="text-sm font-semibold text-[#073b29]">
                90 minutes / week
              </span>
            </div>
          </div>

          <!-- Session timeline -->
          <div class="mt-8 space-y-4">
            <!-- Session 1 -->
            <div
              class="session-card group flex items-center gap-4 rounded-2xl border border-slate-100 bg-[#faf9f5] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#d8c98b]/60 hover:bg-[#fffdf4] sm:p-5"
            >
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#073b29] text-sm font-bold text-[#f4e9ae]"
              >
                01
              </div>

              <div class="min-w-0 flex-1">
                <div class="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h4 class="font-semibold text-slate-950">
                    Academic Session
                  </h4>

                  <span
                    class="rounded-full bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400"
                  >
                    30 mins
                  </span>
                </div>

                <p class="mt-1 text-sm leading-6 text-slate-500">
                  Your registered academic subject or subjects.
                </p>
              </div>

              <UIcon
                name="i-lucide-arrow-up-right"
                class="hidden h-5 w-5 text-slate-300 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 sm:block"
              />
            </div>

            <!-- Session 2 -->
            <div
              class="session-card group flex items-center gap-4 rounded-2xl border border-slate-100 bg-[#faf9f5] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#d8c98b]/60 hover:bg-[#fffdf4] sm:p-5"
            >
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#073b29]/10 bg-white text-sm font-bold text-[#073b29]"
              >
                02
              </div>

              <div class="min-w-0 flex-1">
                <div class="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h4 class="font-semibold text-slate-950">
                    Academic Session
                  </h4>

                  <span
                    class="rounded-full bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400"
                  >
                    30 mins
                  </span>
                </div>

                <p class="mt-1 text-sm leading-6 text-slate-500">
                  Continued development in your registered programme.
                </p>
              </div>

              <UIcon
                name="i-lucide-arrow-up-right"
                class="hidden h-5 w-5 text-slate-300 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 sm:block"
              />
            </div>

            <!-- Session 3 -->
            <div
              class="session-card group flex items-center gap-4 rounded-2xl border border-[#d8c98b]/40 bg-[#fffdf4] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#d8c98b] sm:p-5"
            >
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#d8c98b] text-sm font-bold text-[#073b29]"
              >
                03
              </div>

              <div class="min-w-0 flex-1">
                <div class="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h4 class="font-semibold text-[#073b29]">
                    Qur'an Memorisation
                  </h4>

                  <span
                    class="rounded-full bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400"
                  >
                    30 mins
                  </span>
                </div>

                <p class="mt-1 text-sm leading-6 text-slate-600">
                  Dedicated weekly Ḥifẓ, revision and recitation practice.
                </p>
              </div>

              <UIcon
                name="i-lucide-book-open"
                class="hidden h-5 w-5 text-[#073b29]/40 sm:block"
              />
            </div>
          </div>
        </div>

        <!-- Side information -->
        <div
          class="section-reveal section-delay-3 flex flex-col gap-5"
        >
          <!-- Example -->
          <div
            class="flex-1 rounded-[2rem] bg-[#073b29] p-7 text-white shadow-xl shadow-[#073b29]/10 sm:p-8"
          >
            <div
              class="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10"
            >
              <UIcon
                name="i-lucide-calendar-days"
                class="h-5 w-5 text-[#f4e9ae]"
              />
            </div>

            <p
              class="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-[#f4e9ae]"
            >
              Example schedule
            </p>

            <h3 class="mt-2 font-serif text-2xl font-semibold">
              Built around your life.
            </h3>

            <div class="mt-6 space-y-3">
              <div
                class="flex items-center justify-between rounded-xl bg-white/[0.07] px-4 py-3"
              >
                <span class="text-sm text-white/70">
                  Monday
                </span>

                <span class="text-sm font-semibold">
                  Arabic + Islamic Studies
                </span>
              </div>

              <div
                class="flex items-center justify-between rounded-xl bg-white/[0.07] px-4 py-3"
              >
                <span class="text-sm text-white/70">
                  Thursday
                </span>

                <span class="text-sm font-semibold">
                  Qur'an Memorisation
                </span>
              </div>
            </div>

            <p class="mt-5 text-xs leading-6 text-white/50">
              Example only. Actual days and times are arranged according to
              student and tutor availability.
            </p>
          </div>

          <!-- Bottom value card -->
          <div
            class="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/[0.03] sm:p-7"
          >
            <div class="flex items-start gap-4">
              <div
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f4e9ae]/60"
              >
                <UIcon
                  name="i-lucide-sparkles"
                  class="h-5 w-5 text-[#073b29]"
                />
              </div>

              <div>
                <h4 class="font-semibold text-slate-950">
                  Flexible, but structured
                </h4>

                <p class="mt-1 text-sm leading-6 text-slate-500">
                  A predictable routine for families without losing the
                  flexibility needed for school, work and different time zones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom statement -->
      <div
        class="section-reveal section-delay-4 mx-auto mt-12 flex max-w-3xl flex-col items-center text-center"
      >
        <div class="flex items-center gap-3">
          <span class="h-px w-10 bg-slate-200" />

          <UIcon
            name="i-lucide-book-marked"
            class="h-4 w-4 text-[#073b29]"
          />

          <span class="h-px w-10 bg-slate-200" />
        </div>

        <p class="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
          Every week combines
          <span class="font-semibold text-[#073b29]">
            60 minutes of academic learning
          </span>
          with
          <span class="font-semibold text-[#073b29]">
            30 minutes of Qur'an memorisation
          </span>
          — creating a balanced 90-minute learning experience.
        </p>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
.section-reveal {
  opacity: 0;
  transform: translateY(24px);
  filter: blur(6px);
  animation: section-reveal 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.section-delay-1 {
  animation-delay: 0.12s;
}

.section-delay-2 {
  animation-delay: 0.24s;
}

.section-delay-3 {
  animation-delay: 0.38s;
}

.section-delay-4 {
  animation-delay: 0.52s;
}

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

@media (prefers-reduced-motion: reduce) {
  .section-reveal {
    opacity: 1;
    transform: none;
    filter: none;
    animation: none;
  }
}
</style>
