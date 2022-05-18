import React from "react";
import CollapseWrapper from "../common/collapse";
const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ComponentWrapper>
                <Component />
                <Component />
                <Component />
            </ComponentWrapper>
        </CollapseWrapper>
    );
};

const Component = () => {
    return <div>Компонент списка</div>;
};

const ComponentWrapper = ({ children }) => {
    console.log(children);

    return React.Children.toArray(children).map(child => {
        const key = Number(child.key[1]) + 1;
        console.log(key);
        return <div className="d-flex" key={key}>{key + "."}{child}</div>;
    });
};

export default ChildrenExercise;
