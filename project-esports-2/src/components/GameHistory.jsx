import axios from "axios";
import "./GameHistory.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function GameHistory() {
    const [Data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    // const [cookies, setCookie, removeCookie] = useCookies(["sessionid"]);

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            console.log("Token not found", localStorage.getItem("token"));
            navigate("/login");
          }
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/user_tournaments/", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                      }
                });
                console.log(response.data);
                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }

        };

        fetchData();
    }, [localStorage.getItem("token")]);



    return (
        <div className="bg-light d-flex flex-column gap-3 p-3" style={{ minHeight: "65vh" }}>
            <h3 className="text-center">Tournament History</h3>
            {error && <div>Error: {error}</div>}
            {loading && <div>Loading...</div>}
            {Data && Data.length>0
            ? 
                Data.map((userdata, index) => (
                    <div key={index} className="card gamehisory-card border border-dark-subtle  overflow-hidden ">
                        <div className="history-body row">
                            <div className="col-5 py-3 px-4">
                                <div className="card-title h6 fw-bold ">
                                    {userdata.tournament_name}
                                </div>
                                <div className="card-subtitle fw-lighter text-secondary">
                                    {new Date(userdata.tournament_time).toLocaleString()}
                                </div>
                            </div>
                            <div className="col-3 d-flex justify-content-center py-3">
                                PricePool: <br />
                                &#8377;{userdata.prize_pool}

                            </div>
                            <div className="col-4 p-3">
                                <div className={`tournamentdate`} >
                                <p className="card-subtitle py-2"><strong>Room ID:</strong> {userdata.room_id}</p>
                                <p className="card-subtitle py-2 "><strong>Room Password:</strong> {userdata.room_password}</p>

                                </div>
                            </div>


                        </div>
                    </div>

                ))
            : (
                <div className=" text-center ">
                    <div>
                    You do not have any tournament History
                    <br />
                    Join Your first Tournament Now
                    <br />
                    <Link to={"/"} className="btn btn-danger mt-2">Join Now</Link>
                    </div>
                </div>
            )}
        </div>
    );
}
