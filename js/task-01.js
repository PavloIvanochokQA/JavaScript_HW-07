const itemsRef = document.querySelectorAll('.item');
console.log(`Number of categories:${itemsRef.length}`);
itemsRef.forEach(item => {
    const categoryName = item.querySelector("h2").textContent;
    const quantity = item.querySelectorAll("ul li").length;
    console.log(`Category: ${categoryName} Elements: ${quantity}`)
});