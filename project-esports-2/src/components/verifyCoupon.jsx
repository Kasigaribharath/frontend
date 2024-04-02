import { useNavigate, useParams } from "react-router-dom"
import { indianStates } from "./swiperrData";
import { useEffect, useState } from "react";

export function VerifyCoupon(){
    const [CouponCode, setCouponCode] = useState("");
    const [couponError, setCouponError] = useState("");
    var navigate = useNavigate();
    var params = useParams();
    const ActualCoupon = indianStates[params.id - 1].coupon;
    useEffect(()=>{
        if (!localStorage.getItem("token")) {
            console.log("Token not found", localStorage.getItem("token"));
            navigate("/login");
          }
    })

    function handleChange(e){
        setCouponCode(e.target.value);
    }
    
    function handleClick(e){
        if (CouponCode === ActualCoupon){
            navigate(`/couponentry/${params.id}/slot`);
        } else {
            setCouponError("Enter valid coupon");
        }
    }

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            handleClick();
        }
    }

    return(
        <div className="wrap d-flex justify-content-center align-items-center " style={{minHeight:"80vh"}}>
            {/* coupon verification  */}
            <div className="coupon">
                <label className="text-warning h4" htmlFor="coupon">Enter Coupon Code :</label>
                <input 
                    type="text" 
                    autoFocus 
                    className="form-control" 
                    onChange={handleChange}  
                    onKeyDown={handleKeyDown} // Added keydown event listener
                    name="coupon" 
                    id="coupon" 
                />
                <p className="text-danger">{couponError}</p>
                <button className="btn btn-danger w-100 mt-4" onClick={handleClick}>Continue</button>
            </div>
        </div>
    )
}