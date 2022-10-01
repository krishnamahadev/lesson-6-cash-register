
const billamount = document.querySelector("#bill-amount");

const checkbutton = document.querySelector("#check-button");

const cashgiven = document.querySelector("#cash-given");

const message = document.querySelector("#error-message");

// console.log(cashgiven.value); //check with Divya why this is not working


//test click button
// function onclick()
// {
//     console.log("did it click");

// }

// checkbutton.addEventListener("click", onclick);


function showmessage(messagereturned)
{
    message.style.display="block";
    message.innerText=messagereturned;
}
function validatebillamount()
{
    message.style.display="none";
    if(billamount.value>0)
    {
        if(cashgiven.value >= billamount.value)
        {
            showmessage("change has to be returned");
        }
        else
        {
            showmessage("Less cash given");
        }
        
    }
    else
    {
        showmessage("Invalid bill amount");
        
    }
}


checkbutton.addEventListener("click", validatebillamount);











