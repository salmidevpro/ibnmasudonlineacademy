<script setup lang="ts">
const portals = [
  {
    title: 'Student Portal',
    description:
      'Access your classes, learning progress, Hifẓ journey, assignments and monthly reports.',
    icon: 'i-lucide-graduation-cap',
    to: '/student/login',
    label: 'Student Access',
    number: '01'
  },
  {
    title: 'Tutor Portal',
    description:
      'Manage your classes, assigned students, attendance, progress records and reports.',
    icon: 'i-lucide-book-open-check',
    to: '/tutor/login',
    label: 'Tutor Access',
    number: '02'
  },
  {
    title: 'Admin Portal',
    description:
      'Manage students, tutors, programmes, classes, payments, reports and academy operations.',
    icon: 'i-lucide-shield-check',
    to: '/admin/login',
    label: 'Administration',
    number: '03'
  }
]
</script>

<template>
  <main class="portal-page">
    <!-- =========================================
         BACKGROUND DECORATION
         ========================================= -->
    <div
      class="portal-background"
      aria-hidden="true"
    >
      <div class="portal-orb portal-orb-one" />
      <div class="portal-orb portal-orb-two" />

      <div class="geometric-pattern">
        <span
          v-for="n in 36"
          :key="n"
          class="pattern-diamond"
        />
      </div>
    </div>

    <!-- =========================================
         TOP BAR
         ========================================= -->
    <header class="portal-header">
      <NuxtLink
        to="/"
        class="brand-link"
        aria-label="Back to IBN MAS'UD ONLINE ACADEMY home"
      >
        <span class="brand-logo">
          <img
            src="/images/ibn-masud-online-academy-logo.jpeg"
            alt="IBN MAS'UD ONLINE ACADEMY"
          >
        </span>

        <span class="brand-text">
          <strong>IBN MAS'UD</strong>
          <small>ONLINE ACADEMY</small>
        </span>
      </NuxtLink>

      <NuxtLink
        to="/"
        class="back-home"
      >
        <UIcon
          name="i-lucide-arrow-left"
          class="back-icon"
        />

        <span>Back to website</span>
      </NuxtLink>
    </header>

    <!-- =========================================
         MAIN CONTENT
         ========================================= -->
    <section class="portal-content">
      <div class="portal-container">
        <!-- Eyebrow -->
        <div class="eyebrow reveal">
          <span class="eyebrow-line" />
          <span>Secure Academy Access</span>
          <span class="eyebrow-line" />
        </div>

        <!-- Heading -->
        <div class="portal-intro reveal">
          <h1>
            Welcome to your
            <span>academy portal.</span>
          </h1>

          <p>
            Choose the portal that matches your role at
            IBN MAS'UD ONLINE ACADEMY to continue.
          </p>
        </div>

        <!-- =====================================
             PORTAL CARDS
             ===================================== -->
        <div class="portal-grid">
          <NuxtLink
            v-for="(portal, index) in portals"
            :key="portal.to"
            :to="portal.to"
            class="portal-card"
            :class="`portal-card-${index + 1}`"
          >
            <!-- Number -->
            <div class="card-top">
              <span class="card-number">
                {{ portal.number }}
              </span>

              <span class="card-arrow">
                <UIcon
                  name="i-lucide-arrow-up-right"
                  class="h-5 w-5"
                />
              </span>
            </div>

            <!-- Icon -->
            <div class="portal-icon">
              <UIcon
                :name="portal.icon"
                class="h-7 w-7"
              />
            </div>

            <!-- Text -->
            <div class="portal-card-content">
              <span class="portal-label">
                {{ portal.label }}
              </span>

              <h2>
                {{ portal.title }}
              </h2>

              <p>
                {{ portal.description }}
              </p>
            </div>

            <!-- Bottom -->
            <div class="portal-card-footer">
              <span>Continue to login</span>

              <UIcon
                name="i-lucide-arrow-right"
                class="h-4 w-4"
              />
            </div>
          </NuxtLink>
        </div>

        <!-- =====================================
             HELP SECTION
             ===================================== -->
        <div class="portal-help reveal">
          <div class="help-icon">
            <UIcon
              name="i-lucide-circle-help"
              class="h-5 w-5"
            />
          </div>

          <div>
            <strong>Having trouble accessing your portal?</strong>

            <p>
              Contact the academy and we'll help you get connected.
            </p>
          </div>

          <a
            href="https://wa.me/2348074113418"
            target="_blank"
            rel="noopener noreferrer"
            class="help-link"
          >
            <UIcon
              name="i-simple-icons-whatsapp"
              class="h-4 w-4"
            />

            WhatsApp us
          </a>
        </div>
      </div>
    </section>

    <!-- =========================================
         FOOTER
         ========================================= -->
    <footer class="portal-footer">
      <p>
        © {{ new Date().getFullYear() }} IBN MAS'UD ONLINE ACADEMY
      </p>

      <span>•</span>

      <p>
        Qur'an · Tajwīd · Arabic · Islamic Education
      </p>
    </footer>
  </main>
