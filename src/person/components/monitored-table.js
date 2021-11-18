import React from "react";
import Table from "../../commons/tables/table";


const columns = [
    {
        Header: 'Id',
        accessor: 'id',
    },
    {
        Header: 'Sensor_id',
        accessor: 'sensor_id',
    },
    {
        Header: 'Measurement_value',
        accessor: 'measurement_value',
    },
    {
        Header: 'Timestamp',
        accessor: 'timestamp',
    }
];

const filters = [
    {
        accessor: 'sensor_id',
    }
];

class MonitoredTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tableData2: this.props.tableData2
        };
    }

    render() {
        return (
            <Table
                data={this.state.tableData2}
                columns={columns}
                search={filters}
                pageSize={5}
            />
        )
    }
}

export default MonitoredTable;