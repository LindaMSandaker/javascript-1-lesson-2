// We code it together

// 1. Select heading h2
// querySelector, querySelectorAll, getElementById

const heading2 = document.querySelector("h2"); // element=("someElement") using querySelector
console.log(heading2);

// 2. Select element with class .heading2

const headingByClass = document.querySelector(".heading2"); // class=(".someClass") using querySelector
console.log(headingByClass);

// 3. Select element with id #list using querySelector

const ulList = document.querySelector("#list"); // id=("#someId") using querySelector
console.log(ulList);

// 4. Select element with id #list using getElementById

const getList = document.getElementById("list"); // id=("someId") using getElementById
console.log(getList);

// 5. Select single li

const listItem = document.querySelector("li");
console.log(listItem);

// 6.
//  a. Select Multiple li's
//  b. Loop on the list items

const listItems = document.querySelectorAll("li");
console.log(listItems);

for (let i = 0; i < listItems.length; i++) {
    console.log(listItems[i].innerText);
}

// 7.
// a. select h1 element
// b. Change the color of that h1 to be purple
// c. Change the border to be 1px solid green
// d. Change background colour to be light gray
// e. Change the padding to be 1em ( remember that 1em is the base in px you put on the body )

const heading1 = document.querySelector("h1");
console.log(heading1);

heading1.style.color = "blue";
heading1.style.border = "5px solid green";
heading1.style.backgroundColor = "lightGray";
heading1.style.padding = "1em";


// Select a div element
// See if it has a class name
// Add a class name to div
// See class name now
// Add another class to div

const divElement = document.querySelector("div");
console.log(divElement);

divElement.classList.add("container");
console.log(divElement.className);

divElement.classList.add("second-class");
console.dir(divElement);

// 8. Select the h1 and change the innerText

const pageHeading = document.querySelector("h1");
pageHeading.innerText = "Patrik-pus 🐾 💓";

// 9. Loop through all the li element and add the innerText value to be value + "changed"

const allListItems = document.querySelectorAll("li");
for (let i = 0; i < allListItems.length; i++) {
    allListItems[i].innerText = allListItems[i].innerText + " Changed";
}

// 10. Change the innerHTML of the h1 to be updated using innerHTML

pageHeading.innerHTML = pageHeading.innerText + " Updated";

const pageHeading2 = document.querySelector("h1");
pageHeading2.innerHTML = "Patrik-pus 🐾 💓 (updated)";

// 11. Add some html to the div >> add <p><b>Bold text</b> not bold text</p>

const someContainer = document.querySelector("div");
someContainer.innerHTML = `
<p>
<b>Patrik was the sweetest cat you could wish to meet</b><br>
He had many friends and admirers both in and outside of his Kingdom<br>
May he rest in peace 💗
</p>`;

// 12. select the ul
//  a. get the existing HTML inside the ul element and assign it to a variable
//  a. create the new li HTML
//  b. set the uls new HTML to the existing HTML plus the new HTML

const list3 = document.querySelector("ul");

const existingHTML = list3.innerHTML;

const newHTMLLi = `<li>Hello! I'm the new list item; hamster</li>`;

list3.innerHTML = existingHTML + newHTMLLi;
list3.innerHTML += newHTMLLi;
