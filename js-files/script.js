var samples = [
    "The Patronus is the most famous defensive charm. The aim is to produce a protector, which takes the form of an animal. The exact form of the Patronus will not be apparent until the spell has been successfully cast. It is the only spell effective against Dementors. The majority of witches and wizards are unable to produce Patronuses and to do so is generally considered a mark of superior magical ability.",
    "They can develop under a variety of conditions within these climatic limits, and the kind of soil, plant, and animal life differs according to the extremes of environmental influences. In cool, high-latitude subpolar regions, forests are dominated by hardy conifers like pines, spruces, and larches. A growing period of 100 to 200 days allows deciduous forests to be dominated by oaks, elms, birches, maples, beeches, and aspens.",
    "I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.",
    "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
    "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."
]
var infinityPara = "The Patronus is the most famous defensive charm. The aim is to produce a protector, which takes the form of an animal. The exact form of the Patronus will not be apparent until the spell has been successfully cast. It is the only spell effective against Dementors. The majority of witches and wizards are unable to produce Patronuses and to do so is generally considered a mark of superior magical ability.Since he had last seen it, the gargoyle guarding the entrance to the headmaster’s study had been knocked aside; it stood lopsided, looking a little punch-drunk, and Harry wondered whether it would be able to distinguish passwords anymore.They clambered over him and onto the spiral stone staircase that moved slowly upward like an escalator. Harry pushed open the door at the top.He had one, brief glimpse of the stone Pensieve on the desk where he had left it, and then an earsplitting noise made him cry out, thinking of curses and returning Death Eaters and the rebirth of Voldemort.I need the place where everything is hidden, Harry begged of it inside his head, and the door materialized on their third run past.I’m putting the Elder Wand, back where it came from. It can stay there. If I die a natural death like Ignotus, its power will be broken, won’t it? The previous master will never have been defeated. That’ll be the end of it."

localStorage.setItem("minuteValue", 1)


// Final Scripts
document.querySelector(".infinity-para").innerText = infinityPara

function toggleVisibility(){
    var options = document.querySelector(".test-options").querySelectorAll(".option")
    options.forEach(option => {
        var present = option.classList.contains("hide")
        if(present == true){
            option.classList.remove("hide")
            document.querySelector(".show-time-modes").classList.add("selected")
            if(window.innerWidth<=800){
                document.querySelector(".infinity-mode").classList.add("hide")
            }
        }
        else{
            option.classList.add("hide")
            document.querySelector(".show-time-modes").classList.remove("selected")
            if(window.innerWidth<=800){
                document.querySelector(".infinity-mode").classList.remove("hide")
            }
        }
    });
}

document.querySelector(".show-time-modes").addEventListener("click", toggleVisibility)


var updateClock = function(time){
    console.log(time)
    document.querySelector("#clock-time-mode").innerHTML = `<p>${time} <span class="mini"><br>min</span></p>`
    document.querySelector("#timer-minute").innerText = "0" + time.toString()
    minuteValue = time
    localStorage.setItem("minuteValue", time)
    setDefault()
}
document.querySelector("#minute1").addEventListener("click",()=>{updateClock(1)} , false)
document.querySelector("#minute2").addEventListener("click", ()=>{updateClock(2)}, false)
document.querySelector("#minute3").addEventListener("click", ()=>{updateClock(3)}, false)

function setDefault(){
    document.querySelector("#timer-wpm").innerText = "0"
    document.querySelector("#timer-cpm").innerText = "0"
    document.querySelector("#timer-accuracy").innerText = "0"
    document.querySelector(".time-mode-wrapper").querySelector(".para-type").innerText = infinityPara
    document.querySelector(".time-mode-wrapper").querySelector(".type-area").value = ""
    document.querySelector(".time-mode-wrapper").querySelector(".type-area").disabled = false
    document.querySelector(".type-here-div").style.visibility = "visible"
    modifiedpara = infinityPara
    minusString = ""
    typingStarted = false
}
var minuteValue = 1
var secondValue = 0
var ticktock
function countdownTimer(){
    if(secondValue==0){
        minuteValue = minuteValue-1
        secondValue = 59
    }
    else{
        secondValue = secondValue - 1
    }
    
    if(secondValue<10 && minuteValue<10){
        document.querySelector(".min").innerText = "0"+minuteValue
        document.querySelector(".sec").innerText = "0"+secondValue
    }
    else if(secondValue<10 && minuteValue>=10){
        document.querySelector(".min").innerText = minuteValue
        document.querySelector(".sec").innerText = "0"+secondValue
    }
    else if(minuteValue<10 && secondValue>=10){
        document.querySelector(".min").innerText = "0"+minuteValue
        document.querySelector(".sec").innerText = secondValue
    }
    else{
        document.querySelector(".min").innerText = minuteValue
        document.querySelector(".sec").innerText = secondValue
    }
    if(minuteValue==0 && secondValue == 0){
        clearInterval(ticktock)
        timeUp()
    }
}

