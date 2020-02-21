import React, { Component } from 'react';
import MaterialTable from 'material-table';

class EnhancedTable extends Component {
    render() {
        return (
            <MaterialTable
                title="Employee Database"
                columns={[
                    { title: 'Name', field: 'name' },
                    { title: 'Surname', field: 'surname' },
                    { title: 'Employee ID', field: 'employeeID', type: 'numeric' },
                    {
                        title: 'Job Title',
                        field: 'jobTitle',
                        lookup: { 34: 'HR', 63: 'Microbiologist', 1: 'CEO', 2: 'Chemist', 3: 'IT' },
                    },
                ]}
                data={[
                    { name: 'Mehmet', surname: 'Baran', employeeID: 981987, jobTitle: 63 },
                    { name: 'Wolfgang', surname: 'Schreiber', employeeID: 284721, jobTitle: 3 },
                    { name: 'Matilde', surname: 'Wilson', employeeID: 329479, jobTitle: 1 },
                    { name: 'Maria', surname: 'Browder', employeeID: 833271, jobTitle: 2 },
                    { name: 'Joe', surname: 'Bradley', employeeID: 786542, jobTitle: 34 },
                    { name: 'Paul', surname: 'Green', employeeID: 382813, jobTitle: 3 },
                    { name: 'Zerya Betül', surname: 'Baran', employeeID: 207717, jobTitle: 34 },
                    { name: 'Rikke', surname: 'Hansen', employeeID: 393748, jobTitle: 2 },
                ]}
                options={{
                    sorting: true
                }}
            />
        )
    }
}

export default EnhancedTable;