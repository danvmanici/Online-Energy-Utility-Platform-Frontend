import React from "react";
import Table from "../../commons/tables/table";


const columns = [
    {
        Header: 'Description',
        accessor: 'description',
    },
    {
        Header: 'Max_value',
        accessor: 'max_value',
    }
];

const filters = [
    {
        accessor: 'max_value',
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