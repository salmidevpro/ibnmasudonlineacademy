<script setup lang="ts">
const whatsappNumber = '2348074113418'

const whatsappMessage = encodeURIComponent(
  'Assalamu Alaikum. I would like to enquire about the tutors and teaching at IBN MAS\'UD ONLINE ACADEMY.'
)

const qualities = [
  {
    icon: 'i-lucide-heart-handshake',
    title: 'Patient & Supportive',
    text: 'Students learn best when they feel comfortable asking questions, making corrections and improving at their own pace.'
  },
  {
    icon: 'i-lucide-user-round-check',
    title: 'Student-Focused',
    text: 'Lessons are approached with attention to the student\'s level, learning needs and individual development.'
  },
  {
    icon: 'i-lucide-book-open-check',
    title: 'Structured Teaching',
    text: 'Tutors work within a clear learning structure so that lessons remain purposeful and consistent.'
  },
  {
    icon: 'i-lucide-message-circle-more',
    title: 'Clear Communication',
    text: 'Communication between tutor, student and parent helps keep everyone connected to the learning journey.'
  }
]

const teachingAreas = [
  {
    number: '01',
    icon: 'i-lucide-book-open',
    title: 'Qur\'an',
    text: 'Guided Qur\'an learning designed to help students develop consistency and confidence in their reading.'
  },
  {
    number: '02',
    icon: 'i-lucide-volume-2',
    title: 'Tajwīd',
    text: 'Careful attention to recitation, pronunciation and the application of Tajwīd principles.'
  },
  {
    number: '03',
    icon: 'i-lucide-brain',
    title: 'Ḥifẓ',
    text: 'Regular memorisation, revision and recitation through a dedicated weekly session.'
  },
  {
    number: '04',
    icon: 'i-lucide-languages',
    title: 'Arabic',
    text: 'Arabic learning adapted to the student\'s current level and learning requirements.'
  },
  {
    number: '05',
    icon: 'i-lucide-moon-star',
    title: 'Islamic Education',
    text: 'Structured Islamic learning that supports students as they grow in knowledge and understanding.'
  }
]

const tutorJourney = [
  {
    step: '01',
    icon: 'i-lucide-clipboard-list',
    title: 'Understand',
    text: 'Lessons begin with an understanding of the student\'s level and learning needs.'
  },
  {
    step: '02',
    icon: 'i-lucide-presentation',
    title: 'Teach',
    text: 'The tutor delivers structured lessons suited to the student\'s programme.'
  },
  {
    step: '03',
    icon: 'i-lucide-repeat-2',
    title: 'Reinforce',
    text: 'Practice, revision and recitation help turn lessons into lasting learning.'
  },
  {
    step: '04',
    icon: 'i-lucide-chart-no-axes-combined',
    title: 'Monitor',
    text: 'Student development is observed throughout the learning journey.'
  }
]
</script>

