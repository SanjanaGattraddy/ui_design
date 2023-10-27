import logo from './logo.svg';
import './App.css';

function App() {

  const data = [
    {

      dest: "./testimonials/1.png",
      change: "abc"

    },
    {
      dest: "./testimonials/2.png",
      change: "abc"

    },
    {
      dest: "./testimonials/3.png",
      change: "abc"

    },
    {
      dest: "./testimonials/4.png",
      change: "abc"

    }
  ]
  const image = "./testimonials/1.png";


  return (
    <div className='container'>
      <div className='shipping container'>
        <p>FREE SHIPPING ON ALL ORDERS</p>
      </div>

      <div style={{ justifyContent: "space-evenly", display: "flex", height: "83px", width: "1440px", padding: "9px", alignItems: "center" }}>
        <p style={{ fontSize: "37px" }}>PISTONS</p>

        <div style={{ display: "flex", gap: "10px", fontWeight: "bold" }}>
          <p>New</p>
          <p>Brand</p>
          <p>Collection</p>
          <p>Accesories</p>
          <p>About</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", width: "100px", gap: "5px" }}>
          <div className='back1'></div>
          <div className='back'></div>

        </div>
      </div>

      <div class="image-container container">
        <div className="image1" >

          <p className='text1'>
            MADE FOR YOU
          </p>

        </div>

        <div className='image2 container'>
          <p className='text2'>
            YOU WERE MADE TO MAKE AN IMPACT
          </p>
        </div>
      </div>

      <div class="image-container container">
        <div className="image3" >
          <p className='text3'>
            MADE FOR THE BEST CHANGE MAKERS
          </p>
        </div>

        <div className='image4'>
        </div>
      </div>

      <div class="image-container container">
        <div className="image5" >

        </div>

        <div className='image6'>
          <p className='text'>
            SAVOUR THE PRESENT
          </p>
        </div>
      </div>

      <div class="image-container container">
        <div className='image7'>
          <div className='trans'>
            <p className='text2'>
              WHERE QUALITY MEETS CLASS
            </p>
          </div>

        </div>
      </div>



      <div className="container" style={{ display: "flex", padding: "100px", width: "1240px" }}>
        <div className="about" style={{ height: "436px", width: "620px" }}>

        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "436px", width: "620px" }}>
          <div>
            <h1>
              ABOUT  PISTONS
            </h1>
            <p style={{ height: "201px", width: "443px" }}>
              Established in 1897, our beloved fountain pen haven, 'PISTONS,' has been a haven for pen enthusiasts for generations. With a century-long dedication to fine writing instruments, we've bridged tradition and modernity, offering a curated selection of vintage and contemporary fountain pens. Our little shop, nestled in the heart of town, continues to inspire a love for the art of writing, connecting past and present through the timeless elegance of ink on paper.
            </p>

          </div>

        </div>
      </div>
      <div className="container" style={{ backgroundColor: "yellow", width: "1240px", height: "552px", paddingTop: "25px", paddingLeft: "50px", paddingRight: "50px" }}>
        <div style={{ textAlign: "center" }}>
          <h1>TESTIMONIALS</h1>
        </div>
        <div style={{ marginTop: "100px", display: "flex", justifyContent: "space-evenly" }}>
          <div className="new1" style={{ height: "277px", width: "277px", borderRadius: "15px" }}></div>
          <div className="new2" style={{ height: "277px", width: "277px", borderRadius: "15px" }}></div>
          <div className="new3" style={{ height: "277px", width: "277px", borderRadius: "15px" }}></div>
          <div className="new4" style={{ height: "277px", width: "277px", borderRadius: "15px" }}></div>
          {/* <img src="./testimonials/1.png" alt="Testimonial 1" /> */}


        </div>



      </div>
      <br></br>
    </div>



  );
}

export default App;
