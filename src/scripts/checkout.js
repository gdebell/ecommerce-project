$(document).on('ready', function() {
  console.log('GO TEAM - Checkout');
  // $('.firstName').on('blur keydown', function() {
  //   if ($('.firstName').val().length < 3 || $('.firstName').val() === "") {
  //   $('.firstNameShipping').addClass('has-error');
  //   $('.firstNameShipping').removeClass('has-success');
  //   } else {
  //   $('.firstNameShipping').addClass('has-success');
  //   $('.firstNameShipping').removeClass('has-error');
  //   }
  // });
  nameValidate('.firstName','.firstNameShipping');
  nameValidate('.lastName','.lastNameShipping');
  // $('.lastName').on('blur keydown', function(){
  //   if ($('.lastName').val().length < 3 || $('.lastName').val() === "") {
  //       $('.lastNameShipping').addClass('has-error');
  //       $('.lastNameShipping').removeClass('has-success');
  //   } else {
  //       $('.lastNameShipping').addClass('has-success');
  //       $('.lastNameShipping').removeClass('has-error');
  //   }
  // })

});

function nameValidate(input, labelClass){ $(input).on('blur keydown', function()
    {
    if ($(input).val().length < 3 || $(input).val() === "") {
    $(labelClass).addClass('has-error');
    $(labelClass).removeClass('has-success');
    } else {
    $(labelClass).addClass('has-success');
    $(labelClass).removeClass('has-error');
    }
  });
}
