const itemsRef = document.querySelectorAll('.item')
console.log(`Загалом у нас ${itemsRef.length} катeгорії:`)

itemsRef.forEach(item => {
    const categoryName = item.querySelector("h2").textContent;
    const quantity = item.querySelectorAll("ul li").length

    console.log(`У категорії ${categoryName} ${quantity} елементів`)
})
