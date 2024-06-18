"use client"
import { Form, Formik, FormikHelpers } from 'formik';
import { useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import * as Yup from 'yup';
import { TextArea } from '../components/form';
import { useRouter } from 'next/navigation';

const ChevronRight = () => (
    <svg
        className="h-10 w-10 fill-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
    >
        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
    </svg>
);

const ChevronLeft = () => (
    <svg
        className="h-10 w-10 fill-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
    >
        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
    </svg>
);

export default function Interview() {
    const router = useRouter();
    const [index, setIndex] = useState(0);

    const urls = [
        'dummy/DE%20Concepts%20video%20(1).mp4',
        'dummy/DE Concepts video (2).mp4',
        'dummy/DE Concepts video (3).mp4',
        'dummy/conflict_resolution.mp3',
        'dummy/adaptation.mp3',
        'dummy/innovation.mp3',
        'dummy/leading_a_team.mp3',
        'dummy/problem_solving.mp3',
        'dummy/teamwork_collaboration.mp3',
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
        <div className="pt-10">
            <div className="bg-white mx-10 rounded-xl shadow-lg pt-10">
                <div>
                    <h1 className="text-center text-2xl font-semibold">
                        Question #{index + 1}
                    </h1>
                </div>
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
                                    className="hidden sm:block p-4 bg-indigo-300 shadow-lg mr-5 ml-10 rounded-full"
                                    onClick={() => {
                                        setFieldValue('answer', '');
                                        decreaseIndex();
                                    }}
                                >
                                    <ChevronLeft />
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
                                            id={index.toString()}
                                            className="block"
                                            controls
                                            src={currentUrl}
                                        />
                                    )}
                                </div>

                                <button
                                    type="button"
                                    className="hidden sm:block p-4 bg-indigo-300 shadow-lg ml-5 mr-10 rounded-full"
                                    onClick={() => {
                                        setFieldValue('answer', '');
                                        increaseIndex();
                                    }}
                                >
                                    <ChevronRight />
                                </button>
                            </div>
                            <div className="sm:hidden flex justify-between mt-4">
                                <button
                                    type="button"
                                    className="p-4 bg-indigo-300 shadow-lg mr-5 ml-10 rounded-full"
                                    onClick={() => {
                                        setFieldValue('answer', '');
                                        decreaseIndex();
                                    }}
                                >
                                    <ChevronLeft />
                                </button>
                                <button
                                    type="button"
                                    className="p-4 bg-indigo-300 shadow-lg ml-5 mr-10 rounded-full"
                                    onClick={() => {
                                        setFieldValue('answer', '');
                                        increaseIndex();
                                    }}
                                >
                                    <ChevronRight />
                                </button>
                            </div>
                            <div className="flex justify-center w-full">
                                <div className="mx-10 mt-10 w-full md:w-1/2">
                                    <TextArea
                                        className="w-full  rounded-lg shadow-lg h-24"
                                        label="Your answer:"
                                        name="answer"
                                    />

                                    <div className="flex justify-between mb-10">
                                        <button
                                            type="submit"
                                            className="btn-submit mr-2"
                                        >
                                            Submit
                                        </button>
                                        <button
                                            className="btn-info"
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
        </div>
    );
};
