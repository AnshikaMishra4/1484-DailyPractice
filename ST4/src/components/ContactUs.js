import React, { useState } from 'react'
import './ContactUs.css'

import Navbar from './Navbar';
import Flash from 'react-reveal/Flash';
import Map from './Map'

export default function ContactUs() {

    const [state, setState] = useState('contact');
    
    const showContactForm = () => {
        setState('contact');
    }
    const showDealershipEnquiry = () => {
        setState('dealer');
    }

    

   

    

    return (
        <div>
            <Navbar />
            <div className='contact'>
                <div className='hero'>
                    CONTACT
                </div>
                <div className='contactUs' onClick={showContactForm}>
                    CONTACT US
                </div>
                <div className='dealerEnquiry' onClick={showDealershipEnquiry}>
                    DEALER ENQUIRY FORM
                </div>
            </div>
            <div className='contact_us' style={{ 'display': `${state === 'contact' ? 'block' : 'none'}` }}>
                <div id="main">
                    <Flash>
                        <div className="box">
                            <h1 className="heading">
                                Contact Us
                            </h1>
                            <hr className="line" />

                            <p className="contactUsContent">
                                We can be reached via any of our contact details below, or preferably send us a mail for your convenience using the form below.
                            </p>
                            <div className="div">
                                <i className="fa-solid fa-location-dot" id="contacts_icon"></i>
                                <p className="contactUsContent">
                                    Electronics Items
                                    <br/>
                                    Rajpura,Punjab
                                </p>
                            </div>

                            <div className="div">
                                <i className="fa-solid fa-mobile-screen" id="contacts_icon"></i>
                                <a href="tel:+91 67987899" style={{textDecoration:"none"}} className="contactUsContent">
                                <p>
                                    0978767757
                                </p>
                                </a>
                                <a href="tel:+91 987248897" style={{textDecoration:"none"}} className="contactUsContent">
                                <p >
                                    123456789
                                </p>
                                </a>
                            </div>

                            <div className="div">
                                <i className="fa-solid fa-envelope-open" id="contacts_icon"></i>
                                <a href="mailto:abc@gmail.com"  className="contactUsContent"style={{textDecoration:"none"}}>
                                <p >
                                    abc@gmail.com
                                </p>
                                </a>
                            </div>
                        
                        </div>
                    </Flash>
                    <Flash>
                        <div className="box">
                            <h1 className="heading">
                                Form
                            </h1>
                            <hr className="line" />
                            <form >
                                <input className="support_input" name="name"  placeholder="Name" type="text" />
                                <input className="support_input" name="mobileno"  placeholder="Mobile Number" type="text" />
                                <input className="support_input" name="email"  placeholder="Email" type="text" />
                                <textarea className="support_input" name="message"  style={{ "resize": "vertical", "height": "100px" }} placeholder="Message" type="text"></textarea>
                                <div style={{ "width": "100%", "textAlign": "center" }}>
                                    <button id="submit_form" type="submit">
                                        SUBMIT
                                    </button>
                                </div>
                            </form>
                        </div>

                    </Flash>
                    
                </div>
                <Map/>
                <div id="container"></div>
            </div>
            
            <div className="dealershipEnquiry" style={{ 'display': `${state === 'dealer' ? 'block' : 'none'}` }}>

                <div id="contactUsIntro" >
                    <h1>ENQUIRY</h1>
                </div>

                <div id="form" >
                    <div id="form_section">
                        <form >
                            
                            <h3 className="form_label">First Name<span className="star_mandatory">*</span></h3>
                            <input name="firstname"  type="text" className="form_input" id="first_name" required />

                            <h3 className="form_label">Last Name<span className="star_mandatory">*</span></h3>
                            <input name="lastname"  type="text" className="form_input" id="last_name" required />

                            <h3 className="form_label">Email<span className="star_mandatory">*</span></h3>
                            <input name="email"  type="email" className="form_input" id="mail" required />

                            <h3 className="form_label">Mobile Number<span className="star_mandatory">*</span></h3>
                            <input name="mobileno"  type="text" className="form_input" maxLength="10" id="mobile_number" required />

                            <h3 className="form_label">Name of business<span className="star_mandatory">*</span></h3>
                            <input name="businessname"  type="text" className="form_input" id="business" required />

                            <div style={{ "display": "flex" }}>
                                <div className="inside_div">
                                    <h3 className="form_label">Postal Code<span className="star_mandatory">*</span></h3>
                                    <input name="postalcode"  type="text" id="codes" maxLength="6" required />
                                </div>
                                <div className="inside_div">
                                    <h3 className="form_label">State<span className="star_mandatory">*</span></h3>
                                    <select  name="state" id="codes">
                                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                        <option value="Assam">Assam</option>
                                        <option value="Bihar">Bihar</option>
                                        <option value="Chandigarh">Chandigarh</option>
                                        <option value="Chhattisgarh">Chhattisgarh</option>
                                        <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                                        <option value="Daman and Diu">Daman and Diu</option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Goa">Goa</option>
                                        <option value="Gujarat">Gujarat</option>
                                        <option value="Haryana">Haryana</option>
                                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                        <option value="Jharkhand">Jharkhand</option>
                                        <option value="Karnataka">Karnataka</option>
                                        <option value="Kerala">Kerala</option>
                                        <option value="Ladakh">Ladakh</option>
                                        <option value="Lakshadweep">Lakshadweep</option>
                                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                                        <option value="Maharashtra">Maharashtra</option>
                                        <option value="Manipur">Manipur</option>
                                        <option value="Meghalaya">Meghalaya</option>
                                        <option value="Mizoram">Mizoram</option>
                                        <option value="Nagaland">Nagaland</option>
                                        <option value="Odisha">Odisha</option>
                                        <option value="Puducherry">Puducherry</option>
                                        <option value="Punjab">Punjab</option>
                                        <option value="Rajasthan">Rajasthan</option>
                                        <option value="Sikkim">Sikkim</option>
                                        <option value="Tamil Nadu">Tamil Nadu</option>
                                        <option value="Telangana">Telangana</option>
                                        <option value="Tripura">Tripura</option>
                                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                                        <option value="Uttarakhand">Uttarakhand</option>
                                        <option value="West Bengal">West Bengal</option>
                                    </select>
                                </div>
                            </div>

                            <h3 className="form_label">City<span className="star_mandatory">*</span></h3>
                            <input name="city" type="text"  className="form_input" id="city" required />

                            <h3 className="form_label">Description<span className="star_mandatory">*</span></h3>
                            <textarea name="description"  className="form_input" id="description" style={{ "height": "200px" }}></textarea>

                            <div style={{ "width": "100%", "textAlign": "center" }}>
                                <button id="submit_form" type="submit">
                                    SUBMIT
                                </button>
                            </div>
                        </form>
                    </div>
                    <div id="form_side_bar">
                        
                        <p id="interested">
                            Interested in becoming a dealer for our products?
                        </p>
                        <p id="interested_para">
                            Thank you for your interest!
                            Fill out the form and one of our sales team will contact you with more information.
                        </p>

                    </div>
                </div>

            </div>
          
        </div>
    )
}