<template>
  <div class="tutors-page">
    <!-- =====================================================
         HERO
         ===================================================== -->

    <section class="tutors-hero">
      <div class="hero-pattern" />

      <div class="hero-orb hero-orb-one" />
      <div class="hero-orb hero-orb-two" />

      <UContainer class="hero-container">
        <div class="hero-content reveal-up">
          <div class="eyebrow">
            <span class="eyebrow-line" />
            Our Tutors
          </div>

          <h1>
            Guided by people who
            <span>care about learning.</span>
          </h1>

          <p>
            Meaningful Islamic learning needs more than lessons alone.
            It needs patience, guidance, consistency and a teacher who
            understands the student's journey.
          </p>

          <div class="hero-actions">
            <NuxtLink
              to="/enrol"
              class="primary-button"
            >
              Start Learning
              <UIcon name="i-lucide-arrow-up-right" />
            </NuxtLink>

            <a
              :href="`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`"
              target="_blank"
              rel="noopener noreferrer"
              class="secondary-button"
            >
              Meet Our Approach
            </a>
          </div>
        </div>

        <!-- HERO VISUAL -->

        <div class="hero-visual reveal-up delay-2">
          <div class="teacher-visual">
            <div class="visual-ring ring-one" />
            <div class="visual-ring ring-two" />

            <div class="teacher-card-main">
              <div class="teacher-symbol">
                <UIcon name="i-lucide-graduation-cap" />
              </div>

              <span class="visual-small">
                THE TEACHER'S ROLE
              </span>

              <h3>
                Guide.
                <br>
                Encourage.
                <br>
                Develop.
              </h3>

              <div class="visual-divider" />

              <div class="visual-bottom">
                <span class="visual-dot" />
                <span>Learning with purpose</span>
              </div>
            </div>

            <div class="floating-card floating-one">
              <div class="floating-icon">
                <UIcon name="i-lucide-heart" />
              </div>

              <div>
                <strong>Student care</strong>
                <span>Patient guidance</span>
              </div>
            </div>

            <div class="floating-card floating-two">
              <div class="floating-icon">
                <UIcon name="i-lucide-target" />
              </div>

              <div>
                <strong>Clear direction</strong>
                <span>Structured learning</span>
              </div>
            </div>
          </div>
        </div>
      </UContainer>

      <div class="hero-bottom" />
    </section>

    <!-- =====================================================
         INTRO
         ===================================================== -->

    <section class="intro-section">
      <UContainer>
        <div class="intro-layout">
          <div class="section-label reveal-up">
            <div class="eyebrow dark">
              <span class="eyebrow-line" />
              The IBN MAS'UD Approach
            </div>

            <h2>
              A tutor is not just a
              <span>lesson provider.</span>
            </h2>
          </div>

          <div class="intro-copy reveal-up delay-2">
            <p>
              At IBN MAS'UD ONLINE ACADEMY, tutors play an important role
              in creating a learning environment where students can grow
              with consistency and confidence.
            </p>

            <p>
              They guide students through lessons, encourage regular
              practice, identify areas that need attention and help keep
              the learning journey moving forward.
            </p>
          </div>
        </div>

        <!-- QUALITIES -->

        <div class="qualities-grid">
          <article
            v-for="(item, index) in qualities"
            :key="item.title"
            class="quality-card reveal-up"
            :class="`delay-${Math.min(index + 1, 4)}`"
          >
            <div class="quality-top">
              <span class="quality-number">
                0{{ index + 1 }}
              </span>

              <div class="quality-icon">
                <UIcon :name="item.icon" />
              </div>
            </div>

            <h3>{{ item.title }}</h3>

            <p>{{ item.text }}</p>

            <div class="quality-line" />
          </article>
        </div>
      </UContainer>
    </section>

    <!-- =====================================================
         TUTOR PHILOSOPHY
         ===================================================== -->

    <section class="philosophy-section">
      <div class="philosophy-pattern" />

      <UContainer>
        <div class="philosophy-layout">
          <!-- LEFT VISUAL -->

          <div class="philosophy-visual reveal-up">
            <div class="quote-circle">
              <div class="quote-mark">
                “
              </div>

              <p>
                Knowledge grows through
                consistency, guidance
                and sincere effort.
              </p>

              <span>
                OUR TEACHING PHILOSOPHY
              </span>
            </div>

            <div class="small-orbit orbit-a" />
            <div class="small-orbit orbit-b" />
          </div>

          <!-- RIGHT COPY -->

          <div class="philosophy-copy reveal-up delay-2">
            <div class="eyebrow">
              <span class="eyebrow-line" />
              Teaching With Purpose
            </div>

            <h2>
              Helping students become
              <span>better learners.</span>
            </h2>

            <p>
              Every student arrives with a different starting point.
              Effective teaching means recognising that difference and
              guiding the learner from where they are.
            </p>

            <p>
              Our approach values steady development rather than rushing
              students through lessons. Understanding, practice and
              revision all have their place.
            </p>

            <div class="philosophy-list">
              <div>
                <span>
                  <UIcon name="i-lucide-check" />
                </span>
                <p>Lessons appropriate to the student's level</p>
              </div>

              <div>
                <span>
                  <UIcon name="i-lucide-check" />
                </span>
                <p>Regular practice and revision</p>
              </div>

              <div>
                <span>
                  <UIcon name="i-lucide-check" />
                </span>
                <p>Ongoing attention to student development</p>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- =====================================================
         TEACHING AREAS
         ===================================================== -->

    <section class="areas-section">
      <UContainer>
        <div class="section-heading reveal-up">
          <div class="eyebrow dark">
            <span class="eyebrow-line" />
            What Our Tutors Teach
          </div>

          <h2>
            Supporting the learner
            <span>across the journey.</span>
          </h2>

          <p>
            Our teaching structure brings together the key areas of
            Qur'an and Islamic education offered by the academy.
          </p>
        </div>

        <div class="areas-list">
          <article
            v-for="(area, index) in teachingAreas"
            :key="area.number"
            class="area-row reveal-up"
            :class="`delay-${Math.min(index + 1, 4)}`"
          >
            <div class="area-number">
              {{ area.number }}
            </div>

            <div class="area-icon">
              <UIcon :name="area.icon" />
            </div>

            <div class="area-info">
              <h3>{{ area.title }}</h3>
              <p>{{ area.text }}</p>
            </div>

            <div class="area-arrow">
              <UIcon name="i-lucide-arrow-up-right" />
            </div>
          </article>
        </div>
      </UContainer>
    </section>

    <!-- =====================================================
         TUTOR JOURNEY
         ===================================================== -->

    <section class="journey-section">
      <UContainer>
        <div class="journey-header reveal-up">
          <div>
            <div class="eyebrow dark">
              <span class="eyebrow-line" />
              Inside A Lesson
            </div>

            <h2>
              From understanding to
              <span>real progress.</span>
            </h2>
          </div>

          <p>
            A strong tutor–student relationship creates a learning rhythm
            where lessons connect with practice, revision and progress.
          </p>
        </div>

        <div class="tutor-journey">
          <div class="journey-track" />

          <article
            v-for="(item, index) in tutorJourney"
            :key="item.step"
            class="journey-item reveal-up"
            :class="`delay-${index + 1}`"
          >
            <div class="journey-step">
              {{ item.step }}
            </div>

            <div class="journey-icon">
              <UIcon :name="item.icon" />
            </div>

            <div class="journey-content">
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </div>
          </article>
        </div>
      </UContainer>
    </section>

    <!-- =====================================================
         PARENT CONNECTION
         ===================================================== -->

    <section class="connection-section">
      <UContainer>
        <div class="connection-card reveal-up">
          <div class="connection-glow" />

          <div class="connection-icon">
            <UIcon name="i-lucide-users" />
          </div>

          <div class="connection-copy">
            <div class="eyebrow">
              <span class="eyebrow-line" />
              Beyond The Lesson
            </div>

            <h2>
              Keeping parents connected
              <span>to the journey.</span>
            </h2>

            <p>
              The tutor's role extends beyond the live lesson. Monthly
              progress reports help parents understand achievements,
              strengths, areas for improvement and tutor recommendations.
            </p>
          </div>

          <NuxtLink
            to="/progress"
            class="connection-button"
          >
            Explore Progress
            <UIcon name="i-lucide-arrow-right" />
          </NuxtLink>
        </div>
      </UContainer>
    </section>

    <!-- =====================================================
         CTA
         ===================================================== -->

    <section class="tutors-cta">
      <div class="cta-pattern" />

      <UContainer>
        <div class="cta-content reveal-up">
          <div class="cta-icon">
            <UIcon name="i-lucide-graduation-cap" />
          </div>

          <div class="eyebrow">
            <span class="eyebrow-line" />
            Your Learning Journey
          </div>

          <h2>
            Ready to learn with
            <span>purpose?</span>
          </h2>

          <p>
            Take the next step toward structured Qur'an, Tajwīd, Arabic
            and Islamic learning with IBN MAS'UD ONLINE ACADEMY.
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
   VARIABLES / BASE
   ========================================================= */

