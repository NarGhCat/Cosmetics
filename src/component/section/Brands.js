import { useState, useEffect } from 'react'
import { Link, Switch, Route, useParams, useRouteMatch } from "react-router-dom";
import "../../styles/BrandsStyle.css";
import { Grid, Paper, Typography, ButtonBase } from '@material-ui/core';
import { useDispatch, connect } from 'react-redux'
import Button from '../shared/Button'
import Brand from "./Brand"
import { SELECTED_BRAND } from '../../reducer/reducer'
import store from '../../reducer/indexStore'
import { storage } from '../..';
const Brands = (props) => {
  const { brands } = props
  const { path, url } = useRouteMatch()
  const [logo, setLogo] = useState('')
  const dispatch = useDispatch()

  async function getImgUrl(path) {

    var gsReference = storage.refFromURL(path);

    return gsReference.getDownloadURL()

  }



  const getLogoUrl = (logo) => {
    // return await getImgUrl("gs://cosmetics-91882.appspot.com/brandLogos/kkw-logo.png")
    storage.refFromURL(logo).getDownloadURL().then((e) => {
      // setLogo(e)
    })
  }
  // useEffect(function getLogoUrl  (logo) {
  // return await getImgUrl("gs://cosmetics-91882.appspot.com/brandLogos/kkw-logo.png")
  // storage.refFromURL(logo).getDownloadURL().then((e) => {
  // setLogo(e)
  // })
  // },[] )

  // console.log(getLogoUrl("gs://cosmetics-91882.appspot.com/brandLogos/kkw-logo.png"))
  // console.log(logo)


  return (
    <div className='brands-main-content'>
      <div className='brands-content'>
        {brands.map((brand, i) => (

          <div key={i} className='root'>
            <Paper className='paper'>
              <Grid container className='main-grid'>
                <Grid className='image-grid'  >
                  <ButtonBase className='image-btn' >
                    <Link to={{ pathname: `${url}/${brand.name}`, state: { brand: brand } }}><img src={getLogoUrl(brand.logo)} /></Link>
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
      <Switch>
        <Route path='/brands/:brand_url' component={Brand} />
        {/* <Route path='/brands' component={Brands}/> */}
      </Switch>
    </div >
  );
}
const mapStateToProps = (state) => ({
  brands: state.brands
})
export default connect(mapStateToProps)(Brands);


