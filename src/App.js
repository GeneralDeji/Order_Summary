import logo from './logo.svg';
import './App.css';
import bgrcimg from './img/pattern-background-desktop.svg'
import topimg from './img/illustration-hero.svg'
import musicicon from './img/icon-music.svg'
import { useState } from 'react'

function App() {
  const [price, setPrice] = useState({
    plan: 'Annual Plan',
    amount: '$ 59.99/year'
  
  })

  //setPrice({ ...price, plan: 'Monthly Plan', amount: '$ 5/month'})

  function changePlan(){
    if(price.plan === 'Annual Plan' && price.amount === '$ 59.99/year' ){
      setPrice({ plan: 'Monthly Plan', amount: '$ 5/month'})
    }else{
      setPrice({ plan: 'Annual Plan', amount: '$ 59.99/year' })
    }
  }

  return (
    <div className="App">
      

      <div className='container'>
        <img className='bgrcimg' src={bgrcimg} alt="" />

        <div className='Wholebody'>
          
          <img className='topimg' src={topimg} alt="" />
          
          <div className='content'>
            <main>
              <h1>Order Summary</h1>
            </main>
            
            <span>
              <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
            </span>

            <section className='plans'>
              <div className='plans-2'>
                <img src={musicicon} alt="" />

                <div>
                  <p><b>{price.plan}</b></p>
                  <p>{price.amount}</p>
                </div>
              </div>
              
              <a onClick={changePlan} href="#"><b>Change</b></a>
            </section>

            <section className="btns">
              <button className='proceed-btn'><b>Proceed to Payment</b></button>
              <button className='cancel-btn'><b>Cancel Order</b></button>
            </section>
          </div>

        </div>

      </div>
      
      

    </div>
  );
}

export default App;
