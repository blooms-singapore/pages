const readMoreBtn = document.querySelectorAll(".read-more-button");
const text = document.querySelector(".show-hide-text");

for (let i = 0; i < readMoreBtn.length; i++) {
  readMoreBtn[i].addEventListener("click", (e) => {
    var targetElement = e.target;
    let prevSibling = targetElement.previousElementSibling;
    let closestSiblingWithClassName;

    while (prevSibling) {
      if (prevSibling.classList.contains("show-hide-text")) {
        closestSiblingWithClassName = prevSibling;
        break;
      }

      prevSibling = prevSibling.previousElementSibling;
    }

    console.log("closestSiblingWithClassName", closestSiblingWithClassName);
    console.log("targetElement", targetElement);
    console.log("prevSibling", prevSibling);
    console.log("text", text);

    closestSiblingWithClassName.classList.toggle("show-more");
    if (targetElement.innerText === "Show More") {
      targetElement.innerText = "Show Less";
    } else if (targetElement.innerText === "Show Less") {
      targetElement.innerText = "Show More";
    }
  });
}

// readMoreBtn.addEventListener("click", (e) => {
//   var targetElement = e.target;
//   let prevSibling = targetElement.previousElementSibling;
//   let closestSiblingWithClassName;

//   while (prevSibling) {
//     if (prevSibling.classList.contains("show-hide-text")) {
//       closestSiblingWithClassName = prevSibling;
//       break;
//     }

//     prevSibling = prevSibling.previousElementSibling;
//   }

//   console.log("closestSiblingWithClassName", closestSiblingWithClassName);
//   console.log("targetElement", targetElement);
//   console.log("prevSibling", prevSibling);
//   console.log("text", text);

//   closestSiblingWithClassName.classList.toggle("show-more");
//   if (targetElement.innerText === "Read More") {
//     targetElement.innerText = "Read Less";
//   } else if (targetElement.innerText === "Read Less") {
//     targetElement.innerText = "Read More";
//   }

//   // text.classList.toggle("show-more");

//   // if (readMoreBtn.innerText === "Read More") {
//   //   console.log("inside read more###");
//   //   readMoreBtn.innerText = "Read Less";
//   // } else if (readMoreBtn.innerText === "Read Less") {
//   //   readMoreBtn.innerText = "Read More";
//   // }
// });

// const showHideReadMore = (e) => {
//   console.log("read more ....>>>>", e);
// };
