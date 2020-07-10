
function generate_password()
{
    // prompts user for number of characters, took a while since I didn't have .value
    var input = document.getElementById("input").value
    // checks if it's a number
    var numofchars = parseInt(input)
    if(isNaN(input))
    {
        document.getElementById("NP").innerHTML = "Warning: Input is not a number."
    }
    else
    {
        //checks if in range
        if (numofchars < 8 || numofchars > 128)
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
                var charArray = []
                //sees if options are checked
                if (document.getElementById("lowercase").checked)
                {
                    //adds lowercase letters to array
                    charArray.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")
                }
                else
                {
                    //does nothing
                }
                if (document.getElementById("uppercase").checked)
                {
                    //adds uppercase letters to array
                    charArray.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z")
                }
                else
                {
                    //does nothing
                }
                if (document.getElementById("numbers").checked)
                {
                    //adds numbers to array
                    charArray.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9")
                }
                else
                {
                    //does nothing
                }
                if (document.getElementById("special").checked)
                {
                    //adds special characters to array
                    charArray.push(" ","!", "@", "#", "$", "%", "^", "&", "*", "_", "'", "(", ")", "+", ",","-",".","/",":",";","<",">","=","[","]","{","}","|","~")
                }
                else
                {
                    //does nothing
                }
                //checks to see if any options are selected.
                if (charArray.Length == undefined)
                {
                    password = "You didn't select any criteria."
                }
                else
                {
                    //generates random value from array
                    var char =  Math.floor((Math.random() * charArray.length));
                    //adds to password
                    password += charArray[char];
                }
            }
            //posts to sheet. first is so new password message doesn't show up until generated.
            document.getElementById("NP_label").innerHTML = "Your new password is...";
            document.getElementById("NP").innerHTML = password;
        }
    }
}