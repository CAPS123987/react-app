import { useEffect, useState } from "react";

type Preps = {
    children: any;
    className: string;
    text: string;
};

const Toggle: React.FC<Preps> = ({children, className, text}) => {

    const [toggle, setToggle] = useState<boolean>(false);

    return (
        <div className={className}>
            <span onClick={() => setToggle(!toggle)} className={className + "Name"}>{text}</span>
            {toggle?<div className={className + "Content"}>{children}</div>:null}
        </div>
    );
}

export default Toggle;