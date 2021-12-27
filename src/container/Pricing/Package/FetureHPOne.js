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

export default function FeatureHPOne() {
    return (
        <div className="w-100 featurePOS">
            <div className="featurePOS__header">
                <h2 style={{ width: "60%" }}>
                    Fulll features
                </h2>
                <div style={{ width: "20%" }}>
                    <h5>Solo</h5>
                    <h6>1 Staffs</h6>
                </div>

                <div style={{ width: "20%" }}>
                    <h5>Duo</h5>
                    <h6>2 Staffs</h6>
                </div>

            </div>

            <div className="feature__bot-hr" />

            <div className="w-100 featurePOS__body">
                {
                    contents.map((text, index) => (
                        <div key={text} style={{ backgroundColor: index % 2 === 0 ? "#fafafa" : "white" }} className="w-100 featurePOS__item">
                            <p style={{ width: "60%" }}>
                                {text}
                            </p>
                            <div style={{ width: "20%" }}>
                                <img src={icon_tick_green} alt="icon_tick_green" />
                            </div>
                            <div style={{ width: "20%" }}>
                                <img src={icon_tick_green} alt="icon_tick_green" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
