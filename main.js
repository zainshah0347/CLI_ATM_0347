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
        type: "number"
    }
]);
if (mainResult.pinCode === pinCode) {
    console.log("your pincode is correct");
    let mediumResult = await inquirer.prompt([
        {
            name: "multichoice",
            message: "Please select one of them",
            type: "list",
            choices: ["Withdraw", "Check_balance"]
        }
    ]);
    if (mediumResult.multichoice === "Withdraw") {
        console.log("you choose withdraw");
        let smallResult = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount you want to withdraw",
                type: "number"
            }
        ]);
        myBalance -= smallResult.amount;
        console.log("your remaining balance is ", myBalance);
    }
    else if (mediumResult.multichoice === "Check_balance") {
        console.log("Your balance is : ", myBalance);
    }
}
