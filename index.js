const button = document.getElementById('generate');
const input = document.getElementById('idea');
const output = document.getElementById('result');

button.addEventListener('click', async () => {
  const idea = input.value.trim();
  if (!idea) {
    output.textContent = 'Please enter an idea.';
    return;
  }

  output.textContent = 'Generating...';

  try {
    const response = await fetch('https://superb-harmony-production-c29f.up.railway.app/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idea })
    });

    const data = await response.json();
    output.textContent = data.result || 'No result returned.';
  } catch (err) {
    output.textContent = 'Request failed.';
  }
});
