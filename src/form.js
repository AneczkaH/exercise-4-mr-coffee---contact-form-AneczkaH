// when the page is ready the modal is hidden
$('.modal').hide();
$('.invalid_feedback').hide();

// when click the btn id ="button_Envoyer"

function validateForm() {
  const name = document.forms.contact_form.name.value;
  const surname = document.forms.contact_form.surname.value;
  const mail = document.forms.contact_form.mail.value;
  const message = document.forms.contact_form.message.value;
  const regName = /^([a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]){3,13}\b/;
  const regSurname = /^([a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ.'-]){3,20}\b/;
  const regMail = /^([a-z0-9_.-]+@[a-z0-9_.-]+\.[a-z]{2,4})/;

  if (/* name === null || */ regName.test(name) === false) {
    alert('Fill correct name-only letters is ok');
    /* allert najlepiej byloby zamienić na feedback z podpowiedzią
    ewentualnie wpisywać jako error do tablicy i walidacje uzależnić
    od tego czy jest coś w tablicy */
    return false;
  } if (/* surname === null || */ regSurname.test(surname) === false) {
    alert('Fill correct surname-only letters is ok');
    return false;
  } if (mail === null || regMail.test(mail) === false) {
    alert('Fill correct email - should contain: "@" and "."');
    return false;
  } if (message === null || message.length > 1000 || message.length < 6) {
    alert('The message should be from 6 to 1000 characters');
    return false;
  }
  return true;
}

function invalidFeedback() {
  const telephone = document.forms.contact_form.telephone.value;
  const regTelephone = /^(\+\d{2})? ?\d{3}[- ]?\d{3}[- ]?\d{3}$/;
  if (telephone !== null && regTelephone.test(telephone) === false) {
    $('.invalid_feedback').show();
    $('#telephone.form_input_field').css('margin-bottom', '5px');
  } else {
    $('.invalid_feedback').hide();
    $('#telephone.form_input_field').css('margin-bottom', '20px');
  }
}

$('input#telephone').on('blur', invalidFeedback);

// if field fill corect show the modal class="modal_content" and console log entered data in console
// po przeniesieniu button do wnętrza <form> zmienić on na submit i dodać event.preventDefault();
$('#button_envoyer').on('click', () => {
  if (validateForm() === true) {
    const userInfo = {};
    const inputFieldArray = $(':input.form_input_field').get();
    console.log(inputFieldArray);

    inputFieldArray.forEach((element) => {
      userInfo[element.id] = element.value;
    });

    const userInfoJson = JSON.stringify(userInfo);
    console.log(userInfoJson);
    $('.modal').fadeIn(400);
  }
});

// if field fill incorrect nothing happens

// when click the btn (id ="button_fermer") hidde modal (class="modal_content")
$('#button_fermer').on('click', () => {
  $('.modal').fadeOut(300);
});
