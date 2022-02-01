import '../Assets/Css/History.css';
import Aos from 'aos';

function History() {
  Aos.init()
  return (
    <div>
      <center>
        <h1>Historical events</h1>
      </center>

      <div className="timeline">
        <div className="timeline-left">
          <div className="card left" data-aos="fade-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae beatae reiciendis voluptates labore! Recusandae assumenda deleniti, ut sequi ratione rerum non corrupti illum nemo facere pariatur hic, eveniet libero vero!</div>
        </div>
        <div className="timeline-right">
          <div className="card right" data-aos="fade-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae beatae reiciendis voluptates labore!</div>
        </div>
        <div className="timeline-left">
          <div className="card left" data-aos="fade-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae beatae reiciendis voluptates labore!</div>
        </div>
        <div className="timeline-right">
          <div className="card right" data-aos="fade-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae beatae reiciendis voluptates labore! Recusandae assumenda deleniti, ut sequi ratione rerum non corrupti illum nemo facere pariatur hic, eveniet libero vero!</div>
        </div>
      </div>

    </div>
  )
}

export default History;