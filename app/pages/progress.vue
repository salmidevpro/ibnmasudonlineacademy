<script setup lang="ts">
const whatsappNumber = '2348074113418'

const whatsappMessage = encodeURIComponent(
  'Assalamu Alaikum. I would like to enquire about student progress tracking at IBN MAS\'UD ONLINE ACADEMY.'
)

const progressAreas = [
  {
    number: '01',
    icon: 'i-lucide-book-open',
    title: 'Qur\'an Learning',
    description:
      'Students build consistency in Qur\'an reading while tutors observe their development and areas that need attention.'
  },
  {
    number: '02',
    icon: 'i-lucide-volume-2',
    title: 'Tajwīd & Recitation',
    description:
      'Recitation is reviewed carefully, helping students develop stronger pronunciation, fluency and application of Tajwīd.'
  },
  {
    number: '03',
    icon: 'i-lucide-brain',
    title: 'Ḥifẓ & Revision',
    description:
      'Dedicated memorisation time gives students a structured opportunity to build, strengthen and revise their memorisation.'
  },
  {
    number: '04',
    icon: 'i-lucide-languages',
    title: 'Arabic',
    description:
      'Progress in Arabic learning is observed according to the student\'s level, learning needs and continued participation.'
  },
  {
    number: '05',
    icon: 'i-lucide-moon-star',
    title: 'Islamic Education',
    description:
      'Students develop their understanding of Islamic knowledge through structured lessons suited to their learning stage.'
  }
]

const journey = [
  {
    step: '01',
    title: 'Learn',
    text: 'Students receive structured lessons according to their level and programme.',
    icon: 'i-lucide-sparkles'
  },
  {
    step: '02',
    title: 'Practise',
    text: 'Regular sessions give students opportunities to apply what they have learned.',
    icon: 'i-lucide-pencil-line'
  },
  {
    step: '03',
    title: 'Review',
    text: 'Tutors observe learning, recitation, memorisation and areas requiring further attention.',
    icon: 'i-lucide-refresh-cw'
  },
  {
    step: '04',
    title: 'Report',
    text: 'Progress is communicated through a clear monthly report for parents and students.',
    icon: 'i-lucide-file-check-2'
  }
]

const reportItems = [
  {
    icon: 'i-lucide-trophy',
    title: 'Achievements',
    text: 'What the student has successfully worked through during the month.'
  },
  {
    icon: 'i-lucide-heart',
    title: 'Strengths',
    text: 'Areas where the student is showing encouraging development and consistency.'
  },
  {
    icon: 'i-lucide-target',
    title: 'Areas for Improvement',
    text: 'Specific areas that may require additional practice, attention or revision.'
  },
  {
    icon: 'i-lucide-message-circle-more',
    title: 'Tutor Recommendations',
    text: 'Guidance from the tutor to help support the student\'s next stage of learning.'
  }
]
</script>

