// This function will take two arrays (lists)
// of numbers and return their Euclidean
// distance.
//
// That means if the arrays both have
// 2 numbers each, [a, b] and [c, d], it will
// return the distance between (a, b) and
// (c, d) on the coordinate plane.  It
// generalizes to higher dimensions as
// the lengths of the arrays increase.
//
// This serves as a concrete algorithm to
// compare the user's slider values to the slider
// values that each coping skill is optimized
// for.

function distance(vector1, vector2) {
  let sum = 0;
  for (let i = 0; i < vector1.length; i++) {
    let difference = vector2[i] - vector1[i];
    sum += (difference * difference);
  }
  return Math.sqrt(sum);
}

// This function uses the distance function
// to rank how close each coping skill's
// slider values is to the user's mental state.
function search(query, db) {
  let results = [];
  for (let i = 0; i < db.length; i++) {
    const distanceToQuery = distance(query, db[i].vector);
    const entry = Object.assign({"distanceToQuery": distanceToQuery}, db[i]);
    //console.log(entry);
    results.push(entry);
  }
  results.sort((a, b) => a.distanceToQuery - b.distanceToQuery);
  return results;
}

// send an HTTP request to get the JSON.
// save it in the copingSkills variable.
let copingSkills = db.copingSkills;
/*
let request = new XMLHttpRequest();
request.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
     console.log(request.responseText);
     let response = JSON.parse("{'coding': 5}");
     //copingSkills = response.copingSkills;
   }
}
request.open("GET", "db.json", false);
request.send();
*/
//console.log(search([0, 0, 0, 0], copingSkills));

//welcome to no mans land. this aint your mama's javascript. nothing is labeled. there are no more comments. good luck trying to figure out what anything does. you will never be able to
let results;

function go() {
  const tension = document.getElementById("tension");
  const diversion = document.getElementById("diversion");
  const social = document.getElementById("social");
  const cognitive = document.getElementById("cognitive");
  
  const query = [
    tension.value,
    diversion.value,
    social.value,
    cognitive.value
  ].map(parseFloat);
  console.log(query);
  //console.log(search(query, copingSkills));
  results = search(query, copingSkills);
  console.log(results);
  renderActivities();
}

// Start Rendering page w/ data
const hero1 = document.getElementById("hero1");
const hero2 = document.getElementById("hero2");
function renderActivities() {
  hero1.style.display = "none";
  hero2.style.display = "block";
}
function goBack() {
  hero1.style.display = "block";
  hero2.style.display = "none";
}
function switchTab(tabNumber) {
  const tab1 = document.getElementById("tab1");
  const tab2 = document.getElementById("tab2");
  const tab3 = document.getElementById("tab3");
  const tab4 = document.getElementById("tab4");
  const tab5 = document.getElementById("tab5");

  const datatitle = document.getElementById("datatitle");

  tab1.classList.remove("is-active");
  tab2.classList.remove("is-active");
  tab3.classList.remove("is-active");
  tab4.classList.remove("is-active");
  tab5.classList.remove("is-active");

  switch(tabNumber) {
    case 1:
      tab1.classList.add("is-active");
      datatitle.innerHTML = results[0].Name;
      datasubtitle.innerHTML = results[0].Subtitle;
      break;
    case 2:
      tab2.classList.add("is-active");
      datatitle.innerHTML = results[1].Name;
      datasubtitle.innerHTML = results[1].Subtitle;
      break;
    case 3:
      tab3.classList.add("is-active");
      datatitle.innerHTML = results[2].Name;
      datasubtitle.innerHTML = results[2].Subtitle;
      break;
    case 4:
      tab4.classList.add("is-active");
      datatitle.innerHTML = results[3].Name;
      datasubtitle.innerHTML = results[3].Subtitle;
      break;
    case 5:
      tab5.classList.add("is-active");
      datatitle.innerHTML = results[4].Name;
      datasubtitle.innerHTML = results[4].Subtitle;
      break;
  }
}
document.getElementById("go").addEventListener("click", go);
