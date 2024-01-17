import React from 'react';
import Star from '../../assets/icons/star.svg';
import Book from '../../assets/images/book.png';

import Favorite from '../../assets/icons/Favorite.svg';
import FavoriteStoke from '../../assets/icons/FavoriteStoke.svg';


// BOOK IMAGES
import TheGreatGatsby from '../../assets/bookImage/The Great Gatsby.png'
import ToKillaMockingbird from '../../assets/bookImage/To Kill a Mockingbird.png'
import B1984 from '../../assets/bookImage/B1984.png'
import TheHobbit from '../../assets/bookImage/The Hobbit.png'
import HarryPotterandthePhilosopherStone from '../../assets/bookImage/Harry Potter and the Philosopher Stone.png'
import TheCatcherintheRye from '../../assets/bookImage/The Catcher in the Rye.png'
import PrideandPrejudice from '../../assets/bookImage/Pride and Prejudice.png'
import TheLordoftheRings from '../../assets/bookImage/The Lord of the Rings.png'
import BraveNewWorld from '../../assets/bookImage/Brave New World.png'
import TheChroniclesofNarnia from '../../assets/bookImage/The Chronicles of Narnia.png'
import TheAlchemist from '../../assets/bookImage/The Alchemist.png'
import TheShining from '../../assets/bookImage/The Shining.png'
import TheDaVinciCode from '../../assets/bookImage/The Da Vinci Code.png'
import OneHundredYearsofSolitude from '../../assets/bookImage/One Hundred Years of Solitude.png'
import TheGirlwiththeDragonTattoo from '../../assets/bookImage/The Girl with the Dragon Tattoo.png'
import TheHitchhikerGuidetotheGalaxy from '../../assets/bookImage/The Hitchhiker Guide to the Galaxy.png'
import AGameofThrones from '../../assets/bookImage/A Game of Thrones.png'
import TheRoad from '../../assets/bookImage/The Road.png'
import TheFaultinOurStars from '../../assets/bookImage/The Fault in Our Stars.png'
import TheKiteRunner from '../../assets/bookImage/The Kite Runner.png'


const bookWiseImageMapping = {
    "The Great Gatsby": TheGreatGatsby,
    "To Kill a Mockingbird": ToKillaMockingbird,
    "B1984": B1984,
    "The Hobbit": TheHobbit,
    "Harry Potter and the Philosopher Stone": HarryPotterandthePhilosopherStone,
    "The Catcher in the Rye": TheCatcherintheRye,
    "Pride and Prejudice": PrideandPrejudice,
    "The Lord of the Rings": TheLordoftheRings,
    "Brave New World": BraveNewWorld,
    "The Chronicles of Narnia": TheChroniclesofNarnia,
    "The Alchemist": TheAlchemist,
    "The Shining": TheShining,
    "The Da Vinci Code": TheDaVinciCode,
    "One Hundred Years of Solitude": OneHundredYearsofSolitude,
    "The Girl with the Dragon Tattoo": TheGirlwiththeDragonTattoo,
    "The Hitchhiker Guide to the Galaxy": TheHitchhikerGuidetotheGalaxy,
    "A Game of Thrones": AGameofThrones,
    "The Road": TheRoad,
    "The Fault in Our Stars": TheFaultinOurStars,
    "The Kite Runner": TheKiteRunner,
};


const SingleBookDetailsCard = (props) => {



    return (
        <div className="space-y-3" key={props?.Name}>
            {/* thumbnail */}
            <div
                className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4"
            >
                <img
                    className="max-w-[144px] min-h-[60px]"
                    src={bookWiseImageMapping?.[props?.bookData?.Name]}
                    alt={props?.bookData?.Name} />
            </div>
            {/* info */}
            <div className="space-y-3">
                <h4 className="text-lg font-bold lg:text-xl">
                    {props?.bookData?.Name} ({props?.bookData?.publicationDate.split('-')[2]})
                </h4>
                <p className="text-xs lg:text-sm">By :
                    <span>
                        {props?.bookData?.Author}
                    </span></p>
                <div className="flex items-center justify-between">
                    <h4 className="text-lg font-bold lg:text-xl">
                        {props?.bookData?.Price}
                    </h4>
                    {/* stars */}
                    <div className="flex items-center space-x-1">
                        <img src={Star} />
                        <img src={Star} />
                        <img src={Star} />
                        <img src={Star} />
                        <span className="text-xs lg:text-sm">(4 Star)</span>
                    </div>
                    {/* stars ends */}
                </div>

                <div className="flex items-center gap-3 text-xs lg:text-sm">
                    <button
                        className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                            />
                        </svg>

                        Add to Cart
                    </button>


                    <button
                        className={
                            props?.bookData?.isFavorite ?
                                "flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#DC2954]/[14%] py-1.5 text-[#DC2954] transition-all hover:bg-[#DC2954]/[24%] lg:py-1.5"
                                :
                                "flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336]/[14%] py-1.5 text-[#1C4336] transition-all hover:bg-[#1C4336]/[24%] lg:py-1.5"
                        }

                        onClick={() => {
                            let dummyFilteredData = props?.filteredBookData;

                            dummyFilteredData[props?.bookIndex].isFavorite = !dummyFilteredData[props?.bookIndex].isFavorite;

                            props.setFilteredBookData([...dummyFilteredData]);
                        }}
                    >
                        <img
                            src={props?.bookData?.isFavorite ? Favorite : FavoriteStoke}
                            style={{ height: '1rem', width: '1rem' }}
                        />

                        Favourite
                    </button>


                </div>
            </div>
        </div>
    );
}

export default SingleBookDetailsCard;
