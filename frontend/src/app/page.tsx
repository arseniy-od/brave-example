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
        <main className="flex min-h-screen flex-col items-center justify-between p-12 sm:p-24">
            <div className="bg-white px-5 py-5 sm:w-1/2 sm:px-10 sm:py-10 rounded-xl shadow-md">
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
                        <h3 className="py-3 text-2xl font-bold text-center">
                            Enter job details
                        </h3>

                        <FormInput
                            label="Job title"
                            name="jobTitle"
                            type="text"
                        />
                        <TextArea
                            label="Job description"
                            name="jobDescription"
                        />

                        <button type="submit" className="btn-submit">
                            Submit
                        </button>
                    </Form>
                </Formik>
            </div>
        </main>
    );
}
