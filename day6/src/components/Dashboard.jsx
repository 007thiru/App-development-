import React from 'react'
import'../assets/css/DashBoard.css';
import { useSelector } from 'react-redux';
import { selectUser } from './redux/UserSlice';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // You can import icons for your social media handles
import { Link } from 'react-router-dom';

const Dashboard = () => {
 const user=useSelector(selectUser);
 const email =user.user && user.user.email?user.user.email:'Guest';

 


  

  
  return (
    <div className="dashboard">
      
      <header className="header">
        <h1>H & M Restaurant {email}</h1>
        <nav className="navbar">
          <ul>
            <div className='classtitle'>
              <h2>H & M </h2>
            </div>
            <br></br><li><a href="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/reviews">Reviews</a></li> 
          </ul>
        </nav> 
        
      </header>

      <div class="container">
  <div class="side">
    <h1>Analytics Dashboard</h1>
    <ul class="links">
      <li><a href="#" class="selected" data-metric="visits">Visits</a></li>
      <li><a href="#" data-metric="pageviews">Pageviews</a></li>
      <li><a href="#" data-metric="conversions">Conversions</a></li>
    </ul>
    <div class="stats">
      <ul data-metric="visits">
        <li>
          <div class="key">Total Visits</div>
          <div class="val">356</div>
        </li>
        <li>
          <div class="key">Average</div>
          <div class="val">50.9</div>
        </li>
        <li>
          <div class="key">Change</div>
          <div class="val">+122.2%</div>
        </li>
      </ul>
      <ul data-metric="pageviews">
        <li>
          <div class="key">Total Pageviews</div>
          <div class="val">468</div>
        </li>
        <li>
          <div class="key">Average</div>
          <div class="val">66.9</div>
        </li>
        <li>
          <div class="key">Change</div>
          <div class="val">+16.7%</div>
        </li>
      </ul>
      <ul data-metric="conversions">
        <li>
          <div class="key">Total Conversions</div>
          <div class="val">456</div>
        </li>
        <li>
          <div class="key">Average</div>
          <div class="val">65.1</div>
        </li>
        <li>
          <div class="key">Change</div>
          <div class="val">-47.4%</div>
        </li>
      </ul>
    </div>
    <ul>
      <li>
        <div class="key">Range</div>
        <div class="val">7 days</div>
      </li>
      <li>
        <div class="key">Timezone</div>
        <div class="val">PDT</div>
      </li>
      <li>
        <div class="key">Most order</div>
        <div class="val">Briyani </div>
      </li>
    </ul>
  </div>
  <div class="main">
    <ul>
      <li class="active">
        <article tabindex="0" data-metric="visits">
          <div class="area">
            <div class="lines">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="data visits">
              <dl>
                <dt>3/8</dt>
                <dd>36</dd>
              </dl>
              <dl>
                <dt>3/9</dt>
                <dd>44</dd>
              </dl>
              <dl>
                <dt>3/10</dt>
                <dd>52</dd>
              </dl>
              <dl>
                <dt>3/11</dt>
                <dd>32</dd>
              </dl>
              <dl>
                <dt>3/12</dt>
                <dd>44</dd>
              </dl>
              <dl>
                <dt>3/13</dt>
                <dd>68</dd>
              </dl>
              <dl>
                <dt>3/14</dt>
                <dd>80</dd>
              </dl>
            </div>
          </div>
          <h1>Visits</h1>
        </article>
      </li>
      <li>
        <article tabindex="0" data-metric="pageviews">
          <div class="area">
            <div class="lines">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="data pageviews">
              <dl>
                <dt>3/8</dt>
                <dd>72</dd>
              </dl>
              <dl>
                <dt>3/9</dt>
                <dd>56</dd>
              </dl>
              <dl>
                <dt>3/10</dt>
                <dd>64</dd>
              </dl>
              <dl>
                <dt>3/11</dt>
                <dd>48</dd>
              </dl>
              <dl>
                <dt>3/12</dt>
                <dd>64</dd>
              </dl>
              <dl>
                <dt>3/13</dt>
                <dd>80</dd>
              </dl>
              <dl>
                <dt>3/14</dt>
                <dd>84</dd>
              </dl>
            </div>
          </div>
          <h1>Pageviews</h1>
        </article>
      </li>
      <li>
        <article tabindex="0" data-metric="conversions">
          <div class="area">
            <div class="lines">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="data conversions">
              <dl>
                <dt>3/8</dt>
                <dd>76</dd>
              </dl>
              <dl>
                <dt>3/9</dt>
                <dd>88</dd>
              </dl>
              <dl>
                <dt>3/10</dt>
                <dd>72</dd>
              </dl>
              <dl>
                <dt>3/11</dt>
                <dd>68</dd>
              </dl>
              <dl>
                <dt>3/12</dt>
                <dd>52</dd>
              </dl>
              <dl>
                <dt>3/13</dt>
                <dd>60</dd>
              </dl>
              <dl>
                <dt>3/14</dt>
                <dd>40</dd>
              </dl>
            </div>
          </div>
          <h1>Conversions</h1>
        </article>
      </li>
    </ul>
  </div>
</div>
     
      <main className="content">
        {/* Dashboard content goes here */}
      </main>
      <footer className="footer">
      <div className="footer-content">
        <div className="social-media">
          <a href="#" className="social-link">
            <FaFacebook />
          </a>
          <a href="#" className="social-link">
            <FaTwitter />
          </a>
          <a href="#" className="social-link">
            <FaInstagram />
          </a>
        </div>
        <div className="footer-links">
          <Link to="/PrivacyPolicy" className="footer-link">
          PrivacyPolicy
          </Link>
        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} E-Restaurant
        </div>
      </div>
    </footer>

    </div>

  )
}

export default Dashboard