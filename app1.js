
const billamount = document.querySelector("#bill-amount");

const checkbutton = document.querySelector("#check-button");

const cashgiven = document.querySelector("#cash-given");

const message = document.querySelector("#error-message");

// const noofnotestobedisplayed= document.querySelectorAll(".no-of-notes")

// const availablenotes = [2000,500,200,100,50,20,10,5,1]
// console.log(cashgiven.value); //check with Divya why this is not working


//test click button
// function onclick()
// {
//     console.log("did it click");

// }

// checkbutton.addEventListener("click", onclick);



function hide()
{
    message.style.display="none"
}

function showmessage(messagereturned)
{
    message.style.display="block";
    message.innerText=messagereturned;
}


function calculatechange(amounttobereturned)
{
    // for(let i=0;i<availablenotes.length;i++)
    // {
    //     const noofnotes = Math.trunc(amounttobereturned / availablenotes[0]);
    //     amounttobereturned=amounttobereturned%availablenotes[0];
    //     noofnotestobedisplayed.innerText=noofnotes[i];
    // }
}
function validatebillamount()
{
    hide();
    // message.style.display="none";
    if(billamount.value > 0)
    {
        if(number(cashgiven.value >= billamount.value)
        {
            console.log(billamount.value);
            console.log(cashgiven.value);
            console.log(cashgiven.value>=billamount.value);
            showmessage("change has to be returned");
            const amounttobereturned = cashgiven.value - billamount.value;
            calculatechange(amounttobereturned);
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











