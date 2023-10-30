//.....Burger menu.....

const burgerMenu = document.querySelector('#menu-tlacitko');

const menuPolozkyElement = document.querySelector('#menu-polozky');
const menuIkonaElement = burgerMenu.querySelector('i');

const menuOtevrit = () => {
  menuPolozkyElement.classList.toggle('show');
  menuIkonaElement.classList.toggle('fa-bars');
  menuIkonaElement.classList.toggle('fa-xmark');
};
burgerMenu.addEventListener('click', menuOtevrit);
