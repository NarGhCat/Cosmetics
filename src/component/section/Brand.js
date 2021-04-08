
import React, { useEffect } from 'react'
import { useParams, useRouteMatch, useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { db, storage } from '../../index'

import store from '../../reducer/indexStore'
import Card from '../shared/Card'
import Button from '../shared/Button'
import CardMedia from '../shared/CardMedia'
import Typography from '../shared/Typography'
import { CardActionArea, CardActions, CardContent } from '@material-ui/core';
const Brand = (props) => {
    const { brands } = store.getState()
    const { url } = useRouteMatch()
    const { brand } = useLocation().state
    const { brand_url } = useParams()
    const history = useHistory()
    console.log(brand)
    console.log(brand_url)
    db.collection("items").where("brandId", "==", 'brands/PG27RdrbiLWQ6trPph34')
        .get()
        .then((querySnapshot) => {

            querySnapshot.forEach((doc) => {
                console.log('uraaa')
                console.log(doc.id, " => ", doc.data().brandId.path);
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
    return (
        <div>
            <h1>{brand_url}</h1>
            <Card>
                <CardActionArea>
                    <CardMedia />
                    <CardContent>
                        <Typography>Dior</Typography>
                        <Typography>Lorem ipsum .. . .</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button >    Add to Bag
                        </Button>
                    <Button >  Learn More
                        </Button>
                </CardActions>

            </Card>
        </div>
    )
}
export default Brand
