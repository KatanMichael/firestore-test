


function addUserToDB(inputName,inputAge)
{
    var url = "https://michael-firestorer-test.herokuapp.com//fights"

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", url, true ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;

}