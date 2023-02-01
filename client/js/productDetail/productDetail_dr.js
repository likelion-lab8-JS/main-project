

const coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const folded = this.parentElement.nextElementSibling;
    if (folded.style.display === "block") {
      folded.style.display = "none";
    } else {
      folded.style.display = "block";
    }
  });
}

const collt = document.getElementsByClassName("collapsible-table");
let j;

for (j = 0; j < collt.length; j++) {
  collt[j].addEventListener("click", function() {
    this.classList.toggle("active");
    const folded = this.parentElement.parentElement.parentElement.parentElement.nextElementSibling;
    if (folded.style.display === "block") {
      folded.style.display = "none";
    } else {
      folded.style.display = "block";
    }
  });
}