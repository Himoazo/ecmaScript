"use strict";
const nameEl = document.getElementById("code");
const courseEl = document.getElementById("coursesList");

window.onload = init;

// Hämta information från API
async function init(){
    try {
        const response = await fetch ("https://dahlgren.miun.se/ramschema_ht23.php");
        const courses = await response.json();
        showCourses(courses);
        nameEl.addEventListener("click", function() {
            courses.sort((a, b)=> (a.code > b.code)? 1 : -1);
            courseEl.innerHTML = ""
            showCourses(courses);
           });
        
    } catch (error){
        console.log(error);
        document.getElementById("error").innerHTML = "<p>Något gick fel</p>"
    }
}

// Skriva ut kursinfo till DOM
function showCourses(courses){
    
    
    //Loopa genom objectet
    for (let course of courses){
        courseEl.innerHTML += `
        <tr>
            <td> ${ course.code}</td>
            <td> ${ course.coursename}</td>
            <td> ${ course.progression}</td>
        </tr>
        `
    }
}




