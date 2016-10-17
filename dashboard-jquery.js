
// 1. Count the number of records in the "Current Quarter Details" table.
// var records = document.querySelectorAll('table > tbody > tr')
var records = $('table > tbody > tr')
console.log(`Total Records: ${records.length}`)

// 2. Set each dashboard image to different images, one for each season. Make sure you also set the alt="" attribute with an appropriate description.
var images = $('img')
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
// console.log(images)
images.each(function(index) {
    // image.setAttribute('src', newImages[index].src)
    $(this).attr('src', newImages[index].src)
    $(this).attr('alt', newImages[index].alt)
    // image.setAttribute('alt', newImages[index].alt)
})

// 3. Below each dashboard image, there's a season/quarter name. Below those, there are three dots. Replace those three dots with a randomly generated number formatted as currency, like $12,589.00.

var dots = $('span.text-muted')
// console.log(dots)
dots.each(function(dot) {
    // console.log(dot)
    $(this).html(accounting.formatMoney(Math.random() * 1500 + 15000))
})

// dots.forEach(function(dot) {
//     // console.log(dot)
//     $(dot).html(accounting.formatMoney(Math.random() * 1500 + 15000))
// })


// 4. Change the currently selected left side menu item from Overview to Reports.
var overviewMenu = $('.active')
var menuList = $('ul.nav.nav-sidebar li')

menuList.each(function() {
    $(this).html().includes('Reports') ? $(this).addClass('active') : false
})

$(overviewMenu).removeClass('active')
// document.querySelectorAll()

// 5. Set the default search input value to "Q4 sales".
// var searchInput = $('form.navbar-form input')
$('form.navbar-form input').val('Q4 sales')
// console.dir(searchInput)


// 6. Add the "table-hover" class to the table. See the Bootstrap table docs.
$('table').addClass('table-hover')
// var table = document.querySelector('table')
// table.classList.add('table-hover')

// 7. Add the "success" class to the 7th - 10th row of the table, like: <tr class="success">...</tr>

$('table > tbody > tr').each(function(index) {
    index >= 6 && index < 10 ? $(this).addClass('success') : false
})

// 8. Change the table header names to: ID, First Name, Last Name, Department, Client.
var newHeader = ['ID', 'First Name', 'Last Name', 'Department', 'Client']

$('th').each(function(index) {
    $(this).html(newHeader[index])
})

// 9. Make an array of objects, each object representing a single row in the table. Remove the commas from the ID column and convert it to an actual Number data type. Example: [{id: 1001, firstName: 'Lorem', lastName: 'ipsum', department: 'dolor', client: 'sit'}]
var rows = $('tbody tr')

rows = $(rows).toArray().map(function(row) {
    return {
        id: Number($(row.children[0]).html().replace(',', '')),
        firstName: $(row.children[1]).html(),
        lastName: $(row.children[2]).html(),
        department: $(row.children[3]).html(),
        client: $(row.children[4]).html()
    }
})

console.log(rows)

// 10. Make each word in the table capitalized.
$('td').each(function() {
    $(this).addClass('text-capitalize')
})
