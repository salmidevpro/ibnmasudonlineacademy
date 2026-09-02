<script setup lang="ts">
const showPassword = ref(false)
const rememberMe = ref(false)
</script>

<template>
  <main class="login-page student-page">
    <!-- Background -->
    <div
      class="login-background"
      aria-hidden="true"
    >
      <div class="orb orb-one" />
      <div class="orb orb-two" />

      <div class="pattern">
        <span
          v-for="n in 25"
          :key="n"
          class="pattern-item"
        />
      </div>
    </div>

    <!-- Top -->
    <header class="login-header">
      <NuxtLink
        to="/"
        class="brand"
        aria-label="Back to IBN MAS'UD ONLINE ACADEMY"
      >
        <span class="brand-logo">
          <img
            src="/images/ibn-masud-online-academy-logo.jpeg"
            alt="IBN MAS'UD ONLINE ACADEMY"
          >
        </span>

        <span class="brand-name">
          <strong>IBN MAS'UD</strong>
          <small>ONLINE ACADEMY</small>
        </span>
      </NuxtLink>

      <NuxtLink
        to="/portal"
        class="back-link"
      >
        <UIcon
          name="i-lucide-arrow-left"
          class="h-4 w-4"
        />

        <span>All portals</span>
      </NuxtLink>
    </header>

    <!-- Login -->
    <section class="login-content">
      <div class="login-card">
        <!-- Badge -->
        <div class="portal-badge">
          <div class="badge-icon">
            <UIcon
              name="i-lucide-graduation-cap"
              class="h-5 w-5"
            />
          </div>

          <span>Student Portal</span>
        </div>

        <!-- Heading -->
        <div class="intro">
          <h1>
            Welcome
            <span>back.</span>
          </h1>

          <p>
            Sign in to continue your learning journey.
          </p>
        </div>

        <!-- Form -->
        <form
          class="login-form"
          @submit.prevent
        >
          <!-- Email -->
          <div class="field">
            <label for="student-email">
              Email address
            </label>

            <div class="input-wrap">
              <UIcon
                name="i-lucide-mail"
                class="input-icon"
              />

              <input
                id="student-email"
                type="email"
                autocomplete="email"
                placeholder="Enter your email"
              >
            </div>
          </div>

          <!-- Password -->
          <div class="field">
            <div class="field-label-row">
              <label for="student-password">
                Password
              </label>

              <NuxtLink
                to="/student/forgot-password"
                class="forgot-link"
              >
                Forgot password?
              </NuxtLink>
            </div>

            <div class="input-wrap">
              <UIcon
                name="i-lucide-lock-keyhole"
                class="input-icon"
              />

              <input
                id="student-password"
                :type="showPassword ? 'text' : 'password'"
                autocomplete="current-password"
                placeholder="Enter your password"
              >

              <button
                type="button"
                class="password-toggle"
                :aria-label="
                  showPassword
                    ? 'Hide password'
                    : 'Show password'
                "
                @click="showPassword = !showPassword"
              >
                <UIcon
                  :name="
                    showPassword
                      ? 'i-lucide-eye-off'
                      : 'i-lucide-eye'
                  "
                  class="h-4 w-4"
                />
              </button>
            </div>
          </div>

          <!-- Remember -->
          <label class="remember">
            <input
              v-model="rememberMe"
              type="checkbox"
            >

            <span class="checkmark">
              <UIcon
                name="i-lucide-check"
                class="h-3 w-3"
              />
            </span>

            <span>Remember me</span>
          </label>

          <!-- Submit -->
          <button
            type="submit"
            class="submit-button"
          >
            <span>Sign in to student portal</span>

            <span class="submit-icon">
              <UIcon
                name="i-lucide-arrow-up-right"
                class="h-4 w-4"
              />
            </span>
          </button>
        </form>

        <!-- Help -->
        <div class="login-help">
          <UIcon
            name="i-lucide-circle-help"
            class="h-4 w-4"
          />

          <span>
            Don't have your login details?
          </span>

          <a
            href="https://wa.me/2348074113418"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact the academy
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="login-footer">
      <span>© {{ new Date().getFullYear() }} IBN MAS'UD ONLINE ACADEMY</span>
      <span class="dot">•</span>
      <span>Student Access</span>
    </footer>
  </main>