<template>
  <div class="progress-page">
    <!-- HERO -->
    <section class="progress-hero">
      <div class="hero-pattern" />

      <UContainer class="hero-container">
        <div class="hero-copy reveal-up">
          <div class="eyebrow">
            <span class="eyebrow-line" />
            Student Progress
          </div>

          <h1>
            Every lesson is a
            <span>step forward.</span>
          </h1>

          <p>
            At IBN MAS'UD ONLINE ACADEMY, progress is not left to chance.
            Students learn through a structured rhythm of lessons, practice,
            revision and regular feedback.
          </p>

          <div class="hero-actions">
            <NuxtLink
              to="/enrol"
              class="primary-button"
            >
              Begin Your Journey
              <UIcon name="i-lucide-arrow-up-right" />
            </NuxtLink>

            <a
              :href="`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`"
              target="_blank"
              rel="noopener noreferrer"
              class="secondary-button"
            >
              Speak With Us
            </a>
          </div>
        </div>

        <!-- VISUAL PROGRESS CARD -->
        <div class="hero-visual reveal-up delay-2">
          <div class="visual-glow" />

          <div class="progress-card">
            <div class="card-top">
              <div>
                <span class="mini-label">LEARNING JOURNEY</span>
                <h3>Growing with consistency</h3>
              </div>

              <div class="gold-mark">
                <UIcon name="i-lucide-star" />
              </div>
            </div>

            <div class="journey-visual">
              <div class="journey-line" />

              <div class="visual-step active">
                <div class="visual-dot">
                  <UIcon name="i-lucide-book-open" />
                </div>
                <div>
                  <strong>Learn</strong>
                  <span>Structured lessons</span>
                </div>
              </div>

              <div class="visual-step">
                <div class="visual-dot">
                  <UIcon name="i-lucide-repeat-2" />
                </div>
                <div>
                  <strong>Practise</strong>
                  <span>Build consistency</span>
                </div>
              </div>

              <div class="visual-step">
                <div class="visual-dot">
                  <UIcon name="i-lucide-scan-search" />
                </div>
                <div>
                  <strong>Review</strong>
                  <span>Identify progress</span>
                </div>
              </div>

              <div class="visual-step final">
                <div class="visual-dot">
                  <UIcon name="i-lucide-check" />
                </div>
                <div>
                  <strong>Report</strong>
                  <span>Share the journey</span>
                </div>
              </div>
            </div>

            <div class="card-footer">
              <div class="footer-icon">
                <UIcon name="i-lucide-calendar-check-2" />
              </div>

              <div>
                <strong>Monthly progress reports</strong>
                <span>Clear feedback for parents</span>
              </div>
            </div>
          </div>
        </div>
      </UContainer>

      <div class="hero-bottom-fade" />
    </section>

    <!-- INTRO -->
    <section class="intro-section">
      <UContainer>
        <div class="section-heading centered reveal-up">
          <div class="eyebrow dark">
            <span class="eyebrow-line" />
            What We Follow
          </div>

          <h2>
            Progress has more than
            <span>one dimension.</span>
          </h2>

          <p>
            Learning Qur'an and Islamic knowledge is a journey. Our tutors
            pay attention to the different areas that contribute to a
            student's development.
          </p>
        </div>

        <div class="areas-grid">
          <article
            v-for="(area, index) in progressAreas"
            :key="area.number"
            class="area-card reveal-up"
            :class="`delay-${Math.min(index + 1, 4)}`"
          >
            <div class="area-number">
              {{ area.number }}
            </div>

            <div class="area-icon">
              <UIcon :name="area.icon" />
            </div>

            <h3>{{ area.title }}</h3>

            <p>{{ area.description }}</p>

            <div class="area-arrow">
              <UIcon name="i-lucide-arrow-up-right" />
            </div>
          </article>
        </div>
      </UContainer>
    </section>

    <!-- HIFZ FEATURE -->
    <section class="hifz-section">
      <div class="hifz-pattern" />

      <UContainer>
        <div class="hifz-layout">
          <div class="hifz-visual reveal-up">
            <div class="orbit orbit-one" />
            <div class="orbit orbit-two" />

            <div class="hifz-circle">
              <div class="hifz-inner">
                <UIcon name="i-lucide-brain" />
                <span>Ḥifẓ</span>
                <small>Memorisation</small>
              </div>
            </div>

            <div class="floating-note note-one">
              <UIcon name="i-lucide-clock-3" />
              <span>Weekly session</span>
            </div>

            <div class="floating-note note-two">
              <UIcon name="i-lucide-repeat-2" />
              <span>Revision</span>
            </div>
          </div>

          <div class="hifz-copy reveal-up delay-2">
            <div class="eyebrow">
              <span class="eyebrow-line" />
              A Dedicated Space For Ḥifẓ
            </div>

            <h2>
              Memorisation grows through
              <span>regular revision.</span>
            </h2>

            <p>
              Every enrolled student receives a dedicated weekly
              <strong>30-minute Ḥifẓ session</strong> focused on memorisation,
              revision and recitation.
            </p>

            <p>
              This gives students a consistent space to strengthen what they
              have memorised while receiving guidance from their tutor.
            </p>

            <div class="hifz-points">
              <div>
                <span class="check">
                  <UIcon name="i-lucide-check" />
                </span>
                <span>Memorisation</span>
              </div>

              <div>
                <span class="check">
                  <UIcon name="i-lucide-check" />
                </span>
                <span>Revision</span>
              </div>

              <div>
                <span class="check">
                  <UIcon name="i-lucide-check" />
                </span>
                <span>Recitation</span>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- JOURNEY -->
    <section class="journey-section">
      <UContainer>
        <div class="section-heading reveal-up">
          <div class="eyebrow dark">
            <span class="eyebrow-line" />
            The Learning Rhythm
          </div>

          <h2>
            A simple rhythm that keeps
            <span>learning moving.</span>
          </h2>

          <p>
            Consistency is at the heart of meaningful learning. Each stage
            connects naturally to the next.
          </p>
        </div>

        <div class="journey-grid">
          <article
            v-for="(item, index) in journey"
            :key="item.step"
            class="journey-card reveal-up"
            :class="`delay-${index + 1}`"
          >
            <div class="journey-card-top">
              <span>{{ item.step }}</span>

              <div class="journey-icon">
                <UIcon :name="item.icon" />
              </div>
            </div>

            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>

            <div class="journey-progress">
              <span :style="{ width: `${25 + index * 25}%` }" />
            </div>
          </article>
        </div>

        <div class="weekly-note reveal-up">
          <div class="weekly-icon">
            <UIcon name="i-lucide-calendar-days" />
          </div>

          <div>
            <strong>Structured weekly learning</strong>
            <p>
              Students have three weekly sessions arranged around their
              availability and tutor schedule.
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- REPORT -->
    <section class="report-section">
      <UContainer>
        <div class="report-layout">
          <div class="report-copy reveal-up">
            <div class="eyebrow dark">
              <span class="eyebrow-line" />
              Monthly Feedback
            </div>

            <h2>
              Parents should never have to
              <span>guess how learning is going.</span>
            </h2>

            <p>
              Each month, parents are kept informed about the student's
              learning journey through a progress report that provides a
              clearer picture of development.
            </p>

            <div class="report-quote">
              <div class="quote-mark">
                “
              </div>
              <p>
                Progress becomes meaningful when students know what they have
                achieved and what they should work on next.
              </p>
            </div>
          </div>

          <div class="report-card reveal-up delay-2">
            <div class="report-card-header">
              <div>
                <span>MONTHLY REPORT</span>
                <h3>Student Progress</h3>
              </div>

              <div class="report-status">
                <UIcon name="i-lucide-check-circle-2" />
                Reviewed
              </div>
            </div>

            <div class="report-list">
              <div
                v-for="item in reportItems"
                :key="item.title"
                class="report-item"
              >
                <div class="report-item-icon">
                  <UIcon :name="item.icon" />
                </div>

                <div>
                  <strong>{{ item.title }}</strong>
                  <p>{{ item.text }}</p>
                </div>
              </div>
            </div>

            <div class="report-bottom">
              <UIcon name="i-lucide-send" />
              <span>Shared with parents</span>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- PARENT SECTION -->
    <section class="parents-section">
      <UContainer>
        <div class="parents-card reveal-up">
          <div class="parents-decoration" />

          <div class="parents-icon">
            <UIcon name="i-lucide-users-round" />
          </div>

          <div class="parents-content">
            <div class="eyebrow">
              <span class="eyebrow-line" />
              For Parents & Students
            </div>

            <h2>
              Learning is stronger when
              <span>everyone stays connected.</span>
            </h2>

            <p>
              Our progress approach creates a clear connection between the
              student, tutor and parent — helping everyone understand where
              the student is and where the learning journey is heading.
            </p>
          </div>

          <div class="parents-points">
            <div>
              <UIcon name="i-lucide-circle-check" />
              <span>Understand achievements</span>
            </div>

            <div>
              <UIcon name="i-lucide-circle-check" />
              <span>Recognise areas for improvement</span>
            </div>

            <div>
              <UIcon name="i-lucide-circle-check" />
              <span>Follow tutor recommendations</span>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- CTA -->
    <section class="progress-cta">
      <div class="cta-pattern" />

      <UContainer>
        <div class="cta-inner reveal-up">
          <div class="cta-icon">
            <UIcon name="i-lucide-sparkles" />
          </div>

          <div class="eyebrow">
            <span class="eyebrow-line" />
            Begin The Journey
          </div>

          <h2>
            Give your learning a
            <span>clear direction.</span>
          </h2>

          <p>
            Join a structured learning environment where every lesson,
            revision and report contributes to meaningful progress.
          </p>

          <div class="cta-actions">
            <NuxtLink
              to="/enrol"
              class="primary-button light"
            >
              Enrol Now
              <UIcon name="i-lucide-arrow-up-right" />
            </NuxtLink>

            <a
              :href="`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`"
              target="_blank"
              rel="noopener noreferrer"
              class="cta-whatsapp"
            >
              <UIcon name="i-lucide-message-circle" />
              Chat on WhatsApp
            </a>
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

