import { useState, useEffect } from 'react'
import { Link, Switch, Route, useParams, useRouteMatch } from "react-router-dom";
import "../../styles/BrandsStyle.css";
import { Grid, Paper, Typography, ButtonBase } from '@material-ui/core';
import { useDispatch } from 'react-redux'
import Button from '../shared/Button'
import Brand from "./Brand"
import { SELECTED_BRAND } from '../../reducer/reducer'
import store from '../../reducer/indexStore'
const Brands = () => {
  const brands = store.getState().brands
  const { path, url } = useRouteMatch()
  return (
    <div className='brands-main-content'>
      <div className='brands-content'>
        {brands.map((brand, i) => (

          <div key={i} className='root'>
            <Paper className='paper'>
              <Grid container className='main-grid'>
                <Grid className='image-grid'  >
                  <ButtonBase className='image-btn' >
                    <Link to={{ pathname: `${path}/${brand.name}`, state: { brand: brand } }}></Link>
                  </ButtonBase>
                </Grid>
                <Grid className='desc-grid'>
                  <Grid className='typo-grid'>
                    <Typography className='description' variant="subtitle1">
                      {brand.description}
                    </Typography>
                  </Grid>
                  <Grid className='grid-btn'>
                    {/* <Link to={`${path}/${brand.name}`} className='brand-link'><Button>{brand.label}</Button></Link> */}
                    <Link to={{ pathname: `${path}/${brand.name}`, state: { brand: brand } }} className='brand-link' > <Button>{brand.label}</Button></Link>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </div>
        ))}
      </div>
      <Switch>
        <Route path='/brands/:brand_url' component={Brand}/>
      </Switch>
    </div >
  );
}
export default Brands;