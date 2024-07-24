export default function ContentLoader() {
    return (
        <>
            <div
                role="status"
                className="mx-auto my-8 flex w-[90%] animate-pulse flex-col gap-1 md:flex-row md:gap-8 lg:gap-16"
            >
                <div className="flex aspect-square w-72 md:w-44 md:h-44 lg:w-80 lg:h-80 mx-auto items-center justify-center rounded-xl bg-gray-300 dark:bg-gray-700">
                    <svg
                        className="h-10 w-10 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 18"
                    >
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                </div>
                <div className="w-full flex-1 mt-2">
                    <div className="mb-4 h-3.5 w-44 rounded-full mx-auto md:mx-0 bg-gray-200 md:w-1/3 dark:bg-gray-700"></div>
                    <div className="mb-2 h-3.5 w-full rounded-full bg-gray-200 md:block dark:bg-gray-700"></div>
                    <div className="mb-2 h-3.5 w-full rounded-full bg-gray-200 md:block dark:bg-gray-700"></div>
                    <div className="mb-2 h-3.5 w-full rounded-full bg-gray-200 md:block dark:bg-gray-700"></div>
                    <div className="mb-6 h-3.5 w-1/2 rounded-full bg-gray-200 md:block dark:bg-gray-700"></div>
                    {Array.from({ length: 11 }).map((_, i) => (
                        <div
                            className="mb-4 h-3.5 w-2/3 rounded-full bg-gray-200 md:block dark:bg-gray-700"
                            key={i}
                        ></div>
                    ))}
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
            <div role="status" className="animate-pulse mx-auto mb-14 w-11/12">
                <h1 className="text-2xl font-semibold">Other photos</h1>
                <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-4">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div
                            className="flex aspect-square h-auto w-full items-center justify-center rounded-xl bg-gray-300 dark:bg-gray-700"
                            key={i}
                        >
                            <svg
                                className="h-10 w-10 text-gray-200 dark:text-gray-600"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 18"
                            >
                                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                            </svg>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