.progress-page {
  --green: #073b29;
  --green-dark: #042a1e;
  --green-soft: #0d5039;
  --gold: #d8c98b;
  --gold-light: #f4e9ae;
  --cream: #faf9f5;
  --paper: #ffffff;
  --ink: #17231e;
  --muted: #69756f;
  --border: rgba(7, 59, 41, 0.1);

  overflow: hidden;
  background: var(--cream);
  color: var(--ink);
}

.progress-page * {
  box-sizing: border-box;
}

.progress-page a {
  text-decoration: none;
}

/* =========================================================
   HERO
   ========================================================= */

.progress-hero {
  position: relative;
  min-height: 720px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background:
    radial-gradient(circle at 78% 45%, rgba(216, 201, 139, 0.14), transparent 25%),
    linear-gradient(135deg, var(--green-dark), var(--green));
  color: white;
}

.hero-pattern,
.hifz-pattern,
.cta-pattern {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.12;
  background-image:
    linear-gradient(30deg, transparent 45%, rgba(255,255,255,.35) 46%, transparent 47%),
    linear-gradient(150deg, transparent 45%, rgba(255,255,255,.35) 46%, transparent 47%);
  background-size: 72px 72px;
}

.hero-container {
  position: relative;
  z-index: 2;
  width: 100%;
  display: grid;
  grid-template-columns: 1.02fr .98fr;
  align-items: center;
  gap: 80px;
  padding-top: 110px;
  padding-bottom: 110px;
}

