"use client"
import { Form, Formik, FormikHelpers } from 'formik';
import { useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import * as Yup from 'yup';
import { TextArea } from '../components/form';
import { useRouter } from 'next/navigation';
export default function Interview() {
    const router = useRouter();
    const [index, setIndex] = useState(0);

    const urls = [
        'dummy/DE%20Concepts%20video%20(1).mp4',
        'dummy/conflict_resolution.mp3',
    ];

    const increaseIndex = () => {
        if (index === urls.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    };

    const decreaseIndex = () => {
        if (index === 0) {
            setIndex(urls.length - 1);
        } else {
            setIndex(index - 1);
        }
    };

    const currentUrl = urls[index];
    const handleSubmit = (
        values: {
            answer: string;
        },
        formikHelpers: FormikHelpers<{
            answer: string;
        }>
    ) => {
        formikHelpers.setFieldValue('answer', '');
        console.log('submit answer', values.answer);
    };

    return (
        <div className="h-screen">
            <Formik
                initialValues={{
                    answer: '',
                }}
                validationSchema={Yup.object({
                    answer: Yup.string(),
                })}
                onSubmit={handleSubmit}
            >
                {({ setFieldValue }) => (
                    <Form className="content-center">
                        <div className="flex justify-between pt-10 items-center">
                            <button
                                type="button"
                                className="px-10 bg-indigo-100 shadow-lg mr-5 ml-10 h-10"
                                onClick={() => {
                                    setFieldValue('answer', '');
                                    decreaseIndex();
                                }}
                            >
                                Previous
                            </button>
                            <div>
                                {currentUrl.match(/mp4$/) ? (
                                    <ReactPlayer
                                        width="100%"
                                        height="100%"
                                        controls
                                        url={currentUrl}
                                    />
                                ) : (
                                    <audio
                                        // className="block w-full max-w-md mx-auto"
                                        controls
                                        src={currentUrl}
                                    />
                                )}
                            </div>
                            <button
                                type="button"
                                className="px-10 bg-indigo-100 shadow-lg ml-5 mr-10 h-10"
                                onClick={() => {
                                    setFieldValue('answer', '');
                                    increaseIndex();
                                }}
                            >
                                Next
                            </button>
                        </div>
                        <div className="flex justify-center w-full">
                            <div className="mx-10 mt-10 w-full md:w-1/2">
                                <TextArea
                                    className="w-full  rounded-lg shadow-lg h-24"
                                    label="Your answer"
                                    name="answer"
                                />

                                <div className="flex justify-between">
                                    <button
                                        type="submit"
                                        className="btn-submit"
                                    >
                                        Submit
                                    </button>
                                    <button
                                        className="btn-submit"
                                        type="button"
                                        onClick={() => {
                                            router.push('/result');
                                        }}
                                    >
                                        See results
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
