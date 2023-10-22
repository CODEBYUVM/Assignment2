//Q.1 Reverse String Fuction
function reversetring(){
    let stringg=document.getElementById("inputstring").value;
    let rstring="";

    for(let i=stringg.length-1;i>=0;i--)
    {
        rstring=rstring+stringg[i];
    }
    
    document.getElementById("ansstring").innerHTML="Your Reverse String value is:- "+rstring;

}


//Q.2  Check Palimdrome Number Function
function checkpalindrome(){
    let number=document.getElementById("inputnumber").value;
    let reminder=0;
    let sum=0;
    let temp=number;
   
  
    while(number>0)
    {
        reminder=number%10;
        sum=(sum*10)+reminder;
        number=parseInt(number/10);
        console.log(number);
    }
  
    if(sum==temp)
    {
        document.getElementById("Palindromenum").innerHTML="Your Enterd Number is palindrome And its Value is:- "+sum;
    }else{
        document.getElementById("Palindromenum").innerHTML="Your Enterd Number is not a palindrome And its Value is:- "+sum;
    }

}


//Q.3 Tip and Total Amount Calculate Function

function CalculatetotalAmount(){
    let subtotal=document.getElementById("subtotal").value;
    let tippercent=document.getElementById("tipPercentage").value;

    let ntip=parseInt(subtotal)*parseInt(tippercent)/100;
    let finalamount=parseInt(subtotal)+parseInt(ntip);

    console.log(ntip);
    console.log(finalamount);

    document.getElementById("tip").innerHTML="Your Tip amount is:- "+ntip;
    document.getElementById("Totalamount").innerHTML="Your Total amount With Tip is:- "+finalamount;

}