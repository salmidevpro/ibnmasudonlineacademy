<script setup lang="ts">
import { computed, ref } from 'vue'

const whatsappMessage = encodeURIComponent(
  'Assalamu Alaikum. I would like to ask a question about IBN MAS\'UD ONLINE ACADEMY.'
)

const whatsappUrl = `https://wa.me/2348074113418?text=${whatsappMessage}`

const activeCategory = ref('All')
const searchQuery = ref('')

const categories = [
  'All',
  'General',
  'Programmes',
  'Learning',
  'Enrolment',
  'Parents'
]

const faqs = [
  {
    category: 'General',
    question: 'What is IBN MAS’UD ONLINE ACADEMY?',
    answer:
      'IBN MAS’UD ONLINE ACADEMY provides online Qur’an, Tajwīd, Arabic and Islamic education through structured and flexible learning. The academy serves children, teenagers, university students and adults.'
  },
  {
    category: 'General',
    question: 'Is the academy completely online?',
    answer:
      'Yes. The academy is designed around online learning, allowing students to learn remotely while receiving guidance and support from dedicated tutors.'
  },
  {
    category: 'General',
    question: 'Who can enrol?',
    answer:
      'The programmes are designed for children, teenagers, university students and adults. Learning is adapted according to the student’s current level, ability and learning needs.'
  },
  {
    category: 'Programmes',
    question: 'What programmes does the academy offer?',
    answer:
      'The academy offers Qur’an, Tajwīd, Arabic and Islamic Education programmes. Students can learn according to their current level and individual learning needs.'
  },
  {
    category: 'Programmes',
    question: 'Can a student study more than one programme?',
    answer:
      'Programme combinations can depend on the student’s learning needs and schedule. Contact the academy directly to discuss the most suitable arrangement.'
  },
  {
    category: 'Programmes',
    question: 'Is Qur’an memorisation included?',
    answer:
      'Enrolled students receive a dedicated weekly 30-minute Ḥifẓ session for memorisation, revision and recitation as part of the stated learning structure.'
  },
  {
    category: 'Learning',
    question: 'How often are learning sessions held?',
    answer:
      'Students receive three weekly learning sessions arranged around student and tutor availability.'
  },
  {
    category: 'Learning',
    question: 'Are lessons suitable for beginners?',
    answer:
      'Yes. Learning is designed around the student’s current level and ability, making the programmes suitable for learners at different stages.'
  },
  {
    category: 'Learning',
    question: 'How is student progress monitored?',
    answer:
      'Parents receive monthly progress reports covering achievements, strengths, areas for improvement and tutor recommendations.'
  },
  {
    category: 'Learning',
    question: 'Are tutors available to guide students?',
    answer:
      'Yes. Students learn with guidance from dedicated tutors who support their learning and provide feedback throughout the programme.'
  },
  {
    category: 'Enrolment',
    question: 'How do I enrol?',
    answer:
      'You can begin the enrolment process through the Enrol page on the website. If you have questions before enrolling, you can also contact the academy through WhatsApp.'
  },
  {
    category: 'Enrolment',
    question: 'Can I speak with someone before enrolling?',
    answer:
      'Yes. Prospective students and parents can contact the academy to ask questions about programmes, learning arrangements, fees and the enrolment process before making a decision.'
  },
  {
    category: 'Enrolment',
    question: 'How can I ask about the current fees?',
    answer:
      'Fees can vary according to the programme and learning arrangement. Contact the academy directly for the current fee information applicable to your chosen programme.'
  },
  {
    category: 'Parents',
    question: 'Can parents receive updates about their child’s progress?',
    answer:
      'Yes. Monthly progress reports help parents stay informed about their child’s achievements, strengths, areas for improvement and tutor recommendations.'
  },
  {
    category: 'Parents',
    question: 'Can learning be arranged around a family’s schedule?',
    answer:
      'The learning structure is designed with flexibility in mind. Sessions are arranged around student and tutor availability, subject to the academy’s available schedule.'
  },
  {
    category: 'Parents',
    question: 'How do I know which programme is right for my child?',
    answer:
      'The most suitable programme depends on the child’s current level, learning needs and goals. Contact the academy so the appropriate learning option can be discussed.'
  }
]

const openIndex = ref<number | null>(0)

const filteredFaqs = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()

  return faqs.filter((faq) => {
    const matchesCategory =
      activeCategory.value === 'All' ||
      faq.category === activeCategory.value

    const matchesSearch =
      !query ||
      faq.question.toLowerCase().includes(query) ||
      faq.answer.toLowerCase().includes(query)

    return matchesCategory && matchesSearch
  })
})

