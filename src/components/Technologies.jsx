import { RiReactjsLine } from "react-icons/ri";
import { BiLogoJavascript } from "react-icons/bi";
import { DiJava } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { DiPhp } from "react-icons/di";
import { RiBootstrapLine } from "react-icons/ri";
import { TiHtml5 } from "react-icons/ti";
import { motion } from "framer-motion";
import { SiPowerbi } from "react-icons/si";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    },
});

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl">Technologies</motion.h1>

            <motion.div
                whileInView={{ opacity: 1, x: 1 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">

                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TiHtml5 className="text-7xl text-orange-400" />
                </motion.div>

                <motion.div
                    variants={iconVariants(2.8)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BiLogoJavascript className="text-7xl text-yellow-400" />
                </motion.div>

                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiBootstrapLine className="text-7xl text-purple-700" />
                </motion.div>

                <motion.div
                    variants={iconVariants(3.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-300" />
                </motion.div>

                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiJava className="text-7xl text-orange-400" />
                </motion.div>

                <motion.div
                    variants={iconVariants(4.4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiPhp className="text-7xl text-cyan-600" />
                </motion.div>

                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMysql className="text-7xl text-blue-300" />
                </motion.div>

                <motion.div
                    variants={iconVariants(4.8)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPowerbi className="text-7xl text-orange-300" />
                </motion.div>

            </motion.div>
        </div>
    );
};

export default Technologies;