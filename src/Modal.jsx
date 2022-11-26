import React from 'react';

const Modal = ({open, setOpen, children}) => {
    return (
        <div>
            <div className={`overlay animated ${open && "show"}`}>
                <div className="modal">
                    <svg height="200" viewBox="0 0 200 200" width="200" onClick={()=>setOpen(false)}>
                        <title/>
                        <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
                    </svg>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
