import axios from "axios";
import image1 from "./component-images/fotor-ai-20240217225530.jpg"
import "../components/slotSelectionPage.css"
import { useEffect,  useState } from "react";
import ResultInput from "./resultsInput";
import { useNavigate, useParams } from "react-router-dom";
import { TableComponent } from "./TableComponent";
import { useCookies } from "react-cookie";

export function SelectSlot() {
    const [isStaff, setIsStaff] = useState(false);
    const navigate = useNavigate();
    const params = useParams();
    const[participantsNames,setParticipantsNames]=useState();
    const[TournamentData,setTournamentData]=useState();
    
    const [cookies] = useCookies(["message"]);
    useEffect(() => {
        if (cookies["message"] === "Success") {
            setIsStaff(true);
        }
        axios.get(`http://localhost:3000/api/match_details/${params.id}/`)
        .then(res => {
          setParticipantsNames(res.data.participants_teams);
          setTournamentData(res.data.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, [params.id,cookies["message"]]);

    if (!TournamentData) {
        return <div>No data available</div>;
    }

    function handleContinueClick() {
        navigate(`/couponentry/${params.id}/slot/register`);
    }


    return (
        <div className="overflow-hidden slot-booking-page">

            <div className="bookingBG position-relative text-white">

                {/* col1 */}
                <div className="imageSection">
                    <img src={image1} className="rounded bookingimg" alt=" Error" />
                </div>


                {/* col2 */}
                <div className="px-3 bookingcol2">

                    {/* share btn */}
                    <div className="btn btn-primary m-2 position-absolute top-0 end-0 bg-gradient ms-3">
                        <i className="bi-share"> </i> &nbsp;
                    </div>

                    <div className="h1">{`${TournamentData.tournament_name} `}</div>
                    <div className="h3">{"Price pool"}</div>
                    <div className="bg-gradient bg-dark rounded-3 px-3 py-3 h5">Book Your Slot and  Play
                        <div className="h6 text-secondary">
                            {/* {TournamentData.room_id} */}
                            check id & pass in your tournaments &nbsp;<span className="bi bi-clock-history text-warning"></span>
                            <br />
                            {/* {TournamentData.room_password} */}
                            {/* <i className=" bi-chevron-double-left  ms-3"></i> */}

                        </div>
                    </div>
                    <div className="h6 text-center">
                        B2B 6 Matches • Kalhari , Bermuda , Purgatory • {new Date(TournamentData.tournament_time).toLocaleString()}
                    </div>
                    <div className="d-flex">
                        {
                            (TournamentData.slots_available>0)?
                            <button onClick={handleContinueClick} className="btn btn-danger continueBtn bg-gradient w-50"> Continue</button>
                            :
                            <div className="btn btn-danger  continueBtn bg-gradient w-50 fw-bold "> Room Full <span className=" bi-x-octagon-fill"></span></div>
                        }
                    </div>

                </div>
            </div>




            {/* row ended*/}
            <div className="navwrap pt-2">
                <div className="d-flex justify-content-center  overflow-hidden">
                    <ul className="nav nav-pills mb-3 " id="pills-tab" data-bs-theme="dark">
                        <li className="nav-item">
                            <button className="nav-link active" data-bs-toggle="pill" data-bs-target="#pills-overview"  >Overview</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" data-bs-toggle="pill" data-bs-target="#pills-results" >Results</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" data-bs-toggle="pill" data-bs-target="#pills-participants" >Participants</button>
                        </li>
                    </ul>
                </div>
                <div className="tab-content " id="pills-tabContent">
                    <div className="tab-pane fade show  active" id="pills-overview" >
                        <div className=" row px-5 text-white">


                            <ul className="col-lg-6">
                                <div className="OverView h3">Overview section </div>
                                <li> IDP TIME : {new Date(TournamentData.tournament_time).toLocaleString()}</li>
                                <li> B2B 6 MATCHES</li>
                                <li> PRIZE POOL 🏆 : {Math.floor(TournamentData.prize_pool)}/- INR</li>
                                <li> 1ST PRIZE🥇 : &#8377;{Math.floor(TournamentData.First_prize)}/-</li>
                                <li> 2ND PRIZE🥈 : &#8377;{Math.floor(TournamentData.Second_prize)}/-</li>
                                <li> 3RD PRIZE🥉 : &#8377;{Math.floor(TournamentData.Third_prize)}/-</li>
                                <li> ENTRY FEE : &#8377;{Math.floor(TournamentData.entry_fee)}/-</li>
                            </ul>
                            <ul className="col-lg-6">
                                <div className="h5">RULES :</div>
                                <li> Squad entry only</li>
                                <li> Maps need to be downloaded.</li>
                                <li> Seating is organized by slots.</li>
                                <li> Custom chat must remain free of spam and content intended for individuals aged 18 and above.</li>
                                <li> Misbehavior in chat results in being kicked.</li>
                                <li> Please ensure to mention the team name in custom chat.</li>
                                <li> Your team must refrain from causing any disturbances.</li>
                                <li> Requests for kicking are not allowed.</li>
                                <li> Avoid disturbing other teams by inviting other players.</li>
                                <li>
                                    We won't entertain any kicking requests. If your teammate is offline, it's best to return with all your active team members. Afterward, we'll remove the offline player, and you can rejoin the room with your team intact.
                                </li>
                            </ul>
                        </div>
                    </div>



                    <div className="tab-pane  fade" id="pills-results" >
                        <div className="text-white">
                            <div className="accordion " id="accordionExample">

                                {/* Accordain item 1 starts here */}
                                <div className="accordion-item border border-secondary px-0 ">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button bg-dark text-white " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Match #1
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse px-0 collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body  bg-dark">
                                            <TableComponent tournamentID={TournamentData.id} matchID={1}></TableComponent>
                                        </div>
                                    </div>
                                </div>

                                {/* Accordain item 2 starts here */}
                                <div className="accordion-item border border-secondary">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button bg-dark text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Match #2
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <TableComponent tournamentID={TournamentData.id} matchID={2}></TableComponent>
                                        </div>
                                    </div>
                                </div>

                                {/* Accordain item 3 starts here */}
                                <div className="accordion-item border border-secondary">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button bg-dark text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Match #3
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <TableComponent tournamentID={TournamentData.id} matchID={3}></TableComponent>
                                        </div>
                                    </div>
                                </div>

                                {/* Accordain item 4 starts here */}
                                <div className="accordion-item border border-secondary">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button bg-dark text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            Match #4
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <TableComponent tournamentID={TournamentData.id} matchID={4}></TableComponent>
                                        </div>
                                    </div>
                                </div>

                                {/* Accordain item 5 starts here */}
                                <div className="accordion-item border border-secondary">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-button bg-dark text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            Match #5
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <TableComponent tournamentID={TournamentData.id} matchID={5}></TableComponent>
                                        </div>
                                    </div>
                                </div>

                                {/* Accordain item 6 starts here */}
                                <div className="accordion-item border border-secondary">
                                    <h2 className="accordion-header" id="headingSix">
                                        <button className="accordion-button bg-dark text-center text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                            Match #6
                                        </button>
                                    </h2>
                                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <TableComponent tournamentID={TournamentData.id} matchID={6}></TableComponent>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="tab-pane  fade" id="pills-participants" >
                        <div className="px-1 text-white">
                            <div className="container my-4">
                                <div className=" ">
                                    {participantsNames&& participantsNames.map((participant,index)=><div key={participant.id}>slot No : {index+1 } - {participant.team_name}</div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                isStaff &&
                <div className="staffTable">
                    <ResultInput></ResultInput>
                </div>
            }


        </div>
    )
}
