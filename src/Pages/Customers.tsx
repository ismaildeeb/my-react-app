import CreateCustomerDialog from "../features/Customers/Components/CreateDialogForm"
import DataTable from "../features/Customers/Components/DataTable"

function Customer() {
    return (
        <div>
            <DataTable />
            <CreateCustomerDialog />
        </div>
    )
}

export default Customer