.hero-copy {
  max-width: 650px;
}

.eyebrow {
  display: flex;
  align-items: center;
  gap: 11px;
  margin-bottom: 22px;
  color: var(--gold-light);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .19em;
  text-transform: uppercase;
}

.eyebrow.dark {
  color: var(--green);
}

.eyebrow-line {
  width: 30px;
  height: 1px;
  background: currentColor;
  opacity: .8;
}

.hero-copy h1 {
  margin: 0;
  max-width: 680px;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(48px, 6vw, 76px);
  line-height: .99;
  font-weight: 500;
  letter-spacing: -.045em;
}

.hero-copy h1 span,
.section-heading h2 span,
.hifz-copy h2 span,
.report-copy h2 span,
.parents-content h2 span,
.cta-inner h2 span {
  color: var(--gold);
}

.hero-copy p {
  max-width: 600px;
  margin: 28px 0 0;
  color: rgba(255,255,255,.72);
  font-size: 17px;
  line-height: 1.85;
}

.hero-actions,
.cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 13px;
  margin-top: 36px;
}

.primary-button,
.secondary-button,
.cta-whatsapp {
  min-height: 54px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 22px;
  border-radius: 100px;
  font-size: 13px;
  font-weight: 700;
  transition: .3s ease;
}

.primary-button {
  background: var(--gold-light);
  color: var(--green);
}

.primary-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 35px rgba(0,0,0,.18);
}

.secondary-button {
  border: 1px solid rgba(255,255,255,.24);
  color: white;
  background: rgba(255,255,255,.05);
}

.secondary-button:hover {
  border-color: rgba(244,233,174,.5);
  background: rgba(255,255,255,.1);
}

/* =========================================================
   HERO VISUAL
   ========================================================= */

.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
}

.visual-glow {
  position: absolute;
  width: 380px;
  height: 380px;
  border-radius: 50%;
  background: rgba(216,201,139,.12);
  filter: blur(55px);
}

.progress-card {
  position: relative;
  width: min(100%, 490px);
  padding: 30px;
  border: 1px solid rgba(255,255,255,.15);
  border-radius: 30px;
  background: rgba(255,255,255,.075);
  backdrop-filter: blur(18px);
  box-shadow: 0 35px 80px rgba(0,0,0,.2);
}

