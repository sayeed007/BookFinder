import React, { useState } from 'react';
import SingleBookDetailsCard from './SingleBookDetailsCard';
import DemoBookData from '../../assets/data/DemoBookData';


const MainBodyComponent = () => {

    const [filteredBookData, setFilteredBookData] = useState([...DemoBookData?.bookData]);
    const [sortBy, setSortBy] = useState('');

    const [searchValue, setSearchValue] = useState('');


    const handleKeyPress = (event) => {
        event.preventDefault();
        // Check if the Enter key is pressed (key code 13)
        if (event.key === 'Enter') {
            // Call your function here, passing the inputValue if needed
            searchFunctionality();

            // Clear the input field or update state as needed
            setSearchValue('');
        }
    };


    const searchFunctionality = () => {
        // Case-insensitive search
        const filteredBooks = [...DemoBookData?.bookData].filter((book) =>
            book.Name.toLowerCase().includes(searchValue.toLowerCase()) 
            // ||
            // book.Author.toLowerCase().includes(searchValue.toLowerCase()) ||
            // book.Price.toLowerCase().includes(searchValue.toLowerCase()) ||
            // book.publicationDate.toLowerCase().includes(searchValue.toLowerCase())
        );

        // Update the displayed books based on the search result
        // setFilteredBookData(filteredBooks);

        // Now do a filtering
        filteringOperation(sortBy, filteredBooks);
    };


    const handleSelectChange = (event) => {
        const selectedOption = event.target.value;
        setSortBy(selectedOption);

        // Implement sorting logic based on the selected option
        let sortedBooks = [...filteredBookData];

        filteringOperation(selectedOption, sortedBooks);

    };

    const filteringOperation = (selectedOption, sortedBooks) => {

        switch (selectedOption) {
            case 'name_asc':
                sortedBooks.sort((a, b) => a.Name.localeCompare(b.Name));
                break;
            case 'name_desc':
                sortedBooks.sort((a, b) => b.Name.localeCompare(a.Name));
                break;
            case 'year_asc':
                sortedBooks.sort((a, b) => parseInt(a.publicationDate.split('-')[2]) - parseInt(b.publicationDate.split('-')[2]));
                break;
            case 'year_desc':
                sortedBooks.sort((a, b) => parseInt(b.publicationDate.split('-')[2]) - parseInt(a.publicationDate.split('-')[2]));
                break;
            default:
                // Default case, no sorting
                break;
        };

        setFilteredBookData(sortedBooks);
    }


    return (
        <main className="my-10 lg:my-14">
            {/* header */}
            <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
                <div
                    className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4"
                >
                    {/* info , title , search */}
                    <div>
                        <h6 className="mb-2 text-base lg:text-xl">Trending on 2021</h6>
                        <h2
                            className="mb-6 font-['Playfair_Display'] text-3xl font-bold lg:text-4xl"
                        >
                            Trending Books of the Year
                        </h2>
                        {/* Search Box */}
                        <form onSubmit={(e) => e?.preventDefault()}>
                            <div className="flex">
                                <div
                                    className="relative w-full overflow-hidden rounded-lg border-2 border-[#1C4336] text-[#1C4336] md:min-w-[380px] lg:min-w-[440px]"
                                >
                                    <input
                                        type="search"
                                        id="search-dropdown"
                                        className="z-20 block w-full bg-white px-4 py-2.5 pr-10 text-[#1C4336] placeholder:text-[#1C4336] focus:outline-none"
                                        placeholder="Search Book"
                                        required
                                        value={searchValue}
                                        onChange={(e) => setSearchValue(e.target.value)}
                                        onKeyDown={() => handleKeyPress}
                                    />
                                    <div className="absolute right-0 top-0 flex h-full items-center">
                                        <button
                                            type="submit"
                                            className="mr-1.5 flex items-center space-x-1.5 rounded-md rounded-e-lg bg-[#1C4336] px-4 py-2.5 text-sm text-white"
                                            onClick={(e) => {
                                                e?.preventDefault();
                                                searchFunctionality();
                                            }}
                                        >
                                            <svg
                                                className="h-[14px] w-[14px]"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                                />
                                            </svg>
                                            <span>Search</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        {/* Search Box Ends */}
                    </div>
                    {/* sort - filter */}
                    <div className="flex items-stretch space-x-3">
                        {/* Sort */}
                        <select
                            className="cursor-pointer rounded-md border px-4 py-2 text-center text-gray-600"
                            name="sortBy"
                            id="sortBy"
                            onChange={handleSelectChange}
                        >
                            <option value="" disabled>Sort</option>
                            <option value="name_asc">Name (A-Z)</option>
                            <option value="name_desc">Name (Z-A)</option>
                            <option value="year_asc">Publication Year (Oldest)</option>
                            <option value="year_desc">Publication Year (Newest)</option>
                        </select>

                    </div>
                </div>
            </header>
            {/* header ends */}


            {/*  Book Grid  */}
            <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {/*  Book Items  */}

                {filteredBookData?.length > 0 ?
                    filteredBookData?.map((eachBook, eachBookIndex) => (
                        <SingleBookDetailsCard
                            key={eachBook?.Name}
                            bookIndex={eachBookIndex}
                            bookData={eachBook}
                            filteredBookData={filteredBookData}
                            setFilteredBookData={setFilteredBookData}
                        />
                    ))
                    :
                    <div className='flex w-fill items-center justify-center font-bold'>
                        No book found for the given search criteria.
                    </div>


                }

            </div>

        </main>
    );
}

export default MainBodyComponent;
