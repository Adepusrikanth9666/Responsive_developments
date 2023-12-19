import "./home.css";
import CampineImage from "../assets/campine_light.jpg";

const Home = () => {
  return (
    <main className="main">
      <div className="hero-section container section">
        <div className="hero-section_wrapper">
          <div
            className="left-section"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="linear"
            data-aso-delay="1000"
          >
            <h1>
              Camping Events <br />
              <span>To Remenber</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae architecto quod quasi distinctio eos molestiae,
              pariatur earum atque porro cum vero iure, cupiditate est hic
              perferendis, neque nobis id tenetur.
            </p>
            <button>See Locations</button>
          </div>
          <div
            className="right-section"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="linear"
            data-aso-delay="1500"
          >
            <div className="image-wrapper">
              <img
                className="campaine_image"
                src={CampineImage}
                alt="Camp image"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