.card-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  padding-bottom: 28px;
  border-bottom: 1px solid rgba(255,255,255,.1);
}

.mini-label {
  display: block;
  margin-bottom: 7px;
  color: var(--gold-light);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: .18em;
}

.card-top h3 {
  margin: 0;
  font-family: Georgia, serif;
  font-size: 24px;
  font-weight: 500;
}

.gold-mark {
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  border-radius: 14px;
  background: rgba(216,201,139,.15);
  color: var(--gold-light);
}

.journey-visual {
  position: relative;
  padding: 28px 0 12px;
}

.journey-line {
  position: absolute;
  left: 20px;
  top: 35px;
  bottom: 40px;
  width: 1px;
  background: linear-gradient(
    to bottom,
    var(--gold),
    rgba(244,233,174,.08)
  );
}

.visual-step {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 17px;
  margin-bottom: 25px;
}

.visual-step:last-child {
  margin-bottom: 0;
}

.visual-dot {
  width: 41px;
  height: 41px;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  border: 1px solid rgba(255,255,255,.18);
  border-radius: 50%;
  background: var(--green);
  color: rgba(255,255,255,.7);
}

.visual-step.active .visual-dot,
.visual-step.final .visual-dot {
  border-color: var(--gold);
  background: var(--gold);
  color: var(--green);
}

.visual-step strong {
  display: block;
  font-size: 14px;
}

.visual-step span {
  display: block;
  margin-top: 3px;
  color: rgba(255,255,255,.5);
  font-size: 11px;
}

.card-footer {
  display: flex;
  align-items: center;
  gap: 13px;
  margin-top: 26px;
  padding: 17px;
  border-radius: 17px;
  background: rgba(0,0,0,.12);
}

.footer-icon {
  width: 37px;
  height: 37px;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  border-radius: 11px;
  background: rgba(216,201,139,.14);
  color: var(--gold-light);
}

.card-footer strong {
  display: block;
  font-size: 12px;
}

.card-footer span {
  display: block;
  margin-top: 3px;
  color: rgba(255,255,255,.48);
  font-size: 10px;
}

/* =========================================================
   INTRO / AREAS
   ========================================================= */

.intro-section {
  padding: 125px 0;
}

.section-heading {
  max-width: 700px;
  margin-bottom: 58px;
}

.section-heading.centered {
  margin-right: auto;
  margin-left: auto;
  text-align: center;
}

.section-heading.centered .eyebrow {
  justify-content: center;
}

.section-heading h2,
.hifz-copy h2,
.report-copy h2,
.parents-content h2,
.cta-inner h2 {
  margin: 0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(38px, 5vw, 57px);
  line-height: 1.05;
  font-weight: 500;
  letter-spacing: -.035em;
}

.section-heading p,
.report-copy > p {
  max-width: 620px;
  margin: 22px 0 0;
  color: var(--muted);
  font-size: 16px;
  line-height: 1.8;
}

.section-heading.centered p {
  margin-right: auto;
  margin-left: auto;
}

.areas-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 13px;
}

.area-card {
  position: relative;
  min-height: 330px;
  padding: 27px;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 23px;
  background: white;
  transition: .4s ease;
}

.area-card:hover {
  transform: translateY(-8px);
  border-color: rgba(7,59,41,.2);
  box-shadow: 0 25px 55px rgba(7,59,41,.09);
}

.area-number {
  position: absolute;
  top: 23px;
  right: 24px;
  color: rgba(7,59,41,.18);
  font-family: Georgia, serif;
  font-size: 24px;
}

.area-icon {
  width: 55px;
  height: 55px;
  display: grid;
  place-items: center;
  margin-bottom: 50px;
  border-radius: 17px;
  background: #edf3ef;
  color: var(--green);
  font-size: 22px;
  transition: .35s ease;
}

.area-card:hover .area-icon {
  background: var(--green);
  color: var(--gold-light);
  transform: scale(1.08) rotate(-3deg);
}

.area-card h3 {
  margin: 0 0 12px;
  font-family: Georgia, serif;
  font-size: 22px;
  font-weight: 500;
}

