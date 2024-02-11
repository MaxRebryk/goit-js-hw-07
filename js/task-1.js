"use strict";

const categoryUl = document.querySelector("#categories");
const categoryAllLi = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoryUl.children.length}`);

categoryAllLi.forEach(categoryItem => {
  const categoryName = categoryItem.querySelector("h2").textContent;
  const categoryItemsElements = categoryItem.querySelectorAll('li').length;

  console.log(`Category: ${categoryName}`);
  console.log(`Number of items: ${categoryItemsElements}`);
},0);

