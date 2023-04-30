import React,{useState} from 'react'
import { Grid, Paper, Typography, TextField, Button } from '@material-ui/core'
import axios from "axios";

export default function FeedBackForm() {
    const paperStyle = { padding: '30px 20px', height: '800px', width: '500px', margin: "20px auto" }
    const headerStyle = { margin: 0, fontWeight:"800" }
    const marginTop = { marginTop: 25 }
    const [application, setApplication] = useState({
        name: "",
        email: "",
        phoneNumber:"",
        comment: ""       
    });

    const createApplication= (event) => {
        event.preventDefault()
        axios.post("http://localhost:8000/comments", application).then(() => {
            console.log(application)
            window.alert("Your request has been received. One of our representatives will contact you shortly.")
            window.location.reload(false);
        }) 
    };


    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                <h2 style={headerStyle}>Feedback Form</h2>
                    <Typography variant='caption' gutterBottom>Please fill in the details below.</Typography>
                </Grid>
                <form >
                    <TextField style={marginTop} id="name" value={application.name} onChange={(e) => setApplication({...application, name: e.target.value })}
                        fullWidth label='Name' placeholder="Enter your name" />
                    <TextField style={marginTop} id="email" value={application.email} onChange={(e) => setApplication({ ...application,email: e.target.value })}
                        fullWidth label='Email' placeholder="Enter your email" />
                    <TextField style={marginTop} id="email" value={application.phoneNumber} onChange={(e) => setApplication({ ...application,phoneNumber: e.target.value })}
                        fullWidth label='Phone Number' placeholder="Enter your phone number" />            
                    <TextField style={marginTop} id="comments" value={application.comment} onChange={(e) => setApplication({...application, comment: e.target.value })}
                        fullWidth label='comments' placeholder="Comments" />
                    <Button type='submit' variant='contained' color='primary' style={marginTop} onClick={createApplication}>Submit</Button>
                </form>
            </Paper>
        </Grid>
    )
}