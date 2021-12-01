import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoSearch, IoClose } from 'react-icons/io5'
import { useClickOutside } from 'react-click-outside-hook';
import MoonLoader from 'react-spinners/MoonLoader'
import { useDebounch } from '../../hooks/DeBounchHook';
import TvShow from '../../TvShow';
import axios from 'axios';
const SearchBar = (props) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [shows, setShows] = useState([])
    const [containerRef, isClickedOutside] = useClickOutside()
    const [query, setQuery] = useState("")
    const isEmpty = !shows || shows.length === 0

    console.log(isEmpty, "empty")
    const onChangeHandler = (e) => {
        setQuery(e.target.value);
    }
    const expandContainer = () => {
        setIsExpanded(true)
    }


    const searchTvShow = async () => {
        if (!query || query.trim() === "")
            return;
        setIsLoading(true)
        const url = prepareSearchQuery(query)
        const response = await axios.get(url).catch(err => console.log(err))
        if (response) {
            console.log(response.data, "response")
            setShows(response.data)
        }
        setIsLoading(false)
    }
    useDebounch(query, 500, searchTvShow)
    const prepareSearchQuery = (query) => {
        const url = `https://api.tvmaze.com/search/shows?q=${query}`
        return encodeURI(url)
    }
    const containerVariant = {
        expanded: {
            height: "35rem"
        },
        collaped: {
            height: "5rem"
        }
    }
    const collapseContainer = () => {
        setIsExpanded(false)
        setQuery("")
        setIsLoading(false)
        setShows([])
    }
    console.log(shows, "shows")
    const containerTransition = { typ: 'string', damping: 22, stiffness: 150 }
    useEffect(() => {
        if (isClickedOutside)
            collapseContainer()
    }, [isClickedOutside])
    return (
        <motion.div ref={containerRef} className="search-bar-container"
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={containerVariant}
            transition={containerTransition}>
            <div className="search-input-container">
                <AnimatePresence>
                    <span onClick={collapseContainer} className="search-icon">
                        <IoSearch />
                    </span>
                </AnimatePresence>
                <input onChange={onChangeHandler}
                    value={query}
                    onFocus={expandContainer} type="text"
                    className="search-input"
                    placeholder="Search for movies and TV shows" />

                {isExpanded && <motion.span key="close-icon" className="close-icon"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }} >
                    <IoClose />
                </motion.span>}
            </div>
            {isExpanded && <div className="line-seperator"></div>
            }
            <div className="search-content">
                {isLoading && <div className="loading-wrapper">
                    <MoonLoader loading color="#000" size={20} />
                </div>}
                {(isEmpty && query && !isLoading) && <div className="warning">No result found for the related search</div>}
                {(shows.length > 0 && !isLoading) &&
                    shows.map((tvShow, index) => {
                        return (<TvShow key={index} image={tvShow.show.image && tvShow.show.image.medium} rating={tvShow.show.rating && tvShow.show.rating.average} title={tvShow.show.name} />)
                    })}


            </div>
        </motion.div>
    )
}
export default SearchBar