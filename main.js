#! /usr/bin/env node
// create a variable name  myBalance.
// create a variable name pinCode.
// use Inquirer.
// and also use if else
import inquirer from "inquirer";
let myBalance = 20000;
const pinCode = 333388;
let mainResult = await inquirer.prompt([
    {
        name: "pinCode",
        message: "Enter your pincode",
        type: "number",
    },
]);
if (mainResult.pinCode === pinCode) {
    console.log("your pincode is correct");
    let mediumResult = await inquirer.prompt([
        {
            name: "multichoice",
            message: "Please select one of them",
            type: "list",
            choices: ["Withdraw", "Check_balance", "Fast_Cash"],
        },
    ]);
    if (mediumResult.multichoice === "Withdraw") {
        console.log("you choose withdraw");
        let smallResult = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount you want to withdraw",
                type: "number",
            },
        ]);
        //Start this code user cannot get any extra amount
        if (smallResult.amount <= myBalance) {
            myBalance -= smallResult.amount;
            console.log("your remaining balance is ", myBalance);
        }
        else {
            console.log("Your Account Balance is insufficiant to make this Withdraw");
        }
        //End this code user cannot get any extra amount
    }
    else if (mediumResult.multichoice === "Check_balance") {
        console.log("Your balance is : ", myBalance);
    }
    //Adding fast cash
    else if (mediumResult.multichoice === "Fast_Cash") {
        console.log("this is fast cash");
        let fastCash = await inquirer.prompt([
            {
                name: "fastCash",
                message: "Please select one amount given below",
                type: "list",
                choices: [1000, 2000, 3000, 5000],
            },
        ]);
        if (fastCash.fastCash === 1000) {
            myBalance -= fastCash.fastCash;
            console.log("You can successfully Fast Cash :", 1000);
            console.log("your remaining balance is :", myBalance);
        }
        else if (fastCash.fastCash === 2000) {
            myBalance -= fastCash.fastCash;
            console.log("You can successfully Fast Cash :", 2000);
            console.log("your remaining balance is :", myBalance);
        }
        else if (fastCash.fastCash === 3000) {
            myBalance -= fastCash.fastCash;
            console.log("You can successfully Fast Cash :", 3000);
            console.log("your remaining balance is :", myBalance);
        }
        else if (fastCash.fastCash === 5000) {
            myBalance -= fastCash.fastCash;
            console.log("You can successfully Fast Cash :", 5000);
            console.log("your remaining balance is :", myBalance);
        }
    }
    //Ending fastCash
}
else {
    console.log("Please enter a valid PinCode");
}
