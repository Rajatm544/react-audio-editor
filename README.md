# Audio Editor

-   An app to visualise audio files as waveforms, and to edit it in the browser!
-   The app is built using React.js(CRA) and [wavesurfer.js](https://wavesurfer-js.org/)
-   There are 2 routes in the app:
    -   The `/` route is used to upload the audio file
    -   The `/edit` route is used to edit the audio waveform
-   The varios controls included are as follows:
    -   play/pause
    -   replay
    -   trimming a particular section of the audio waveform
    -   zooming in/out using a slider
    -   volume level
    -   toggle switch
-   The app is deployed to [Netlify](https://www.netlify.com/) using continuous integration from the Github repo

## Deployment steps

-   Push all the code to this repo
-   Create a new site on Netlify, choose the correct repository
-   Set the `Build command` to be `CI= npm run build`
-   Set the `Publish directory`option to be `/build`
-   Choose a unique site name
-   Start deployment

## Tools used for this project

-   [React.js](https://reactjs.org/): A popular JS library for building user interfaces
-   [wavesurfer.js](https://wavesurfer-js.org/): A customizable audio waveform visualization, built on top of Web Audio API and HTML5 Canvas.
-   [Materialize CSS](https://materializecss.com/): A modern frontend framework, here it is used for the icons
-   [Netlify](https://www.netlify.com/): A platform to deploy web projects with easy-to-use CI tools.
