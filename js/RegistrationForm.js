import React, { Component } from 'react';
import { Button, Form, Grid, Header, Segment, Message, Dimmer, Loader } from 'semantic-ui-react';

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
];

class RegistrationForm extends Component {
    constructor() {
        super();
        this.state = {
            fname: '',
            lname: '',
            gender: '',
            email: '',
            mobile: '',
            cname: '',
            loadingStatus: null,
            ID: null
        };

        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let data = {
            fname: this.state.fname,
            lname: this.state.lname,
            gender: this.state.gender,
            number: this.state.mobile,
            email: this.state.email,
            college: this.state.cname
        };
        this.setState({ loadingStatus: 1 })
        fetch('https://quiet-reef-46852.herokuapp.com/users', {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }).then((response) => {
            var contentType = response.headers.get("content-type")

            if (contentType && contentType.includes("application/json")) {
                response.json().then(response => {
                    fetch('/send_mail', {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: data.email,
                            name: data.fname,
                            id: response.samid
                        })
                    })
                })
            }

            if (!response.ok) {
                throw new Error()
            }

            this.setState({ fname: '', lname: '', gender: '', email: '', college: '', number: '', loadingStatus: 2 })
        }).catch((e) => {
            this.setState({ loadingStatus: 0 })
        })
    }

    sendConfirmationEmail() {

    }

    handleGenderChange(e, { value }) {
        e.preventDefault()
        this.setState({ gender: value })
    }

    handleValueChange(e) {
        e.preventDefault()
        if (e.target.name === 'first-name') {
            this.setState({ fname: e.target.value })
        }
        if (e.target.name === 'last-name') {
            this.setState({ lname: e.target.value })
        }
        if (e.target.name === 'email') {
            this.setState({ email: e.target.value })
        }
        if (e.target.name === 'mobile') {
            this.setState({ mobile: e.target.value })
        }
        if (e.target.name === 'college-name') {
            this.setState({ cname: e.target.value })
        }
    }

    render() {
        let disabled = true;

        if (this.state.email !== '' && this.state.fname !== '' && this.state.lname !== '' && this.state.gender !== '' && this.state.mobile !== '' && this.state.cname !== '') {
            disabled = false;
        }

        if (this.state.loadingStatus === 2) {
            return (
                <div style={{ backgroundColor: '#09111b' }}>
                    <a href="index.html"><img style={{ width: 150, marginLeft: '1.5rem', marginRight: '1.5rem', marginTop: '1.5rem' }} src="img/samlogo.png" /></a>
                    <div className='login-form'>
                        <Grid textAlign='center' verticalAlign='bottom'>
                            <Grid.Column style={{ maxWidth: 450 }}>
                                <Message visible success header='Successfully Registered' content='Please check your registered email ID for Samgatha ID' />
                            </Grid.Column>
                        </Grid>
                    </div>
                </div>
            )
        }

        if (this.state.loadingStatus === 0) {
            return (
                <div style={{ backgroundColor: '#09111b' }}>
                    <a href="index.html"><img style={{ width: 150, marginLeft: '1.5rem', marginRight: '1.5rem', marginTop: '1.5rem' }} src="img/samlogo.png" /></a>
                    <div className='login-form'>
                        <Grid textAlign='center' verticalAlign='bottom'>
                            <Grid.Column style={{ maxWidth: 450 }}>
                                <Message visible error header='Oh no!' content='It appears that this email ID is already registered! Or it might be a network error. Please try again.' />
                            </Grid.Column>
                        </Grid>
                    </div>
                </div>
            )
        }

        if (this.state.loadingStatus === 1) {
            return (
                <Dimmer active>
                    <Loader />
                </Dimmer>
            )
        }

        if (!this.state.loadingStatus) {
            return (
                <div style={{ backgroundColor: '#09111b' }}>
                    <a href="index.html"><img style={{ width: 150, marginLeft: '1.5rem', marginRight: '1.5rem', marginTop: '1.5rem' }} src="img/samlogo.png" /></a>
                    <div className='login-form'>
                        <Grid textAlign='center' verticalAlign='bottom'>
                            <Grid.Column style={{ maxWidth: 450 }}>
                                <Header as='h2' textAlign='center' className='register'>
                                    REGISTER
                                </Header>
                                <Form size='small' onSubmit={this.handleSubmit}>
                                    <Segment clearing={true} className='form-body'>
                                        <Form.Input label='First Name' placeholder='First Name' name='first-name' onChange={this.handleValueChange}/>
                                        <Form.Input label='Last Name' placeholder='Last Name' name='last-name' onChange={this.handleValueChange} />
                                        <Form.Field>
                                            <Form.Select label='Gender' options={options} placeholder='Gender' name='gender' onChange={this.handleGenderChange} />
                                        </Form.Field>
                                        <Form.Input label='Email' placeholder='Email' name='email' onChange={this.handleValueChange} />
                                        <Form.Input label='Mobile Number' placeholder='+91' name='mobile' onChange={this.handleValueChange} />
                                        <Form.Input label='College Name' placeholder='College Name' name='college-name' onChange={this.handleValueChange} />
                                        <Button type='submit' fluid size='large' disabled={disabled} onClick={this.login} className='form-button'>
                                            REGISTER
                                    </Button>
                                    </Segment>
                                </Form>
                            </Grid.Column>
                        </Grid>
                    </div>
                </div>
            )
        }
    }
}

export default RegistrationForm;