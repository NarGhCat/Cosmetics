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
import SideBar from "./SideBar";
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

  }
})

const New = () => {
  const dispatch = useDispatch()
  const brandClasses = useStyles()
  const news = useSelector(selectNews)
  const brands = useSelector(selectBrands)
  const { brandUrl } = useParams()
  const [imgs, setImgs] = useState([]);
  const items = useSelector(selectItems);
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
          console.log('new items')
        });
        dispatch({
          type: SET_NEWS_ITEMS,
          payload: newsState
        })
      })
  }, [])

  async function getImgUrl(path) {
    let gsReference = storage.refFromURL(path);
    return gsReference.getDownloadURL();
  }

  const getBrandLogos = async (news) => {
    const imageArray = [];
    news.forEach((item) => {
      imageArray.push(getImgUrl(item.photo));
    });
    const data = await Promise.allSettled(imageArray);
    const asd = data.map((d, i) => {
      if (d.status === "fulfilled") {
        return d.value;
      } else {
        return undefined;
      }
    });
    setImgs(asd);
  };
  useEffect(() => {
    console.log('new-image')
    getBrandLogos(news);
  }, [news]);

  

  return (

    <div className={brandClasses.brandRoot}>
      <SideBar/>
      <div className={brandClasses.brandItem}>
        {news.map((item, i) => (

          (item.brandId.id ?
            <Card key={i}>
              <Typography>{brandUrl}</Typography>
              <CardActionArea>
                <CardMedia  image ={imgs[i]} />
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
