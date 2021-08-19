const $ = e => document.querySelector(e)
var audio = $('.script-audio')

fetch('dict/dict.txt').then(b=>b.text()).then(text => {
    var wordList = {}
    for(var line of text.split('\n')) {
        var split = line.split(' ')
        wordList[split[0]] = split[1].split(',')
    }
    window.wordList = wordList
    init()
})

var selectedPerson = 'TRUMP'

const init = () => {
    rigEditor()
    rigPlayButton()
    rigPersonPicker()
}

const rigPersonPicker = () => {
    var picker = $('.person-picker')
    for(var person of Object.keys(wordList))
        picker.innerHTML += `<option ${person}>${person}</option>`
    picker.addEventListener('change', event => {
        selectedPerson = picker.value
    })
}


const rigEditor = () => {
    var editor = $('.editor-textbox')
    editor.addEventListener('keyup', (event) => {
        if(event.key.toLowerCase() != event.key.toUpperCase()) 
            return null
        var script = parseScript(editor.textContent)
        var editorHTML = highlight(script)
        if(event.key == " ") 
            editorHTML += "&nbsp;"
        editor.innerHTML = editorHTML
        goToEnd(editor)
    })
}

const rigPlayButton = () => {
    
    $('.play-button').addEventListener('click', () => {
        playTrack()
    })
}

const parseScript = scriptString => {
    var split = scriptString.toLowerCase().match(RegExp(/\w+/g))
    var script = []
    for(var word of split) {
        if(wordList[selectedPerson].includes(word))
            script.push( { word, exists: true, color: '#5bed74' } )
        else
            script.push( { word, exists: false, color: '#e32b19' } )
    }
    window.parsedScript = script
    return script
}
const highlight = script => {
    var code = ''
    for(var word of script)
        code += ` <span style='color:${word.color}'>${word.word}</span>`
    return code
}

const playTrack = () => {
    window.wordQueue = []
    for(var word of parsedScript.filter(e=>e.exists)) {
        var wordDir = `dict/${selectedPerson}/${word.word}.wav`
        fetch(wordDir)
        window.wordQueue.push(wordDir)
    }
}

// constantly check playing status of word to queue the next
setInterval(() => {
    var donePlaying = audio.currentTime == audio.duration && audio.duration != NaN
    if(donePlaying) {  
        var word = wordQueue.splice(0,1)[0]
        if(word != undefined) playWord(word)
    } 
}, 10)

const playWord = word => {
    console.log(word)
    audio.src = word
    audio.currentTime = 0
    audio.play()
}

// stackoverflow 1125292
function setEndOfContenteditable(contentEditableElement) {
    var range, selection;
    range = document.createRange();//Create a range (a range is a like the selection but invisible)
    range.selectNodeContents(contentEditableElement);//Select the entire contents of the element with the range
    range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
    selection = window.getSelection();//get the selection object (allows you to change selection)
    selection.removeAllRanges();//remove any selections already made
    selection.addRange(range);//make the range you have just created the visible selection
}

const goToEnd = element => {
    var range = document.createRange()
    range.selectNodeContents(element)
    range.collapse(false)
    var selection = getSelection()
    selection.removeAllRanges()
    selection.addRange(range)
}
