"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimationWrapperTypes {
    children: ReactNode,
    className?: string
}

export default function AnimationWrapper({ children, className, ...props } : AnimationWrapperTypes) {
    return (
        <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.8 }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}