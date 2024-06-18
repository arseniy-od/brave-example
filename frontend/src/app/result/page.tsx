'use client';
import { useRouter } from 'next/navigation';

export default function Result() {
    const results = ['res1', 'res2', 'res3', 'res4', 'res5'];
    const router = useRouter();

    return (
        <div className="min-h-screen">
            <h1 className="mx-auto text-3xl text-center pt-24">
                Your feedback results
            </h1>
            <div className="mx-auto flex flex-wrap justify-center mt-10">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:mx-20">
                    {results.map((result, index) => (
                        <div
                            className="mx-5 px-10 py-5 bg-white rounded-xl shadow-lg"
                            key={index}
                        >
                            <h3 className="text-xl my-2">
                                Question #{index + 1}
                            </h3>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Mauris faucibus augue eget leo
                                viverra fermentum. Pellentesque lacus velit,
                                fermentum non pellentesque euismod, feugiat
                                convallis velit. Vestibulum ac viverra arcu.
                                Nullam at convallis ipsum. Vivamus dictum nibh
                                id ullamcorper feugiat. Nullam vitae enim at dui
                                efficitur tincidunt. Vivamus malesuada ultrices
                                feugiat. Nulla nunc sem, feugiat eget consequat
                                ut, porta ut quam.
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-10 ml-28">
                <button
                    onClick={() => {
                        router.push('/');
                    }}
                    className="btn-info"
                >
                    Try again
                </button>
            </div>
        </div>
    );
}
