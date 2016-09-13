var user = prompt("Do you know the Savage Muffin Man? YES, NO, MAYBE").toUpperCase();

switch (user){
    case 'YES':
        var man = prompt("What about the gingerbreak man? (YES or NO)").toUpperCase();
        var boy = prompt("what did you say?").toUpperCase();
        if(man === 'YES' || boy === 'YES') {
            console.log("Im only messing with you");
        }else {
            console.log("Speak up boy");
        };
    break;
    case 'NO':
        var wizard = prompt("Do you know any Wizards?").toUpperCase();
        var gandalf = prompt("Do you know a Wizard named Gandalf?").toUpperCase();
        if (wizard && gandalf === 'YES'){
        console.log("you shall not pass, haha jk go on in");
        }else {
            console.log("You shall not pass");
        };
    break;
    case 'MAYBE':
        console.log("maybe is not an answer to me");
    break;
    default:
        console.log("silent one you are");
};