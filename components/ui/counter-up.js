import {Fragment, useEffect, useRef, useState} from "react";

const CounterUp = ({end}) => {

    const [state, setState] = useState(null);
    const ref = useRef(0);

    const accumlator = end / 50;

    const updateCounter = () => {
        if (ref.current < end) {
            const res = Math.ceil(ref.current + accumlator);
            if (ref.current > end) return setState(end);
            setState(res);
            ref.current = res;
        }
        setTimeout(updateCounter, 50);
    };

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            updateCounter();
        }
        return () => (isMounted = false);
    }, [end]);

    return (
        <Fragment>
            {state}
        </Fragment>
    );

};

export default CounterUp;