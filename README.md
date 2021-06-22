# Typing Speed Test-JS
![GitHub all releases](https://img.shields.io/github/downloads/GaganpreetKaurKalsi/TypingSpeedTest-JS/total)
![GitHub language count](https://img.shields.io/github/languages/count/GaganpreetKaurKalsi/TypingSpeedTest-JS) 
![GitHub top language](https://img.shields.io/github/languages/top/GaganpreetKaurKalsi/TypingSpeedTest-JS?color=yellow) 
![Code Climate issues](https://img.shields.io/codeclimate/issues/GaganpreetKaurKalsi/TypingSpeedTest-JS)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/GaganpreetKaurKalsi/TypingSpeedTest-JS)
![GitHub forks](https://img.shields.io/github/forks/GaganpreetKaurKalsi/TypingSpeedTest-JS?style=social)
![GitHub Repo stars](https://img.shields.io/github/stars/GaganpreetKaurKalsi/TypingSpeedTest-JS?style=social)

![Github thumbnail](https://user-images.githubusercontent.com/54144759/122932054-0a339680-d38b-11eb-8123-dc8703770109.JPG)

<p align = "center"><b>An app made in HTML, CSS and JavaScript to test typing speed</b></p>


## About
Typing speed test app made in HTML, CSS, and JavaScript. There are 2 modes :- **Time mode** and **Infinity mode**. <br>In time mode you need to write as much as possible before the time runs out. <br>In infinity mode you have to complete the given passage in the minimum time possible.

## Languages/Technologies
- HTML
- CSS 
- Vanilla JS
- VScode (for editing)
- Netlify (for hosting)

## Features
- **Time Mode** - 1min, 2min, 3min
- **Infinity Mode**
<br>

## Link to website
https://typingspeedtest-js.netlify.app/


## Demo Video
Here is a 1min video of the working app

https://user-images.githubusercontent.com/54144759/122924847-d9039800-d383-11eb-9833-291f53324a17.mp4

## Difficulties
Event Listeners like keyup, keydown and keypress doesn't work on android. In my project I had to detect space and backspace which broke when I opened the app in browser of my android. The code worked fine on desktop browser. For making it work on android I had to change a lot of my code, had to rely on input event for space detection. It was easy to work with keyup and keydown. Changing to input event took a lot of efforts.

Link to stackoverflow discussion on the same issue :-  <br>
https://stackoverflow.com/questions/50215712/javascript-block-backspace-on-text-input-on-android <br>
https://stackoverflow.com/questions/30743490/capture-keys-typed-on-android-virtual-keyboard-using-javascript
