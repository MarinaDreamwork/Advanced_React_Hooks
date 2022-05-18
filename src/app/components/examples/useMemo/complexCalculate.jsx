import React, { useEffect, useMemo, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
};

function runFactorial(n) {
    console.log("run factorial");
    return factorial(n);
}

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const [otherState, setOtherState] = useState(false);
    const fact = useMemo(() => runFactorial(value), [value]);
    const buttonColor = otherState ? "primary" : "secondary";
    useEffect(() => {
        // console.log("render");
    });
    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <Divider />
                <p>Value: {value}</p>
                <p>Factorial: {fact}</p>
                <button className="btn btn-primary m-1" onClick={() => setValue(prevState => prevState + 10)}>Increment</button>
                <button className="btn btn-primary m-1" onClick={() => setValue(prevState => prevState - 10)}>Decrement</button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <Divider />
                <button className={"btn btn-" + buttonColor} onClick={() => setOtherState(prevState => !prevState)}>Change button color</button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
