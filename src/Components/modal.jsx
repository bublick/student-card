import React from 'react'

const Modal = ({ title, text, exitText, exitAction, showPopup }) => {
    return (
        <>
            {showPopup ? (
                <>
                    <div className='modal-backdrop show'></div>
                    <div
                        className='modal modal fade show'
                        tabindex='-1'
                        role='dialog'
                        style={{ display: 'block' }}
                    >
                        <div className='modal-dialog' role='document'>
                            <div className='modal-content'>
                                <div className='modal-header'>
                                    <h5 className='modal-title'>{title}</h5>
                                </div>
                                <div className='modal-body'>
                                    <p>{text}</p>
                                </div>
                                <div className='modal-footer'>
                                    <button
                                        type='button'
                                        className='btn btn-secondary'
                                        data-dismiss='modal'
                                        onClick={exitAction}
                                    >
                                        {exitText}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                ''
            )}
        </>
    )
}

export default Modal
