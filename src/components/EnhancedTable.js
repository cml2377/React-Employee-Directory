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
                        lookup: { 34: 'HR Specialist', 63: 'Microbiologist', 1: 'Director', 2: 'Chemist', 3: 'Software Developer', 4: 'Commissioner' },
                    },
                ]}
                data={[
                    { name: 'Mehmet', surname: 'Baran', employeeID: 981987, jobTitle: 63 },
                    { name: 'Wolfgang', surname: 'Schreiber', employeeID: 284721, jobTitle: 3 },
                    { name: 'Matilde', surname: 'Wilson', employeeID: 329479, jobTitle: 1 },
                    { name: 'Anthony', surname: 'Thomas', employeeID: 902847, jobTitle: 3 },
                    { name: 'Claire', surname: 'Underwood', employeeID: 832110, jobTitle: 4 },
                    { name: 'Arya', surname: 'Stark', employeeID: 768390, jobTitle: 34 },
                    { name: 'Henry', surname: 'Hanks', employeeID: 899003, jobTitle: 63 },
                    { name: 'Maria', surname: 'Browder', employeeID: 833271, jobTitle: 2 },
                    { name: 'Joe', surname: 'Bradley', employeeID: 786542, jobTitle: 34 },
                    { name: 'Paul', surname: 'Green', employeeID: 382813, jobTitle: 3 },
                    { name: 'Zerya', surname: 'Baran', employeeID: 207717, jobTitle: 34 },
                    { name: 'Rikke', surname: 'Hansen', employeeID: 393748, jobTitle: 2 },
                    { name: 'Camil', surname: 'Chacon', employeeID: 653940, jobTitle: 63 },
                ]}
                options={{
                    sorting: true
                }}
            />
        )
    }
}

export default EnhancedTable;