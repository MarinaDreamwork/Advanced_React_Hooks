import React, { useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";

const PrevStateExample = () => {
    const prevState = useRef("");
    const [otherState, setOtherState] = useState("false");
    console.log("prevState", prevState.current);
    console.log("otherState", otherState);
    const toggleOtherState = () => {
        setOtherState(prevState => prevState === "false" ? "true" : "false");
    };
    useEffect(() => {
        prevState.current = otherState;
    });
    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider />
            <p>prev state:{prevState.current}</p>
            <p>current state:{otherState}</p>
            <button className="btn btn-secondary" onClick={toggleOtherState}>Toggle other state</button>
        </CardWrapper>
    );
};

export default PrevStateExample;