.area-card p {
  margin: 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.75;
}

.area-arrow {
  position: absolute;
  right: 24px;
  bottom: 23px;
  color: var(--green);
  opacity: .45;
  transition: .3s ease;
}

.area-card:hover .area-arrow {
  opacity: 1;
  transform: translate(3px, -3px);
}

/* =========================================================
   HIFZ
   ========================================================= */

.hifz-section {
  position: relative;
  overflow: hidden;
  padding: 125px 0;
  background: var(--green);
  color: white;
}

.hifz-layout {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: .9fr 1.1fr;
  align-items: center;
  gap: 100px;
}

.hifz-visual {
  position: relative;
  min-height: 430px;
  display: grid;
  place-items: center;
}

.hifz-circle {
  width: 290px;
  height: 290px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(216,201,139,.45);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(216,201,139,.13), transparent 65%);
}

.hifz-inner {
  width: 185px;
  height: 185px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255,255,255,.13);
  border-radius: 50%;
  background: rgba(255,255,255,.05);
  box-shadow: 0 25px 60px rgba(0,0,0,.2);
}

.hifz-inner .i-lucide-brain {
  margin-bottom: 10px;
  color: var(--gold-light);
  font-size: 35px;
}

.hifz-inner span {
  font-family: Georgia, serif;
  font-size: 32px;
}

.hifz-inner small {
  margin-top: 5px;
  color: rgba(255,255,255,.5);
  font-size: 10px;
  letter-spacing: .12em;
  text-transform: uppercase;
}

.orbit {
  position: absolute;
  border: 1px dashed rgba(216,201,139,.25);
  border-radius: 50%;
}

.orbit-one {
  width: 390px;
  height: 390px;
}

.orbit-two {
  width: 470px;
  height: 470px;
  opacity: .45;
}

.floating-note {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 12px 16px;
  border: 1px solid rgba(255,255,255,.13);
  border-radius: 100px;
  background: rgba(255,255,255,.08);
  backdrop-filter: blur(10px);
  color: rgba(255,255,255,.75);
  font-size: 11px;
}

.floating-note .i-lucide-clock-3,
.floating-note .i-lucide-repeat-2 {
  color: var(--gold-light);
}

.note-one {
  top: 53px;
  right: 20px;
}

.note-two {
  bottom: 55px;
  left: 5px;
}

.hifz-copy {
  max-width: 620px;
}

.hifz-copy h2 {
  color: white;
}

.hifz-copy p {
  margin: 23px 0 0;
  color: rgba(255,255,255,.65);
  font-size: 16px;
  line-height: 1.85;
}

.hifz-copy strong {
  color: var(--gold-light);
  font-weight: 600;
}

.hifz-points {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 32px;
}

.hifz-points > div {
  display: flex;
  align-items: center;
  gap: 9px;
  color: rgba(255,255,255,.75);
  font-size: 12px;
}

.check {
  width: 25px;
  height: 25px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: rgba(216,201,139,.13);
  color: var(--gold-light);
}

/* =========================================================
   JOURNEY
   ========================================================= */

.journey-section {
  padding: 125px 0;
}

.journey-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}

.journey-card {
  position: relative;
  min-height: 275px;
  padding: 26px;
  border: 1px solid var(--border);
  border-radius: 22px;
  background: white;
  transition: .35s ease;
}

.journey-card:hover {
  transform: translateY(-7px);
  box-shadow: 0 25px 50px rgba(7,59,41,.08);
}

.journey-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.journey-card-top > span {
  color: rgba(7,59,41,.3);
  font-family: Georgia, serif;
  font-size: 22px;
}

.journey-icon {
  width: 47px;
  height: 47px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: #edf3ef;
  color: var(--green);
  transition: .35s ease;
}

.journey-card:hover .journey-icon {
  background: var(--green);
  color: var(--gold-light);
  transform: scale(1.07);
}

.journey-card h3 {
  margin: 50px 0 10px;
  font-family: Georgia, serif;
  font-size: 25px;
  font-weight: 500;
}

.journey-card p {
  margin: 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.75;
}

.journey-progress {
  position: absolute;
  right: 26px;
  bottom: 26px;
  left: 26px;
  height: 2px;
  overflow: hidden;
  border-radius: 10px;
  background: #e9eeeb;
}

