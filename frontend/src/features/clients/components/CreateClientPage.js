import React, {useContext} from 'react';
import * as Yup from 'yup';
import {Button, Card, CardActions, CardContent, CardHeader, Stack, TextField} from "@mui/material";
import AppLayout from "../../layout/AppLayout";
import {useNavigate} from "react-router-dom";
import {useClientContext} from "./ClientContext";
import {Form, FormikContext, FormikProvider, useFormik} from "formik";


function CreateClientPage() {

    const {addClient} = useClientContext();

    const navigate = useNavigate();

    const minAge = 18;
    const maxAge = 105;
    const ClientSchema = Yup.object().shape({
        firstName: Yup.string().required('Le prenom est obligatoire').default(''),
        lastName: Yup.string().required('Le nom est obligatoire').default(''),
        address: Yup.string().default(''),
        email: Yup.string().email("Email incorrect").required("L'adresse email est obligatoire").default(''),
        age: Yup.number().default(35)
            .min(minAge, `L'age doit etre superieur a ${minAge} ans`)
            .max(maxAge, `L'age doit etre inferieur a ${maxAge} ans`)
            .required("L'age est obligatoire"),
    });

    const formik = useFormik({
        validationSchema: ClientSchema,
        initialValues: ClientSchema.getDefaultFromShape(),
        onSubmit: (client, {resetForm, setSubmitting}) => {
            console.log(client);

            addClient(client);

            navigate('/clients');

        }
    });

    const {getFieldProps, handleSubmit, values, errors, touched} = formik;

    console.log(formik);

    return (
        <AppLayout>

            <FormikProvider value={formik}>
                <Form onSubmit={handleSubmit}>
                    <Card>
                        <CardHeader title={'Creation de client'}/>
                        <CardContent>
                            <Stack spacing={3}>
                                <FormikTextField label={'Nom'} name={'lastName'}/>
                                <FormikTextField label={'Prenom'} name={'firstName'}/>
                                <TextField
                                    label={'Adresse'} {...getFieldProps('address')}
                                    helperText={errors['address']}
                                    error={Boolean(errors['address'] && touched['address'])}
                                />
                                <TextField
                                    label={'Email'} {...getFieldProps('email')}
                                    helperText={errors['email']}
                                    error={Boolean(errors['email'] && touched['email'])}
                                />
                                <FormikTextField type={'number'} label={'Age'} name={'age'}/>
                            </Stack>
                        </CardContent>
                        <CardActions sx={{justifyContent: 'end'}}>
                            <Button type={'submit'} variant={'contained'}>Creer</Button>
                        </CardActions>
                    </Card>
                </Form>
            </FormikProvider>

        </AppLayout>
    );
}

export default CreateClientPage;


function FormikTextField({label, name, ...others}) {
    const formik = useContext(FormikContext);
    const {getFieldProps, errors, touched} = formik;
    return (
        <TextField
            label={label} {...getFieldProps(name)}
            helperText={errors[name]}
            error={Boolean(errors[name] && touched[name])}
            {...others}
        />
    )
}