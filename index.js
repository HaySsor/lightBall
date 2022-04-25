import './style.css';

const bulb = document.querySelector('.bulb')
const lightToggle = document.getElementById('light-toggle')
const textToggle = document.querySelector('.light-toggle-text')

function lightSwitch(){
  const toggle = lightToggle.checked
  if ( toggle === true){
    bulb.classList.add('bulb--on')
    textToggle.textContent = 'Światło włączone'
  }else{
    bulb.classList.remove('bulb--on')
    textToggle.textContent = 'Światło wyłączone'
  }
}

lightToggle.addEventListener('change',lightSwitch)

