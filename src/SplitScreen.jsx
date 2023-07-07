import './App.css';
import MobilePhoneMockup from './MobilePhone';

const SplitScreen = () => (
    <div className="split-screen">
        <div className="left-side">
            <h1>WorkVook</h1>
            <h3>🚧 Under Construction 👷‍♂️</h3>
            <p>An Ed-Tech Startup to revolutionize education.</p>
            <p>Visit Our Location: <br/> 68, First Floor, Dhar Bagan, Bidhannagar Rd, Ultadanga, Kolkata, West Bengal 700067</p>
            <div className="centered">
            <button className="cssbuttons-io-button" /* onClick={window.open("https://www.google.com", "_blank")} */ > Government Jobs Institute - Trickology
                <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
                </div>
            </button>
            </div>
        </div>
        <div className="right-side">
            <MobilePhoneMockup />
        </div>
    </div>
);

export default SplitScreen;
