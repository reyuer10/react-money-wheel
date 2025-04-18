import React, { useContext } from 'react'
import { motion } from 'motion/react'
import { MoneyWheelContext } from '../App'

function ModalResults({ children }) {
    const { isModalOpen } = useContext(MoneyWheelContext)

    if (!isModalOpen) {
        return false
    }
    return (
        <motion.div
            initial={{
                opacity: 0,

            }}
            // transition={{
            //     delay: 1
            // }}
            animate={{
                opacity: 1,
            }}
            className='absolute inset-1 z-30 flex justify-center items-center modal-background'>
            {children}
        </motion.div>
    )
}

export default ModalResults