.tutors-page {
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

.tutors-page *,
.tutors-page *::before,
.tutors-page *::after {
  box-sizing: border-box;
}

.tutors-page a {
  text-decoration: none;
}

/* =========================================================
   HERO
   ========================================================= */

.tutors-hero {
  position: relative;
  min-height: 720px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background:
    radial-gradient(
      circle at 76% 40%,
      rgba(216, 201, 139, 0.15),
      transparent 27%
    ),
    linear-gradient(
      135deg,
      var(--green-dark),
      var(--green)
    );
  color: white;
}

.hero-pattern,
.philosophy-pattern,
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

.hero-orb {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(216, 201, 139, .12);
}

.hero-orb-one {
  width: 600px;
  height: 600px;
  right: -280px;
  top: -180px;
}

.hero-orb-two {
  width: 400px;
  height: 400px;
  right: -150px;
  bottom: -220px;
}

.hero-container {
  position: relative;
  z-index: 2;

  width: 100%;

  display: grid;
  grid-template-columns: 1fr .95fr;
  align-items: center;
  gap: 80px;

  padding-top: 110px;
  padding-bottom: 110px;
}

.hero-content {
  max-width: 650px;
}

.eyebrow {
  display: flex;
  align-items: center;
  gap: 11px;

  margin-bottom: 22px;

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
  font-size: clamp(48px, 6vw, 76px);
  line-height: .99;
  font-weight: 500;
  letter-spacing: -.045em;
}

.hero-content h1 span {
  color: var(--gold);
}

.hero-content > p {
  max-width: 590px;
  margin: 29px 0 0;

  color: rgba(255,255,255,.68);

  font-size: 16px;
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

  font-size: 12px;
  font-weight: 700;

  transition:
    transform .3s ease,
    box-shadow .3s ease,
    background-color .3s ease,
    border-color .3s ease;
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
  border: 1px solid rgba(255,255,255,.22);
  background: rgba(255,255,255,.04);
  color: white;
}

.secondary-button:hover {
  transform: translateY(-3px);
  border-color: rgba(244,233,174,.45);
  background: rgba(255,255,255,.08);
}

/* =========================================================
   HERO VISUAL
   ========================================================= */

.hero-visual {
  display: flex;
  justify-content: center;
}

.teacher-visual {
  position: relative;

  width: min(100%, 490px);
  height: 500px;

  display: grid;
  place-items: center;
}

.visual-ring {
  position: absolute;

  border: 1px dashed rgba(216,201,139,.25);
  border-radius: 50%;
}

.ring-one {
  width: 390px;
  height: 390px;
}

.ring-two {
  width: 480px;
  height: 480px;

  opacity: .55;
}

.teacher-card-main {
  position: relative;
  z-index: 2;

  width: 285px;
  min-height: 365px;

  padding: 34px;

  display: flex;
  flex-direction: column;

  border: 1px solid rgba(255,255,255,.16);
  border-radius: 30px;

  background: rgba(255,255,255,.075);
  backdrop-filter: blur(20px);

  box-shadow: 0 35px 80px rgba(0,0,0,.2);
}

.teacher-symbol {
  width: 57px;
  height: 57px;

  display: grid;
  place-items: center;

  margin-bottom: 45px;

  border-radius: 17px;

  background: rgba(216,201,139,.14);
  color: var(--gold-light);

  font-size: 26px;
}

.visual-small {
  color: rgba(255,255,255,.42);

  font-size: 8px;
  font-weight: 800;
  letter-spacing: .18em;
}

.teacher-card-main h3 {
  margin: 14px 0 0;

  font-family: Georgia, serif;
  font-size: 34px;
  line-height: 1.08;
  font-weight: 500;
}

.visual-divider {
  width: 100%;
  height: 1px;

  margin-top: auto;
  margin-bottom: 17px;

  background: rgba(255,255,255,.11);
}

.visual-bottom {
  display: flex;
  align-items: center;
  gap: 8px;

  color: rgba(255,255,255,.5);

  font-size: 10px;
}

.visual-dot {
  width: 6px;
  height: 6px;

  border-radius: 50%;

  background: var(--gold);
}

.floating-card {
  position: absolute;
  z-index: 4;

  display: flex;
  align-items: center;
  gap: 11px;

  padding: 13px 16px;

  border: 1px solid rgba(255,255,255,.14);
  border-radius: 16px;

  background: rgba(255,255,255,.08);
  backdrop-filter: blur(14px);

  box-shadow: 0 18px 40px rgba(0,0,0,.14);
}

.floating-one {
  top: 66px;
  right: -5px;
}

.floating-two {
  bottom: 58px;
  left: -8px;
}

.floating-icon {
  width: 35px;
  height: 35px;

  display: grid;
  place-items: center;

  border-radius: 11px;

  background: rgba(216,201,139,.13);
  color: var(--gold-light);
}

.floating-card strong {
  display: block;

  font-size: 10px;
}

.floating-card span {
  display: block;

  margin-top: 3px;

  color: rgba(255,255,255,.45);

  font-size: 9px;
}

/* =========================================================
   INTRO
   ========================================================= */

.intro-section {
  padding: 125px 0;
}

.intro-layout {
  display: grid;
  grid-template-columns: .9fr 1.1fr;
  gap: 100px;

  margin-bottom: 70px;
}

.section-label h2 {
  max-width: 560px;

  margin: 0;

  font-family: Georgia, serif;
  font-size: clamp(40px, 5vw, 57px);
  line-height: 1.04;
  font-weight: 500;
  letter-spacing: -.035em;
}

.section-label h2 span {
  color: var(--green);
}

.intro-copy {
  max-width: 620px;
  padding-top: 32px;
}

.intro-copy p {
  margin: 0 0 18px;

  color: var(--muted);

  font-size: 16px;
  line-height: 1.85;
}

.qualities-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}

