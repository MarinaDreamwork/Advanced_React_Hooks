import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render from LogOutButton");
    });
    return (
        <button className="btn btn-primary m-1" onClick={onLogOut}>LogOutButton</button>
     );
};

LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};

const MemoizedLogOutButton = React.memo(LogOutButton);

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleLogOut = useCallback(() => {
        localStorage.removeItem("auth");
    }, []);
    return (
    <>
        <button className="btn btn-primary m-1" onClick={() => setState(!state)}>HOC</button>
        <MemoizedLogOutButton onLogOut={handleLogOut} />
    </>
    );
};

export default MemoWithUseCallbackExample;
