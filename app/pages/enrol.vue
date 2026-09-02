<script setup lang="ts">
import { computed, ref } from 'vue'

const whatsappNumber = '2348074113418'

const form = ref({
  studentName: '',
  ageGroup: '',
  programme: '',
  currentLevel: '',
  parentName: '',
  email: '',
  phone: '',
  preferredTime: '',
  message: ''
})

const submitted = ref(false)

const ageGroups = [
  'Child',
  'Teenager',
  'University Student',
  'Adult'
]

const programmes = [
  'Qur\'an',
  'Tajwīd',
  'Ḥifẓ',
  'Arabic',
  'Islamic Education'
]

const levels = [
  'Beginner',
  'Elementary',
  'Intermediate',
  'Advanced',
  'Not sure'
]

const timeOptions = [
  'Morning',
  'Afternoon',
  'Evening',
  'Flexible'
]

const canSubmit = computed(() => {
  return (
    form.value.studentName.trim()
    && form.value.ageGroup
    && form.value.programme
    && form.value.phone.trim()
  )
})

function submitForm() {
  if (!canSubmit.value) return

  submitted.value = true

  const message = encodeURIComponent(
    `Assalamu Alaikum. I would like to enrol at IBN MAS'UD ONLINE ACADEMY.

Student Name: ${form.value.studentName}
Age Group: ${form.value.ageGroup}
Programme: ${form.value.programme}
Current Level: ${form.value.currentLevel || 'Not specified'}
Parent/Guardian Name: ${form.value.parentName || 'Not specified'}
Email: ${form.value.email || 'Not specified'}
Phone: ${form.value.phone}
Preferred Time: ${form.value.preferredTime || 'Not specified'}

Message:
${form.value.message || 'No additional message.'}`
  )

  window.open(
    `https://wa.me/${whatsappNumber}?text=${message}`,
    '_blank',
    'noopener,noreferrer'
  )
}

function resetForm() {
  submitted.value = false

  form.value = {
    studentName: '',
    ageGroup: '',
    programme: '',
    currentLevel: '',
    parentName: '',
    email: '',
    phone: '',
    preferredTime: '',
    message: ''
  }
}

const benefits = [
  {
    icon: 'i-lucide-calendar-check-2',
    title: 'Flexible Scheduling',
    text: 'Learning sessions are arranged around student and tutor availability.'
  },
  {
    icon: 'i-lucide-user-round',
    title: 'Personal Attention',
    text: 'Students learn within a structured environment designed around their level and needs.'
  },
  {
    icon: 'i-lucide-brain',
    title: 'Dedicated Ḥifẓ',
    text: 'Every enrolled student receives a dedicated weekly 30-minute Ḥifẓ session.'
  },
  {
    icon: 'i-lucide-file-chart-column',
    title: 'Monthly Progress',
    text: 'Parents are kept informed through regular monthly progress reports.'
  }
]

const steps = [
  {
    number: '01',
    icon: 'i-lucide-clipboard-pen-line',
    title: 'Tell Us About The Student',
    text: 'Share a few details so we can understand the learner and their needs.'
  },
  {
    number: '02',
    icon: 'i-lucide-message-circle',
    title: 'Speak With The Academy',
    text: 'We\'ll discuss the programme, learning needs and suitable arrangements.'
  },
  {
    number: '03',
    icon: 'i-lucide-calendar-days',
    title: 'Arrange Your Schedule',
    text: 'Choose a suitable learning schedule around student and tutor availability.'
  },
  {
    number: '04',
    icon: 'i-lucide-rocket',
    title: 'Begin Learning',
    text: 'Start your structured journey with IBN MAS\'UD ONLINE ACADEMY.'
  }
]
</script>

