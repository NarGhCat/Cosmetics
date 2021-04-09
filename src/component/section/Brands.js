import { useState, useEffect } from 'react'
import { Link, Switch, Route, useParams, useRouteMatch } from "react-router-dom";
import "../../styles/BrandsStyle.css";
import { Grid, Paper, Typography, ButtonBase } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux'
import Button from '../shared/Button'
import { SELECTED_BRAND } from '../../reducer/reducer'
import { selectBrands } from '../../selectors/fierbase';
import {storage} from '../../'
const Brands = (props) => {
  const brands = useSelector(selectBrands)
  const { path, url } = useRouteMatch()
  const [logos, setLogos] = useState([])
  const dispatch = useDispatch()
  
  async function getImgUrl(path) {
    let gsReference = storage.refFromURL(path);
    return gsReference.getDownloadURL()
  }
  const getBrandLogos = async (brands) => {
    const imageArray = []
    brands.forEach(brand => {
      imageArray.push(getImgUrl(brand.logo))
    });
    const data = await Promise.all(imageArray)
    // console.log(data)
    setLogos(data)
  }
  useEffect(() => {
    getBrandLogos(brands)
  }, [brands])

  return (
    <div className='brands-main-content'>
      <div className='brands-content'>
        {brands.map((brand, i) => (

          <div key={i} className='root'>
            {/* {console.log(brand.logo)} */}
            <Paper className='paper'>
              <Grid container className='main-grid'>
                <Grid className='image-grid'  >
                  <ButtonBase className='image-btn' >
                    <Link to={{ pathname: `${url}/${brand.name}`, state: { brand: brand } }}><img style={{width:310,height:200}} src={logos[i]} /></Link>
                  </ButtonBase>
                </Grid>
                <Grid className='desc-grid'>
                  <Typography className='description' variant="subtitle1">
                    {brand.label}
                  </Typography>
                  <Grid className='typo-grid'>
                    <Typography className='description' variant="subtitle1">
                      {brand.description}
                    </Typography>
                  </Grid>
                  <Grid className='grid-btn'>
                    <Link to={`${url}/${brand.name}`} className='brand-link' >
                      <Button onClick={() => { dispatch({ type: SELECTED_BRAND, payload: brand }) }} value='martin' variant='contained'>{brand.label}</Button>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </div>
        ))}
      </div>
      {/* <Switch> */}
        {/* <Route path='/brands/:brand_url' component={Brand} /> */}
        {/* <Route path='/brands' component={Brands}/> */}
      {/* </Switch> */}
    </div >
  );
}
export default Brands;