.quality-card {
  position: relative;

  min-height: 300px;

  padding: 27px;

  overflow: hidden;

  border: 1px solid var(--border);
  border-radius: 23px;

  background: white;

  transition:
    transform .35s ease,
    box-shadow .35s ease,
    border-color .35s ease;
}

.quality-card:hover {
  transform: translateY(-8px);

  border-color: rgba(7,59,41,.18);

  box-shadow: 0 25px 55px rgba(7,59,41,.09);
}

.quality-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.quality-number {
  color: rgba(7,59,41,.2);

  font-family: Georgia, serif;
  font-size: 21px;
}

.quality-icon {
  width: 52px;
  height: 52px;

  display: grid;
  place-items: center;

  border-radius: 16px;

  background: #edf3ef;
  color: var(--green);

  font-size: 21px;

  transition:
    background-color .35s ease,
    color .35s ease,
    transform .35s ease;
}

.quality-card:hover .quality-icon {
  background: var(--green);
  color: var(--gold-light);
  transform: scale(1.08) rotate(-3deg);
}

.quality-card h3 {
  margin: 54px 0 11px;

  font-family: Georgia, serif;
  font-size: 21px;
  font-weight: 500;
}

.quality-card p {
  margin: 0;

  color: var(--muted);

  font-size: 12px;
  line-height: 1.75;
}

