import { useEffect, useRef } from 'react'

type Handler = () => void

function useOutsideClick(handler: Handler, listenerCapturing = true) {
    const ref = useRef<HTMLElement | null>();

    useEffect(function () {
        function handleClick(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                handler();
            }
        }

        document.addEventListener("click", handleClick, listenerCapturing);
        
        return () => document.removeEventListener("click", handleClick, listenerCapturing);
    }, [handler,listenerCapturing]
);


    return ref
}

export default useOutsideClick
