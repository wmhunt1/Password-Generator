
function generate_password()
{
    // prompts user for number of characters
    var input = prompt("Choose the number of characters")
    console.log(input)
    // checks if it's a number
    var numchars = parseInt(input)
    console.log(numchars)
    // lets you know if not a number
    if(isNaN(input))
    {
        alert ("Not a Number")
    }
    else
    {
        //checks if in range
        if (numchars < 2 || numchars > 100)
        {
            alert ("Invalid input")
        }
        else
        {
            //generates password based on desired length
            for (var i = 0; i < numchars; i++)
            {
                var digit = Math.floor((Math.random()*10))
                console.log(digit)
                // need to add letters and special characters with random for which one
                // need to put them alltogether in a string and post it.
            }
            //alert ("password generated")
        }
    }
}