<template>
  <div class="enrol-page">
    <!-- =====================================================
         HERO
         ===================================================== -->

    <section class="enrol-hero">
      <div class="hero-pattern" />

      <div class="hero-orbit orbit-one" />
      <div class="hero-orbit orbit-two" />

      <UContainer class="hero-container">
        <div class="hero-content reveal-up">
          <div class="eyebrow">
            <span class="eyebrow-line" />
            Begin Your Journey
          </div>

          <h1>
            Your next step
            <span>starts here.</span>
          </h1>

          <p>
            Take the first step toward structured Qur'an, Tajwīd, Arabic,
            Ḥifẓ and Islamic learning with IBN MAS'UD ONLINE ACADEMY.
          </p>

          <div class="hero-points">
            <div>
              <span>
                <UIcon name="i-lucide-check" />
              </span>
              Flexible online learning
            </div>

            <div>
              <span>
                <UIcon name="i-lucide-check" />
              </span>
              Structured weekly sessions
            </div>

            <div>
              <span>
                <UIcon name="i-lucide-check" />
              </span>
              Monthly progress reports
            </div>
          </div>
        </div>

        <!-- HERO SIDE CARD -->

        <div class="hero-card-wrap reveal-up delay-2">
          <div class="hero-card">
            <div class="hero-card-top">
              <span>START HERE</span>

              <div class="hero-card-icon">
                <UIcon name="i-lucide-sparkles" />
              </div>
            </div>

            <h3>
              A simple beginning
              to a meaningful journey.
            </h3>

            <div class="hero-mini-steps">
              <div class="mini-step active">
                <span>01</span>
                <div>
                  <strong>Enquire</strong>
                  <small>Tell us what you need</small>
                </div>
              </div>

              <div class="mini-line" />

              <div class="mini-step">
                <span>02</span>
                <div>
                  <strong>Discuss</strong>
                  <small>Find the right direction</small>
                </div>
              </div>

              <div class="mini-line" />

              <div class="mini-step">
                <span>03</span>
                <div>
                  <strong>Begin</strong>
                  <small>Start learning</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- =====================================================
         FORM SECTION
         ===================================================== -->

    <section class="application-section">
      <UContainer>
        <div class="application-layout">
          <!-- LEFT SIDE -->

          <div class="application-info reveal-up">
            <div class="eyebrow dark">
              <span class="eyebrow-line" />
              Enrolment
            </div>

            <h2>
              Tell us a little
              <span>about the learner.</span>
            </h2>

            <p>
              Complete the short form and we'll use the information to
              understand the student's learning needs and guide you through
              the next step.
            </p>

            <div class="info-note">
              <div class="info-note-icon">
                <UIcon name="i-lucide-info" />
              </div>

              <div>
                <strong>What happens next?</strong>

                <p>
                  After submitting your enquiry, you can continue the
                  conversation with the academy through WhatsApp.
                </p>
              </div>
            </div>

            <div class="secure-note">
              <UIcon name="i-lucide-shield-check" />
              <span>Your information is used for enrolment enquiries.</span>
            </div>
          </div>

          <!-- FORM -->

          <div class="form-card reveal-up delay-2">
            <!-- SUCCESS -->

            <div
              v-if="submitted"
              class="success-state"
            >
              <div class="success-icon">
                <UIcon name="i-lucide-check" />
              </div>

              <span class="success-label">
                ENQUIRY READY
              </span>

              <h3>
                You're one step
                <span>closer.</span>
              </h3>

              <p>
                Your enquiry has been prepared. WhatsApp should open with
                your details so you can continue the conversation with
                IBN MAS'UD ONLINE ACADEMY.
              </p>

              <button
                type="button"
                class="success-button"
                @click="resetForm"
              >
                Submit Another Enquiry
                <UIcon name="i-lucide-arrow-right" />
              </button>
            </div>

            <!-- FORM -->

            <form
              v-else
              class="enrol-form"
              @submit.prevent="submitForm"
            >
              <div class="form-header">
                <div>
                  <span>ENROLMENT FORM</span>

                  <h3>
                    Let's get started.
                  </h3>
                </div>

                <div class="form-step">
                  <span>STEP</span>
                  01
                </div>
              </div>

              <!-- STUDENT -->

              <div class="form-section">
                <div class="form-section-title">
                  <span>01</span>

                  <div>
                    <strong>Student Information</strong>
                    <small>Tell us about the learner</small>
                  </div>
                </div>

                <div class="form-grid">
                  <div class="field full">
                    <label for="studentName">
                      Student Name <span>*</span>
                    </label>

                    <input
                      id="studentName"
                      v-model="form.studentName"
                      type="text"
                      placeholder="Enter student's full name"
                      required
                    >
                  </div>

                  <div class="field">
                    <label for="ageGroup">
                      Age Group <span>*</span>
                    </label>

                    <select
                      id="ageGroup"
                      v-model="form.ageGroup"
                      required
                    >
                      <option
                        value=""
                        disabled
                      >
                        Select age group
                      </option>

                      <option
                        v-for="age in ageGroups"
                        :key="age"
                        :value="age"
                      >
                        {{ age }}
                      </option>
                    </select>
                  </div>

                  <div class="field">
                    <label for="programme">
                      Programme <span>*</span>
                    </label>

                    <select
                      id="programme"
                      v-model="form.programme"
                      required
                    >
                      <option
                        value=""
                        disabled
                      >
                        Select programme
                      </option>

                      <option
                        v-for="programme in programmes"
                        :key="programme"
                        :value="programme"
                      >
                        {{ programme }}
                      </option>
                    </select>
                  </div>

                  <div class="field full">
                    <label for="currentLevel">
                      Current Learning Level
                    </label>

                    <select
                      id="currentLevel"
                      v-model="form.currentLevel"
                    >
                      <option
                        value=""
                        disabled
                      >
                        Select current level
                      </option>

                      <option
                        v-for="level in levels"
                        :key="level"
                        :value="level"
                      >
                        {{ level }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- CONTACT -->

              <div class="form-section">
                <div class="form-section-title">
                  <span>02</span>

                  <div>
                    <strong>Contact Information</strong>
                    <small>How can we reach you?</small>
                  </div>
                </div>

                <div class="form-grid">
                  <div class="field full">
                    <label for="parentName">
                      Parent / Guardian Name
                    </label>

                    <input
                      id="parentName"
                      v-model="form.parentName"
                      type="text"
                      placeholder="Enter parent or guardian name"
                    >
                  </div>

                  <div class="field">
                    <label for="phone">
                      WhatsApp / Phone <span>*</span>
                    </label>

                    <input
                      id="phone"
                      v-model="form.phone"
                      type="tel"
                      placeholder="e.g. +234..."
                      required
                    >
                  </div>

                  <div class="field">
                    <label for="email">
                      Email Address
                    </label>

                    <input
                      id="email"
                      v-model="form.email"
                      type="email"
                      placeholder="you@example.com"
                    >
                  </div>
                </div>
              </div>

              <!-- SCHEDULE -->

              <div class="form-section">
                <div class="form-section-title">
                  <span>03</span>

                  <div>
                    <strong>Learning Preferences</strong>
                    <small>Help us understand your schedule</small>
                  </div>
                </div>

                <div class="form-grid">
                  <div class="field full">
                    <label for="preferredTime">
                      Preferred Learning Time
                    </label>

                    <select
                      id="preferredTime"
                      v-model="form.preferredTime"
                    >
                      <option
                        value=""
                        disabled
                      >
                        Select preferred time
                      </option>

                      <option
                        v-for="time in timeOptions"
                        :key="time"
                        :value="time"
                      >
                        {{ time }}
                      </option>
                    </select>
                  </div>

                  <div class="field full">
                    <label for="message">
                      Additional Message
                    </label>

                    <textarea
                      id="message"
                      v-model="form.message"
                      rows="4"
                      placeholder="Tell us anything you'd like us to know..."
                    />
                  </div>
                </div>
              </div>

              <!-- SUBMIT -->

              <div class="form-submit">
                <button
                  type="submit"
                  class="submit-button"
                  :disabled="!canSubmit"
                >
                  Continue on WhatsApp
                  <UIcon name="i-lucide-arrow-up-right" />
                </button>

                <p>
                  By submitting, you'll continue your enrolment enquiry
                  through WhatsApp.
                </p>
              </div>
            </form>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- =====================================================
         BENEFITS
         ===================================================== -->

    <section class="benefits-section">
      <UContainer>
        <div class="section-heading reveal-up">
          <div class="eyebrow dark">
            <span class="eyebrow-line" />
            Why Learn With Us
          </div>

          <h2>
            Built around
            <span>meaningful learning.</span>
          </h2>

          <p>
            Enrolment is the beginning of a structured learning experience
            designed to support students throughout their journey.
          </p>
        </div>

        <div class="benefits-grid">
          <article
            v-for="(benefit, index) in benefits"
            :key="benefit.title"
            class="benefit-card reveal-up"
            :class="`delay-${index + 1}`"
          >
            <div class="benefit-icon">
              <UIcon :name="benefit.icon" />
            </div>

            <div class="benefit-number">
              0{{ index + 1 }}
            </div>

            <h3>
              {{ benefit.title }}
            </h3>

            <p>
              {{ benefit.text }}
            </p>
          </article>
        </div>
      </UContainer>
    </section>

    <!-- =====================================================
         HOW IT WORKS
         ===================================================== -->

    <section class="steps-section">
      <UContainer>
        <div class="steps-header reveal-up">
          <div>
            <div class="eyebrow dark">
              <span class="eyebrow-line" />
              What Happens Next
            </div>

            <h2>
              From enquiry to
              <span>learning.</span>
            </h2>
          </div>

          <p>
            Starting your learning journey doesn't have to feel complicated.
            We keep the process simple and personal.
          </p>
        </div>

        <div class="steps-grid">
          <div class="steps-line" />

          <article
            v-for="(step, index) in steps"
            :key="step.number"
            class="step-card reveal-up"
            :class="`delay-${index + 1}`"
          >
            <div class="step-top">
              <div class="step-number">
                {{ step.number }}
              </div>

              <div class="step-icon">
                <UIcon :name="step.icon" />
              </div>
            </div>

            <h3>
              {{ step.title }}
            </h3>

            <p>
              {{ step.text }}
            </p>
          </article>
        </div>
      </UContainer>
    </section>

    <!-- =====================================================
         FINAL CTA
         ===================================================== -->

    <section class="enrol-cta">
      <div class="cta-pattern" />

      <UContainer>
        <div class="cta-inner reveal-up">
          <div class="cta-icon">
            <UIcon name="i-lucide-sparkles" />
          </div>

          <div class="eyebrow">
            <span class="eyebrow-line" />
            Your Journey Awaits
          </div>

          <h2>
            Don't just plan to learn.
            <span>Begin.</span>
          </h2>

          <p>
            Take the first step toward consistent, structured Islamic
            learning with IBN MAS'UD ONLINE ACADEMY.
          </p>

          <div class="cta-actions">
            <a
              :href="`https://wa.me/${whatsappNumber}`"
              target="_blank"
              rel="noopener noreferrer"
              class="primary-button light"
            >
              Talk To The Academy
              <UIcon name="i-lucide-message-circle" />
            </a>

            <NuxtLink
              to="/programmes"
              class="secondary-button"
            >
              Explore Programmes
              <UIcon name="i-lucide-arrow-right" />
            </NuxtLink>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>

<style scoped>
/* =========================================================
   BASE
   ========================================================= */

.enrol-page {
  --green: #073b29;
  --green-dark: #04291e;
  --green-soft: #0d5039;
  --gold: #d8c98b;
  --gold-light: #f4e9ae;
  --cream: #faf9f5;
  --white: #ffffff;
  --ink: #17231e;
  --muted: #69756f;
  --border: rgba(7, 59, 41, 0.1);

  overflow: hidden;
  background: var(--cream);
  color: var(--ink);
}

.enrol-page *,
.enrol-page *::before,
.enrol-page *::after {
  box-sizing: border-box;
}

.enrol-page a {
  text-decoration: none;
}

/* =========================================================
   HERO
   ========================================================= */

.enrol-hero {
  position: relative;

  min-height: 700px;

  display: flex;
  align-items: center;

  overflow: hidden;

  background:
    radial-gradient(
      circle at 78% 42%,
      rgba(216, 201, 139, .15),
      transparent 28%
    ),
    linear-gradient(
      135deg,
      var(--green-dark),
      var(--green)
    );

  color: white;
}

.hero-pattern,
.cta-pattern {
  position: absolute;
  inset: 0;

  opacity: .11;
  pointer-events: none;

  background-image:
    linear-gradient(
      30deg,
      transparent 45%,
      rgba(255,255,255,.35) 46%,
      transparent 47%
    ),
    linear-gradient(
      150deg,
      transparent 45%,
      rgba(255,255,255,.35) 46%,
      transparent 47%
    );

  background-size: 72px 72px;
}

.hero-orbit {
  position: absolute;

  border: 1px solid rgba(216,201,139,.12);
  border-radius: 50%;
}

.orbit-one {
  width: 600px;
  height: 600px;

  right: -300px;
  top: -180px;
}

.orbit-two {
  width: 400px;
  height: 400px;

  right: -190px;
  bottom: -200px;
}

.hero-container {
  position: relative;
  z-index: 2;

  width: 100%;

  display: grid;
  grid-template-columns: 1fr .85fr;
  align-items: center;

  gap: 90px;

  padding-top: 110px;
  padding-bottom: 110px;
}

.hero-content {
  max-width: 640px;
}

.eyebrow {
  display: flex;
  align-items: center;
  gap: 11px;

  margin-bottom: 21px;

  color: var(--gold-light);

  font-size: 10px;
  font-weight: 800;
  letter-spacing: .2em;
  text-transform: uppercase;
}

.eyebrow.dark {
  color: var(--green);
}

.eyebrow-line {
  width: 30px;
  height: 1px;

  flex-shrink: 0;

  background: currentColor;
  opacity: .8;
}

.hero-content h1 {
  margin: 0;

  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(50px, 6vw, 76px);
  line-height: .98;
  font-weight: 500;
  letter-spacing: -.045em;
}

.hero-content h1 span {
  color: var(--gold);
}

.hero-content > p {
  max-width: 590px;

  margin: 28px 0 0;

  color: rgba(255,255,255,.68);

  font-size: 16px;
  line-height: 1.85;
}

.hero-points {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;

  margin-top: 34px;
}

.hero-points > div {
  display: flex;
  align-items: center;
  gap: 8px;

  color: rgba(255,255,255,.7);

  font-size: 11px;
}

.hero-points span {
  width: 22px;
  height: 22px;

  display: grid;
  place-items: center;

  border-radius: 50%;

  background: rgba(216,201,139,.13);
  color: var(--gold-light);
}

/* =========================================================
   HERO CARD
   ========================================================= */

.hero-card-wrap {
  display: flex;
  justify-content: center;
}

.hero-card {
  width: min(100%, 430px);

  padding: 32px;

  border: 1px solid rgba(255,255,255,.14);
  border-radius: 29px;

  background: rgba(255,255,255,.07);

  backdrop-filter: blur(18px);

  box-shadow:
    0 35px 80px rgba(0,0,0,.22);
}

.hero-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 24px;

  border-bottom: 1px solid rgba(255,255,255,.1);
}

