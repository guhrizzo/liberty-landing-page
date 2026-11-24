import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export function enableSmoothScroll(wrapper, content) {
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
        const smoother = ScrollSmoother.create({ wrapper, content, smooth: 0.8 });
        return () => smoother.kill();
    });
    return () => media.revert();
}

export function scrollToSection(selector, offset = 0) {
    const section = selector && document.querySelector(selector);
    if (selector && !section) return;

    const smoother = ScrollSmoother.get();
    if (smoother && smoother.smooth()) {
        const top = section ? smoother.offset(section, 'top top') - offset : 0;
        smoother.scrollTo(top, true);
        return;
    }

    const top = section ? section.getBoundingClientRect().top + window.scrollY - offset : 0;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top, behavior: reduceMotion ? 'instant' : 'smooth' });
}
