
function generate_password()
{
    // prompts user for number of characters
    var input = prompt("Choose the number of characters")
    console.log(input)
    // checks if it's a number
    var numofchars = parseInt(input)
    console.log(numofchars)
    // lets you know if not a number
    if(isNaN(input))
    {
        alert ("Not a Number")
    }
    else
    {
        //checks if in range
        if (numofchars < 2 || numofchars > 100)
        {
            alert ("Invalid input")
        }
        else
        {
            //generates password based on desired length
            var password = "";
            for (var i = 0; i < numofchars; i++)
            {
                //options for password
                var charArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G", "g",
                "H", "h", "I", "i", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n", "O", "o", "P", "p", "Q", "q", "R", "r", "S", "s", "T", "t", "U", "u", 
                "V", "v", "W", "w", "X", "x", "Y", "y", "Z", "z", "!", "@", "#", "$", "%", "^", "&", "*", "_" ]
                //chooses random alphanumeric character, options are lowercase or uppercase, letter, numbers, or special characters
                var char =  Math.floor((Math.random() * charArray.length));
                console.log(charArray[char])
                //adds to password
                password += charArray[char];
            }
            console.log(password)
            alert("Your new password is " + password)
        }
    }
}