.hero-card-top > span {
  color: var(--gold-light);

  font-size: 9px;
  font-weight: 800;
  letter-spacing: .18em;
}

.hero-card-icon {
  width: 45px;
  height: 45px;

  display: grid;
  place-items: center;

  border-radius: 14px;

  background: rgba(216,201,139,.14);
  color: var(--gold-light);
}

.hero-card h3 {
  max-width: 320px;

  margin: 27px 0 32px;

  font-family: Georgia, serif;
  font-size: 28px;
  line-height: 1.15;
  font-weight: 500;
}

.hero-mini-steps {
  position: relative;
}

.mini-step {
  display: flex;
  align-items: center;
  gap: 15px;
}

.mini-step > span {
  width: 40px;
  height: 40px;

  display: grid;
  place-items: center;

  flex-shrink: 0;

  border: 1px solid rgba(255,255,255,.15);
  border-radius: 50%;

  background: rgba(255,255,255,.04);

  color: rgba(255,255,255,.4);

  font-size: 10px;
  font-weight: 700;
}

.mini-step.active > span {
  border-color: var(--gold);
  background: var(--gold);
  color: var(--green);
}

.mini-step strong {
  display: block;

  font-size: 12px;
}

.mini-step small {
  display: block;

  margin-top: 3px;

  color: rgba(255,255,255,.42);

  font-size: 9px;
}

