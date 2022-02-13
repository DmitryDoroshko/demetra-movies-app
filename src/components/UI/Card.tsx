import React from "react";

type Props = {
    children: any;
};

const Card = (props: Props) => {
    return <div className="card">{props.children}</div>;
};

export default Card;
