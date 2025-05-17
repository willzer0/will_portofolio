"use client";

import "./about.css";
import { motion } from "framer-motion";

export default function About() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.7 }}>
        <div className="container">
            <img src="./wil_about.png" alt="About" height="400px" />
            <div className="container2">
                <h1 className="title">About Me</h1>
                <p className="description">I am a software developer with a passion for creating innovative solutions. I have experience in various programming languages and frameworks, and I am always eager to learn new technologies.</p>
                <div>
                    <button className="btn_view">
                        View Project
                    </button>
                    <button className="btn_cv">
                        Download CV 
                    </button>
                </div>
            </div>
            
        </div>
        </motion.div>
    );
}