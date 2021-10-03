const LIMIT = 10;

export default function Pagination({
    page,
    total,
    // tslint:disable-next-line: no-empty
    onChange = () => {},
}: {
    page: number;
    total: number;
    onChange: (newPage: number) => void;
}) {
    const totalPages = Math.ceil(total / LIMIT);

    return (
        <div>
            {Array.from(
                { length: totalPages },
                (_, index: number) => index + 1
            ).map((pageIndex) => {
                const isActive = pageIndex === page;
                const action = () => {
                    if (pageIndex !== page) {
                        onChange(pageIndex);
                    }
                };

                return isActive ? (
                    <b onClick={action} key={pageIndex}>
                        {` `}
                        {pageIndex}
                        {` `}
                    </b>
                ) : (
                    <span onClick={action} key={pageIndex}>
                        {` `}
                        {pageIndex}
                        {` `}
                    </span>
                );
            })}
        </div>
    );
}
