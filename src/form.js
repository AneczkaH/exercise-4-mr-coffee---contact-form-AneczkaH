// when the page is ready the modal is hidden
$('.modal').hide();

// when click the btn id ="button_Envoyer"

function validateForm() {
  const name = document.forms.contact_form.name.value;
  const surname = document.forms.contact_form.surname.value;
  const telephone = document.forms.contact_form.telephone.value;
  const mail = document.forms.contact_form.mail.value;
  const message = document.forms.contact_form.message.value;
  const regName = /[a-zA-Z]{3,13}/;



  if (name === null || name.length < 3) {
    alert('Fill correct name');
    return false;
  } if (surname === null || surname.length <= 3) {
    alert('Fill correct surname');
    return false;
  } if (mail === null || mail.length < 5 /*|| (mail.length > 5 && (/*!mail.includes("@"))) || startsWith('@') || endsWith('@')*/) {
    alert('Fill correct email');
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
