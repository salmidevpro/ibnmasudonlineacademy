<script setup lang="ts">
const isMenuOpen = ref(false)
const isScrolled = ref(false)

const navigation = [
  {
    label: 'Home',
    to: '/'
  },
  {
    label: 'About',
    to: '/about'
  },
  {
    label: 'Programmes',
    to: '/programmes'
  },
  {
    label: 'How It Works',
    to: '/how-it-works'
  },
  {
    label: 'Progress',
    to: '/progress'
  },
  {
    label: 'Tutors',
    to: '/tutors'
  },
  {
    label: 'Fees',
    to: '/fees'
  },
  {
    label: 'FAQs',
    to: '/faq'
  }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 12
}

const closeMenu = () => {
  isMenuOpen.value = false
}

onMounted(() => {
  handleScroll()

  window.addEventListener('scroll', handleScroll, {
    passive: true
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

watch(isMenuOpen, (open) => {
  if (import.meta.client) {
    document.body.style.overflow = open ? 'hidden' : ''
  }
})
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-500"
    :class="
      isScrolled
        ? 'bg-white/95 shadow-[0_8px_35px_rgba(6,31,22,0.08)] backdrop-blur-xl'
        : 'bg-white'
    "
  >
    <div
      class="mx-auto flex h-[76px] max-w-[1440px] items-center px-5 sm:px-8 lg:h-[82px] lg:px-10 xl:px-12"
    >
      <!-- Logo -->
      <!-- Brand -->
      <!-- Brand -->
      <NuxtLink
        to="/"
        aria-label="IBN MAS'UD ONLINE ACADEMY home"
        class="group flex h-full shrink-0 items-center"
        @click="closeMenu"
      >
        <div
          class="relative flex h-[52px] w-[52px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#f8f5e8] ring-1 ring-[#073b29]/10 shadow-[0_4px_18px_rgba(7,59,41,0.08)] transition-all duration-300 group-hover:scale-105 group-hover:ring-[#c9ae58]/40 group-hover:shadow-[0_6px_22px_rgba(7,59,41,0.12)] sm:h-[56px] sm:w-[56px] lg:h-[60px] lg:w-[60px]"
        >
          <img
            src="/images/ibn-masud-online-academy-logo.jpeg"
            alt="IBN MAS'UD ONLINE ACADEMY logo"
            width="120"
            height="120"
            fetchpriority="high"
            decoding="async"
            class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          >
        </div>
      </NuxtLink>

      <!-- Desktop navigation -->
      <nav
        aria-label="Main navigation"
        class="ml-auto hidden items-center lg:flex"
      >
        <div class="flex items-center gap-0.5">
          <NuxtLink
            v-for="item in navigation"
            :key="item.to"
            :to="item.to"
            class="group relative px-3 py-3 text-[13px] font-medium text-[#17382b]/70 transition-colors duration-300 hover:text-[#073b29] xl:px-3.5"
          >
            <span>
              {{ item.label }}
            </span>

            <!-- Active / hover line -->
            <span
              class="absolute bottom-1.5 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#c9ae58] transition-all duration-300 group-hover:w-4/5"
            />
          </NuxtLink>
        </div>

        <!-- WhatsApp -->
        <a
          href="https://wa.me/2348074113418"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with IBN MAS'UD ONLINE ACADEMY on WhatsApp"
          class="ml-3 hidden items-center gap-2 border-l border-[#073b29]/10 pl-4 xl:flex"
        >
          <span
            class="flex h-8 w-8 items-center justify-center rounded-full bg-[#073b29]/[0.06] text-[#073b29] transition-all duration-300 hover:bg-[#073b29] hover:text-white"
          >
            <UIcon
              name="i-simple-icons-whatsapp"
              class="h-3.5 w-3.5"
            />
          </span>

          <span
            class="text-xs font-medium text-[#17382b]/65 transition-colors hover:text-[#073b29]"
          >
            +234 807 411 3418
          </span>
        </a>

        <!-- Enrol CTA -->
        <NuxtLink
          to="/enrol"
          class="ml-4 inline-flex h-11 items-center gap-2 rounded-full bg-[#073b29] px-5 text-[12px] font-bold uppercase tracking-[0.08em] text-white shadow-[0_8px_24px_rgba(7,59,41,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0a4b35] hover:shadow-[0_12px_30px_rgba(7,59,41,0.22)]"
        >
          <span>Enrol Now</span>

          <UIcon
            name="i-lucide-arrow-up-right"
            class="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </NuxtLink>
      </nav>

      <!-- Mobile actions -->
      <div class="ml-auto flex items-center gap-2 lg:hidden">
        <!-- WhatsApp -->
        <a
          href="https://wa.me/2348074113418"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          class="flex h-10 w-10 items-center justify-center rounded-full bg-[#073b29]/[0.06] text-[#073b29] transition-all duration-300 hover:bg-[#073b29] hover:text-white"
        >
          <UIcon
            name="i-simple-icons-whatsapp"
            class="h-4 w-4"
          />
        </a>

        <!-- Menu button -->
        <button
          type="button"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation menu"
          class="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#073b29]/10 bg-white text-[#073b29] transition-all duration-300 hover:border-[#073b29]/20 hover:bg-[#073b29]/[0.04]"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span class="relative block h-4 w-5">
            <span
              class="absolute left-0 top-0 h-[1.5px] w-5 rounded-full bg-current transition-all duration-300"
              :class="
                isMenuOpen
                  ? 'top-[7px] rotate-45'
                  : ''
              "
            />

            <span
              class="absolute left-0 top-[7px] h-[1.5px] w-5 rounded-full bg-current transition-all duration-300"
              :class="
                isMenuOpen
                  ? 'scale-x-0 opacity-0'
                  : ''
              "
            />

            <span
              class="absolute left-0 top-[14px] h-[1.5px] w-5 rounded-full bg-current transition-all duration-300"
              :class="
                isMenuOpen
                  ? 'top-[7px] -rotate-45'
                  : ''
              "
            />
          </span>
        </button>
      </div>
    </div>

    <!-- Mobile navigation -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="translate-y-[-8px] opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-[-8px] opacity-0"
    >
      <div
        v-if="isMenuOpen"
        id="mobile-navigation"
        class="border-t border-[#073b29]/[0.07] bg-white lg:hidden"
      >
        <nav
          aria-label="Mobile navigation"
          class="mx-auto max-w-[1440px] px-5 pb-6 pt-3 sm:px-8"
        >
          <div class="divide-y divide-[#073b29]/[0.06]">
            <NuxtLink
              v-for="(item, index) in navigation"
              :key="item.to"
              :to="item.to"
              class="group flex items-center justify-between py-4 text-[15px] font-medium text-[#17382b]/75 transition-colors duration-300 hover:text-[#073b29]"
              @click="closeMenu"
            >
              <span class="flex items-center gap-3">
                <span
                  class="text-[10px] font-semibold tracking-[0.12em] text-[#c9ae58]"
                >
                  0{{ index + 1 }}
                </span>

                {{ item.label }}
              </span>

              <UIcon
                name="i-lucide-arrow-up-right"
                class="h-4 w-4 text-[#073b29]/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-[#073b29]"
              />
            </NuxtLink>
          </div>

          <!-- Mobile CTA -->
          <NuxtLink
            to="/enrol"
            class="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#073b29] text-[12px] font-bold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-[#0a4b35]"
            @click="closeMenu"
          >
            Enrol Now

            <UIcon
              name="i-lucide-arrow-up-right"
              class="h-4 w-4"
            />
          </NuxtLink>

          <!-- Mobile contact -->
          <div class="mt-5 flex items-center justify-center gap-2">
            <UIcon
              name="i-simple-icons-whatsapp"
              class="h-3.5 w-3.5 text-[#073b29]"
            />

            <a
              href="https://wa.me/2348074113418"
              target="_blank"
              rel="noopener noreferrer"
              class="text-xs text-[#17382b]/55 transition-colors hover:text-[#073b29]"
            >
              Chat with us on WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </Transition>
  </header>
</template>
