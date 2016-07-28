$(document).on('ready', function() {
  console.log('GO TEAM - Checkout');
  // validate first name, last name, and address line 1 of shipping
  textValidate('.firstNameS','.firstNameShipping');
  textValidate('.lastNameS','.lastNameShipping');
  textValidate('.addressS','.addressShipping');
  textValidate('.cityS', '.cityShipping');
  // validate state drop down of shipping
  stateValidate('.dropDownS', '.stateShipping');
  // validate zip of shipping
  zipValidate('.zipS','.zipShipping');
  // validate first name, last name, and address line 1 of billing
  textValidate('.firstNameB','.firstNameBilling');
  textValidate('.lastNameB','.lastNameBilling');
  textValidate('.addressB','.addressBilling');
  textValidate('.cityB', '.cityBilling');
  // validate state drop down of billing
  stateValidate('.dropDownB', '.stateBilling')
  zipValidate('.zipB', '.zipBilling')
});




/*
=====================
HELPER FUNCTIONS
=====================
*/

function textValidate(input, divClass) {
  $(input).on('blur keydown', function() {
    if ($(input).val().length < 2) {
      $(divClass).addClass('has-error');
      $(divClass).removeClass('has-success');
    } else {
      $(divClass).addClass('has-success');
      $(divClass).removeClass('has-error');
    }

  });
}

function stateValidate(input, divClass) {
  $(input).on('blur change', function() {
    if (this.value === "no_state") {
      $(divClass).addClass('has-error');
      $(divClass).removeClass('has-success');
    }
    else {
      $(divClass).addClass('has-success');
      $(divClass).removeClass('has-error');
    }
  });
}

function zipValidate(input, divClass) {


  $(input).on('blur keydown', function() {

    if ($(this).val().length < 4 || $(this).val().length > 9) {
      $(divClass).addClass('has-error');
      $(divClass).removeClass('has-success');
    }
    else {
      $(divClass).addClass('has-success');
      $(divClass).removeClass('has-error');

    }
  });
}