</template>

<style scoped>
.login-page {
  --green: #073b29;
  --green-soft: #0a4b35;
  --gold: #c9ae58;
  --gold-light: #f4e9ae;
  --cream: #faf9f5;
  --ink: #17382b;
  --muted: #687970;

  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background: var(--cream);
  color: var(--ink);
}

.login-background {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.orb {
  position: absolute;
  border-radius: 50%;
}

.orb-one {
  top: -240px;
  left: -190px;
  width: 560px;
  height: 560px;
  background: rgba(7, 59, 41, 0.035);
}

.orb-two {
  right: -240px;
  bottom: -280px;
  width: 620px;
  height: 620px;
  background: rgba(201, 174, 88, 0.055);
}

.pattern {
  position: absolute;
  right: -80px;
  top: 25%;
  display: grid;
  grid-template-columns: repeat(5, 55px);
  gap: 17px;
  transform: rotate(45deg);
  opacity: 0.25;
}

.pattern-item {
  width: 55px;
  height: 55px;
  border: 1px solid rgba(7, 59, 41, 0.08);
}

.login-header {
  position: relative;
  z-index: 5;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;
  padding: 24px 0;
}

.brand {
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
  transition: transform 300ms ease;
}

.brand:hover .brand-logo {
  transform: scale(1.05);
}

.brand-logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.brand-name {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.brand-name strong {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 13px;
  letter-spacing: 0.08em;
}

.brand-name small {
  margin-top: 5px;
  color: rgba(23, 56, 43, 0.55);
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.18em;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: rgba(23, 56, 43, 0.6);
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
  transition:
    color 250ms ease,
    transform 250ms ease;
}

.back-link:hover {
  color: var(--green);
  transform: translateX(-2px);
}

.login-content {
  position: relative;
  z-index: 2;

  display: flex;
  min-height: calc(100vh - 150px);

  align-items: center;
  justify-content: center;

  padding: 30px 20px 50px;
}

.login-card {
  width: min(100%, 460px);
  padding: 42px;

  border: 1px solid rgba(7, 59, 41, 0.09);
  border-radius: 26px;

  background: rgba(255, 255, 255, 0.88);

  box-shadow:
    0 30px 80px rgba(7, 59, 41, 0.08),
    0 5px 18px rgba(7, 59, 41, 0.035);

  backdrop-filter: blur(20px);

  animation: cardIn 700ms cubic-bezier(0.22, 1, 0.36, 1) both;
}

.portal-badge {
  display: inline-flex;
  align-items: center;
  gap: 9px;

  color: var(--gold);

  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.badge-icon {
  display: flex;
  width: 34px;
  height: 34px;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  background: rgba(7, 59, 41, 0.06);
  color: var(--green);
}

.intro {
  margin-top: 25px;
}

.intro h1 {
  margin: 0;

  color: var(--green);

  font-family: Georgia, 'Times New Roman', serif;
  font-size: 48px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.04em;
}

.intro h1 span {
  color: var(--green-soft);
}

.intro p {
  margin: 14px 0 0;

  color: var(--muted);
  font-size: 13px;
  line-height: 1.7;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 21px;
  margin-top: 32px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.field-label-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.field label {
  color: var(--ink);
  font-size: 11px;
  font-weight: 700;
}

.forgot-link {
  color: var(--green);
  font-size: 10px;
  font-weight: 700;
  text-decoration: none;
}

.forgot-link:hover {
  color: var(--gold);
}

.input-wrap {
  position: relative;
}

.input-icon {
  position: absolute;
  left: 15px;
  top: 50%;
  width: 16px;
  height: 16px;
  color: rgba(7, 59, 41, 0.38);
  transform: translateY(-50%);
  pointer-events: none;
}

.input-wrap input {
  width: 100%;
  height: 52px;

  padding: 0 44px;

  border: 1px solid rgba(7, 59, 41, 0.11);
  border-radius: 13px;

  outline: none;

  background: #fff;

  color: var(--ink);
  font-size: 13px;

  transition:
    border-color 250ms ease,
    box-shadow 250ms ease;
}

.input-wrap input::placeholder {
  color: rgba(23, 56, 43, 0.35);
}

.input-wrap input:focus {
  border-color: rgba(7, 59, 41, 0.35);
  box-shadow: 0 0 0 4px rgba(7, 59, 41, 0.055);
}

.password-toggle {
  position: absolute;
  top: 50%;
  right: 14px;

  display: flex;
  width: 28px;
  height: 28px;

  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 7px;

  background: transparent;
  color: rgba(7, 59, 41, 0.4);

  cursor: pointer;

  transform: translateY(-50%);
  transition:
    color 200ms ease,
    background-color 200ms ease;
}

.password-toggle:hover {
  background: rgba(7, 59, 41, 0.05);
  color: var(--green);
}

.remember {
  display: flex;
  align-items: center;
  gap: 9px;

  color: rgba(23, 56, 43, 0.58);
  font-size: 11px;

  cursor: pointer;
}

.remember input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.checkmark {
  display: flex;
  width: 17px;
  height: 17px;

  align-items: center;
  justify-content: center;

  border: 1px solid rgba(7, 59, 41, 0.15);
  border-radius: 5px;

  color: transparent;

  transition:
    background-color 200ms ease,
    border-color 200ms ease,
    color 200ms ease;
}

.remember input:checked + .checkmark {
  border-color: var(--green);
  background: var(--green);
  color: white;
}

.submit-button {
  display: flex;
  width: 100%;
  height: 54px;

  align-items: center;
  justify-content: space-between;

  padding: 0 8px 0 19px;

  border: 0;
  border-radius: 14px;

  background: var(--green);
  color: white;

  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  cursor: pointer;

  box-shadow: 0 10px 25px rgba(7, 59, 41, 0.15);

  transition:
    transform 300ms ease,
    background-color 300ms ease,
    box-shadow 300ms ease;
}

.submit-button:hover {
  transform: translateY(-2px);
  background: var(--green-soft);
  box-shadow: 0 15px 32px rgba(7, 59, 41, 0.2);
}

.submit-icon {
  display: flex;
  width: 38px;
  height: 38px;
  align-items: center;
  justify-content: center;

  border-radius: 10px;

  background: rgba(255, 255, 255, 0.1);
  color: var(--gold-light);

  transition: transform 300ms ease;
}

.submit-button:hover .submit-icon {
  transform: translate(2px, -2px);
}

.login-help {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;

  margin-top: 25px;
  padding-top: 20px;

  border-top: 1px solid rgba(7, 59, 41, 0.07);

  color: rgba(23, 56, 43, 0.48);
  font-size: 10px;
}

.login-help > :first-child {
  color: var(--gold);
}

.login-help a {
  color: var(--green);
  font-weight: 700;
  text-decoration: none;
}

.login-help a:hover {
  color: var(--gold);
}

.login-footer {
  position: relative;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  padding: 0 20px 25px;

  color: rgba(23, 56, 43, 0.35);
  font-size: 9px;
  letter-spacing: 0.04em;
}

.dot {
  color: var(--gold);
}

@keyframes cardIn {
  from {
    opacity: 0;
    transform: translateY(18px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 600px) {
  .login-header {
    width: calc(100% - 30px);
    padding: 17px 0;
  }

  .brand-name {
    display: none;
  }

  .brand-logo {
    width: 46px;
    height: 46px;
  }

  .back-link span {
    display: none;
  }

  .back-link {
    width: 38px;
    height: 38px;
    justify-content: center;

    border: 1px solid rgba(7, 59, 41, 0.09);
    border-radius: 50%;
  }

  .login-content {
    min-height: calc(100vh - 125px);
    padding: 25px 15px 40px;
  }

  .login-card {
    padding: 30px 22px;
    border-radius: 21px;
  }

  .intro h1 {
    font-size: 42px;
  }

  .login-footer {
    flex-direction: column;
    gap: 4px;
  }

  .dot {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .login-card {
    animation: none;
  }

  .brand-logo,
  .back-link,
  .input-wrap input,
  .submit-button,
  .submit-icon {
    transition: none;
  }
}
</style>
