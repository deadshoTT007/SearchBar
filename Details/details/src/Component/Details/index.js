import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
const useStyles = makeStyles(theme => ({
    detailsContainer: {
        // background: "red"
        marginTop: "100px"
    },
    mainContainer: {
        margin: "0 auto",
        width: "400px",
        padding: "20px",
        boxShadow: "4px 4px 24px rgba(94, 134, 196, 0.1)"
    },
    headerText: {
        fontSize: "26px",
    },
    subHeader: {
        marginLeft: "7px"
    }
}))
const Details = ({ id }) => {
    const classes = useStyles()
    const [cityData, setCityData] = useState([])
    const api = `https://secure.drivezy.com/city/${id}`
    const fetchDetail = () => {
        axios(api).then(({ data }) => {
            setCityData(data.response)
        })
    }
    React.useEffect(() => {
        fetchDetail()
    }, [id])
    // fetchDetail()
    return (
        <div className={classes.detailsContainer} >
            <h1 className={classes.headerText}>Detail Of City </h1>
            <div className={classes.mainContainer}>
                <div className={classes.eachDetailsContainer}>
                    <img src={cityData.image} alt="" />
                </div>
                <div className={classes.eachDetailsContainer}>
                    <h3 className={classes.mainText}>Place :<span className={classes.subHeader}>{cityData.name}</span></h3>
                </div>
                <div className={classes.eachDetailsContainer}>
                    <h3 className={classes.mainText}>Name :<span className={classes.subHeader}>{cityData.contact_person}</span> </h3>
                </div>
                <div className={classes.eachDetailsContainer}>
                    <h3 className={classes.mainText}>Number :<span className={classes.subHeader}>{cityData.contact_number}</span></h3>
                </div>
            </div>
        </div>
    )
}

export default Details
