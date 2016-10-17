
// 1. Count the number of records in the "Current Quarter Details" table.
var records = document.querySelectorAll('table > tbody > tr')
console.log(records.length)

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
    dot.innerHTML = accounting.formatMoney(Math.random() * 3948 + 14857)
})


// 4. Change the currently selected left side menu item from Overview to Reports.


// 5. Set the default search input value to "Q4 sales".


// 6. Add the "table-hover" class to the table. See the Bootstrap table docs.


// 7. Add the "success" class to the 7th - 10th row of the table, like: <tr class="success">...</tr>


// 8. Change the table header names to: ID, First Name, Last Name, Department, Client.


// 9. Make an array of objects, each object representing a single row in the table. Remove the commas from the ID column and convert it to an actual Number data type. Example: [{id: 1001, firstName: 'Lorem', lastName: 'ipsum', department: 'dolor', client: 'sit'}]


// 10. Make each word in the table capitalized.
