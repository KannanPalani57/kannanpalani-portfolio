import React,{useState} from 'react'

function NavBar() {
    const [hamburgerStatus, setHamburgerStatus] = useState(false)
    const handleClick= () => {
        setHamburgerStatus(!hamburgerStatus)
    }
    return (
        <div>
              <nav>
                    <div className="hamburger" onClick={handleClick}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                        <div className='header'>
                             <h2 className="header-text">Kannan Palani</h2>
                        </div>

                        <ul className={`nav-links ${hamburgerStatus && "open" }`}>
                        <li className={`${hamburgerStatus &&  "fade"}`}><a href="#">About</a></li>
                        <li className={`${hamburgerStatus &&  "fade"}`}><a href="#">Contact</a></li>
                        <li className={`${hamburgerStatus &&  "fade"}`}><a href="#">See My Works!</a></li>
                    </ul>
                  
                </nav>

        </div>  
    )
}

export default NavBar
