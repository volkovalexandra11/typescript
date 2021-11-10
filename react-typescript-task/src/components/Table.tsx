import React from "react";
import {Vehicle, vehicleTypeTitles} from "../data/vehicles/contracts";
import { CurrencyLabel } from "@skbkontur/react-ui";

interface TableItemProps {
    vehicle: Vehicle
    number : number
}

const TableItem: React.FC<TableItemProps> = ({vehicle, number}) => {
    return (
        <tr>
            <td>{number}</td>
            <td>{vehicle.title}</td>
            <td>
                <CurrencyLabel value={vehicle.price} fractionDigits={2} />
            </td>
            <td>{vehicleTypeTitles[vehicle.type]}</td>
        </tr>
    );
};

interface TableProps {
    vehicles: Vehicle[]
}

export const Table: React.FC<TableProps> = ({ vehicles }) => {
    return (
        <table>
            <thead>
            <tr>
                <th>#</th>
                <th>Название</th>
                <th>Цена, ₽</th>
                <th>Тип</th>
            </tr>
            </thead>
            <tbody>
            {vehicles.map((x: Vehicle, i: number) => (
                <TableItem key={x.id} number={i + 1} vehicle={x} />
            ))}
            </tbody>
        </table>
    );
};
