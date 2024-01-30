"use strict";
const codeEl = document.getElementById("code");
const nameEl = document.getElementById("name");
const progressEl = document.getElementById("progress");
const searchEl = document.getElementById("search");
const courseEl = document.getElementById("coursesList");

window.onload = init;

// Hämta information från API
async function init(){
    try {
        const response = await fetch ("https://dahlgren.miun.se/ramschema_ht23.php");
        const courses = await response.json();
        showCourses(courses);

        //Sök funktion
        searchEl.addEventListener("input", function(){
            searchEl.addEventListener("input", function(){
                let filtered = courses.filter(item => item.code.toLowerCase().includes(searchEl.value) || item.coursename.toLowerCase().includes(searchEl.value));
                courseEl.innerHTML = ""
                showCourses(filtered);
            });
        });
        //Sortera enligt kurskod
        codeEl.addEventListener("click", function() {
            courses.sort((a, b)=> (a.code > b.code)? 1 : -1);
            courseEl.innerHTML = ""
            showCourses(courses);
           });

           //Sortera enligt kursnamn
           nameEl.addEventListener("click", function() {
            courses.sort((a, b)=> (a.coursename > b.coursename)? 1 : -1);
            courseEl.innerHTML = ""
            showCourses(courses);
           });

           //Sortera enligt progression
           progressEl.addEventListener("click", function() {
            courses.sort((a, b)=> (a.progression > b.progression) ? 1 : -1);
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




