function validateName(value)
{
   let isValid;
   if(value && value.length >= 3 && value.trim())
   {
       document.getElementsByClassName("errorName")[0].style="display:none;";// getting element 
       isValid = true;
       enableOrDisableOrderNow(true);
   }else
   {
       document.getElementsByClassName("errorName")[0].style="display:block;";
       isValid = false;
       enableOrDisableOrderNow(false);
   }
  
   return isValid;
}
function validateAddress(value)// validating address using if else
{
   let isValid ;
   if(value && value.trim())
   {
       document.getElementsByClassName("errorAddress")[0].style="display:none;";
       isValid = true;
       enableOrDisableOrderNow(true);
   }else
   {
       document.getElementsByClassName("errorAddress")[0].style="display:block;";
       isValid = false;
       enableOrDisableOrderNow(false);
   }  
   return isValid;
}
function validateEmailAddress(value)// validating Email Address using if else
{
   let isValid;
   if(value && value.match("^[0-9]*$") && parseInt(value))
   {
       isValid = true;
       document.getElementsByClassName("errorEmailAddress")[0].style="display:none;";
       enableOrDisableOrderNow(true);
      
   }else
   {
       isValid = false;
       document.getElementsByClassName("errorEmailAddress")[0].style="display:block;";
       enableOrDisableOrderNow(false);
   }
   return isValid;
  
}
function validatePhonenumber(value)// validating phone number using if else
{
   let isValid ;
   if(value && value.trim())
   {
       document.getElementsByClassName("errorPhoneNumber")[0].style="display:none;";
       isValid = true;
       enableOrDisableOrderNow(true);
   }else
   {
       document.getElementsByClassName("errorPhoneNumber")[0].style="display:block;";
       isValid = false;
       enableOrDisableOrderNow(false);
   }  
   return isValid;
}
function enableOrDisableOrderNow(flag)// enabling order now
{
   if(flag)
   {
       let orderNow = document.getElementById("ORDER NOW");
       orderNow.disabled=false;
       orderNow.className="button button-enabled";
   }
   else
   {
       let orderNow = document.getElementById("ORDER NOW");
       orderNow.disabled=true;
       orderNow.className="button button-disabled";
   }
}

function checkAll(val)// checking all validation
{
   let Name = document.getElementById("Name").value;
   let Address = document.getElementById("Address").value;
   let EmailAddress= document.getElementById("EmailAddress").value;
   let Phonenumber = document.getElementById("PhoneNumber").value;
   let NameValid = validateName(Name);
   let AddressValid = validateAddress(Address);
   let EmailAddressValid = validateEmailAddress(EmailAddress);
   let PhonenumberValid = validatePhonenumber(PhoneNumber);

   if(NameValid && EmailAddressValid && AddressValid)
   {
       enableOrDisableOrderNow(true);
   }
   else
   {
       enableOrDisableOrderNow(false);
   }
}
