'use client';
import { Form, Formik, useField } from 'formik';
import * as Yup from 'yup';
import { useRouter } from "next/navigation";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
}

export const FormInput = ({ label, name, ...props }: FormInputProps) => {
    const [field, meta] = useField({ ...props, name });

    return (
        <div className="mt-2">
            <div>
                <label className="" htmlFor={props.id || name}>
                    {label}
                </label>
            </div>

            <input
                className={`mt-2 w-full max-w-xs border-2 px-4 py-3 ${
                    meta.touched && meta.error && ' border-red-700'
                }`}
                {...field}
                {...props}
            />

            {meta.touched && meta.error ? (
                <div className="text-red-700">{meta.error}</div>
            ) : null}
        </div>
    );
};

export default function Home() {
    const router = useRouter();
    const handleSubmit = () => {
        console.log('submit');
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
                    <FormInput label="Job description" name="jobDescription" type="text" />

                    <button type="submit" className="btn-submit">
                        Submit
                    </button>
                </Form>
            </Formik>
        </main>
    );
}