.quality-line {
  position: absolute;

  right: 27px;
  bottom: 25px;

  width: 35px;
  height: 2px;

  background: var(--gold);

  transition: width .35s ease;
}

.quality-card:hover .quality-line {
  width: 60px;
}

/* =========================================================
   PHILOSOPHY
   ========================================================= */

.philosophy-section {
  position: relative;

  padding: 125px 0;

  overflow: hidden;

  background: var(--green);
  color: white;
}

.philosophy-layout {
  position: relative;
  z-index: 2;

  display: grid;
  grid-template-columns: .95fr 1.05fr;
  align-items: center;

  gap: 100px;
}

.philosophy-visual {
  position: relative;

  min-height: 440px;

  display: grid;
  place-items: center;
}

.quote-circle {
  position: relative;
  z-index: 2;

  width: 330px;
  height: 330px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 50px;

  border: 1px solid rgba(216,201,139,.4);
  border-radius: 50%;

  background: radial-gradient(
    circle,
    rgba(216,201,139,.12),
    rgba(255,255,255,.025)
  );

  text-align: center;
}

.quote-mark {
  margin-bottom: 5px;

  color: var(--gold);

  font-family: Georgia, serif;
  font-size: 50px;
  line-height: 1;
}

.quote-circle p {
  margin: 0;

  font-family: Georgia, serif;
  font-size: 22px;
  line-height: 1.35;
}

