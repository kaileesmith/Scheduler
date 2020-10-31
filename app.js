$(document).ready(function () {

    console.log(parseInt(moment().format('H')))

let currentDay = moment().format('MMMM Do YYYY')
$("#currentDay").text(currentDay)
$("span").addClass("time-block")
$("span").attr("style", "width: 75px")
$("button").text("Save")

let times = [9, 10, 11, 12, 13, 14, 15, 16, 17]

times.forEach(time =>{
    let timeCheck = window.localStorage.getItem(time)

    let currentHour = moment().hour()

    console.log(currentHour)
    console.log(time)

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


    window.localStorage.setItem(time, text)
})

})