.mini-line {
  width: 1px;
  height: 25px;

  margin: 4px 0 4px 20px;

  background: rgba(216,201,139,.25);
}

/* =========================================================
   APPLICATION
   ========================================================= */

.application-section {
  padding: 125px 0;
}

.application-layout {
  display: grid;
  grid-template-columns: .75fr 1.25fr;
  align-items: start;

  gap: 80px;
}

.application-info {
  position: sticky;
  top: 120px;

  max-width: 500px;
}

.application-info h2 {
  margin: 0;

  font-family: Georgia, serif;
  font-size: clamp(40px, 5vw, 56px);
  line-height: 1.04;
  font-weight: 500;
  letter-spacing: -.035em;
}

.application-info h2 span {
  color: var(--green);
}

.application-info > p {
  margin: 22px 0 0;

  color: var(--muted);

  font-size: 15px;
  line-height: 1.85;
}

.info-note {
  display: flex;
  align-items: flex-start;
  gap: 13px;

  margin-top: 34px;
  padding: 19px;

  border: 1px solid var(--border);
  border-radius: 17px;

  background: white;
}

.info-note-icon {
  width: 39px;
  height: 39px;

  display: grid;
  place-items: center;

  flex-shrink: 0;

  border-radius: 12px;

  background: #edf3ef;
  color: var(--green);
}

