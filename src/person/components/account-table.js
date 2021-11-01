import React from "react";
import Table from "../../commons/tables/table";


const columns = [
    {
        Header: 'Id',
        accessor: 'id',
    },
    {
        Header: 'Description',
        accessor: 'description',
    },
    {
        Header: 'Address',
        accessor: 'address',
    },
    {
        Header: 'Maximum_energy_consumption',
        accessor: 'maximum_energy_consumption',
    },
    {
        Header: 'Average_energy_consumption',
        accessor: 'average_energy_consumption',
    },
    {
        Header: 'Client_id',
        accessor: 'client_id',
    }
];

const filters = [
    {
        accessor: 'client_id',
    }
];


class AccountTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tableData: this.props.tableData
        };
    }

    render() {
        return (
            <Table
                data={this.state.tableData}
                columns={columns}
                search={filters}
                pageSize={5}
            />
        )
    }
}

export default AccountTable;