import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit'; // Material-UI Edit icon

// Customer data interface
interface CustomerData {
    CustomerCode: string;
    FirstName: string;
    LastName: string;
    Email: string;
    Phone?: number;
}

// Customer address interface
interface CreateCustomerAddressParams {
    Address1: string;
    Address2: string;
    City: string;
    State: string;
    PostalCode: number;
    Country: string;
    ShippingAddressFlag: boolean;
    BillingAddressFlag: boolean;
}

export default function UpdateDialogForm(props: { customerId?: string }) {
    const [openDialog, setOpenDialog] = React.useState(false);
    const [customerData, setCustomerData] = React.useState<CustomerData & CreateCustomerAddressParams>({
        CustomerCode: '',
        FirstName: '',
        LastName: '',
        Email: '',
        Phone: undefined,
        Address1: '',
        Address2: '',
        City: '',
        State: '',
        PostalCode: 0,
        Country: '',
        ShippingAddressFlag: false,
        BillingAddressFlag: false,
    });

    const handleOpenDialog = () => setOpenDialog(true);
    const handleCloseDialog = () => setOpenDialog(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setCustomerData({ ...customerData, [name]: value });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle data submission here
        // Combine customer and address data for final update
        const combinedData = { ...customerData };
        console.log('Updated Customer and Address Data:', combinedData);
        // Perform any necessary data validation or processing
        // ...
        setOpenDialog(false);
    };

    const fetchedData = {
        CustomerCode: 'CUS-123',
        FirstName: 'John',
        LastName: 'Doe',
        Email: 'john.doe@example.com',
        Phone: 1234567890,
        Address1: '123 Main St',
        Address2: 'Apt. 101',
        City: 'Anytown',
        State: 'CA',
        PostalCode: 12345,
        Country: 'USA',
        ShippingAddressFlag: true,
        BillingAddressFlag: false,
    };
    // Fetch customer data based on ID passed through props (if provided)
    React.useEffect(() => {
        if (props.customerId) {
            // Simulate data fetching (replace with actual API call)

            setCustomerData(fetchedData);
        }
    }, [props.customerId]);

    const showEditButton = !props.customerId || // Show edit button if no ID or data has changed
        JSON.stringify(customerData) !== JSON.stringify(fetchedData); // Or if data differs from fetched version

    return (
        <div>
            {showEditButton && (
                <IconButton onClick={handleOpenDialog} aria-label="Edit Customer">
                    <EditIcon />
                </IconButton>
            )}
            <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="sm">
                <DialogTitle>Update Customer</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Customer Code"
                            type="text"
                            fullWidth
                            variant="outlined"
                            name="CustomerCode"
                            value={customerData.CustomerCode}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            margin="dense"
                            label="First Name"
                            type="text"
                            fullWidth
                            variant="outlined"
                            name="FirstName"
                            value={customerData.FirstName}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            margin="dense"
                            label="Last Name"
                            type="text"
                            fullWidth
                            variant="outlined"
                            name="LastName"
                            value={customerData.LastName}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            margin="dense"
                            label="Email"
                            type="email"
                            fullWidth
                            variant="outlined"
                            name="Email"
                            value={customerData.Email}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            margin="dense"
                            label="Phone (Optional)"
                            type="number"
                            fullWidth
                            variant="outlined"
                            name="Phone"
                            value={customerData.Phone || ''} // Handle optional phone number
                            onChange={handleChange}
                        />
                        <TextField
                            margin="dense"
                            label="Address 1"
                            type="text"
                            fullWidth
                            variant="outlined"
                            name="Address1"
                            value={customerData.Address1}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            margin="dense"
                            label="Address 2 (Optional)"
                            type="text"
                            fullWidth
                            variant="outlined"
                            name="Address2"
                            value={customerData.Address2}
                            onChange={handleChange}
                        />
                        <TextField
                            margin="dense"
                            label="City"
                            type="text"
                            fullWidth
                            variant="outlined"
                            name="City"
                            value={customerData.City}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            margin="dense"
                            label="State"
                            type="text"
                            fullWidth
                            variant="outlined"
                            name="State"
                            value={customerData.State}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            margin="dense"
                            label="Postal Code"
                            type="number"
                            fullWidth
                            variant="outlined"
                            name="PostalCode"
                            value={customerData.PostalCode}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            margin="dense"
                            label="Country"
                            type="text"
                            fullWidth
                            variant="outlined"
                            name="Country"
                            value={customerData.Country}
                            onChange={handleChange}
                            required
                        />
                        BillingAddressFlag
                        <Checkbox
                            aria-label="Shipping Address"
                            name="ShippingAddressFlag"
                            checked={customerData.ShippingAddressFlag}
                            onChange={handleChange}
                        />
                        BillingAddressFlag
                        <Checkbox
                            aria-label="Billing Address"
                            name="BillingAddressFlag"
                            checked={customerData.BillingAddressFlag}
                            onChange={handleChange}
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>Cancel</Button>
                    <Button variant="contained" color="success" type="submit">
                        Save Updates
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}