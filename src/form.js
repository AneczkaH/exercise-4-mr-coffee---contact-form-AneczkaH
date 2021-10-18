// when the page is ready the modal is hidden
$('.modal').hide();

// when click the btn id ="button_Envoyer"

function validateForm() {
  const name = document.forms.contact_form.name.value;
  const surname = document.forms.contact_form.surname.value;
  const telephone = document.forms.contact_form.telephone.value;
  const mail = document.forms.contact_form.mail.value;
  const message = document.forms.contact_form.message.value;
  const regName = /^([a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]){3,13}\b/;
  const regSurname = /^([a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]){3,20}\b/; // można jeszcze dodać myślnik i spacje dla nazwisk 2-członowych
  const regMail = /^([a-z0-9_.-]+@[a-z0-9_.-]+\.[a-z]{2,4})/;
  const regTelephone = /^(\+\d{2})? ?\d{3}[- ]?\d{3}[- ]?\d{3}$/;



  if (/*name === null ||*/ regName.test(name)===false) {
    alert('Fill correct name-only letters is ok');
    return false;
  } if (/*surname === null ||*/ regSurname.test(surname)===false) {
    alert('Fill correct surname-only letters is ok'); 
    return false;
  /*} if (telephone !== null && regTelephone.test(telephone)===false) { // poprawić tak że jak jest puste pole to zwraca true
    alert('Fill correct phone number- +xx xxx xxx xxx or +xx xxx-xxx-xxx'); 
    return false;*/
  } if (mail === null || regMail.test(mail) === false) {
    alert('Fill correct email - should contain: "@" and "."');
    return false;
  } if (message === null || message.length > 1000 || message.length < 6) {
    alert('The message should be from 6 to 1000 characters');
    return false;
  }
  return true;
}

// if field fill corect show the modal class="modal_content"
$('#button_envoyer').on('click', () => {
  if (validateForm() === true) {
    console.log(`Dane zapisane: \n Nom: ${document.forms.contact_form.name.value} \n Prénom: ${document.forms.contact_form.surname.value} \n Téléphone: ${document.forms.contact_form.telephone.value} \n Adresse mail: ${document.forms.contact_form.mail.value} \n Message: ${document.forms.contact_form.message.value}`);

    $('.modal').show();
    // console log entered data in console
  }
});

// if field fill incorrect nothing happens

// when click the btn (id ="button_fermer") hidde modal (class="modal_content")
$('#button_fermer').on('click', () => {
  $('.modal').hide();
});
