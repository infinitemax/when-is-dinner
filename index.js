
const text = document.getElementById("text")
const timeNow = document.getElementById("now")
const dinner = document.getElementById("dinner")
const dinnerTime = new Date("2024-05-01T19:00:00")
const now = new Date()
postscript = document.getElementById("postscript")



const timeLeft = dinnerTime-now 
const hours = Math.floor(timeLeft / 1000 / 60 /60)
const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

const getHourWord = (hours) => {
    if (hours > 1 || hours === 0) {
        return "hours"
    }
    if (dinnerTime < now && hours === -1) {
        return "hours"
    }
    return "hour"
}
const getMinWord = (minutes) => {
    if (minutes === 1) {
        return "minute"
    }
    return "minutes"
}

const getTitleWord = () => {
    if (dinnerTime < now) {
        return "since"
    }
    return "until"
}

const titleWord = document.getElementById("titleWord")






if (dinnerTime > now) {
    text.innerHTML = `${hours} ${getHourWord(hours)} and ${minutes} ${getMinWord(minutes)}` 
    timeNow.innerHTML = now
    dinner.innerHTML = dinnerTime
}

// if (dinnerTime === now) {
//     const title = 
// }

if (dinnerTime < now) {
    


    titleWord.innerHTML = `since`
    text.innerHTML = `${Math.abs(hours+1)} ${getHourWord(hours)} and ${Math.abs(minutes)} ${getMinWord(minutes)}`
    postscript.innerHTML = ` began?`
}