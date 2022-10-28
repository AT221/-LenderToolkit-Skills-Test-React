import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AccountMenu from '../Nav/AccountMenu';
import BasicForm from '../Form/BasicForm'
import{Routes, Route} from 'react-router-dom';
import Home from '../Home/Home'

export default function App() {
	const [openForm, setOpenForm] = React.useState(false);
	const handleOnClick = (page) => {
		console.log('open');
		if(!openForm) { 
			setOpenForm(true)
		} else {
			setOpenForm(false)
		}
	};
  return (
    <Container maxWidth="sm">
	<AccountMenu onClick={handleOnClick} />
	<Box sx={{ my: 4 }}>
				<Typography variant="h4" component="h1" gutterBottom>
					React Skills test
				</Typography>
			</Box>
	<Routes>		
		{
			openForm && 
			<Route path='/todo' element={<BasicForm />}/>		
		}
		<Route path='/home' element={<Home />}>

		</Route>
	</Routes>

     
    </Container>
  );
}
