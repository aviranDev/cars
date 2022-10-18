import React from 'react';
import Spinner from "./Spinner";

const Loader = props => props.loading && <Spinner />;

export default Loader;