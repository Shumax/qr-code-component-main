import './App.scss'
import code from '../assets/images/image-qr-code.png'

function App() {
  return (
    <section className="app">
      <div className="app-card">
        <img alt='code' src={code} />
        <h3 className='title'><b>Improve your front-end<br/> skills by building projects</b></h3>
        <p><small className='text'>Scan the QR code to visit Frontend<br/> Mentor and take your coding skills to<br/> the next level</small></p>
      </div>
    </section>
  );
}

export default App
