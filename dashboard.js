
// 1. Count the number of records in the "Current Quarter Details" table.
var records = document.querySelectorAll('table > tbody > tr')
console.log(`Total Records: ${records.length}`)

// 2. Set each dashboard image to different images, one for each season. Make sure you also set the alt="" attribute with an appropriate description.
var images = document.querySelectorAll('img')
newImages = [
    {
        src: '/img/img_300.jpg',
        alt: 'Winter Pic'
    },
    {
        src: '/img/img_301.jpg',
        alt: 'Spring Pic'
    },
    {
        src: '/img/img_302.jpg',
        alt: 'Summer Pic'
    },
    {
        src: '/img/img_304.jpg',
        alt: 'Fall Pic'
    }
]
images.forEach(function(image, index) {
    image.setAttribute('src', newImages[index].src)
    image.setAttribute('alt', newImages[index].alt)
})

// 3. Below each dashboard image, there's a season/quarter name. Below those, there are three dots. Replace those three dots with a randomly generated number formatted as currency, like $12,589.00.

var dots = document.querySelectorAll('span.text-muted')
// console.log(dots)
dots.forEach(function(dot) {
    // console.log(dot)
    dot.innerHTML = accounting.formatMoney(Math.random() * 1500 + 15000)
})


// 4. Change the currently selected left side menu item from Overview to Reports.
var overviewMenu = document.querySelector('.active')
var menuList = document.querySelectorAll('ul.nav.nav-sidebar li')

menuList.forEach(function(menu) {
    menu.innerHTML.includes('Reports') ? menu.classList.add('active') : false
})
// console.log(menuList)
// console.dir(overviewMenu)
overviewMenu.classList.remove('active')
// document.querySelectorAll()

// 5. Set the default search input value to "Q4 sales".
var searchInput = document.querySelector('form.navbar-form input')
searchInput.value = 'Q4 sales'
// console.dir(searchInput)


// 6. Add the "table-hover" class to the table. See the Bootstrap table docs.
var table = document.querySelector('table')
table.classList.add('table-hover')

// 7. Add the "success" class to the 7th - 10th row of the table, like: <tr class="success">...</tr>
var successRecords = document.querySelectorAll('table > tbody > tr')
// console.log(successRecords)

successRecords.forEach(function(record, index) {
    index >= 6 && index < 10 ? record.classList.add('success') : false
})

// 8. Change the table header names to: ID, First Name, Last Name, Department, Client.
var newHeader = ['ID', 'First Name', 'Last Name', 'Department', 'Client']

var tableHeader = document.querySelectorAll('th')
// console.log(tableHeader)
tableHeader.forEach(function(header, index) {
    header.innerHTML = newHeader[index]
})

// 9. Make an array of objects, each object representing a single row in the table. Remove the commas from the ID column and convert it to an actual Number data type. Example: [{id: 1001, firstName: 'Lorem', lastName: 'ipsum', department: 'dolor', client: 'sit'}]
var rows = document.querySelectorAll('tbody tr')
// var rowObjs  = []

rows = Array.from(rows).map(function(row) {
    return {
        id: Number(row.children[0].innerHTML.replace(',', '')),
        firstName: row.children[1].innerHTML,
        lastName: row.children[2].innerHTML,
        department: row.children[3].innerHTML,
        client: row.children[4].innerHTML
    }
})

console.log(rows)

// rows.forEach(function(row) {
//     var cols = row.childNodes
//     var obj = {}
//     var props = ['id', 'firstName', 'lastName', 'department', 'client']
//     var values = []
//
//     values = Array.from(cols).filter(function(col) {
//         return col.tagName === 'TD'
//     })
//         .map(function(col) {
//             return col.innerHTML.includes(',') ? Number(col.innerHTML.replace(',', '')) : col.innerHTML
//         })
//
//     props.forEach(function(prop, index){
//         obj[prop] = values[index]
//     })
//
//     rowObjs.push(obj)
// })
//
// console.log(rowObjs)


// 10. Make each word in the table capitalized.
var cells = document.querySelectorAll('td')
cells.forEach(function(cell) {
    cell.classList.add('text-capitalize')
})
