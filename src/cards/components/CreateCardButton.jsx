
import { Box, Button } from '@mui/material'

import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import ROUTES from '../../routes/routesModel';

export default function CreateCardButton() {
    return (
        <Box sx={{display:"flex",justifyContent:"center",marginTop:"2vh"}}>
            <Link to={ROUTES.CREATE_CARD}>
                <Button variant="contained" color="success">
                    <AddIcon sx={{marginRight:"7px"}}/>  Create New Card
                </Button>
            </Link> 
        </Box>
    )
}
