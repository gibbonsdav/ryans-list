import React, { useEffect } from "react"
import { useCats } from "../hooks"

import "../styles/base.css"

export default props => {
  const { get, categories } = useCats()

  useEffect(() => {
    get()
  }, [])

  return (
    <div className="wrapper">
      <div className="sidebar">
        <h1>ryanslist</h1>
        <h5>create a posting</h5>
        <h5>my account</h5>
        <input type="search" placeholder="search craigslist"></input>
        <br></br>
        <img src="calendar2.jpg" alt="calendar2" />
        <h5>help, faq, abuse, legal</h5>
        <h5>avoid scams and fraud</h5>
        <h5>personal safety tips</h5>
        <h5>terms of use</h5>
        <h5>privacy policy</h5>
        <h5>system status</h5>
        <br></br>
        <h5>about ryanslist</h5>
        <h5>ryanslist is hiring in sf</h5>
        <h5>ryanslist open source</h5>
        <h5>ryanslist blog</h5>
        <h5>best-of-ryanslist</h5>
        <h5>ryanslist TV</h5>
        <h5>"ryanslist joe"</h5>
        <h5>ryan newmark philanthropies</h5>
      </div>
      <div className="maingrid">
        <h1 className="banner">las vegas</h1>
        <ul>
          <div className="cats">
            {categories.map(cat => (
              <div className="smallcat" key={"cat" + cat.id}>
                <h4>
                  <a className="titles" href="#">
                    {cat.name}
                  </a>
                </h4>
                <div className="subtitles">
                  <ul>
                    {cat.sub.map(sub => (
                      <li>
                        <a href="#">{sub.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </ul>
      </div>
      <div className="cities">
        <select id="languages" name="languages">
          <option value="dansk">dansk</option>
          <option value="deutsch">deutsch</option>
          <option value="english">english</option>
          <option value="espanol">espanol</option>
          <option value="italiano">italiano</option>
        </select>
        <div className="morecities">
          <h4 className="nearby">nearby cl</h4>
          <ul className="citylist">
            <li>bakersfield</li>
            <li>elko</li>
            <li>flagstaff</li>
            <li>fresno</li>
            <li>gold country</li>
            <li>hanford</li>
            <li>imperial co</li>
            <li>inland empire</li>
            <li>los angeles</li>
            <li>merced</li>
            <li>modesto</li>
            <li>mohave co</li>
            <li>orange co</li>
            <li>palm springs</li>
            <li>phoenix</li>
            <li>prescott</li>
            <li>provo</li>
            <li>reno</li>
            <li>salt lake</li>
            <li>san diego</li>
            <li>san luis obispo</li>
            <li>santa barbara</li>
            <li>santa maria</li>
            <li>show low</li>
            <li>st george</li>
            <li>stockton</li>
            <li>tucson</li>
            <li>ventura</li>
            <li>visalia-tulare</li>
            <li>yuma</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
