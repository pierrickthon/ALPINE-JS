import Alpine from './node_modules/alpinejs/dist/module.esm.js'
//import NotificationService from "./services/notification/Notification.service.js";
 
window.Alpine = Alpine  

Alpine.data('login', () =>({
  showPopup: false,
  popupMessage: "",  
  message: "",   
  fields: [
    {
      name: 'email',
      type: 'email',
      placeholder: 'Entrez votre email'
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Entrez votre mot de passe'
    }
  ], 
  submitHandler(event){
    event.preventDefault()
    console.log('Formulaire remplit.')
    const emailValue = document.getElementById('email').value
    const passwordValue = document.querySelector('#password').value
    if(!(emailValue && passwordValue)) {
      this.showPopup = true 
      this.popupMessage = "Compplète le formulaire"  
      return 
    }
  }

}))

const { default: Alpine } = require("alpinejs");

document.addEventListener('alpine:init', () => {
    Alpine.store('user', {name: 'yann Thon' });
    Alpine.data('userData', () => ({
        name: Alpine.store('user').name
    }));
});

Alpine.start()