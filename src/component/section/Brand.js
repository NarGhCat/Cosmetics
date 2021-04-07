
import React from 'react'
import { useParams, useRouteMatch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux'
import Card from '../shared/Card'
import Button from '../shared/Button'
import CardMedia from '../shared/CardMedia'
import Typography from '../shared/Typography'
import { CardActionArea, CardActions, CardContent ,makeStyles} from '@material-ui/core';
const useStyles = makeStyles({
    brandRoot:{
        display: 'flex',
        width: 95+'%',
        margin: 'auto',
        justifyContent: 'space-between',
    },
    brandItem:{
        display: 'flex',
        flexFlow: 'wrap',
        justifyContent: 'space-between',
        width: 82+'%',
        
    },
    brandSidebar:{
        width: 220,
        background:'radial-gradient(ellipse farthest-side at left top, #a27b9cf5 53%, rgb(255 255 255) 100%)'
    },
    brandsSelector:{
        margin: 10+'px auto',
        width: 90+'%',
    },
    brands:{
        marginTop: 12
    },
    h3:{
        borderBottom: 1+'px solid black',
        fontSize: 25,
    },
    p:{
        marginTop: 10,
        cursor: 'pointer',
        fontWeight: 600,
    }
})
const Brand = (props) => {
    const brandClasses = useStyles()
    const { brands, selectedBrand, items } = props
    const { url } = useRouteMatch()
    const { brandUrl } = useParams()
    const history = useHistory()
    return (
        <div className={brandClasses.brandRoot}>
        <div className={brandClasses.brandSidebar}>
            <div className={brandClasses.brandsSelector}>
                <h3 className={brandClasses.h3}>Brands</h3>
                <div className={brandClasses.brands}>
                    {brands.map((brand,i)=>(
                        <p key ={i} className={brandClasses.p}>{brand.label}</p>
                    ))}
                </div>
            </div>
        </div>
        <div className={brandClasses.brandItem}>
            {items.map((item,i) => (
                (selectedBrand.brandId === item.brandId.id?
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
                            <Button bgColor='white' labelColor='#4c003f' width='140px' border='none'>    Add to Bag
                       </Button>
                            <Button bgColor='white' labelColor='#4c003f' width='140px' border='none'>  Learn More
                       </Button>
                        </CardActions>
                    </Card>:'' )
            ))}
        </div>
        </div>
    )

}
const mapStateToProps = (state) => ({
    brands: state.brands,
    selectedBrand: state.selectedBrand,
    items: state.items
})
export default connect(mapStateToProps)(Brand)
