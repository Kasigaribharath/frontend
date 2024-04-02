import { Link } from "react-router-dom"
import React, { useEffect} from "react"
import "../components/headsection.css"

import logoText from "./component-images/AgentEsportsTextLogo.png"
import { useCookies } from "react-cookie"
import axios from "axios"

export function HeadSection() {
    const [cookies,setCookie] = useCookies("money","username");
    const [show, setShow] = React.useState(false);


    useEffect(() => {
        if (localStorage.getItem("token")) {

            setShow(true);
            axios.get("http://localhost:3000/api/wallet/",{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
            })
            .then(res=>setCookie("money",res.data.wallet.balance));
            // setShow(false);
          }
          else{
            setShow(false)
            setCookie("money",0)
          }
    },[localStorage.getItem("token")]); 

    return (

        <div className=" HeaderWrapper d-flex justify-content-between p-2">
            {/* title section */}
            <div className="BrandTitle d-flex w-25">
                <div ><Link to={"/"}><img className="mt-2 textlogo" src={logoText} /></Link></div>
            </div>
            {/* title section over*/}

            {/*Nav section Starts Here use Link from router */}
            <div className="navSection d-flex justify-content-between">
                {/* dropdown 1 starts here */}
                <div className=" pt-1 hideNav pt-2">
                    <Link to={"/"} className=" text-white fw-bold Link text-decoration-none">Home  </Link>


                </div>

                {/* dropdown 2 starts here */}
                <div className="dropdown pt-1 hideNav pt-2">
                    <span className="dropdown-toggle text-white fw-bold" data-bs-toggle="dropdown">Tournaments  </span>

                    <div className="dropdown-menu dropdown-menu-dark overflow-hidden">
                        <a href="#trialT" className="dropdown-item text-white">Trail Tournaments</a>
                        <div className="dropdown-divider"></div>
                        <a href="#ongoingT" className="dropdown-item text-white">Ongoing Tournaments</a>
                        <div className="dropdown-divider"></div>
                        <a href="#upcommingT" className="dropdown-item text-white">Upcoming Tournaments</a>
                        {/* <div className="dropdown-divider"></div> */}
                        {/* <a href="#weeklyT" className="dropdown-item text-white">weekly Tournaments</a> */}
                    </div>
                </div>

                {/* dropdown 3 starts here */}
                <div className="pt-1 hideNav pt-2">
                    <Link to={"/about"} className="Link text-white fw-bold text-decoration-none">About</Link>
                </div>


                {/* Wallet Section */}  
                <Link to={"/wallet"} title="wallet" className="btn  bg-dark bg-gradient text-warning " > &#8377; {cookies["money"]}
                </Link>

                {/* History Section */}
                <Link to={"/gamehistory"} title="Game history" className="btn  bg-dark bg-gradient text-warning " >
                    <i className=" text-warning bi bi-clock-history"></i>
                </Link>

                {/* Profile Section */}
                {
                    show ?
                        <Link to={"/profile"} title="profile" className="btn  bg-dark bg-gradient text-warning " >
                            <i className=" text-warning bi bi-person"></i>
                        </Link>
                        :
                        <Link to={"/login"} title="login" className="btn  bg-dark bg-gradient text-warning " >
                            <span className="text-warning">
                                Login
                            </span>
                        </Link>
                }
            </div>
        </div>
    )
}