.quote-circle span {
  margin-top: 23px;

  color: rgba(255,255,255,.4);

  font-size: 8px;
  font-weight: 800;
  letter-spacing: .18em;
}

.small-orbit {
  position: absolute;

  border: 1px dashed rgba(216,201,139,.23);
  border-radius: 50%;
}

.orbit-a {
  width: 420px;
  height: 420px;
}

.orbit-b {
  width: 520px;
  height: 520px;

  opacity: .5;
}

.philosophy-copy {
  max-width: 620px;
}

.philosophy-copy h2 {
  margin: 0;

  font-family: Georgia, serif;
  font-size: clamp(39px, 5vw, 56px);
  line-height: 1.04;
  font-weight: 500;
  letter-spacing: -.035em;
}

.philosophy-copy h2 span {
  color: var(--gold);
}

.philosophy-copy > p {
  margin: 22px 0 0;

  color: rgba(255,255,255,.63);

  font-size: 15px;
  line-height: 1.85;
}

.philosophy-list {
  display: grid;
  gap: 14px;

  margin-top: 31px;
}

.philosophy-list > div {
  display: flex;
  align-items: center;
  gap: 11px;
}

.philosophy-list span {
  width: 25px;
  height: 25px;

  display: grid;
  place-items: center;

  border-radius: 50%;

  background: rgba(216,201,139,.13);
  color: var(--gold-light);
}

.philosophy-list p {
  margin: 0;

  color: rgba(255,255,255,.68);

  font-size: 11px;
}

/* =========================================================
   AREAS
   ========================================================= */

.areas-section {
  padding: 125px 0;
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
  max-width: 600px;

  margin: 21px 0 0;

  color: var(--muted);

  font-size: 15px;
  line-height: 1.8;
}

.areas-list {
  display: grid;
  gap: 9px;
}

.area-row {
  display: grid;
  grid-template-columns: 75px 70px 1fr auto;
  align-items: center;
  gap: 23px;

  padding: 22px 25px;

  border: 1px solid var(--border);
  border-radius: 18px;

  background: white;

  transition:
    transform .3s ease,
    background-color .3s ease,
    box-shadow .3s ease;
}

.area-row:hover {
  transform: translateX(6px);

  background: #f3f6f3;

  box-shadow: 0 15px 35px rgba(7,59,41,.06);
}

.area-number {
  color: rgba(7,59,41,.25);

  font-family: Georgia, serif;
  font-size: 18px;
}

.area-icon {
  width: 52px;
  height: 52px;

  display: grid;
  place-items: center;

  border-radius: 15px;

  background: #edf3ef;
  color: var(--green);

  font-size: 21px;

  transition:
    background-color .3s ease,
    color .3s ease,
    transform .3s ease;
}

.area-row:hover .area-icon {
  background: var(--green);
  color: var(--gold-light);
  transform: scale(1.07);
}

.area-info h3 {
  margin: 0 0 6px;

  font-family: Georgia, serif;
  font-size: 22px;
  font-weight: 500;
}

.area-info p {
  max-width: 650px;

  margin: 0;

  color: var(--muted);

  font-size: 12px;
  line-height: 1.65;
}

