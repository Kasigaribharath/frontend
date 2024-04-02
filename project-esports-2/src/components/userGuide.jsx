import React from 'react';
import registerguide from "./component-images/registerguide.jpg"
import loginguide from "./component-images/loginguide.jpg"
import withdrawguideimg from "./component-images/withdrawguideimg.jpg"
import depositguide from "./component-images/depositguide.jpg"
import contactimgguide from "./component-images/contactimgguide.jpg"
import bookslotguide from "./component-images/bookslotguide.jpg"

const UserGuide = () => {
  return (
    <div className="container-fluid bg-black text-white">
      <h1 className="pt-5 mb-4 text-center">User Guide</h1>

      <div className="row p-2">
        <div className="col-md-6">
          <img src={registerguide} className="w-100 rounded-3" alt="Create Account" />
        </div>
        <div className="col-md-6">
          <h2>1. Getting Started</h2>
          <h3>Creating an Account</h3>
          <p>
            To get started, you need to create an account on our platform. Follow these steps:
          </p>
          <ol>
            <li>Click on the "Login" button located at the top-right corner of the homepage and click create account.</li>
            <li>Fill in the required information such as username, email, and password.</li>
            <li>please use your personal mobile number and unique username to create Account</li>
          </ol>
        </div>
      </div>

      <div className="row p-2 mt-4">
        <div className="col-md-6 order-md-2">
          <img src={loginguide} className="w-100 rounded-3" alt="Log In" />
        </div>
        <div className="col-md-6 order-md-1">
          <h2>2. Logging In</h2>
          <h3>Logging In</h3>
          <p>
            If you already have an account, you can log in using the following steps:
          </p>
          <ol>
            <li>Click on the "Log In" button located at the top-right corner of the homepage.</li>
            <li>Enter your username and password.</li>
            <li>Click on the "Log In" button to access your account.</li>
          </ol>
        </div>
      </div>

      <div className="row p-2 mt-4">
        <div className="col-md-6">
          <img src={depositguide} className="w-100 rounded-3" alt="Homepage" />
        </div>
        <div className="col-md-6">
          <h2>3. Payment Methods</h2>
          <p>
            When making a deposit on our platform, you have multiple convenient payment options available, including:
          </p>
          <ul>
            <li>UPI : You can make payments using UPI by scanning a QR code or entering the UPI ID.</li>
            <li>More payment options will be added soon.</li>
          </ul>
          <p>
            Feel free to choose the payment method that best suits your preferences and convenience.
          </p>
        </div>
      </div>


      <div className="row p-2 mt-4">
        <div className="col-md-6 order-md-2">
          <img src={withdrawguideimg} className="w-100 rounded-3" alt="Browsing Tournaments" />
        </div>
        <div className="col-md-6 order-md-1">
          <h2>Withdraw Money</h2>
          <p>
            Withdrawing your earnings from our platform is simple and convenient. Follow these steps to initiate a withdrawal:
          </p>
          <ol>
            <li>Navigate to the "Withdraw" section from your account dashboard.</li>
            <li>Enter the withdrawal amount and select UPI as your preferred withdrawal method.</li>
            <li>Provide your UPI ID and MPIN to authorize the withdrawal transaction securely.</li>
          </ol>
          <p>
            Once confirmed, the withdrawn amount will be transferred to your linked UPI account promptly.
          </p>
        </div>

      </div>

      <div className="row p-2 mt-4">
        <div className="col-md-6">
          <img src={bookslotguide} className="w-100 rounded-3" alt="Viewing Teams and Players" />
        </div>
        <div className="col-md-6">
          <h2>5. Booking Slot for Tournaments</h2>
          <p>
            To participate in tournaments and book your slot, follow these steps:
          </p>
          <ol>
            <li>Click on the "Join Now" button on the tournament card.</li>
            <li>On the landing page, click on "Continue" to proceed with the registration process.</li>
            <li>Fill in the squad details, including Squad Name, In-Game Name, Mobile Number, and MPIN for registration.</li>
          </ol>
          <p>
            Once registered, your team will be booked for the tournament, and you'll be ready to compete.
          </p>
        </div>

      </div>

      <div className="row p-2 mt-4">
        <div className="col-md-6 order-md-2">
          <img src={contactimgguide} className="w-100 rounded-3" alt="Managing Your Profile" />
        </div>
        <div className="col-md-6 order-md-1">
          <h2>6. Contact and Support</h2>
          <p>
            Need assistance or have a query? Get in touch with our support team by following these steps:
          </p>
          <ol>
            <li>Click on the "Contact" button.</li>
            <li>Enter your problem or query in the provided field.</li>
            <li>Submit your message.</li>
          </ol>
          <p>
            You will be redirected to WhatsApp. Allow the redirection and send your message. Our support team will contact you shortly to assist.
          </p>
        </div>
      </div>

      {/* 
      <div className="row p-2 mt-4">
        <div className="col-md-6">
          <img src="https://via.placeholder.com/300" className="w-100 rounded-3" alt="Participating in Community" />
        </div>
        <div className="col-md-6">
          <h2>7. Participating in Community</h2>
          <p>
            Engage with fellow gamers and esports enthusiasts by participating in community discussions and activities:
          </p>
          <ul>
            <li>Forums and Discussions: Share your thoughts, strategies, and experiences with others in dedicated forums and discussion threads.</li>
            <li>Chatrooms: Join chatrooms dedicated to specific games or topics to interact with other players, teams, and fans in real-time.</li>
          </ul>
          <p>
            Connect with like-minded individuals and contribute to the vibrant esports community.
          </p>
        </div>
      </div> */}

    </div>
  );
};

export default UserGuide;
