'use client';
import "./intro.css";
import { motion } from "framer-motion";

export default function Intro () {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.7 }}>
        <div className="container">
            <img src="/will_graph.png" alt="Profile" height="500px  " />
            <div className="name">
                <p className= "fullname" >William Goeyana</p>
                <p className= "tag" >I'am a Software Developer!</p>
            </div>
        </div>
        </motion.div>
    );
}