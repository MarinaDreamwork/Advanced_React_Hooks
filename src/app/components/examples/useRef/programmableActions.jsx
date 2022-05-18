import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const ProgrammableActionsExample = () => {
    const inputRef = useRef();
    const handleClick = () => {
        console.log(inputRef.current);
        inputRef.current.focus();
    };
    const anotherHandleClick = () => {
        inputRef.current.style.padding = "20px";
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-label">Email</label>
            <input ref={inputRef} type="email" className="form-control" id="email"/>
            <button className="btn btn-primary" onClick={handleClick}>Фокус input</button>
            <button className="btn btn-success" onClick={anotherHandleClick}>Изменить размер поля ввода</button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
