function cb(event, el, color = '#111') {
  let isAnim = false;
  el.style.overflow = "hidden";
  const pulseDiv = document.createElement('div'); 
  pulseDiv.classList.add('pulse'); 
  pulseDiv.style.backgroundColor = color;
  if(!isAnim) { 
    const maxVal = Math.max(el.clientWidth, el.clientHeight); 
    const imRect = el.getBoundingClientRect(); 
    pulseDiv.style.width = pulseDiv.style.height = maxVal + 'px'; 
    pulseDiv.style.left = event.clientX - imRect.left - ( maxVal / 2 ) + 'px';
    pulseDiv.style.top = event.clientY - imRect.top - ( maxVal / 2 ) + 'px';

    el.appendChild(pulseDiv);
    pulseDiv.classList.add('anim');
  }
  isAnim = true; 
  pulseDiv.addEventListener('animationend', () => {
    pulseDiv.classList.remove('anim'); 
    el.removeChild(pulseDiv);
    isAnim = false; 
  });
}

export default {
	bind(el, bindings) {
		el.addEventListener('click', (event) => {
      event.stopPropagation();
			if(bindings.modifiers.self) {
				if(el !== event.target) return;
			} 
      cb(event, el, bindings.value);
		});
	},
	unbind(el) {
		el.removeEventListener('click', cb);
    el.style.overflow = 'visible';
	}
}