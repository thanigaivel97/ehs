import React from "react";
import tag1 from "../../images/tag4.png";
import tag2 from "../../images/tag5.png";
import tag3 from "../../images/tag6.png";
import EmailIcon from '@material-ui/icons/Email';
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const Card = (props) => {
    return (
        <div className="contactCard p-5 mb-4">
            <img src={props.imgsrc} className="contactTagImg mx-auto d-flex" />
            <p className=" contactTitleText mb-0">{props.title}</p>
            <p className="contactCardText ">{props.desc}</p>
        </div>
    );
};
const CardL = (props) => {
    return (
        <div className="contactCard p-5 mb-3" >
            <img src={props.imgsrc} className="contactTagImg mx-auto  d-flex" style={{position: "relative",top: "-12px"}} />
            <p className=" contactTitleText  mb-0" style={{position: "relative",top: "-17px"}}>{props.title}</p>
            <p className="contactCardText " style={{position: "relative",top: "-17px"}}>{props.desc}</p>
        </div>
    );
};

const Contact = () => {

    const messageSent = () =>{
        MySwal.fire({
            html: <div className="d-flex mt-2">
                    <EmailIcon style={{color: "#003459"}} />
                    <p className="ml-2" style={{color: "#003459"}}>Message Sent!</p>
                </div>,
            
            position: "top-end",
            showConfirmButton: false,
            showCloseButton: true,
            width: "500px",
            height: "100px",
            backdrop: "rgba(0, 0, 0, 0.5)",
            
        })
    };

    return (
       <>
         <div className=" padding-10 contactTopBox" style={{ backgroundColor: "#F6F6F6"}}>
            <h2 className="contactHead ">Keep In Touch</h2>
            <div className="d-flex justify-content-sm-between flex-sm-row flex-column align-items-center ">
            <Card imgsrc={tag1} title="Call Us" desc="+91 9632418602" />
            <Card imgsrc={tag2} title="Email Us" desc="hello@ehsposters.com" />
            <CardL imgsrc={tag3} title="Location" desc="45, old Agarwal Nagar, Indore, MP" />
            </div>
        </div>
        <form className="contactFormBox p-sm-5 p-4 mx-auto mt-sm-5 mt-3 mb-sm-5 mb-3">
            <input type="text" className="contactFormInput mr-sm-4 mr-0 mb-4" placeholder="First Name" required/>
            <input type="text" className="contactFormInput mb-4" placeholder="Last Name" />
            <input type="email" className="contactFormInput mr-sm-4 mr-0 mb-4" placeholder="Email" required/>
            <input type="number" className="contactFormInput mb-4" placeholder="Mobile Number" required/>
            <div className="contactFormLabel">
                <label className="mb-3">You are : </label><br />
                <div className="d-flex justify-content-between flex-sm-row flex-column" style={{fontWeight: "500"}}>
                    <div className="mb-2">
                        <input type="radio" id="customer" className="align-baseline"  name="He/She is" value="customer" />
                        <label for="customer">Customer</label>
                    </div>
                    <div className="mb-2">
                        <input type="radio" id="Rcustomer" className="align-baseline" name="He/She is" value="Returning Customer" />
                        <label  for="Rcustomer">Returning Customer</label>
                    </div>
                    <div className="mb-2">
                        <input type="radio" id="Enthusiast" className="align-baseline" name="He/She is" value="Enthusiast" />
                        <label for="Enthusiast">Enthusiast</label>
                    </div>
                    <div className="mb-2">
                        <input type="radio" id="CasualVisitor" className="align-baseline" name="He/She is" value="CasualVisitor" />
                        <label for="CasualVisitor">Casual Visitor</label>
                    </div>
                </div>
            </div>
            <div className="contactFormLabel mt-3">
                <label className="mb-3">Subject Line : </label><br />
                <div className="d-flex justify-content-between flex-sm-row flex-column" style={{fontWeight: "500"}}>
                    <div className="mb-2">
                        <input type="radio" id="price" className="align-baseline"  name="Subject" value="Price and price list" />
                        <label for="price">Price and Price List</label>
                    </div>
                    <div className="mb-2">
                        <input type="radio" id="quotation" className="align-baseline" name="Subject" value="Quotation" />
                        <label  for="quotation">Quotation</label>
                    </div>
                    <div className="mb-2">
                        <input type="radio" id="invoice" className="align-baseline" name="Subject" value="Proforma Invoice" />
                        <label for="invoice">Proforma Invoice</label>
                    </div>
                    <div className="mb-2">
                        <input type="radio" id="general" className="align-baseline" name="Subject" value="General" />
                        <label for="general">General</label>
                    </div>
                </div>
            </div>
            <div className="contactFormLabel mt-3">
                <label className="mb-3">Attachment : </label><br />
                <input type="file" />
            </div>
            <div className="contactFormLabel mt-4 mb-4">
                <label className="mb-3" for="message">Message : </label><br />
                <textarea id="message" name="message"  className="contactMessage"></textarea>
            </div>
            <button type="submit" onSubmit={messageSent} value="send" style={{
                width: "100%",
                height: "45px",
                color: "#FFF",
                border: "none",
                background: "#13375B",
                borderRadius: "3px",
            }}>Send</button>
        </form>
       </>
    );
};

export default Contact;