import { onBeforeUnmount, onMounted } from 'vue'

export function useScrollReveal() {
  let observer: IntersectionObserver | undefined
  let revealTimer: number | undefined

  const revealVisibleTargets = () => {
    document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)').forEach((target) => {
      const rect = target.getBoundingClientRect()
      const isInView = rect.top < window.innerHeight * 0.94 && rect.bottom > 0

      if (isInView) {
        target.classList.add('is-visible')
        observer?.unobserve(target)
      }
    })
  }

  onMounted(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    if (!targets.length) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      targets.forEach((target) => target.classList.add('is-visible'))
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer?.unobserve(entry.target)
        })
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -8% 0px'
      }
    )

    targets.forEach((target) => observer?.observe(target))
    window.addEventListener('scroll', revealVisibleTargets, { passive: true })
    window.addEventListener('resize', revealVisibleTargets)

    requestAnimationFrame(revealVisibleTargets)
    revealTimer = window.setTimeout(revealVisibleTargets, 260)
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
    window.removeEventListener('scroll', revealVisibleTargets)
    window.removeEventListener('resize', revealVisibleTargets)
    if (revealTimer) window.clearTimeout(revealTimer)
  })
}
