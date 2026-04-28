let isOn = false;

function toggleLamp() {
  isOn = !isOn;

  document.body.style.background = isOn ? '#e8e4da' : '#0f0f1a';

  const card = document.getElementById('registerCard');
  card.classList.toggle('lamp-off', !isOn);
  card.classList.toggle('lamp-on', isOn);

  if (isOn) {
    card.style.background = 'rgba(255,255,255,0.88)';
    card.style.border = '1px solid rgba(0,0,0,0.08)';
    card.style.boxShadow = '0 8px 40px rgba(0,0,0,0.18), 0 0 80px rgba(255,200,60,0.12)';
  } else {
    card.style.background = '';
    card.style.border = '';
    card.style.boxShadow = '';
  }

  const bulb = document.getElementById('bulb');
  if (isOn) {
    bulb.style.background = 'radial-gradient(circle at 35% 30%, #fff9e0, #ffe066 40%, #f5a000)';
    bulb.style.boxShadow = '0 0 20px 8px rgba(255,200,50,0.7), 0 0 40px 20px rgba(255,180,0,0.3)';
    bulb.style.borderColor = '#e89a00';
  } else {
    bulb.style.background = 'radial-gradient(circle at 40% 35%, #555, #2a2a2a)';
    bulb.style.boxShadow = '';
    bulb.style.borderColor = '#3a3a3a';
  }

  document.getElementById('shade').classList.toggle('on', isOn);
  document.getElementById('cone').classList.toggle('on', isOn);

  const knob = document.getElementById('knob');
  knob.style.background = isOn ? '#f5a623' : '#888';
  knob.style.boxShadow = isOn ? '0 0 6px rgba(245,166,35,0.8)' : '';

  document.getElementById('offHint').style.opacity = isOn ? '0' : '1';

  const cord = document.getElementById('cord');
  cord.style.height = '20px';
  setTimeout(() => cord.style.height = '30px', 150);
}

// ===== PASSWORD STRENGTH =====
const passInput = document.getElementById('passInput');
const strengthFill = document.getElementById('strengthFill');
const strengthLabel = document.getElementById('strengthLabel');

passInput.addEventListener('input', () => {
  const val = passInput.value;
  let score = 0;
  if (val.length >= 6) score++;
  if (val.length >= 10) score++;
  if (/[A-Z]/.test(val)) score++;
  if (/[0-9]/.test(val)) score++;
  if (/[^A-Za-z0-9]/.test(val)) score++;

  const levels = [
    { pct: '0%',   color: 'transparent', text: '' },
    { pct: '25%',  color: '#e05c5c',     text: 'Weak' },
    { pct: '50%',  color: '#e09a20',     text: 'Fair' },
    { pct: '75%',  color: '#a0c040',     text: 'Good' },
    { pct: '100%', color: '#40b060',     text: 'Strong' },
  ];

  const level = val.length === 0 ? levels[0] : levels[Math.min(score, 4)];
  strengthFill.style.width = level.pct;
  strengthFill.style.background = level.color;
  strengthLabel.textContent = level.text;
  strengthLabel.style.color = level.color;
});

// ===== CONFIRM PASSWORD =====
const confirmPass = document.getElementById('confirmPass');
const matchLabel = document.getElementById('matchLabel');

confirmPass.addEventListener('input', () => {
  if (!confirmPass.value) { matchLabel.textContent = ''; return; }
  if (confirmPass.value === passInput.value) {
    matchLabel.textContent = '✓ Passwords match';
    matchLabel.style.color = '#40b060';
  } else {
    matchLabel.textContent = '✗ Passwords do not match';
    matchLabel.style.color = '#e05c5c';
  }
});
