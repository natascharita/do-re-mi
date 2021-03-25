# Pre-work - *Memory Game*

DO RE MI is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Natascha

Time spent: 8 hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image) //changed size and borders and added text
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!


## Video Walkthrough

Here's a walkthrough of implemented user stories:
<img src="http://g.recordit.co/hqHd1FVpQ9.gif" width=250><br>

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
https://www.w3schools.com/jsref/jsref_push.asp
https://noobnotes.net/do-re-mi-sound-of-music/
https://www.elated.com/nested-arrays-in-javascript/
https://gist.github.com/sahithyen/b20922c902620e5bd6fd926263a93836
https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio
https://www.rapidtables.com/web/css/css-color.html
https://www.w3schools.com/jsref/jsref_push.asp

My friends beta tested and provided moral support.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
The biggest challenge I ran into was trying to figure out how to change the pattern to one of the patterns I had stored in a nested array. I had created a function that included trying to directly reassign the array variable to a new variable. When it didn't work, I separated the assignment from the rest of the code to test it, and discovered that it wasn't a viable solution. I did some google searched to learn a little more about how to change the value of the array and also how to use nested arrays. I eventually settled on clearing the last pattern, and using .push to add the new pattern.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
I would like to learn more about using multiple files to organize more complex projects, because it definitely started to feel a bit crowded as I added more features. I also imagine that it would improve the reusability of code, if I wanted to make a variety of games with similar mechanics! I'm also just generally curious about what kind of stuff is achievable in various technologies.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
Midway through the project I had the idea to make this into a musical learning game to teach simple melodies. If I had a few more hours to work on this project I would add in variable note timing (quarter, half, whole), more notes. Another feature I would want to add would be the option to repeat the last section, or move onto the next. I would also want to play the complete melody at the end, so that players could test their memory of the complete melody. 


## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.