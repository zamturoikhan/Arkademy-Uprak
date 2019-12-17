import React, {Component} from 'react';
import './style.css';
import Background from './bgmoss.png';
import font from './calendar.svg';


class Latihan extends Component {
    render() {
        return (
            <div style={styles.background}>
                <div style={styles.icon}>
                    <img src={font} />
                </div>             
                    <div style={styles.text}>
                        <p style={{alignSelf: "left"}}>Go Green</p>
                    </div>
                    <div style={styles.quotes}>
                        <h1 style={{alignSelf: "center", marginLet: "60"}}>Make it green</h1>
                        <div style={styles.wraper}>
                            <span style={{ marginLeft: 20, fontfamily: "Poppins", fontSize: "20px", fontStyle: "normal", textAlign: "center", fontWeight: "normal" }}>Now more than ever, Our planet is need our</span>
                        </div>
                        <div style={styles.Button}>
                            Do It Now
                        </div>
                </div>
            </div>
        );
    }
}
let h = window.innerHeight;

const styles = {
    background: {
        display: "flex",
        backgroundImage: `url(${Background})`,
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        justifyContent: "center",
        alignItem: "center",
        left: 0,
        top: 0,
        position: "absolute"
    },
    icon: {
        top: 10,
        right: 30,
        border: 3,
        position: "absolute" 
    },
    text: {
        color: "white",
        fontFamily: "Poppins",
        top: 10,
        left: 30,
        border: 3, 
        position: "absolute"
    },
    border: {
        borderStyle: "solid",
    },
    quotes: {
        justifyContent: "center",
        flexDirection: "column",
        alignItem: "center",
        color: '#FFFFFF',
        fontFamily: "Poppins",
        textAlign: "center",
        position: "absolute",
        textAlign: "center",
        alignSelf: "center"
    },
    Button: {
        display: "flex",
        borderRadius: 30,
        alignSelf: "center",
        marginTop: 60,
        marginLeft: 150,
        background: "#E67E22",
        fontFamily: "Poppins",
        position: "absolute",
       padding: 13
    },
    wraper: {
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
        color: "#ffff",
        marginRight: 30,
    },
}
export default Latihan;