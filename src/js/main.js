"use strict";

window.onload = init;
// Hämta information från API
async function init(){
    try {
        const response = await fetch ("https://dahlgren.miun.se/ramschema_ht23.php");
        const courses = await response.json();
        console.log(courses);
    } catch (error){
        console.log(error);
        document.getElementById("error").innerHTML = "<p>Något gick fel</p>"
    }
}