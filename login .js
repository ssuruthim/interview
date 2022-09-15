function Validate()
{
    if(   document.getElementById("text1").value == "demo"
       && document.getElementById("text2").value == "demo" )
    {
        alert( "validation succeeded" );
        location.href="run.html";
    }
    else
    {
        alert( "validation failed" );
        location.href="fail.html";
    }
}