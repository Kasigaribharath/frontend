import React from 'react';

// i have commented some fields for later updation 
function AboutUs() {
    return (
        <div className="pt-5 px-3 bg-black text-white">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="about">
                        <h2 className="text-center mb-4">About Agent Esports</h2>
                        <p>Welcome to Agent Esports, the future of Free Fire esports and tournaments! We're thrilled to introduce a groundbreaking platform designed specifically for Free Fire enthusiasts like you. No more waiting endlessly for admin replies in WhatsApp groups – with Agent Esports, your gaming experience is about to get a whole lot smoother.</p>
                    </div>
                    <div id="vision">
                        <h3 className="mt-4">Our Vision</h3>
                        <p>At Agent Esports, we're on a mission to revolutionize the way Free Fire esports and tournaments are organized and experienced. We understand the frustrations of traditional methods, and that's why we've created a platform that puts convenience, efficiency, and privacy at the forefront.</p>
                    </div>
                    <div id="features">
                        <h3 className="mt-4">Our Features</h3>
                        <ul>
                            <li><strong>Online Booking:</strong> Say goodbye to the hassle of coordinating through messaging apps. With our online booking feature, you can easily reserve your spot in upcoming tournaments and events with just a few clicks.</li>
                            <li><strong>Room ID and Password Management:</strong> Tired of searching through endless chat histories for the room ID and password? We've got you covered. Manage your room credentials directly on our website for quick and easy access.</li>
                        </ul>
                    </div>
                    <div id="privacy">
                        <h3 className="mt-4">Your Privacy Matters</h3>
                        <p>At Agent Esports, your privacy is our top priority. We're committed to keeping your data safe and secure, with no spam, no unnecessary screenshots, and no cluttered WhatsApp junk. Enjoy a worry-free gaming experience without compromising your privacy.</p>
                    </div>
                    <div id="revolution">
                        <h3 className="mt-4">Join the Revolution</h3>
                        <p>Are you ready to take your gaming journey to the next level? Join the revolution today and experience the future of Free Fire esports with Agent Esports. Whether you're a seasoned player or just starting out, we're here to elevate your gaming experience and help you reach new heights.</p>
                    </div>
                    <div id='getStarted'>
                        <h3 className="mt-4">Get Started Today</h3>
                        <p>Ready to embark on your esports adventure? Sign up for free at Agent Esports and start exploring all the exciting features and opportunities awaiting you. The future of Free Fire esports starts here – don't miss out!</p>
                    </div>
                    {/* waiting for team lead Opinion  */}
                    <div id="team">
                        <h3 className="mt-4">Our Team</h3>
                        <p>Meet the talented individuals behind Agent Esports:</p>
                        <ul>
                            <li><a className='bi-linkedin' href="https://www.linkedin.com/in/vishwas-uday-kiran-kalla-4b99381a0/"></a> Vishwas - [Business Lead]</li>
                            <li> <a className='bi-linkedin' href="https://www.linkedin.com/in/sai-sampath-863a7b1aa/"> </a> Sai Sampath  - [Team Lead]</li>
                            <li> <a className='bi-linkedin' href="https://www.linkedin.com/in/nikhil-ageeru/"> </a> Nikhil - [Frontend Dev]</li>
                            <li> <a className='bi-linkedin' href="https://www.linkedin.com/in/abhishek-b-a68144204/"> </a> Abhishek  - [Backend Dev]</li>
                        </ul>
                    </div>
                    {/* waiting for answer  */}
                    <div id="partnerships">
                        <h3 className="mt-4">Partnerships and Collaborations</h3>
                        <p>We're proud to collaborate with the following partners:</p>
                        <ul>
                            <li>[Vishwas] </li>
                            {/* - [Brief Description] */}
                            <li>[Sunil] </li>
                            {/* - [Brief Description] */}
                        </ul>
                    </div>

                </div>
            </div>


        </div>
    );
}

export default AboutUs;


