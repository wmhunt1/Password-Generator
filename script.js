
function generate_password()
{
    // prompts user for number of characters, took a while since I didn't have .value
    var input = document.getElementById("input").value
    // checks if it's a number
    var numofchars = parseInt(input)
    // lets you know if not a number
    if(isNaN(input))
    {
        document.getElementById("NP").innerHTML = "Warning: Input is not a number."
    }
    else
    {
        //checks if in range
        if (numofchars < 8 || numofchars > 100)
        {
            document.getElementById("NP").innerHTML = "Warning: Input is outside valid range."
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
                //adds to password
                password += charArray[char];
            }
            //posts to sheet. first is so new password message doesn't show up until generated.
            document.getElementById("NP_label").innerHTML = "Your new password is...";
            document.getElementById("NP").innerHTML = password;
        }
    }
}