.info-note strong {
  display: block;

  font-family: Georgia, serif;
  font-size: 16px;
  font-weight: 500;
}

.info-note p {
  margin: 4px 0 0;

  color: var(--muted);

  font-size: 11px;
  line-height: 1.65;
}

.secure-note {
  display: flex;
  align-items: center;
  gap: 8px;

  margin-top: 18px;

  color: var(--muted);

  font-size: 9px;
}

.secure-note .i-lucide-shield-check {
  color: var(--green);
}

/* =========================================================
   FORM CARD
   ========================================================= */

.form-card {
  min-height: 600px;

  padding: 35px;

  border: 1px solid var(--border);
  border-radius: 29px;

  background: white;

  box-shadow:
    0 25px 70px rgba(7,59,41,.07);
}

.form-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  padding-bottom: 28px;

  border-bottom: 1px solid var(--border);
}

.form-header > div:first-child > span {
  color: var(--muted);

  font-size: 8px;
  font-weight: 800;
  letter-spacing: .17em;
}

.form-header h3 {
  margin: 6px 0 0;

  font-family: Georgia, serif;
  font-size: 27px;
  font-weight: 500;
}

.form-step {
  display: flex;
  align-items: center;
  gap: 8px;

  padding: 8px 11px;

  border-radius: 100px;

  background: #edf3ef;
  color: var(--green);

  font-size: 10px;
  font-weight: 800;
}

