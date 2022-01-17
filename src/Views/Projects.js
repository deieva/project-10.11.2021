import '../Assets/Css/Projects.css';
function Projects() {
    window.onload = () => {
    let voiceList = document.getElementById("voiceList");
    let txtInput = document.getElementById("txtInput");
    let btnSpeak = document.getElementById("btnSpeak");
    
    let tts = window.speechSynthesis;
    let voices = [];
    
    getVoices();
    
    if (speechSynthesis !== undefined) {
      speechSynthesis.onvoiceschanged = getVoices;
    }
    
    btnSpeak.addEventListener("click", () => {
      let toSpeak = new SpeechSynthesisUtterance(txtInput.value);
      let selectedVoiceName = voiceList.selectedOptions[0].getAttribute(
        "data-name"
      );
      voices.forEach((voice) => {
        if (voice.name === selectedVoiceName) {
          toSpeak.voice = voice;
        }
      });
      tts.speak(toSpeak);
    });
    
    function getVoices() {
      voices = tts.getVoices();
      voiceList.innerHTML = "";
      voices.forEach((voice) => {
        let item = document.createElement("option");
        item.textContent = voice.name;
        item.setAttribute("data-lang", voice.lang);
        item.setAttribute("data-name", voice.name);
        voiceList.appendChild(item);
      });
      voiceList.selectedIndex = 0;
    }

}
    return (
        <div className='projects-container'>
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
                                <p class="font--roboto">This project allows you to convert text to speech in a single click. Just type what you want and it is converted to speech.</p>
                            </div>
                            </div>
                    </div>
                </div>
           
            )
}

            export default Projects;