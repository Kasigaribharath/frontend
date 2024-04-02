import ScrollCards from "./swiperComponent";

import { Section1 } from "./section1";
import OngoingTournaments from "./ongoingCards";
import WebsiteStats from "./WebsiteStats";

export default function Home() {
    
    return (
        <div  style={{"background":"rgba(0,0,0,0.1)"}}>
            <Section1></Section1>
            <br id="scroll"/>
            <br />
        <div className="pt-3" style={{"background":"rgba(0,0,0,0.5)"}}>
            <div id="trialT" className="gradientShade">
                <ScrollCards id="trailT" title="Trial Scrims" btndisabled="" ></ScrollCards>
            </div>
            <div id="ongoingT" className="gradientShade">
                <OngoingTournaments title="Ongoing scrims & Tournaments" btndisabled="disabled" tournamenttype="Available Soon..." />
            </div>
            <div id="upcommingT" className="gradientShade">
                <OngoingTournaments title="Upcoming  scrims & Tournaments" btndisabled="disabled" tournamenttype="Available Soon..." />
            </div>
            {/* <div id="weeklyT" className="gradientShade">
                <ScrollCards title="Weekly Contests" btndisabled="disabled"></ScrollCards>
            </div> */}
            <div >
                <WebsiteStats></WebsiteStats>
               
            </div>
        </div>
        </div>
    )
}
