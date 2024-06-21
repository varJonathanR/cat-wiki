interface Props {
    prev?: boolean
}

export default function ContentLoaderPrev({ prev }: Props) {
    return (
        <div
            role="status"
            className={`flex animate-pulse flex-col md:flex-row gap-2 ${prev ? 'md:flex-col md:gap-2 lg:gap-2' : 'md:gap-4 lg:gap-8'}`}
        >
            <div
                className={`flex aspect-square h-40 ${prev && 'h-auto w-full'} items-center justify-center rounded-xl bg-gray-300 dark:bg-gray-700`}
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
            <div className="w-full flex-1">
                <div
                    className={`mb-4 h-4 w-1/2 md:w-1/3 ${prev && 'md:w-1/2'} rounded-full bg-gray-200 dark:bg-gray-700`}
                ></div>
                {!prev && (
                    <>
                        <div className="mb-2.5 hidden h-3 w-full rounded-full bg-gray-200 md:block dark:bg-gray-700"></div>
                        <div className="mb-2.5 hidden h-3 w-full rounded-full bg-gray-200 md:block dark:bg-gray-700"></div>
                        <div className="mb-2.5 hidden h-3 w-1/2 rounded-full bg-gray-200 md:block dark:bg-gray-700"></div>
                    </>
                )}
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    )
}
