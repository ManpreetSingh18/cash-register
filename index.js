var billAmount =document.querySelector("#bill-amount");

const cashGiven=document.querySelector("#cash-given")
const checkButton=document.querySelector("#check-button");

const message=document.querySelector("#error-message");
const noOfNotes= document.querySelectorAll(".no-of-notes");

const availableNotes=[2000,500,100,20,10,5,1];

checkButton.addEventListener("click",
function validateBillandCashAmount(){
    message.style.display="none";
    if(billAmount.value >0){
        
        if(Number(cashGiven.value) >= Number(billAmount.value)){
            // console.log("Cash Given:"+cashGiven.value)
            // console.log("Bill Amount:"+billAmount.value)
            const ammountToBeReturned=cashGiven.value-billAmount.value;
            calculateChange(ammountToBeReturned);
        }else{

            showMessage("Wanna wash Plate!! ");
        }
    }else{
       showMessage("Invalid Bill Amount")
    }
});
function calculateChange(amountToBeReturned){
    for(let i=0;i<availableNotes.length;i++){
        const numberOfNotes=Math.trunc(amountToBeReturned/availableNotes[i]);
        amountToBeReturned%=availableNotes[i];
        noOfNotes[i].innerText=numberOfNotes;
         
    }
}

function showMessage(msg){
    
    message.style.display="block";
    message.innerText= msg;
}
 
