const form = document.querySelector('#collection-form');
const preview = document.querySelector('#request-preview');
const area = form.elements.namedItem('area');

area.addEventListener('input', () => area.setCustomValidity(''));
form.addEventListener('input', () => {
  preview.textContent = '';
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const neighbourhood = area.value.trim();
  if (!neighbourhood) {
    area.setCustomValidity('Enter your pickup neighbourhood.');
    area.reportValidity();
    return;
  }

  const service = form.elements.namedItem('service').value;
  const frequency = form.elements.namedItem('frequency').value;
  preview.textContent = `Request preview: ${service} in ${neighbourhood}. ${frequency}. Nothing was sent.`;
});

form.querySelector('button').disabled = false;
