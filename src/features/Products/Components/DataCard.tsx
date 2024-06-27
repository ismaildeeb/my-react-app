import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { GetProductUseCase } from '../usecases/get-products-usecase';
import { useState } from 'react';
import { Product } from '../Product.model';
import { Alert, Skeleton } from '@mui/material';

function DataCard() {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<Product[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    React.useEffect(() => {
      const fetchData = async () => {
            setIsLoading(true);
            try {
                const usecase: GetProductUseCase = new GetProductUseCase();
                const response = await usecase.execute();
                console.log(response);
                if (response.status === 200) {
                    setData(response.data); 
                } else {
                    setError('Failed to fetch data');
                }
            } catch (error) {
                setError('An error occurred');
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    if (isLoading) {
        return <Skeleton />;
    }

    if (error) {
        return <Alert severity="error">{error}</Alert>;
    }

    if (!data) {
        return null;
    }
    

    return (
        <Box sx={{ minWidth: 275 }}>
            
                
            <Card variant="elevation">
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    </Typography>
                    <Typography variant="h5" component="div">

                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    </Typography>
                    <Typography variant="body2">

                        <br />
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Box>
    );
}

export default DataCard;