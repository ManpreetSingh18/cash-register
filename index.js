var billAmount =document.querySelector("#bill-amount");

const cashGiven=document.querySelector("#cash-given")
const checkButton=document.querySelector("#check-button");

const message=document.querySelector("#error-message");


checkButton.addEventListener("click",
function validateBillandCashAmount(){
    message.style.display="none";
    if(billAmount.value >0){
        if(cashGiven.value >= billAmount.value){
            const ammountToBeReturned=cashGiven.value-billAmount.value;
            calculateChange(ammountToBeReturned);
        }else{

            showMessage("Inadequate Cash Given");
        }
    }else{
       showMessage("Invalid Bill Amount")
    }
});
function calculateChange(){

}

function showMessage(msg){
    console.log("Here");
    message.style.display="block";
    message.innerText= msg;
}
 