.journey-progress span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: var(--green);
}

.weekly-note {
  max-width: 780px;
  display: flex;
  align-items: center;
  gap: 18px;
  margin: 55px auto 0;
  padding: 22px 25px;
  border: 1px solid rgba(7,59,41,.1);
  border-radius: 18px;
  background: #f1f5f2;
}

.weekly-icon {
  width: 47px;
  height: 47px;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  border-radius: 14px;
  background: var(--green);
  color: var(--gold-light);
}

.weekly-note strong {
  display: block;
  font-family: Georgia, serif;
  font-size: 17px;
  font-weight: 500;
}

.weekly-note p {
  margin: 4px 0 0;
  color: var(--muted);
  font-size: 12px;
}

/* =========================================================
   REPORT
   ========================================================= */

.report-section {
  padding: 125px 0;
  background: #f0f3ef;
}

.report-layout {
  display: grid;
  grid-template-columns: .9fr 1.1fr;
  align-items: center;
  gap: 90px;
}

.report-copy {
  max-width: 570px;
}

.report-quote {
  position: relative;
  margin-top: 36px;
  padding: 25px 25px 25px 55px;
  border-left: 2px solid var(--gold);
  background: rgba(255,255,255,.5);
}

.quote-mark {
  position: absolute;
  top: 14px;
  left: 19px;
  color: var(--gold);
  font-family: Georgia, serif;
  font-size: 35px;
}

.report-quote p {
  margin: 0;
  color: #536059;
  font-family: Georgia, serif;
  font-size: 15px;
  line-height: 1.7;
}

.report-card {
  padding: 30px;
  border: 1px solid rgba(7,59,41,.1);
  border-radius: 26px;
  background: white;
  box-shadow: 0 25px 65px rgba(7,59,41,.08);
}

.report-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--border);
}

.report-card-header > div:first-child span {
  display: block;
  color: var(--muted);
  font-size: 8px;
  font-weight: 800;
  letter-spacing: .17em;
}

.report-card-header h3 {
  margin: 6px 0 0;
  font-family: Georgia, serif;
  font-size: 24px;
  font-weight: 500;
}

.report-status {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 11px;
  border-radius: 100px;
  background: #edf5ef;
  color: var(--green);
  font-size: 9px;
  font-weight: 700;
}

.report-list {
  padding: 8px 0;
}

.report-item {
  display: flex;
  gap: 15px;
  padding: 18px 0;
  border-bottom: 1px solid var(--border);
}

.report-item:last-child {
  border-bottom: 0;
}

.report-item-icon {
  width: 41px;
  height: 41px;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  background: #f2f5f2;
  color: var(--green);
  transition: .3s ease;
}

.report-item:hover .report-item-icon {
  background: var(--green);
  color: var(--gold-light);
  transform: scale(1.05);
}

.report-item strong {
  display: block;
  font-size: 13px;
}

.report-item p {
  margin: 4px 0 0;
  color: var(--muted);
  font-size: 11px;
  line-height: 1.6;
}

.report-bottom {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-top: 10px;
  padding-top: 20px;
  border-top: 1px solid var(--border);
  color: var(--green);
  font-size: 10px;
  font-weight: 700;
}

/* =========================================================
   PARENTS
   ========================================================= */

.parents-section {
  padding: 110px 0;
}

.parents-card {
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr .8fr;
  align-items: center;
  gap: 35px;
  padding: 55px;
  overflow: hidden;
  border-radius: 30px;
  background: var(--green);
  color: white;
  box-shadow: 0 30px 70px rgba(7,59,41,.16);
}

.parents-decoration {
  position: absolute;
  width: 350px;
  height: 350px;
  right: -150px;
  top: -150px;
  border: 1px solid rgba(216,201,139,.18);
  border-radius: 50%;
}

.parents-icon {
  position: relative;
  width: 78px;
  height: 78px;
  display: grid;
  place-items: center;
  border-radius: 22px;
  background: rgba(216,201,139,.13);
  color: var(--gold-light);
  font-size: 31px;
}

.parents-content {
  position: relative;
}

.parents-content h2 {
  font-size: 38px;
}