.area-arrow {
  color: var(--green);

  opacity: .35;

  transition:
    opacity .3s ease,
    transform .3s ease;
}

.area-row:hover .area-arrow {
  opacity: 1;
  transform: translate(3px, -3px);
}

/* =========================================================
   JOURNEY
   ========================================================= */

.journey-section {
  padding: 125px 0;

  background: #f0f3ef;
}

.journey-header {
  display: grid;
  grid-template-columns: 1fr .7fr;
  gap: 70px;

  margin-bottom: 75px;
}

.journey-header h2 {
  margin: 0;

  font-family: Georgia, serif;
  font-size: clamp(40px, 5vw, 57px);
  line-height: 1.04;
  font-weight: 500;
  letter-spacing: -.035em;
}

.journey-header h2 span {
  color: var(--green);
}

.journey-header > p {
  align-self: end;

  margin: 0;

  color: var(--muted);

  font-size: 14px;
  line-height: 1.8;
}

.tutor-journey {
  position: relative;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}

.journey-track {
  position: absolute;

  top: 35px;
  left: 12%;

  width: 76%;
  height: 1px;

  background: linear-gradient(
    to right,
    var(--green),
    rgba(7,59,41,.1)
  );
}

.journey-item {
  position: relative;
  z-index: 2;

  min-height: 275px;

  padding: 0 24px 25px;

  border: 1px solid var(--border);
  border-radius: 21px;

  background: white;

  transition:
    transform .35s ease,
    box-shadow .35s ease;
}

.journey-item:hover {
  transform: translateY(-8px);

  box-shadow: 0 25px 50px rgba(7,59,41,.08);
}

.journey-step {
  position: absolute;

  top: 20px;
  right: 22px;

  color: rgba(7,59,41,.2);

  font-family: Georgia, serif;
  font-size: 19px;
}

.journey-icon {
  width: 70px;
  height: 70px;

  display: grid;
  place-items: center;

  margin-top: 0;

  transform: translateY(-1px);

  border: 8px solid #f0f3ef;
  border-radius: 50%;

  background: var(--green);
  color: var(--gold-light);

  font-size: 20px;

  transition: transform .35s ease;
}

.journey-item:hover .journey-icon {
  transform: scale(1.08);
}

.journey-content {
  padding-top: 43px;
}

.journey-content h3 {
  margin: 0 0 11px;

  font-family: Georgia, serif;
  font-size: 24px;
  font-weight: 500;
}

.journey-content p {
  margin: 0;

  color: var(--muted);

  font-size: 12px;
  line-height: 1.75;
}

/* =========================================================
   CONNECTION
   ========================================================= */

.connection-section {
  padding: 110px 0;
}

.connection-card {
  position: relative;

  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 35px;

  padding: 52px;

  overflow: hidden;

  border-radius: 29px;

  background: var(--green);
  color: white;

  box-shadow: 0 30px 70px rgba(7,59,41,.15);
}

.connection-glow {
  position: absolute;

  width: 300px;
  height: 300px;

  right: -130px;
  top: -160px;

  border: 1px solid rgba(216,201,139,.18);
  border-radius: 50%;
}

.connection-icon {
  position: relative;

  width: 76px;
  height: 76px;

  display: grid;
  place-items: center;

  border-radius: 21px;

  background: rgba(216,201,139,.12);
  color: var(--gold-light);

  font-size: 29px;
}

.connection-copy {
  position: relative;
}

.connection-copy h2 {
  margin: 0;

  font-family: Georgia, serif;
  font-size: 35px;
  line-height: 1.08;
  font-weight: 500;
}

.connection-copy h2 span {
  color: var(--gold);
}

.connection-copy p {
  max-width: 620px;

  margin: 15px 0 0;

  color: rgba(255,255,255,.6);

  font-size: 12px;
  line-height: 1.75;
}

.connection-button {
  position: relative;

  min-height: 49px;

  display: inline-flex;
  align-items: center;
  gap: 9px;

  padding: 0 19px;

  border: 1px solid rgba(255,255,255,.2);
  border-radius: 100px;

  color: white;

  font-size: 11px;
  font-weight: 700;

  transition:
    transform .3s ease,
    background-color .3s ease;
}

