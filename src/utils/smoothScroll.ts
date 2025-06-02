export const smoothScrollTo = (id: string) => {
  const element = document.querySelector(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Optional: Focus the section for accessibility
    (element as HTMLElement).setAttribute('tabindex', '-1');
    (element as HTMLElement).focus({ preventScroll: true });
  }
};