function Projects() {

    return (
        <div>
            <div class="slick-slider">

                <div class="full-card">

                    <div class="font-card roboto-card">
                        <h3 class="font--roboto">Text to Speech</h3>
                        <p class="font--roboto">
                            <div class="container mt-4 text-center">
                                <label for="voiceList">Select Voice:</label> <br />
                                <select id='voiceList'></select> <br /><br />
                                <label for="txtInput">Type here</label><br />
                                <input id='txtInput' /> <br/><br/>
                                    <button id='btnSpeak' class="explore-button btn btn-primary animation-on-hover">Speak!</button>
                                </div>
                                </p>
                            </div>
                            <div class="font-description">
                                <h2 class="font--robotoslab">Text<span class="font--roboto"> to Speech</span></h2>
                                <p class="font--roboto">This project allows you to convert text to speech in a single click. Just type what you want and it is converted to speech. Feel free to use it in other projects. This is just a demonstration of how this can be achieved via Vanilla JS.</p>
                            </div>
                            </div>
                    </div>
                </div>
           
            )
}

            export default Projects;