import { useState, useEffect } from "react";
import "./wallet.css";
import DepositForm from "./deposit";
import MoneyWithdrawalForm from "./withdraw";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

export function Wallet() {
  const [Data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [cookies] = useCookies("username");

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      console.log("Token not found", localStorage.getItem("token"));
      navigate("/login");
    }
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/wallet/", {
          // withCredentials: true // Send cookies along with the request
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        // console.log(response.data);
        setData(response.data);
        // console.log(response.data);
      } catch (error) {
        // console.error("Error fetching wallet data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [localStorage.getItem("token")]);

  function getClassNameByAmount(e){
    if(e<0){
      return "text-danger"
    }
    else{
      return "text-success"
    }
  }


  return (
    <div className="wallet-container">
      {/* component will render only if the token exist  */}
      {
        localStorage.getItem("token")?<div className="wallet-container-inner">
        <ul className="nav nav-pills d-flex justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" href="#deposit" data-bs-toggle="pill">
              Deposit
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#withdraw" data-bs-toggle="pill">
              Withdraw
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#history" data-bs-toggle="pill">
              History
            </a>
          </li>
        </ul>

        <div className="tab-content wallet-tab-content  d-flex justify-content-center pt-3">
          <div className="tab-pane  fade text-start show active " id="deposit">
            <DepositForm />
          </div>
          <div className="tab-pane  text-white fade" id="withdraw">
            <MoneyWithdrawalForm />
          </div>
          <div className="tab-pane  text-white fade" id="history">
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}

            {/* wallet history starts here  */}
            {Data && (
              <div className="walletHistory bg-white text-dark rounded  ">
                  <div className="row bg-white py-2 fw-bold rounded container-fluid p-1  rounded-bottom-0">
                    <div className="col-6 text-center">Description</div>
                    {/* <div className="col-3">Timestamp</div> */}
                    <div className="col-3">Status</div>
                       {/* <th> Details</th> */}
                    <div className="col-3">Amount</div>
                </div>
                <div className="walletHistory-body  d-flex flex-column-reverse">
                {Data.transactions.map((historyItem, index) => (
                    <div className="row bg-white border-bottom  container-fluid p-1" key={index}>
                     <div className="col-6">
                     <div className="col-12">{historyItem.description}</div>
                      <div className="col-12 wallettimestamp text-secondary">{new Date(historyItem.timestamp).toLocaleString("en-IN")}</div>
                     </div>
                      <div className="col-3">{historyItem.status}</div>
                      {/* <div>{historyItem.transaction_details}</div> */}
                      <div className={`col-3 ${getClassNameByAmount(historyItem.amount)}`}>&#8377;{(Math.floor(historyItem.amount))}</div> 
                      {/* .toLocaleString() */}
                    </div>
                  ))}

                </div>
              </div>
            )}

          </div>
        </div>
      </div>:"please login for wallet Options"
      }
    </div>
  );
}