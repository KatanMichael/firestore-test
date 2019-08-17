


function addUserToDB(inputName,inputAge)
{
    var url = "/addRandomUser"
    var xmlHttp = new XMLHttpRequest();

    
    xmlHttp.open( "GET", url, true ); // false for synchronous request
    xmlHttp.setRequestHeader("name",inputName);
    xmlHttp.setRequestHeader("age",inputAge);
    xmlHttp.send();
    return xmlHttp.responseText;

}



