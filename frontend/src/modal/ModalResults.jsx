import React from 'react'
import { motion } from 'motion/react'

function ModalResults({ children, isModalOpen }) {

    if (!isModalOpen) {
        return false
    }
    return (
        <motion.div
        initial={{}}
        className='absolute inset-1 z-30 flex justify-center items-center modal-background'>
            {children}
        </motion.div>
    )
}

export default ModalResults