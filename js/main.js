const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-nav');

menuButton?.addEventListener('click', () => {
  const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isExpanded));
  menuButton.setAttribute('aria-label', isExpanded ? 'Open navigation' : 'Close navigation');
  navigation?.classList.toggle('is-open', !isExpanded);
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Open navigation');
    navigation.classList.remove('is-open');
  });
});

document.querySelectorAll('[data-project]').forEach((link) => {
  link.addEventListener('click', () => {
    const projectType = link.getAttribute('data-project');
    const projectSelect = document.querySelector('#project-type');
    const matchingOption = Array.from(projectSelect?.options ?? []).find((option) => option.text === projectType);
    if (matchingOption) projectSelect.value = matchingOption.value;
  });
});

document.querySelector('#enquiry-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!(form instanceof HTMLFormElement) || !form.reportValidity()) return;

  const formData = new FormData(form);
  const message = [
    'Hello Shyam Builders, I would like to discuss a project.',
    '',
    `Name: ${formData.get('name')}`,
    `Project type: ${formData.get('project-type')}`,
    `Project details: ${formData.get('message')}`
  ].join('\n');
  window.open(`https://wa.me/61434084368?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
});

document.querySelector('#year').textContent = String(new Date().getFullYear());
