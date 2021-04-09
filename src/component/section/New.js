import "../../styles/NewStyle.css";
import React, { useState, useEffect } from 'react'
import { selectBrands, selectItems,selectNews } from '../../selectors/fierbase';
import { useSelector } from 'react-redux';
import { db, storage } from "../../index";
import { SET_NEWS_ITEMS } from '../../reducer/reducer'
import Card from '../shared/Card'
import Button from '../shared/Button'
import CardMedia from '../shared/CardMedia'
import Typography from '../shared/Typography'
import { useDispatch } from 'react-redux'
import { CardActionArea, CardActions, CardContent, makeStyles } from '@material-ui/core';
import { Link, Switch, Route, useParams, useRouteMatch } from "react-router-dom";
const useStyles = makeStyles({
  brandRoot: {
    display: 'flex',
    width: 95 + '%',
    margin: 'auto',
    justifyContent: 'space-between',
  },
  brandItem: {
    display: 'flex',
    flexFlow: 'wrap',
    justifyContent: 'space-between',
    width: 82 + '%',

  },
  brandSidebar: {
    width: 220,
    background: 'radial-gradient(ellipse farthest-side at left top, #a27b9cf5 53%, rgb(255 255 255) 100%)'
  },
  brandsSelector: {
    margin: 10 + 'px auto',
    width: 90 + '%',
  },
  brands: {
    marginTop: 12
  },
  h3: {
    borderBottom: 1 + 'px solid black',
    fontSize: 25,
  },
  p: {
    marginTop: 10,
    cursor: 'pointer',
    fontWeight: 600,
  }
})

const New = () => {
  const dispatch = useDispatch()
  const brandClasses = useStyles()
  const news = useSelector(selectNews)
  const brands = useSelector(selectBrands)
  const { brandUrl } = useParams()
  // console.log(items)
  let newsState =[];
  useEffect(() => {
    db.collection("items").where('status', '==', 'new')
      .get()
      .then((querySnapshot) => {
        console.log(querySnapshot)
        querySnapshot.forEach((item) => {
          newsState.push({
            itemId: item.id,
            ...item.data()
          })
        });
        console.log(newsState)
        dispatch({
          type: SET_NEWS_ITEMS,
          payload: newsState
        })
      })
  }, [])


  return (

    <div className={brandClasses.brandRoot}>
      <div className={brandClasses.brandSidebar}>
        <div className={brandClasses.brandsSelector}>
          <h3 className={brandClasses.h3}>Brands</h3>
          <div className={brandClasses.brands}>
            {brands.map((brand, i) => (
              <p key={i} className={brandClasses.p}>{brand.label}</p>
            ))}
          </div>
        </div>
      </div>
      <div className={brandClasses.brandItem}>
        {news.map((item, i) => (

          (item.brandId.id ?
            <Card key={i}>
              <Typography>{brandUrl}</Typography>
              <CardActionArea>
                <CardMedia />
                <CardContent>
                  <Typography>{item.name}</Typography>
                  <Typography>$ {item.price}</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button bgColor='white' labelcolor='#4c003f' width='140px' border='none'>    Add to Bag
                 </Button>

                <Button bgColor='white' labelcolor='#4c003f' width='140px' border='none'>  Learn More
                 </Button>
              </CardActions>
            </Card> : '')

        ))}
      </div>
    </div>

  )
}
export default New;
