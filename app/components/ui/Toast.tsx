"use client";

import { CheckCircle } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect } from "react";

interface ToastProps {
    message: string;
    isVisible: boolean;
    onClose: () => void;
    duration?: number;
}

export default function Toast({ message, isVisible, onClose, duration = 3000 }: ToastProps) {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(onClose, duration);
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose, duration]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 20, x: 20 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    exit={{ opacity: 0, y: 20, x: 20 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="fixed bottom-6 right-6 z-[200] bg-dark-purple border border-white/10 rounded-2xl shadow-2xl shadow-black/40 backdrop-blur-md overflow-hidden"
                >
                    {/* Progress bar */}
                    <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: duration / 1000, ease: "linear" }}
                        className="h-[3px] bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                    />

                    {/* Content */}
                    <div className="flex items-center gap-3 px-5 py-4">
                        <CheckCircle size={24} weight="fill" className="text-green-400 shrink-0" />
                        <span className="text-white font-semibold text-sm">{message}</span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
