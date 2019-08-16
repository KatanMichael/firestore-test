


function addUserToDB(inputName,inputAge)
{
    var url = "https://michael-firestorer-test.herokuapp.com/addRandomUser"

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;

}