.form-step span {
  opacity: .45;
}

.form-section {
  padding: 28px 0;

  border-bottom: 1px solid var(--border);
}

.form-section-title {
  display: flex;
  align-items: center;
  gap: 12px;

  margin-bottom: 22px;
}

.form-section-title > span {
  color: var(--gold);

  font-family: Georgia, serif;
  font-size: 17px;
}

.form-section-title strong {
  display: block;

  font-family: Georgia, serif;
  font-size: 16px;
  font-weight: 500;
}

.form-section-title small {
  display: block;

  margin-top: 2px;

  color: var(--muted);

  font-size: 9px;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 17px;
}

.field {
  display: flex;
  flex-direction: column;
}

.field.full {
  grid-column: 1 / -1;
}

.field label {
  margin-bottom: 8px;

  color: #39453f;

  font-size: 10px;
  font-weight: 700;
}

.field label span {
  color: #b28f38;
}

.field input,
.field select,
.field textarea {
  width: 100%;

  border: 1px solid rgba(7,59,41,.12);
  border-radius: 12px;

  outline: none;

  background: #fafbf9;
  color: var(--ink);

  font-family: inherit;
  font-size: 12px;

  transition:
    border-color .25s ease,
    background-color .25s ease,
    box-shadow .25s ease;
}

.field input,
.field select {
  height: 49px;

  padding: 0 14px;
}

.field textarea {
  min-height: 105px;

  padding: 13px 14px;

  resize: vertical;
}

.field input::placeholder,
.field textarea::placeholder {
  color: #a1aaa5;
}

.field input:focus,
.field select:focus,
.field textarea:focus {
  border-color: rgba(7,59,41,.4);

  background: white;

  box-shadow: 0 0 0 3px rgba(7,59,41,.05);
}

.form-submit {
  padding-top: 28px;
}

.submit-button {
  width: 100%;
  min-height: 55px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  border: 0;
  border-radius: 100px;

  background: var(--green);
  color: white;

  font-family: inherit;
  font-size: 12px;
  font-weight: 700;

  cursor: pointer;

  transition:
    transform .3s ease,
    background-color .3s ease,
    opacity .3s ease;
}

.submit-button:not(:disabled):hover {
  transform: translateY(-3px);

  background: var(--green-soft);

  box-shadow: 0 15px 35px rgba(7,59,41,.16);
}

.submit-button:disabled {
  opacity: .4;
  cursor: not-allowed;
}

.form-submit > p {
  margin: 11px 0 0;

  color: var(--muted);

  font-size: 9px;
  line-height: 1.6;

  text-align: center;
}

/* =========================================================
   SUCCESS
   ========================================================= */

.success-state {
  min-height: 650px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 50px;

  text-align: center;
}

.success-icon {
  width: 76px;
  height: 76px;

  display: grid;
  place-items: center;

  margin-bottom: 25px;

  border-radius: 50%;

  background: #edf5ef;
  color: var(--green);

  font-size: 30px;
}

.success-label {
  color: var(--green);

  font-size: 9px;
  font-weight: 800;
  letter-spacing: .18em;
}

.success-state h3 {
  margin: 12px 0 0;

  font-family: Georgia, serif;
  font-size: 38px;
  line-height: 1.08;
  font-weight: 500;
}

.success-state h3 span {
  color: var(--green);
}

.success-state > p {
  max-width: 480px;

  margin: 18px auto 0;

  color: var(--muted);

  font-size: 13px;
  line-height: 1.8;
}