function runTimer(){
    ticktock = setInterval(countdownTimer, 1000)
}

var typingStarted = false
document.querySelector(".type-area").addEventListener("focus", ()=>{
    if(typingStarted == false){
        typingStarted = true
        document.querySelector(".type-here-div").style.visibility = "hidden"
        runTimer()
    }
})

function resetTimeMode(){
    typingStarted = false
    clearInterval(ticktock)
    document.querySelector(".type-here-div").style.visibility = "visible"
    document.querySelector(".para-type").innerHTML = infinityPara
    var textarea = document.querySelector(".type-area")
    textarea.style.borderColor = "#A1A1AA"
    textarea.value = ""
    textarea.disabled = false
    minuteValue = localStorage.getItem("minuteValue")
    if(minuteValue == undefined || minuteValue == null){
        minuteValue = 1
    }
    secondValue = 0
    document.querySelector(".min1").querySelector(".min").innerText = "0" + minuteValue.toString()
    document.querySelector(".min1").querySelector(".sec").innerText = "00"
    document.querySelector("#clock-time-mode").innerHTML = `<p>${minuteValue} <span class="mini"><br>min</span></p>`
    document.querySelector(".error-div").querySelector(".error").innerText = ""  
    document.querySelector("#timer-wpm").innerText = "0"
    document.querySelector("#timer-cpm").innerText = "0"
    document.querySelector("#timer-accuracy").innerText = "0"
    modifiedpara = infinityPara
    minusString = ""
    mistakeCount = 0
}

function clearResult(){
    document.querySelector(".result").querySelector("wpm") = ""
    document.querySelector(".result").querySelector("accuracy") = ""
}
document.querySelector(".reset-time-mode").addEventListener("click", resetTimeMode)


// Reads the para written by the user and changes color of the textbox accordingly
function checkUserInput(){

    var para = document.querySelector(".para-type").innerText
    var userInput = document.querySelector(".type-area").value.replace(minusString, '')
    if(userInput[userInput.length-1]===" "){
        handleSpace()
        return
    }
    console.log("User Input : " + userInput)
    let startword = modifiedpara.substr(0,modifiedpara.indexOf(' ')+1);
    console.log(`Start Word : ${startword} Length : ${startword.length}`)
    if(document.querySelector(".type-area").value == ""){
        document.querySelector(".type-area").style.borderColor = "#A1A1AA"
        document.querySelector(".para-type").innerText = infinityPara
    }
    else if(startword.includes(userInput)){
        document.querySelector(".type-area").style.borderColor = "#F97316"
        text = modifiedpara
        text = text.replace(userInput, '<span class="highlight">'+userInput +'</span>')
        document.querySelector(".para-type").innerHTML = text
    }
    else{
        document.querySelector(".type-area").style.borderColor = "#DC2626"
    }
}
document.querySelector(".type-area").addEventListener("input",checkUserInput)

var modifiedpara = infinityPara // To be shown to user for typing with words deleted that has already been typed
var minusString = "" // String to be minused from the total typed by the user in the textarea to know the currently typed word 



function handleSpace(){

        userType = document.querySelector(".type-area").value // data typed by user
        var deleteData = userType.replace(minusString,''); // getting currently typed word
        let startword = modifiedpara.substr(0,modifiedpara.indexOf(' ')+1); // Getting the starting word from the paragraph
    
        if(startword == deleteData){  // If the starting word is equal to the word currently typed by the user
            modifiedpara = modifiedpara.replace(deleteData, '') // delete the word from the paragraph
            document.querySelector(".para-type").innerHTML = modifiedpara //show it in the para section
            minusString = userType // Setting the string typed by user to minusString variable for future
        }
        else if (startword != deleteData && userType != deleteData){

            document.querySelector(".error-bundle").innerHTML = document.querySelector(".error-bundle").innerHTML +`<span class="error-word">${deleteData}</span>`
            document.querySelector(".type-area").value = minusString
            mistakeCount+=1
            console.log("Total Mistakes : "+mistakeCount)
            modifiedpara.replace(['<span class="highlight">', '</span>'],'')
            document.querySelector(".para-type").innerHTML = modifiedpara
        }
        else{
            document.querySelector(".type-area").value = minusString
        }
}

