import { cloneElement, createContext, ReactElement, ReactNode, useContext, useState } from "react";
import styled from "styled-components";
import useOutsideClick from "../../hooks/useOutsideClick";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";


const StyledModal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--color-gray-0);
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-lg);
    padding: 3.2rem 4rem;
    transition: all 0.5s;
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--backdrop-color);
    backdrop-filter: blur(4px);
    z-index: 1000;
    transition: all 0.5s;
`;

const Button = styled.button`
    background: none;
    border: none;
    padding: 0.4rem;
    border-radius: var(--border-radius-sm);
    transform: translateX(0.8rem);
    transition: all 0.2s;
    position: absolute;
    top: 1.2rem;
    right: 1.9rem;

    &:hover {
        background-color: var(--color-gray-100);
    }

    & svg {
        width: 2.4rem;
        height: 2.4rem;
        color: var(--color-gray-500);
    }
`

type ModalCtxProps = {
    openName: string;
    close: () => void;
    open: (value: string) => void;
}

const ModalContext = createContext<ModalCtxProps>({
    openName: "",
    close: () => {
        return;
    },
    open: (a: string) => {
        a
        return;
    }
});

export default function Modal({ children }: { children: ReactNode }){
    const [openName, setOpenName] = useState("");

    const close = () => setOpenName("");
    const open = (val:string) => setOpenName(val);

    return (
        <ModalContext.Provider value={{ openName, close, open }}>
            {children}
        </ModalContext.Provider>
    );
}

function Open({ children, opens: opensWindowName } : { children: ReactElement, opens: string}) {
    const { open } = useContext(ModalContext)
    
    return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }: { children: ReactElement, name: string }) {
    const { openName, close } = useContext(ModalContext);
    const  ref: any  = useOutsideClick(close);

    if (name != openName) return null;

    return createPortal(
        <Overlay>
            <StyledModal ref={ref}>
                <Button onClick={close}>
                    <HiXMark/>
                </Button>
            <div>
                {cloneElement(children, {onCloseModal: close})}        
            </div>
            </StyledModal>
        </Overlay>
        , document.body
    )
}

Modal.Open = Open;
Modal.Window = Window;