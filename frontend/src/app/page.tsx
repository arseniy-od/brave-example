'use client';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/navigation';
import * as Yup from 'yup';
import { FormInput, TextArea } from './components/form';

export default function Home() {
    const router = useRouter();
    const handleSubmit = (values: {
        jobTitle: string;
        jobDescription: string;
    }) => {
        console.log('submit values', values);
        router.push('/interview');
    };
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Formik
                initialValues={{
                    jobTitle: '',
                    jobDescription: '',
                }}
                validationSchema={Yup.object({
                    jobTitle: Yup.string()
                        .max(25, 'Must be 15 characters or less')
                        .min(2, 'Must be 2 characters or more')
                        .required('Required'),
                    jobDescription: Yup.string(),
                })}
                onSubmit={handleSubmit}
            >
                <Form className="content-center">
                    <h3 className="py-3 text-xl">Enter job details</h3>

                    <FormInput label="Job title" name="jobTitle" type="text" />
                    <TextArea label="Job description" name="jobDescription" />

                    <button type="submit" className="btn-submit">
                        Submit
                    </button>
                </Form>
            </Formik>
        </main>
    );
}
