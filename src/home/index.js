/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
/* eslint react/no-danger: 0 */
/* global document  */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Layout from '../../components/Layout';
import Gravatar from '../../components/Gravatar';
import s from './styles.css';
import { title, html } from './index.md';

class HomePage extends React.Component {
  componentDidMount() {
    document.title = title;
  }

  render() {
    const settings = {
      dots: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };

    return (
      <Layout className={s.content}>
        <Slider className={s.slider} {...settings} >
          <div><img alt="" src={'http://placekitten.com/g/1024/400'} /></div>
          <div><img alt="" src={'http://placehold.it/1024x400'} /></div>
          <div><img alt="" src={'http://placehold.it/1024x400?text=placehold.rules!'} /></div>
        </Slider>
        <Gravatar />
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <p>
          <br /><br />
        </p>
      </Layout>
    );
  }

}

export default HomePage;