</template>

<style scoped>
/* =========================================================
   VARIABLES
   ========================================================= */

.portal-page {
  --green: #073b29;
  --green-deep: #052b1f;
  --green-soft: #0a4b35;
  --gold: #c9ae58;
  --gold-light: #f4e9ae;
  --cream: #faf9f5;
  --cream-dark: #f3f0e5;
  --ink: #17382b;
  --muted: #64756c;

  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background:
    radial-gradient(
      circle at 50% -20%,
      rgba(216, 201, 139, 0.18),
      transparent 42%
    ),
    var(--cream);
  color: var(--ink);
}

/* =========================================================
   BACKGROUND
   ========================================================= */

.portal-background {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.portal-orb {
  position: absolute;
  border-radius: 999px;
  filter: blur(2px);
}

.portal-orb-one {
  top: 16%;
  left: -180px;
  width: 420px;
  height: 420px;
  background: rgba(7, 59, 41, 0.035);
}

.portal-orb-two {
  right: -220px;
  bottom: 5%;
  width: 500px;
  height: 500px;
  background: rgba(201, 174, 88, 0.055);
}

.geometric-pattern {
  position: absolute;
  top: 120px;
  right: -100px;
  display: grid;
  grid-template-columns: repeat(6, 58px);
  gap: 16px;
  opacity: 0.28;
  transform: rotate(15deg);
}

.pattern-diamond {
  width: 58px;
  height: 58px;
  border: 1px solid rgba(7, 59, 41, 0.08);
  transform: rotate(45deg);
}

/* =========================================================
   HEADER
   ========================================================= */

.portal-header {
  position: relative;
  z-index: 5;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: min(1280px, calc(100% - 40px));
  margin: 0 auto;
  padding: 26px 0;
}

.brand-link {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: var(--green);
  text-decoration: none;
}

.brand-logo {
  display: flex;
  width: 48px;
  height: 48px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #f8f5e8;
  box-shadow:
    0 5px 18px rgba(7, 59, 41, 0.09),
    0 0 0 1px rgba(7, 59, 41, 0.08);
  transition:
    transform 300ms ease,
    box-shadow 300ms ease;
}

.brand-link:hover .brand-logo {
  transform: scale(1.05);
  box-shadow:
    0 8px 25px rgba(7, 59, 41, 0.13),
    0 0 0 1px rgba(201, 174, 88, 0.35);
}

.brand-logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.brand-text strong {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 13px;
  letter-spacing: 0.08em;
}

.brand-text small {
  margin-top: 5px;
  color: rgba(23, 56, 43, 0.55);
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.18em;
}

.back-home {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: rgba(23, 56, 43, 0.62);
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
  transition:
    color 250ms ease,
    transform 250ms ease;
}

.back-home:hover {
  color: var(--green);
  transform: translateX(-2px);
}

.back-icon {
  width: 15px;
  height: 15px;
}

/* =========================================================
   CONTENT
   ========================================================= */

.portal-content {
  position: relative;
  z-index: 2;
  padding: 54px 20px 70px;
}

.portal-container {
  width: min(1180px, 100%);
  margin: 0 auto;
}

/* =========================================================
   EYEBROW
   ========================================================= */

.eyebrow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  margin-bottom: 20px;

  color: var(--gold);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.eyebrow-line {
  width: 28px;
  height: 1px;
  background: rgba(201, 174, 88, 0.65);
}

/* =========================================================
   INTRO
   ========================================================= */

.portal-intro {
  max-width: 680px;
  margin: 0 auto 52px;
  text-align: center;
}

.portal-intro h1 {
  margin: 0;

  color: var(--green);

  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(38px, 5vw, 62px);
  font-weight: 500;
  line-height: 1.06;
  letter-spacing: -0.035em;
}

.portal-intro h1 span {
  display: block;
  color: var(--green-soft);
}

.portal-intro p {
  max-width: 530px;
  margin: 20px auto 0;

  color: var(--muted);
  font-size: 15px;
  line-height: 1.8;
}

/* =========================================================
   PORTAL GRID
   ========================================================= */

.portal-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

/* =========================================================
   PORTAL CARD
   ========================================================= */

.portal-card {
  position: relative;

  display: flex;
  min-height: 410px;
  flex-direction: column;

  padding: 28px;

  overflow: hidden;

  border: 1px solid rgba(7, 59, 41, 0.09);
  border-radius: 24px;

  background: rgba(255, 255, 255, 0.82);

  box-shadow:
    0 12px 35px rgba(7, 59, 41, 0.045),
    0 2px 8px rgba(7, 59, 41, 0.025);

  color: var(--ink);
  text-decoration: none;

  transition:
    transform 400ms cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 400ms ease,
    border-color 400ms ease,
    background-color 400ms ease;
}

.portal-card::before {
  content: '';

  position: absolute;
  inset: 0;

  background:
    radial-gradient(
      circle at 100% 0%,
      rgba(201, 174, 88, 0.12),
      transparent 34%
    );

  opacity: 0;
  transition: opacity 400ms ease;
}

.portal-card:hover {
  transform: translateY(-8px);

  border-color: rgba(201, 174, 88, 0.32);

  background: rgba(255, 255, 255, 0.98);

  box-shadow:
    0 25px 55px rgba(7, 59, 41, 0.10),
    0 8px 20px rgba(7, 59, 41, 0.05);
}

.portal-card:hover::before {
  opacity: 1;
}

.portal-card-2 {
  background: var(--green);
  border-color: var(--green);
  color: white;
  box-shadow:
    0 18px 45px rgba(7, 59, 41, 0.14),
    0 4px 14px rgba(7, 59, 41, 0.06);
}

.portal-card-2::before {
  background:
    radial-gradient(
      circle at 100% 0%,
      rgba(244, 233, 174, 0.16),
      transparent 38%
    );
}

.portal-card-2:hover {
  background: var(--green-soft);
  border-color: var(--green-soft);
  box-shadow:
    0 28px 60px rgba(7, 59, 41, 0.22),
    0 8px 20px rgba(7, 59, 41, 0.08);
}

/* =========================================================
   CARD TOP
   ========================================================= */

.card-top {
  position: relative;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-number {
  color: var(--gold);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.16em;
}

.card-arrow {
  display: flex;
  width: 38px;
  height: 38px;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(7, 59, 41, 0.09);
  border-radius: 50%;

  background: rgba(7, 59, 41, 0.035);
  color: var(--green);

  transition:
    transform 300ms ease,
    background-color 300ms ease,
    color 300ms ease;
}

.portal-card:hover .card-arrow {
  transform: translate(2px, -2px);
  background: var(--green);
  color: var(--gold-light);
}

.portal-card-2 .card-arrow {
  border-color: rgba(255, 255, 255, 0.13);
  background: rgba(255, 255, 255, 0.08);
  color: var(--gold-light);
}

.portal-card-2:hover .card-arrow {
  background: var(--gold-light);
  color: var(--green);
}

/* =========================================================
   ICON
   ========================================================= */

.portal-icon {
  position: relative;
  z-index: 2;

  display: flex;
  width: 62px;
  height: 62px;

  margin-top: 46px;

  align-items: center;
  justify-content: center;

  border-radius: 18px;

  background: rgba(7, 59, 41, 0.055);
  color: var(--green);

  transition:
    transform 350ms cubic-bezier(0.22, 1, 0.36, 1),
    background-color 350ms ease,
    color 350ms ease;
}

.portal-card:hover .portal-icon {
  transform: scale(1.07) rotate(-3deg);
  background: var(--green);
  color: var(--gold-light);
}

.portal-card-2 .portal-icon {
  background: rgba(255, 255, 255, 0.10);
  color: var(--gold-light);
}

.portal-card-2:hover .portal-icon {
  background: var(--gold-light);
  color: var(--green);
}

/* =========================================================
   CARD CONTENT
   ========================================================= */

.portal-card-content {
  position: relative;
  z-index: 2;

  margin-top: 24px;
}

.portal-label {
  color: var(--gold);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.portal-card-content h2 {
  margin: 8px 0 0;

  font-family: Georgia, 'Times New Roman', serif;
  font-size: 28px;
  font-weight: 500;
  line-height: 1.15;
  letter-spacing: -0.025em;
}

.portal-card-content p {
  margin: 13px 0 0;

  color: rgba(23, 56, 43, 0.62);
  font-size: 13px;
  line-height: 1.7;
}

.portal-card-2 .portal-card-content p {
  color: rgba(255, 255, 255, 0.66);
}

.portal-card-2 .portal-card-content h2 {
  color: white;
}

/* =========================================================
   CARD FOOTER
   ========================================================= */

.portal-card-footer {
  position: relative;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: auto;
  padding-top: 24px;

  border-top: 1px solid rgba(7, 59, 41, 0.08);

  color: var(--green);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.portal-card-2 .portal-card-footer {
  border-color: rgba(255, 255, 255, 0.12);
  color: var(--gold-light);
}

.portal-card-footer .h-4 {
  transition: transform 300ms ease;
}

.portal-card:hover .portal-card-footer .h-4 {
  transform: translateX(4px);
}

/* =========================================================
   HELP
   ========================================================= */

.portal-help {
  display: flex;
  align-items: center;
  gap: 15px;

  max-width: 760px;
  margin: 30px auto 0;
  padding: 17px 20px;

  border: 1px solid rgba(7, 59, 41, 0.08);
  border-radius: 16px;

  background: rgba(255, 255, 255, 0.68);

  box-shadow: 0 8px 25px rgba(7, 59, 41, 0.035);
}

.help-icon {
  display: flex;
  width: 38px;
  height: 38px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  border-radius: 11px;
  background: rgba(7, 59, 41, 0.055);
  color: var(--green);
}

.portal-help strong {
  display: block;

  color: var(--green);
  font-size: 12px;
  font-weight: 700;
}

.portal-help p {
  margin: 3px 0 0;

  color: rgba(23, 56, 43, 0.55);
  font-size: 11px;
}

.help-link {
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  gap: 6px;

  margin-left: auto;

  color: var(--green);
  font-size: 11px;
  font-weight: 800;
  text-decoration: none;

  transition:
    color 250ms ease,
    transform 250ms ease;
}

.help-link:hover {
  color: var(--gold);
  transform: translateX(2px);
}

/* =========================================================
   FOOTER
   ========================================================= */

.portal-footer {
  position: relative;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  padding: 0 20px 28px;

  color: rgba(23, 56, 43, 0.4);
  font-size: 10px;
  letter-spacing: 0.03em;
  text-align: center;
}

/* =========================================================
   REVEAL
   ========================================================= */

.reveal {
  animation: revealUp 700ms cubic-bezier(0.22, 1, 0.36, 1) both;
}

.portal-grid .portal-card:nth-child(1) {
  animation: revealUp 700ms 100ms cubic-bezier(0.22, 1, 0.36, 1) both;
}

.portal-grid .portal-card:nth-child(2) {
  animation: revealUp 700ms 180ms cubic-bezier(0.22, 1, 0.36, 1) both;
}

.portal-grid .portal-card:nth-child(3) {
  animation: revealUp 700ms 260ms cubic-bezier(0.22, 1, 0.36, 1) both;
}

@keyframes revealUp {
  from {
    opacity: 0;
    transform: translateY(18px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* =========================================================
   RESPONSIVE
   ========================================================= */

@media (max-width: 900px) {
  .portal-grid {
    grid-template-columns: 1fr;
    max-width: 620px;
    margin: 0 auto;
  }

  .portal-card {
    min-height: 330px;
  }

  .portal-icon {
    margin-top: 34px;
  }
}

@media (max-width: 640px) {
  .portal-header {
    width: min(100% - 30px, 1280px);
    padding: 18px 0;
  }

  .brand-text {
    display: none;
  }

  .brand-logo {
    width: 46px;
    height: 46px;
  }

  .back-home span {
    display: none;
  }

  .back-home {
    width: 38px;
    height: 38px;
    align-items: center;
    justify-content: center;

    border: 1px solid rgba(7, 59, 41, 0.09);
    border-radius: 50%;
  }

  .portal-content {
    padding: 38px 15px 55px;
  }

  .portal-intro {
    margin-bottom: 34px;
  }

  .portal-intro h1 {
    font-size: 39px;
  }

  .portal-intro p {
    font-size: 13px;
    line-height: 1.7;
  }

  .portal-card {
    min-height: 330px;
    padding: 23px;
    border-radius: 20px;
  }

  .portal-card-content h2 {
    font-size: 25px;
  }

  .portal-help {
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 16px;
  }

  .help-link {
    width: 100%;
    margin-left: 53px;
    margin-top: 2px;
  }

  .portal-footer {
    flex-direction: column;
    gap: 5px;
    padding-bottom: 22px;
  }

  .portal-footer span {
    display: none;
  }

  .geometric-pattern {
    right: -160px;
    opacity: 0.18;
  }
}

@media (prefers-reduced-motion: reduce) {
  .reveal,
  .portal-grid .portal-card:nth-child(1),
  .portal-grid .portal-card:nth-child(2),
  .portal-grid .portal-card:nth-child(3) {
    animation: none;
  }

  .portal-card,
  .portal-icon,
  .card-arrow,
  .portal-card-footer .h-4,
  .brand-logo,
  .back-home,
  .help-link {
    transition: none;
  }
}
</style>
