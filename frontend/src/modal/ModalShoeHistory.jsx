import React from 'react'

function ModalShoeHistory({ children, isModalOpen }) {

    if (!isModalOpen) {
        return false
    }

    return (
        <div className=' inset-0 fixed h-screen justify-center flex items-center z-50 '>{children}</div>
    )
}

export default ModalShoeHistory