// Space was being handled fine using keyup but was not being supported by android. So I handled space using input event by comparing the last char entered
document.querySelector(".type-area").onkeydown = (e)=>{

    // if(e.which === 32 || e.key === 'Space'){
    //     alert("Space Pressed")
    //     userType = document.querySelector(".type-area").value // data typed by user
    //     var deleteData = userType.replace(minusString,''); // getting currently typed word
        

    //     let startword = modifiedpara.substr(0,modifiedpara.indexOf(' ')+1); // Getting the starting word from the paragraph
    
    //     if(startword == deleteData){  // If the starting word is equal to the word currently typed by the user
    //         modifiedpara = modifiedpara.replace(deleteData, '') // delete the word from the paragraph
    //         document.querySelector(".para-type").innerHTML = modifiedpara //show it in the para section
    //         minusString = userType // Setting the string typed by user to minusString variable for future
    //     }
    //     else{
    //         document.querySelector(".error-bundle").innerHTML = document.querySelector(".error-bundle").innerHTML +`<span class="error-word">${deleteData}</span>`
    //         document.querySelector(".type-area").value = minusString
    //         mistakeCount+=1
    //         console.log("Total Mistakes : "+mistakeCount)
    //         modifiedpara.replace(['<span class="highlight">', '</span>'],'')
    //         document.querySelector(".para-type").innerHTML = modifiedpara
    //     }
    // }
    // // To prevent the correct string entered from being deleted
    
}

document.querySelector(".type-area").addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        // prevent default behaviour
        document.querySelector(".type-area").value = minusString
        event.preventDefault();
        return false;
    }
    if(event.key === "Backspace" || event.keyCode == 8){
        var userTyped = document.querySelector(".type-area").value
        
        if(userTyped == minusString || minusString.includes(userTyped)){
            event.preventDefault();
            return false;
            // document.querySelector(".type-area").value = minusString
        }
        
    }
});

function calculateWPM(data, totalMin){
    var charcount = data.length
    if(charcount===undefined){
        return (data/5)/totalMin
    }
    return wpm = (charcount/5)/totalMin
}

function calculateCPM(data, totalMin){
    var charcount = data.length
    if(charcount == undefined){
        return wpm = (data)/totalMin
    }
    return wpm = (charcount)/totalMin
}

function calculateAccuracy(correctChars, totalChars){
    correctChar = correctChars.length
    if(correctChar == undefined){
        correctChar = correctChars
    }
    totalChar = totalChars.length
    if(totalChar == undefined){
        totalChar = totalChars
    }
    console.log("From Accuracy : ", correctChar, totalChar)
    return (correctChar/totalChar)*100
}

async function timeUp(){
    document.querySelector(".type-area").disabled = true
    document.querySelector(".showbox").style.visibility = "visible"
    // document.querySelector(".showbox").style.display = "flex"

    let myPromise = new Promise(function(myResolve, myReject) {
        setTimeout(function() { 
            myResolve(clearLoader); 
        }, 5000);
      });
    await myPromise.then((result)=>{clearLoader()})

    // setTimeout(clearLoader, 5000)
    var data = document.querySelector(".type-area").value
    var time = localStorage.getItem("minuteValue")
    if(time == undefined || time == null){
        time = 1
    }
    console.log("Timer Mode : " + time + "Minutes")

    var correct = minusString
    var error = document.querySelector(".error-bundle").innerText.replace("<span class='error-word'>", " ")
    error = error.replace("</span>", "")
    console.log(error)
    var total = correct+error
    console.log(total)
    document.querySelector("#timer-wpm").innerText = calculateWPM(minusString, time).toFixed(2)
    document.querySelector("#timer-cpm").innerText = calculateCPM(total, time).toFixed(2)
    document.querySelector("#timer-accuracy").innerText = calculateAccuracy(correct, total).toFixed(2)
}

function clearLoader(){
    document.querySelector(".showbox").style.visibility = "collapse"
    // document.querySelector(".showbox").style.display = "none"
}


// INFINITY MODE SCRIPTS
var random = Math.floor((Math.random() * 5) + 1)-1;
document.querySelector(".infinity-user-type").innerText = samples[random];