.success-button {
  min-height: 49px;

  display: inline-flex;
  align-items: center;
  gap: 10px;

  margin-top: 30px;
  padding: 0 19px;

  border: 1px solid var(--border);
  border-radius: 100px;

  background: white;
  color: var(--green);

  font-family: inherit;
  font-size: 11px;
  font-weight: 700;

  cursor: pointer;

  transition: .3s ease;
}

.success-button:hover {
  transform: translateY(-3px);
  background: #f3f6f3;
}

/* =========================================================
   BENEFITS
   ========================================================= */

.benefits-section {
  padding: 125px 0;

  background: #f0f3ef;
}

.section-heading {
  max-width: 720px;

  margin-bottom: 58px;
}

.section-heading h2 {
  margin: 0;

  font-family: Georgia, serif;
  font-size: clamp(40px, 5vw, 57px);
  line-height: 1.04;
  font-weight: 500;
  letter-spacing: -.035em;
}

.section-heading h2 span {
  color: var(--green);
}

.section-heading p {
  max-width: 610px;

  margin: 21px 0 0;

  color: var(--muted);

  font-size: 15px;
  line-height: 1.8;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  gap: 14px;
}

.benefit-card {
  position: relative;

  min-height: 290px;

  padding: 27px;

  overflow: hidden;

  border: 1px solid var(--border);
  border-radius: 22px;

  background: white;

  transition:
    transform .35s ease,
    box-shadow .35s ease;
}

.benefit-card:hover {
  transform: translateY(-8px);

  box-shadow:
    0 25px 50px rgba(7,59,41,.08);
}

.benefit-icon {
  width: 53px;
  height: 53px;

  display: grid;
  place-items: center;

  border-radius: 16px;

  background: #edf3ef;
  color: var(--green);

  font-size: 21px;

  transition:
    background-color .3s ease,
    color .3s ease,
    transform .3s ease;
}

.benefit-card:hover .benefit-icon {
  background: var(--green);
  color: var(--gold-light);
  transform: scale(1.08) rotate(-3deg);
}

.benefit-number {
  position: absolute;

  top: 25px;
  right: 25px;

  color: rgba(7,59,41,.17);

  font-family: Georgia, serif;
  font-size: 21px;
}

.benefit-card h3 {
  margin: 52px 0 11px;

  font-family: Georgia, serif;
  font-size: 21px;
  font-weight: 500;
}

.benefit-card p {
  margin: 0;

  color: var(--muted);

  font-size: 12px;
  line-height: 1.75;
}

/* =========================================================
   STEPS
   ========================================================= */

.steps-section {
  padding: 125px 0;
}

.steps-header {
  display: grid;
  grid-template-columns: 1fr .7fr;

  gap: 70px;

  margin-bottom: 75px;
}

.steps-header h2 {
  margin: 0;

  font-family: Georgia, serif;
  font-size: clamp(40px, 5vw, 57px);
  line-height: 1.04;
  font-weight: 500;
  letter-spacing: -.035em;
}

.steps-header h2 span {
  color: var(--green);
}

.steps-header > p {
  align-self: end;

  margin: 0;

  color: var(--muted);

  font-size: 14px;
  line-height: 1.8;
}

.steps-grid {
  position: relative;

  display: grid;
  grid-template-columns: repeat(4, 1fr);

  gap: 14px;
}

.steps-line {
  position: absolute;

  top: 32px;
  left: 12%;
  right: 12%;

  height: 1px;

  background: linear-gradient(
    to right,
    var(--green),
    rgba(7,59,41,.08)
  );
}

.step-card {
  position: relative;
  z-index: 2;

  min-height: 280px;

  padding: 0 24px 25px;

  border: 1px solid var(--border);
  border-radius: 21px;

  background: white;

  transition:
    transform .35s ease,
    box-shadow .35s ease;
}

.step-card:hover {
  transform: translateY(-8px);

  box-shadow:
    0 25px 50px rgba(7,59,41,.08);
}

.step-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.step-number {
  width: 64px;
  height: 64px;

  display: grid;
  place-items: center;

  border: 7px solid var(--cream);
  border-radius: 50%;

  background: var(--green);
  color: var(--gold-light);

  font-size: 10px;
  font-weight: 800;
}

.step-icon {
  width: 47px;
  height: 47px;

  display: grid;
  place-items: center;

  border-radius: 14px;

  background: #edf3ef;
  color: var(--green);

  transition:
    background-color .3s ease,
    color .3s ease,
    transform .3s ease;
}

.step-card:hover .step-icon {
  background: var(--green);
  color: var(--gold-light);
  transform: scale(1.07);
}

