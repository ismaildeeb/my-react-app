import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { Checkbox } from '@mui/material';
import { CreateCustomerAddressParams } from '../../CustomerAddress/Models/create-customerAddress-params';
import { CreateCustomerParams } from '../Models/create-customer-params';
import UpdateDialogForm from './UpdateDialogForm';


export default function CreateCustomerDialog() {
    const [openCustomerDialog, setOpenCustomerDialog] = React.useState(false);
    const [customerData, setCreateCustomerParams] = React.useState<CreateCustomerParams>({
        CustomerCode: '',
        FirstName: '',
        LastName: '',
        Email: '',
        Phone: undefined,
    });

    const [openAddressDialog, setOpenAddressDialog] = React.useState(false);

    const handleOpenCustomerDialog = () => setOpenCustomerDialog(true);
    const handleCloseCustomerDialog = () => setOpenCustomerDialog(false);

    const handleChangeCustomer = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setCreateCustomerParams({ ...customerData, [name]: value });
    };

    const handleOpenAddressDialog = () => {

        if (
            customerData.CustomerCode &&
            customerData.FirstName &&
            customerData.LastName &&
            customerData.Email
        ) {
            setOpenAddressDialog(true);
        } else {
            alert('Please fill in all customer details before proceeding to address.');
        }
    };

    const handleCloseAddressDialog = () => setOpenAddressDialog(false);

    const [addressData, setAddressData] = React.useState<CreateCustomerAddressParams>({
        Address1: '',
        Address2: '',
        City: '',
        State: '', // Using PascalCase
        PostalCode: 0,
        Country: '',
        ShippingAddressFlag: false,
        BillingAddressFlag: false,
    });

    const handleChangeAddress = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setAddressData({ ...addressData, [name]: value });
    };

    const handleSubmitAddress = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle address data submission here
        // Combine customer and address data for final submission
        const combinedData = { ...customerData, ...addressData };
        console.log('Combined Customer and Address Data:', combinedData);
        // Perform any necessary data validation or processing
        // ...
        setOpenCustomerDialog(false); // Optional: Close customer dialog after successful address submission
        setOpenAddressDialog(false);
    };
    // Function to check if all customer fields are filled
    const isCustomerFormValid = (): any => {
        return (
            customerData.CustomerCode &&
            customerData.FirstName &&
            customerData.LastName &&
            customerData.Email
        );
    };

    return (
        <div>
            <Button variant="contained" color="success" onClick={handleOpenCustomerDialog}>
                Create Customer
            </Button>
            <Dialog open={openCustomerDialog} onClose={handleCloseCustomerDialog} fullWidth maxWidth="sm">
                <DialogTitle>Create Customer</DialogTitle>
                <DialogContent>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Customer Code"
                            type="text"
                            fullWidth
                            variant="outlined"
                            name="CustomerCode"
                            value={customerData.CustomerCode}
                            onChange={handleChangeCustomer}
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
                            onChange={handleChangeCustomer}
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
                            onChange={handleChangeCustomer}
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
                            onChange={handleChangeCustomer}
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
                            onChange={handleChangeCustomer}
                        />
                    </form>
                    <Button variant="contained" color="success" disabled={!isCustomerFormValid()} onClick={handleOpenAddressDialog}>
                        Next: Enter Address
                    </Button>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseCustomerDialog}>Cancel</Button>
                </DialogActions>
            </Dialog>

            <Dialog open={openAddressDialog} onClose={handleCloseAddressDialog} fullWidth maxWidth="sm">
                <DialogTitle>Enter Customer Address</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmitAddress}>
                        <TextField
                            margin="dense"
                            label="Address 1"
                            type="text"
                            fullWidth
                            variant="outlined"
                            name="Address1"
                            value={addressData.Address1}
                            onChange={handleChangeAddress}
                            required
                        />
                        <TextField
                            margin="dense"
                            label="Address 2 (Optional)"
                            type="text"
                            fullWidth
                            variant="outlined"
                            name="Address2"
                            value={addressData.Address2}
                            onChange={handleChangeAddress}
                        />
                        <TextField
                            margin="dense"
                            label="City"
                            type="text"
                            fullWidth
                            variant="outlined"
                            name="City"
                            value={addressData.City}
                            onChange={handleChangeAddress}
                            required
                        />
                        <TextField
                            margin="dense"
                            label="State"
                            type="text"
                            fullWidth
                            variant="outlined"
                            name="State"
                            value={addressData.State}
                            onChange={handleChangeAddress}
                            required
                        />
                        <TextField
                            margin="dense"
                            label="Postal Code"
                            type="number"
                            fullWidth
                            variant="outlined"
                            name="PostalCode"
                            value={addressData.PostalCode}
                            onChange={handleChangeAddress}
                            required
                        />
                        <TextField
                            margin="dense"
                            label="Country"
                            type="text"
                            fullWidth
                            variant="outlined"
                            name="Country"
                            value={addressData.Country}
                            onChange={handleChangeAddress}
                            required
                        />
                        <Checkbox
                            aria-label="Shipping Address"
                            name="ShippingAddressFlag"
                            checked={addressData.ShippingAddressFlag}
                            onChange={handleChangeAddress}
                        />
                        <Checkbox
                            aria-label="Billing Address"
                            name="BillingAddressFlag"
                            checked={addressData.BillingAddressFlag}
                            onChange={handleChangeAddress}
                        />
                    </form>
                    <Button variant="contained" color="success" type="submit">
                        Save Customer
                    </Button>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseAddressDialog}>Cancel</Button>
                </DialogActions>
            </Dialog>
            <UpdateDialogForm />
        </div>
    );

}