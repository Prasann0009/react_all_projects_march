const Box = ({ boxId, columnsList, selectedColumn, setSelectedColumn }) => {
    return (
        <div className="box">
            {
                columnsList.map((column) => {

                    const updateSelection = () => {
                        if (selectedColumn?.id === column.id) {
                            setSelectedColumn(null);
                        }
                        else setSelectedColumn({ id: column.id, box: boxId })
                    }

                    return (
                        <p
                            key={column.id}
                            className={selectedColumn?.id == column.id ? 'active' : ''}
                            onClick={updateSelection}
                        >{column.displayName}</p>
                    );
                })
            }
        </div>
    );
}

export default Box;