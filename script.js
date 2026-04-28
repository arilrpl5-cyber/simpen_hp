let isOn = false;

function toggleLamp() {
  isOn = !isOn;

  document.body.style.background = isOn ? '#e8e4da' : '#0f0f1a';

  const card = document.getElementById('loginCard');
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
