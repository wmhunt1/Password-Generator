
function generate_password()
{
    var input = prompt("Choose the number of characters")
    console.log(input)
    var numchars = parseInt(input)
    console.log(numchars)
    if(isNaN(input))
    {
        alert ("Not a Number")
    }
    else
    {
        if (numchars < 2 || numchars > 100)
        {
            alert ("Invalid input")
        }
        else
        {
            alert ("password generated")
        }
    }
}