function toggleFaq(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}

function selectCategory(category: string) {
  activeCategory.value = category
  openIndex.value = 0
}

function clearSearch() {
  searchQuery.value = ''
}
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
        class="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#073b29]/[0.04] blur-3xl"
      />

      <div
        aria-hidden="true"
        class="pointer-events-none absolute -right-32 -top-10 h-96 w-96 rounded-full bg-[#d8c98b]/[0.14] blur-3xl"
      />

      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-0 opacity-[0.025] faq-pattern"
      />

      <UContainer>
        <div
          class="relative mx-auto max-w-4xl py-28 text-center sm:py-32 lg:py-36"
        >
          <!-- Eyebrow -->
          <div
            class="faq-reveal inline-flex items-center gap-3 rounded-full border border-[#073b29]/10 bg-[#073b29]/[0.035] px-4 py-2"
          >
            <span class="h-2 w-2 rounded-full bg-[#073b29]" />

            <span
              class="text-[10px] font-bold uppercase tracking-[0.2em] text-[#073b29] sm:text-xs"
            >
              Frequently Asked Questions
            </span>
          </div>

          <!-- Heading -->
          <h1
            class="faq-reveal faq-delay-1 mt-7 font-serif text-5xl font-semibold leading-[1.03] tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl"
          >
            Questions?

            <span class="block text-[#073b29]">
              We have answers.
            </span>
          </h1>

          <!-- Divider -->
          <div
            class="faq-reveal faq-delay-2 mt-7 flex items-center justify-center gap-3"
          >
            <div class="h-0.5 w-12 bg-[#073b29]" />
            <div class="h-2 w-2 rotate-45 bg-[#d8c98b]" />
            <div class="h-0.5 w-20 bg-[#d8c98b]/40" />
          </div>

          <!-- Description -->
          <p
            class="faq-reveal faq-delay-2 mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
          >
            Find answers to common questions about our programmes, learning
            structure, enrolment and how we support students throughout their
            learning journey.
          </p>

          <!-- Search -->
          <div
            class="faq-reveal faq-delay-3 mx-auto mt-9 max-w-2xl"
          >
            <div
              class="group relative flex items-center rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-900/[0.05] transition-all duration-300 focus-within:border-[#073b29]/30 focus-within:ring-4 focus-within:ring-[#073b29]/[0.04]"
            >
              <UIcon
                name="i-lucide-search"
                class="ml-3 h-5 w-5 shrink-0 text-slate-400 transition-colors duration-300 group-focus-within:text-[#073b29]"
              />

              <input
                v-model="searchQuery"
                type="search"
                placeholder="Search your question..."
                class="min-w-0 flex-1 border-0 bg-transparent px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:ring-0"
              />

              <button
                v-if="searchQuery"
                type="button"
                aria-label="Clear search"
                class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-slate-400 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-700"
                @click="clearSearch"
              >
                <UIcon
                  name="i-lucide-x"
                  class="h-4 w-4"
                />
              </button>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- =====================================================
         FAQ CONTENT
    ====================================================== -->
    <section class="bg-white py-20 sm:py-24 lg:py-28">
      <UContainer>
        <!-- Categories -->
        <div class="flex justify-center">
          <div
            class="flex max-w-full gap-2 overflow-x-auto rounded-2xl border border-slate-200 bg-[#faf9f5] p-2 scrollbar-hide"
          >
            <button
              v-for="category in categories"
              :key="category"
              type="button"
              class="whitespace-nowrap rounded-xl px-4 py-2.5 text-xs font-bold transition-all duration-300 sm:px-5 sm:text-sm"
              :class="
                activeCategory === category
                  ? 'bg-[#073b29] text-white shadow-md shadow-[#073b29]/10'
                  : 'text-slate-500 hover:bg-white hover:text-[#073b29]'
              "
              @click="selectCategory(category)"
            >
              {{ category }}
            </button>
          </div>
        </div>

        <!-- Result count -->
        <div
          class="mx-auto mt-10 flex max-w-3xl items-center justify-between gap-4"
        >
          <div>
            <p class="text-xs font-bold uppercase tracking-[0.2em] text-[#073b29]">
              {{ activeCategory }}
            </p>

            <p class="mt-1 text-sm text-slate-500">
              {{ filteredFaqs.length }}
              {{ filteredFaqs.length === 1 ? 'question' : 'questions' }}
              available
            </p>
          </div>

          <div
            v-if="searchQuery"
            class="hidden text-sm text-slate-400 sm:block"
          >
            Searching for
            <span class="font-semibold text-slate-600">
              "{{ searchQuery }}"
            </span>
          </div>
        </div>

        <!-- FAQ list -->
        <div class="mx-auto mt-6 max-w-3xl">
          <div
            v-if="filteredFaqs.length"
            class="space-y-3"
          >
            <article
              v-for="(faq, index) in filteredFaqs"
              :key="`${faq.category}-${faq.question}`"
              class="faq-card group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-[#d8c98b]/70 hover:shadow-lg hover:shadow-slate-900/[0.04]"
              :class="
                openIndex === index
                  ? 'border-[#073b29]/15 shadow-md'
                  : ''
              "
            >
              <button
                type="button"
                class="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
                :aria-expanded="openIndex === index"
                @click="toggleFaq(index)"
              >
                <!-- FIXED HOVER ICON -->
                <span
                  class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#073b29]/[0.06] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#073b29]"
                  :class="
                    openIndex === index
                      ? 'bg-[#073b29] scale-105'
                      : ''
                  "
                >
                  <UIcon
                    name="i-lucide-circle-help"
                    class="h-5 w-5 text-[#073b29] transition-colors duration-300 group-hover:text-[#f4e9ae]"
                    :class="
                      openIndex === index
                        ? 'text-[#f4e9ae]'
                        : ''
                    "
                  />
                </span>

                <!-- Question -->
                <span
                  class="flex-1 pr-2 text-sm font-semibold leading-6 text-slate-900 transition-colors duration-300 group-hover:text-[#073b29] sm:text-base"
                >
                  {{ faq.question }}
                </span>

                <!-- Toggle icon -->
                <span
                  class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 transition-all duration-300 group-hover:bg-[#f4e9ae]"
                  :class="
                    openIndex === index
                      ? 'rotate-180 bg-[#073b29] text-[#f4e9ae]'
                      : 'text-slate-500'
                  "
                >
                  <UIcon
                    name="i-lucide-chevron-down"
                    class="h-4 w-4"
                  />
                </span>
              </button>

              <!-- Answer -->
              <div
                class="grid transition-all duration-300 ease-out"
                :class="
                  openIndex === index
                    ? 'grid-rows-[1fr] opacity-100'
                    : 'grid-rows-[0fr] opacity-0'
                "
              >
                <div class="overflow-hidden">
                  <div class="border-t border-slate-100 px-5 pb-6 pt-4 sm:px-6">
                    <div class="flex gap-4">
                      <div
                        class="mt-1 hidden h-px w-10 shrink-0 bg-[#d8c98b] sm:block"
                      />

                      <div>
                        <p
                          class="text-sm leading-7 text-slate-600 sm:text-base"
                        >
                          {{ faq.answer }}
                        </p>

                        <span
                          class="mt-4 inline-flex rounded-full bg-[#073b29]/[0.05] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#073b29]"
                        >
                          {{ faq.category }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <!-- Empty state -->
          <div
            v-else
            class="rounded-[2rem] border border-dashed border-slate-300 bg-[#faf9f5] px-6 py-14 text-center"
          >
            <div
              class="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#073b29]/[0.06]"
            >
              <UIcon
                name="i-lucide-search-x"
                class="h-6 w-6 text-[#073b29]"
              />
            </div>

            <h3
              class="mt-5 font-serif text-2xl font-semibold text-slate-950"
            >
              No questions found.
            </h3>

            <p class="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
              Try another search term or choose a different category. You can
              also contact an adviser directly.
            </p>

            <div class="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                type="button"
                class="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d8c98b] hover:text-[#073b29]"
                @click="clearSearch"
              >
                <UIcon
                  name="i-lucide-rotate-ccw"
                  class="h-4 w-4"
                />

                Clear Search
              </button>

              <a
                :href="whatsappUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-2 rounded-xl bg-[#073b29] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f4e9ae] hover:text-[#073b29]"
              >
                <UIcon
                  name="i-lucide-message-circle"
                  class="h-4 w-4"
                />

                Ask an Adviser
              </a>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- =====================================================
         QUICK HELP
    ====================================================== -->
    <section class="relative overflow-hidden bg-[#faf9f5] py-24 sm:py-28">
      <div
        aria-hidden="true"
        class="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#073b29]/[0.035] blur-3xl"
      />

      <UContainer>
        <div class="mx-auto max-w-4xl">
          <div class="text-center">
            <div class="inline-flex items-center gap-3">
              <span class="h-px w-8 bg-[#d8c98b]" />

              <span
                class="text-xs font-bold uppercase tracking-[0.22em] text-[#073b29]"
              >
                Still Have Questions?
              </span>

              <span class="h-px w-8 bg-[#d8c98b]" />
            </div>

            <h2
              class="mt-5 font-serif text-4xl font-semibold leading-tight tracking-[-0.035em] text-slate-950 sm:text-5xl"
            >
              Sometimes a conversation is
              <span class="text-[#073b29]">
                better than a search.
              </span>
            </h2>

            <p
              class="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600"
            >
              If you cannot find what you are looking for, speak directly with
              an adviser about programmes, learning arrangements, fees or
              enrolment.
            </p>
          </div>

          <!-- Contact cards -->
          <div class="mt-10 grid gap-4 sm:grid-cols-2">
            <!-- WhatsApp -->
            <a
              :href="whatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d8c98b]/70 hover:shadow-xl"
            >
              <div class="flex items-start gap-4">
                <div
                  class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#073b29]/[0.06] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#073b29]"
                >
                  <UIcon
                    name="i-lucide-message-circle"
                    class="h-5 w-5 text-[#073b29] transition-colors duration-300 group-hover:text-[#f4e9ae]"
                  />
                </div>

                <div class="min-w-0">
                  <p
                    class="text-xs font-bold uppercase tracking-[0.16em] text-slate-400"
                  >
                    WhatsApp
                  </p>

                  <h3
                    class="mt-1 font-semibold text-slate-950 transition-colors duration-300 group-hover:text-[#073b29]"
                  >
                    Talk to an Adviser
                  </h3>

                  <p class="mt-1 text-sm leading-6 text-slate-500">
                    Ask your questions directly.
                  </p>
                </div>

                <UIcon
                  name="i-lucide-arrow-up-right"
                  class="ml-auto h-4 w-4 shrink-0 text-slate-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#073b29]"
                />
              </div>
            </a>

            <!-- Enrol -->
            <NuxtLink
              to="/enrol"
              class="group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d8c98b]/70 hover:shadow-xl"
            >
              <div class="flex items-start gap-4">
                <div
                  class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#073b29]/[0.06] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#073b29]"
                >
                  <UIcon
                    name="i-lucide-clipboard-pen-line"
                    class="h-5 w-5 text-[#073b29] transition-colors duration-300 group-hover:text-[#f4e9ae]"
                  />
                </div>

                <div class="min-w-0">
                  <p
                    class="text-xs font-bold uppercase tracking-[0.16em] text-slate-400"
                  >
                    Ready to begin?
                  </p>

                  <h3
                    class="mt-1 font-semibold text-slate-950 transition-colors duration-300 group-hover:text-[#073b29]"
                  >
                    Start Your Enrolment
                  </h3>

                  <p class="mt-1 text-sm leading-6 text-slate-500">
                    Take the next step in your learning journey.
                  </p>
                </div>

                <UIcon
                  name="i-lucide-arrow-up-right"
                  class="ml-auto h-4 w-4 shrink-0 text-slate-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#073b29]"
                />
              </div>
            </NuxtLink>
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
                Begin With Confidence
              </p>

              <h2
                class="mt-3 max-w-3xl font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl"
              >
                Ready to take the next step in your learning journey?
              </h2>

              <p
                class="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base"
              >
                Explore our programmes or speak with an adviser about finding
                the right learning path for you or your child.
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

              <NuxtLink
                to="/programmes"
                class="group inline-flex items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/[0.06] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#f4e9ae]/40 hover:bg-white/[0.1]"
              >
                <span>Explore Programmes</span>

                <UIcon
                  name="i-lucide-arrow-right"
                  class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#f4e9ae]"
                />
              </NuxtLink>
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

.faq-reveal {
  opacity: 0;
  transform: translateY(24px);
  filter: blur(6px);
  animation: faq-reveal 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.faq-delay-1 {
  animation-delay: 0.12s;
}

.faq-delay-2 {
  animation-delay: 0.24s;
}

.faq-delay-3 {
  animation-delay: 0.4s;
}

/* =====================================================
   BACKGROUND PATTERN
===================================================== */

.faq-pattern {
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

/* =====================================================
   SCROLLBAR
===================================================== */

.scrollbar-hide {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* =====================================================
   KEYFRAMES
===================================================== */

@keyframes faq-reveal {
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

/* =====================================================
   ACCESSIBILITY
===================================================== */

@media (prefers-reduced-motion: reduce) {
  .faq-reveal {
    opacity: 1;
    transform: none;
    filter: none;
    animation: none;
  }
}
</style>
