export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('reveal', {
        mounted(el, binding) {
            const options = binding.value || {};
            const delay = options.delay || 0;
            const animation = options.animation || 'fade-up';
            el.style.opacity = '0';
            el.style.transition = `
        opacity 800ms cubic-bezier(0.22, 1, 0.36, 1),
        transform 800ms cubic-bezier(0.22, 1, 0.36, 1),
        filter 800ms cubic-bezier(0.22, 1, 0.36, 1)
      `;
            el.style.transitionDelay = `${delay}ms`;
            if (animation === 'fade') {
                el.style.transform = 'none';
            }
            else if (animation === 'fade-left') {
                el.style.transform = 'translateX(35px)';
            }
            else if (animation === 'fade-right') {
                el.style.transform = 'translateX(-35px)';
            }
            else if (animation === 'zoom') {
                el.style.transform = 'scale(0.94)';
            }
            else {
                el.style.transform = 'translateY(35px)';
            }
            el.style.filter = 'blur(4px)';
            const observer = new IntersectionObserver((entries) => {
                const entry = entries[0];
                if (!entry || !entry.isIntersecting)
                    return;
                el.style.opacity = '1';
                el.style.transform = 'translate(0) scale(1)';
                el.style.filter = 'blur(0)';
                observer.unobserve(el);
            }, {
                threshold: 0.12,
                rootMargin: '0px 0px -60px 0px'
            });
            observer.observe(el);
        }
    });
});