.connection-button:hover {
  transform: translateY(-3px);
  background: rgba(255,255,255,.08);
}

/* =========================================================
   CTA
   ========================================================= */

.tutors-cta {
  position: relative;

  padding: 120px 0;

  overflow: hidden;

  background: var(--green-dark);
  color: white;

  text-align: center;
}

.cta-content {
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

.cta-content .eyebrow {
  justify-content: center;
}

.cta-content h2 {
  margin: 0;

  font-family: Georgia, serif;
  font-size: clamp(42px, 5vw, 59px);
  line-height: 1.03;
  font-weight: 500;
  letter-spacing: -.035em;
}

.cta-content h2 span {
  color: var(--gold);
}

.cta-content > p {
  max-width: 620px;

  margin: 21px auto 0;

  color: rgba(255,255,255,.61);

  font-size: 14px;
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
  transform: translateY(-3px);
  background: rgba(255,255,255,.07);
}

/* =========================================================
   ANIMATION
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
  .hero-container {
    gap: 45px;
  }

  .qualities-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .intro-layout,
  .philosophy-layout {
    gap: 60px;
  }

  .tutor-journey {
    grid-template-columns: repeat(2, 1fr);
  }

  .journey-track {
    display: none;
  }

  .connection-card {
    grid-template-columns: auto 1fr;
  }

  .connection-button {
    grid-column: 2;
    justify-self: start;
  }
}

@media (max-width: 800px) {
  .tutors-hero {
    min-height: auto;
  }

  .hero-container {
    grid-template-columns: 1fr;

    padding-top: 90px;
    padding-bottom: 80px;
  }

  .hero-content h1 {
    font-size: clamp(45px, 12vw, 65px);
  }

  .hero-visual {
    margin-top: 20px;
  }

  .intro-section,
  .philosophy-section,
  .areas-section,
  .journey-section {
    padding: 90px 0;
  }

  .intro-layout,
  .philosophy-layout,
  .journey-header {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .intro-copy {
    padding-top: 0;
  }

  .philosophy-visual {
    min-height: 390px;
  }

  .connection-card {
    grid-template-columns: 1fr;
    padding: 40px 30px;
  }

  .connection-button {
    grid-column: auto;
  }
}

@media (max-width: 600px) {
  .teacher-visual {
    height: 420px;
  }

  .teacher-card-main {
    width: 245px;
    min-height: 330px;
    padding: 27px;
  }

  .teacher-card-main h3 {
    font-size: 29px;
  }

  .ring-one {
    width: 320px;
    height: 320px;
  }

  .ring-two {
    width: 390px;
    height: 390px;
  }

  .floating-one {
    top: 25px;
    right: -3px;
  }

  .floating-two {
    bottom: 28px;
    left: -3px;
  }

  .qualities-grid {
    grid-template-columns: 1fr;
  }

  .quality-card {
    min-height: 270px;
  }

  .quote-circle {
    width: 270px;
    height: 270px;
    padding: 38px;
  }

  .quote-circle p {
    font-size: 18px;
  }

  .orbit-a {
    width: 340px;
    height: 340px;
  }

  .orbit-b {
    width: 410px;
    height: 410px;
  }

  .areas-list {
    gap: 10px;
  }

  .area-row {
    grid-template-columns: 42px 52px 1fr;
    gap: 13px;
    padding: 19px;
  }

  .area-arrow {
    display: none;
  }

  .area-info h3 {
    font-size: 19px;
  }

  .area-info p {
    font-size: 11px;
  }

  .tutor-journey {
    grid-template-columns: 1fr;
  }

  .journey-item {
    min-height: 230px;
  }

  .journey-content {
    padding-top: 32px;
  }

  .connection-icon {
    width: 62px;
    height: 62px;
  }

  .connection-copy h2 {
    font-size: 31px;
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