document.querySelector(".sample-container").addEventListener("click", (callback)=>{
    document.querySelector(".infinity-user-type").innerText = callback.target.innerText;
    for(i=0;i<samples.length;i++){
        if(samples[i] == callback.target.innerText){
            random = i
        }
    }
    reset()
})

function start(){
    document.querySelector(".infinity-type-area").disabled = false
    document.querySelector(".start").disabled = true
    clocking = setInterval(timer, 1000);
}

function reset(){
    document.querySelector(".infinity-type-area").disabled = true
    document.querySelector(".start").disabled = false
    document.querySelector(".infinity-type-area").style.borderColor = "#A1A1AA"
    clearInterval(clocking)
    document.querySelector(".infinity-min").innerText = "00"
    document.querySelector(".infinity-sec").innerText = "00"
    min = 0
    sec = 0
    document.querySelector(".infinity-type-area").value = ""
    document.querySelector("#timer-wpm-inf").innerText = "0"
    document.querySelector("#timer-cpm-inf").innerText = "0"
    document.querySelector("#timer-accuracy-inf").innerText = "0"
    document.querySelector(".user-type").innerText = samples[random]
}
document.querySelector(".start").addEventListener("click", start)
document.querySelector(".reset").addEventListener("click", reset)

var min = 0
var sec = 0

function timer(){
    if(sec===59){
        min = min+1
        sec = 0
    }
    else{
        sec = sec + 1
    }
    if(sec<10 && min<10){
        document.querySelector(".infinity-min").innerText = "0"+min
        document.querySelector(".infinity-sec").innerText = "0"+sec
    }
    else if(sec<10 && min>=10){
        document.querySelector(".infinity-min").innerText = min
        document.querySelector(".infinity-sec").innerText = "0"+sec
    }
    else if(min<10 && sec>=10){
        document.querySelector(".infinity-min").innerText = "0"+min
        document.querySelector(".infinity-sec").innerText = sec
    }
    else{
        document.querySelector(".infinity-min").innerText = min
        document.querySelector(".infinity-sec").innerText = sec
    }
}


var clocking;
var mistakeCount = 0;
var totalCharsInf = 0;
async function checkUserInputInfinity(){
    totalCharsInf +=1
    var para = samples[random]
    var userInput = document.querySelector(".infinity-type-area").value
    if(userInput == ""){
        document.querySelector(".infinity-type-area").style.borderColor = "#A1A1AA"
        document.querySelector(".infinity-user-type").innerText = samples[random]
    }
    else if(para == userInput){
        // Typing completed
        document.querySelector(".infinity-type-area").style.borderColor = "#16A34A"
        text = samples[random]
        text = text.replace(userInput, '<span class="highlight-final">'+userInput +'</span>')
        document.querySelector(".infinity-user-type").innerHTML = text
        document.querySelector(".infinity-type-area").disabled = true
        document.querySelector(".showbox").style.visibility = "visible"
        let myPromise = new Promise(function(myResolve, myReject) {
            setTimeout(function() { 
                myResolve(clearLoader); 
            }, 5000);
        });
        await myPromise.then((result)=>{clearLoader()})
            result()
        }
    else if(para.includes(userInput)){
        document.querySelector(".infinity-type-area").style.borderColor = "#EA580C"
        text = samples[random]
        text = text.replace(userInput, '<span class="highlight">'+userInput +'</span>')
        document.querySelector(".infinity-user-type").innerHTML = text
    }
    else{
        if(document.querySelector(".infinity-type-area").style.borderColor == "#EA580C"){
            mistakeCount+=1
        }
        document.querySelector(".infinity-type-area").style.borderColor = "#DC2626"
    }
}

document.querySelector(".infinity-type-area").addEventListener("input", checkUserInputInfinity)

function result(){
    // var charcount = samples[random].length
    var totaltime = parseInt(min)+parseInt(sec)/60
    var wpm = calculateWPM(samples[random], totaltime).toFixed(2)
    var cpm = calculateCPM(totalCharsInf, totaltime).toFixed(2)
    var accuracy = calculateAccuracy(samples[random], totalCharsInf).toFixed(2)
    document.querySelector("#timer-wpm-inf").innerText = wpm
    document.querySelector("#timer-cpm-inf").innerText = cpm
    document.querySelector("#timer-accuracy-inf").innerText = accuracy
    clearInterval(clocking)
}