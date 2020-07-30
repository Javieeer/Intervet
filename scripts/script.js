const ipad = window.matchMedia('screen and (max-width: 768px)')
const menu = document.querySelector('.nav-options');
const burgerButton = document.querySelector('#burger-button');

ipad.addListener(validation)
validation(ipad);
function validation(event)
{
  if (event.matches)
  {
    burgerButton.addEventListener('click', hideShow);
  }
  else
  {
    burgerButton.removeEventListener('click', hideShow);
  }
}
validation(ipad);

function hideShow()
{
  if (menu.classList.contains('is-active'))
  {
    menu.classList.remove('is-active');
  }
  else
  {
    menu.classList.add('is-active');
  }
}
validation(ipad);