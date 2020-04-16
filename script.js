// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"

const headerElement = document.querySelector(".article__header")
console.log(headerElement)

headerElement.textContent = "Welcome to the Jordan Blog"



// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.
const allHeaderElements = document.querySelectorAll(".article__header")
console.log("this is all of em", allHeaderElements)

// Loop through all elements in node list and add a class to each one individually
for(let i = 0; i < allHeaderElements.length; i++){
    allHeaderElements[i].classList.add("important")
}

// Obtain a reference the element with a class of dashed and remove it.
document.querySelector(".dashed").classList.remove("dashed")

// Obtain a reference the element with a class of article_footer and add the class of goldenrod it.
document.querySelector(".article__footer").classList.add("goldenrod")