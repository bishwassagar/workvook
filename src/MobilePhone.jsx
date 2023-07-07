import './MobilePhoneMockup.css';
import Home from './assets/mobile.png'

const MobilePhoneMockup = () => {
  return (
    <div className="mobile-phone-container">
      <div className="mobile-phone">
        <div className="mobile-screen">
          <div className="image-container">
            <img src={Home} alt="Image"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobilePhoneMockup;