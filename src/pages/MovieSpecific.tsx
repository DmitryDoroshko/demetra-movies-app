import React from "react";
import { useParams } from "react-router-dom";

type Props = {};

const MovieSpecific = (props: Props) => {
    const params = useParams();
    return <h2>{params.movieId}</h2>;
};

export default MovieSpecific;
