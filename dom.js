var body = document.body
console.log(body)

var h1 = document.body.childNodes[3]
console.log(h1)

var helloWorld = h1.innerHTML
console.log(helloWorld)

h1.innerHTML = 'Hello Universe'

console.dir(h1)

var helloH1 = document.getElementById('hello')
console.log(helloH1)

var navItems = document.getElementsByClassName('nav-item')
console.log(navItems)

//Recommended way to access nodes in modern browsers
var navItems = document.querySelectorAll('.nav-item')
var helloH1 = document.querySelectorAll('#hello')
console.log(helloH1)

//Convert NodeList to an Array data type
// console.log(Array.from(navItems).includes('li'))


// navItems.forEach(function(navItem) {
//     // console.dir(navItem)
//     // console.log(navItem.tagName)
//     if (navItem.tagName === 'LI' && navItem.classList.contains('active')) {
//         //navItem.style.color = 'red'
//         navItem.classList.add('red')
//     }
// })

navItems.forEach(function(navItem) {

    navItem.addEventListener('mouseover', function(e) {
        e.target.classList.add('red')
    })

    navItem.addEventListener('mouseout' , function(e) {
        e.target.classList.remove('red')
    })

    navItem.addEventListener('click' , function(e) {
        e.target.remove()
    })
})

var navItems = document.querySelectorAll('.nav-item')

navItems.forEach(function(navItem) {
    console.log(navItem.className)
    console.log(navItem.tagName)
    console.log(navItem.getAttribute('title'))
    console.log(navItem.setAttribute('title', 'FOO'))
    console.log(navItem.getAttribute('data-details'))
    console.log(navItem.classList)
    console.log(navItem.id)
    navItem.innerHTML = '<a href="http://google.com">' + navItem.getAttribute('data-details') + '</a>'
    console.log(navItem.innerHTML)
})



var searchInput = document.querySelector('#search')


searchInput.setAttribute('value', 'pizza parties in my area')
searchInput.value = 'party'

alert(searchInput.value)