.step-card h3 {
  margin: 42px 0 11px;

  font-family: Georgia, serif;
  font-size: 21px;
  font-weight: 500;
}

.step-card p {
  margin: 0;

  color: var(--muted);

  font-size: 12px;
  line-height: 1.75;
}

/* =========================================================
   CTA
   ========================================================= */

.enrol-cta {
  position: relative;

  padding: 120px 0;

  overflow: hidden;

  background: var(--green-dark);

  color: white;

  text-align: center;
}

.cta-inner {
  position: relative;
  z-index: 2;

  max-width: 760px;

  margin: auto;
}

.cta-icon {
  width: 58px;
  height: 58px;

  display: grid;
  place-items: center;

  margin: 0 auto 27px;

  border: 1px solid rgba(216,201,139,.3);
  border-radius: 17px;

  background: rgba(216,201,139,.1);
  color: var(--gold-light);

  font-size: 25px;
}

.cta-inner .eyebrow {
  justify-content: center;
}

.cta-inner h2 {
  margin: 0;

  font-family: Georgia, serif;
  font-size: clamp(42px, 5vw, 59px);
  line-height: 1.03;
  font-weight: 500;
  letter-spacing: -.035em;
}

.cta-inner h2 span {
  color: var(--gold);
}

.cta-inner > p {
  max-width: 620px;

  margin: 21px auto 0;

  color: rgba(255,255,255,.61);

  font-size: 14px;
  line-height: 1.8;
}

.cta-actions {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  gap: 13px;

  margin-top: 35px;
}

.primary-button,
.secondary-button {
  min-height: 54px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  padding: 0 22px;

  border-radius: 100px;

  font-size: 12px;
  font-weight: 700;

  transition: .3s ease;
}

.primary-button.light {
  background: var(--gold-light);
  color: var(--green);
}

.primary-button.light:hover {
  transform: translateY(-3px);

  box-shadow:
    0 16px 35px rgba(0,0,0,.18);
}

.secondary-button {
  border: 1px solid rgba(255,255,255,.2);

  background: rgba(255,255,255,.04);

  color: white;
}

.secondary-button:hover {
  transform: translateY(-3px);

  background: rgba(255,255,255,.08);
}

/* =========================================================
   ANIMATION
   ========================================================= */

.reveal-up {
  animation:
    revealUp .8s cubic-bezier(.2,.7,.2,1) both;
}

.delay-1 {
  animation-delay: .08s;
}

.delay-2 {
  animation-delay: .16s;
}

.delay-3 {
  animation-delay: .24s;
}

.delay-4 {
  animation-delay: .32s;
}

@keyframes revealUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* =========================================================
   RESPONSIVE
   ========================================================= */

@media (max-width: 1100px) {

  .hero-container {
    gap: 50px;
  }

  .application-layout {
    gap: 50px;
  }

  .benefits-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .steps-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .steps-line {
    display: none;
  }
}

@media (max-width: 800px) {

  .enrol-hero {
    min-height: auto;
  }

  .hero-container {
    grid-template-columns: 1fr;

    padding-top: 90px;
    padding-bottom: 80px;
  }

  .hero-content h1 {
    font-size: clamp(46px, 12vw, 65px);
  }

  .hero-card-wrap {
    margin-top: 15px;
  }

  .application-section,
  .benefits-section,
  .steps-section {
    padding: 90px 0;
  }

  .application-layout {
    grid-template-columns: 1fr;
  }

  .application-info {
    position: static;
    max-width: 650px;
  }

  .steps-header {
    grid-template-columns: 1fr;

    gap: 25px;
  }
}

@media (max-width: 600px) {

  .hero-content > p {
    font-size: 14px;
  }

  .hero-points {
    flex-direction: column;
    gap: 11px;
  }

  .hero-card {
    padding: 24px;
    border-radius: 23px;
  }

  .hero-card h3 {
    font-size: 24px;
  }

  .form-card {
    padding: 21px;
    border-radius: 23px;
  }

  .form-header h3 {
    font-size: 23px;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .field.full {
    grid-column: auto;
  }

  .benefits-grid,
  .steps-grid {
    grid-template-columns: 1fr;
  }

  .benefit-card {
    min-height: 260px;
  }

  .step-card {
    min-height: 240px;
  }

  .success-state {
    min-height: 550px;
    padding: 25px 10px;
  }

  .success-state h3 {
    font-size: 32px;
  }

  .cta-actions {
    flex-direction: column;
  }

  .primary-button,
  .secondary-button {
    width: 100%;
  }
}
</style>