.parents-content p {
  max-width: 620px;
  margin: 17px 0 0;
  color: rgba(255,255,255,.62);
  font-size: 13px;
  line-height: 1.8;
}

.parents-points {
  position: relative;
  display: grid;
  gap: 13px;
}

.parents-points > div {
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(255,255,255,.72);
  font-size: 11px;
}

.parents-points .i-lucide-circle-check {
  color: var(--gold-light);
}

/* =========================================================
   CTA
   ========================================================= */

.progress-cta {
  position: relative;
  overflow: hidden;
  padding: 120px 0;
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
}

.cta-inner .eyebrow {
  justify-content: center;
}

.cta-inner h2 {
  color: white;
}

.cta-inner p {
  max-width: 620px;
  margin: 21px auto 0;
  color: rgba(255,255,255,.62);
  font-size: 15px;
  line-height: 1.8;
}

.cta-actions {
  justify-content: center;
}

.primary-button.light {
  background: var(--gold-light);
  color: var(--green);
}

.cta-whatsapp {
  border: 1px solid rgba(255,255,255,.18);
  color: white;
}

.cta-whatsapp:hover {
  background: rgba(255,255,255,.07);
  transform: translateY(-3px);
}

/* =========================================================
   ANIMATIONS
   ========================================================= */

.reveal-up {
  animation: revealUp .8s cubic-bezier(.2,.7,.2,1) both;
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
  .hero-container,
  .hifz-layout,
  .report-layout {
    gap: 55px;
  }

  .areas-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .journey-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .parents-card {
    grid-template-columns: auto 1fr;
  }

  .parents-points {
    grid-column: 2;
  }
}

@media (max-width: 800px) {
  .progress-hero {
    min-height: auto;
  }

  .hero-container {
    grid-template-columns: 1fr;
    padding-top: 90px;
    padding-bottom: 80px;
  }

  .hero-copy h1 {
    font-size: clamp(45px, 13vw, 64px);
  }

  .hero-copy p {
    font-size: 15px;
  }

  .hero-visual {
    margin-top: 15px;
  }

  .intro-section,
  .hifz-section,
  .journey-section,
  .report-section {
    padding: 90px 0;
  }

  .hifz-layout,
  .report-layout {
    grid-template-columns: 1fr;
  }

  .hifz-visual {
    min-height: 390px;
  }

  .report-copy {
    max-width: none;
  }

  .parents-card {
    grid-template-columns: 1fr;
    padding: 40px 30px;
  }

  .parents-points {
    grid-column: auto;
  }

  .parents-icon {
    width: 65px;
    height: 65px;
  }
}

@media (max-width: 600px) {
  .hero-container {
    padding-top: 75px;
    padding-bottom: 65px;
  }

  .progress-card {
    padding: 21px;
    border-radius: 23px;
  }

  .card-top h3 {
    font-size: 20px;
  }

  .areas-grid,
  .journey-grid {
    grid-template-columns: 1fr;
  }

  .area-card {
    min-height: 285px;
  }

  .area-icon {
    margin-bottom: 35px;
  }

  .journey-card {
    min-height: 245px;
  }

  .weekly-note {
    align-items: flex-start;
    padding: 18px;
  }

  .hifz-circle {
    width: 235px;
    height: 235px;
  }

  .hifz-inner {
    width: 155px;
    height: 155px;
  }

  .orbit-one {
    width: 310px;
    height: 310px;
  }

  .orbit-two {
    width: 370px;
    height: 370px;
  }

  .floating-note {
    padding: 9px 12px;
    font-size: 9px;
  }

  .note-one {
    top: 35px;
    right: 0;
  }

  .note-two {
    bottom: 35px;
    left: 0;
  }

  .report-card {
    padding: 21px;
    border-radius: 22px;
  }

  .report-card-header {
    align-items: flex-start;
    flex-direction: column;
  }

  .parents-section {
    padding: 80px 0;
  }

  .parents-content h2 {
    font-size: 34px;
  }

  .progress-cta {
    padding: 90px 0;
  }

  .hero-actions,
  .cta-actions {
    flex-direction: column;
  }

  .primary-button,
  .secondary-button,
  .cta-whatsapp {
    width: 100%;
  }
}
</style>
