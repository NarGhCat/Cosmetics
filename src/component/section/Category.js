import React, { useState, useEffect } from 'react'
import { useParams, useRouteMatch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux'
import Card from '../shared/Card'
import Button from '../shared/Button'
import CardMedia from '../shared/CardMedia'
import Typography from '../shared/Typography'
import { CardActionArea, CardActions, CardContent, makeStyles } from '@material-ui/core';
import { storage } from '../..';
import { selectBrands, selectItems, selectCategory } from '../../selectors/fierbase';
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

const Category = () => {
    const brandClasses = useStyles()
    const items = useSelector(selectItems)
    const brands = useSelector(selectBrands)
    const selectedCategory = useSelector(selectCategory)
    const { url } = useRouteMatch()
    const { brandUrl } = useParams()
    const history = useHistory()
    // const [imgs, setImgs] = useState([])
    // console.log(items)

    // async function getImgUrl(path) {
    //     console.log(path)
    //     let gsReference = storage.refFromURL(path);
    //     return gsReference.getDownloadURL()
    // }

    // const getBrandLogos = async (items) => {
    //     const imageArray = []
    //     items.forEach(item => {

    //         imageArray.push(getImgUrl(item.photo))

    //     });
    //     // console.log(imageArray)
    //     const data = await Promise.all(imageArray)
    //     console.log(data)
    //     setImgs(data)
    // }

    // useEffect(() => {
    //     getBrandLogos(items)
    // }, [items])

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
                {items.map((item, i) => (


                    (selectedCategory.categoryId === item.categoryId.id ?

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
export default Category
