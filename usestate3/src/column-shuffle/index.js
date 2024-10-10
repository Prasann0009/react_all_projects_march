import Box from "./Box";
import { columns } from "./data";
import "./columns-shuffle.css";
import { useState } from "react";

const getAllIds = () => columns.map(column => column.id);

const filterColumns = (availableColumnIds) => {
    const availableColumns = [];
    const selectedColumns = [];

    columns.forEach(({ id }, index) => {
        if (availableColumnIds.find((availableId) => availableId === id)) {
            availableColumns.push(columns[index]);
        }
        else {
            selectedColumns.push(columns[index])
        }
    });

    return [availableColumns, selectedColumns];
}

const ColumnShuffle = () => {
    const [availableColumnIds, setAvailableColumnIds] = useState(getAllIds);
    const [availableColumns, selectedColumns] = filterColumns(availableColumnIds);
    const [selectedColumn, setSelectedColumn] = useState({ id: 3, box: 1 });

    const isRightButtonEnabled = selectedColumn && selectedColumn.box == 1;
    const isLeftButtonEnabled = selectedColumn && selectedColumn.box == 2;

    const moveRight = () => {
        setAvailableColumnIds(availableColumnIds.filter(id => id != selectedColumn.id));
        setSelectedColumn(null);
    }

    const moveLeft = () => {
        setAvailableColumnIds([...availableColumnIds, selectedColumn.id]);
        setSelectedColumn(null);
    }

    return (
        <div className="container">
            <Box
                boxId={1}
                columnsList={availableColumns}
                selectedColumn={selectedColumn}
                setSelectedColumn={setSelectedColumn}
            />
            <div className="options">
                <button onClick={moveRight} className="material-icons" disabled={!isRightButtonEnabled}>chevron_right</button>
                <button onClick={moveLeft} className="material-icons" disabled={!isLeftButtonEnabled}>chevron_left</button>
            </div>
            <Box
                boxId={2}
                columnsList={selectedColumns}
                selectedColumn={selectedColumn}
                setSelectedColumn={setSelectedColumn}
            />
        </div>
    );
}

export default ColumnShuffle;