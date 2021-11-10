import React from "react";
import {VehicleApi} from "../data/vehicles/api";
import {Vehicle} from "../data/vehicles/contracts";

export class Filter extends React.Component<Vehicle> {
    render(): React.ReactNode {
        return <div/>;
    }

    componentDidUpdate(prevProps, prevState) {
        VehicleApi.search(prevProp.)
    }
}
