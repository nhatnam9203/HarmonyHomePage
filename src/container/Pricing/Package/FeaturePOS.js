import React from 'react'
import icon_tick_green from "../../../assets/images/home/icon_tick_green.png";

const contents = [
    "Consumer App for Booking/ Receiving the promotion of your Store",
    "Staff App for appointment reiceiving",
    "Owner App",
    "Appointment Management",
    "Connect the data when Consumer makea a appointment via call",
    "Check-in System at the store",
    "Support for the payment with a lot of types: cash, credit card, wallet, crypto,...",
    "Revenue management",
    "Cost management",
    "Stock management",
    "Salary management",
    "Loyalty Marketing management",
    "Notification via all apps(Consumer App, App Staff, Owner App)",
    "Advertising system at the store",
    "24/7 Support through phone, text, chats, and emails",
    "Chatting System via Web, App and Connecting with Social Platforms(Facebook, Instagram, ...)"
]

export default function FeaturePOS() {
    return (
        <div className="w-100 featurePOS">
            <div className="featurePOS__header">
                <h2>
                    Fulll features
                </h2>
                <div>
                    <h5>Basic</h5>
                    <h6>8 Staffs</h6>
                </div>

                <div>
                    <h5>Medium</h5>
                    <h6>15 Staffs</h6>
                </div>

                <div>
                    <h5>Professional</h5>
                    <h6>16+ Staffs</h6>
                </div>
            </div>

            <div className="feature__bot-hr" />

            <div className="w-100 featurePOS__body">
                {
                    contents.map((text,index) => (
                        <div key={text} style={{ backgroundColor : index % 2 === 0 ? "#fafafa" : "white" }} className="w-100 featurePOS__item">
                            <p>
                               {text}
                            </p>
                            <div>
                                <img src={icon_tick_green} alt="icon_tick_green" />
                            </div>
                            <div>
                                <img src={icon_tick_green} alt="icon_tick_green" />
                            </div>
                            <div>
                                <img src={icon_tick_green} alt="icon_tick_green" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
