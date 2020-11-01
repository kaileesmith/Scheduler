$(document).ready(function () {

    console.log(parseInt(moment().format('H')))

    // current date and added sizing for time blocks 
let currentDay = moment().format('MMMM Do YYYY')
$("#currentDay").text(currentDay)
$("span").addClass("time-block")
$("span").attr("style", "width: 75px")

// Avaliable hours
let times = [9, 10, 11, 12, 13, 14, 15, 16, 17]

// get item from local storage
times.forEach(time =>{
    let timeCheck = window.localStorage.getItem(time)

    // current hour to base where you are at in day
    let currentHour = moment().hour()

    console.log(currentHour)
    console.log(time)

    // conditional to decide if input is allowed and color coding for time sections
    if(currentHour > time) {
        $(`#${time}`).addClass("hour past")
        $(`#${time}`).attr("disabled", true)
    } else if (currentHour === time){
        $(`#${time}`).addClass("hour present")
    }else{
        $(`#${time}`).addClass("hour future")
    }

    if (timeCheck ===null){
        window.localStorage.setItem(time, "")
    } else if (timeCheck.length > 0) {
        $(`#${time}`).attr("value", window.localStorage.getItem(time))
    }
})


$("form").on("submit", function (e) {
    e.preventDefault()
    let time = e.target.querySelector("input").getAttribute("id")
    const text = e.target.querySelector("input").value

// allows saved input to add to storage
    window.localStorage.setItem(time, text)
})

})