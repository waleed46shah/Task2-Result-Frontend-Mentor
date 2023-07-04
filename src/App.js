import './App.css';
import memory from './assets/icon-memory.svg';
import reaction from './assets/icon-reaction.svg'
import verbal from './assets/icon-verbal.svg'
import visual from './assets/icon-visual.svg'
function App() {
  return (
    <div className="card">
      <div className="card-container">
        <section className="result">
          <h3 className="title">
            Your Result
          </h3>
          <div className="circle">
            <h1>76</h1>
            <p>of 100</p>
          </div>

          <b>Great</b>
          <p class="info">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </section>

        <section className="summary">
          <h1 className="title">
            Summary
          </h1>
            <div className="rows">
              
              <div className="row">
                <div className="badge">
                  <img src={reaction} alt="icon" />
                  <b>Reaction</b>
                </div>
                <p><b>80</b>/100</p>
              </div>

              <div className="row">
                <div className="badge">
                  <img src={memory} alt="icon" />
                  <b>Memory</b>
                </div>
                <p><b>92</b>/100</p>
              </div>

              <div className="row">
                <div className="badge">
                  <img src={verbal} alt="icon" />
                  <b>Verbal</b>
                </div>
                <p><b>61</b>/100</p>
              </div>

              <div className="row">
                <div className="badge">
                  <img src={visual} alt="icon" />
                  <b>Visual</b>
                </div>
                <p><b>72</b>/100</p>
              </div>


            </div>

          <button className='btn'>Continue</button>
        </section>
      
      </div>
    </div>
  );
}

export default App;
