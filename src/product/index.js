/* eslint react/no-danger: 0 */
/* global document  */
import React from 'react';
import { Cell, Grid } from 'react-mdl';
import Layout from '../../components/Layout';
import s from './styles.css';
import { title, html } from './index.md';

class ProductPage extends React.Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout className={s.content}>
        <Grid>
          <Cell col={6}>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <p className={s.callToAction}>
              <a className={s.downloadApp} href="/product">Download the app</a>
            </p>
          </Cell>
          <Cell col={6}>
            <img alt="product" className={s.image} src="/img/iPhone_6.png" />
          </Cell>
        </Grid>
      </Layout>
    );
  }
}

export default ProductPage;
