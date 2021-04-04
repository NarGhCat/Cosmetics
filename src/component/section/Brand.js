import React from 'react'
import { Link, Switch, Route, useParams, useRouteMatch,useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { db, storage } from '../../index'
import store from '../../reducer/indexStore'
import MediaCard from '../shared/Card'
const Brand = (props) => {
    const {brands} = store.getState()
    const {url} = useRouteMatch()
    const {brand} = useLocation().state
    const {brand_url} = useParams()
    // console.log(brands)
    // console.log(url)
    console.log(brand)
    // console.log(brand_url)
    db.collection("items").where("brandId", "==", '/brands/'+brand.brandId)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
    return (
        <div>
            <MediaCard />
        </div>
    )
}
export default Brand
