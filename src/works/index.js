/* eslint react/no-danger: 0 */
/* global document  */
import React from 'react';
import { Cell, Grid } from 'react-mdl';
import Layout from '../../components/Layout';
import s from './styles.css';
import { title } from './index.md';

class WorksPage extends React.Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout className={s.content}>
        <Grid className="mdl-grid--no-spacing">
          <Cell col={4} />
          <Cell col={4}>
            <h1>Our Works</h1>
          </Cell>
          <Cell col={4} />
        </Grid>
        <Grid className="mdl-grid--no-spacing">
          <Cell col={4}>
            <img alt="" className={s.image} src="/img/photo-1427104227401-94b390b378b0.jpeg" />
          </Cell>
          <Cell col={4}>
            <img alt="" className={s.image} src="/img/photo-1433170854238-8828efbab416.jpeg" />
          </Cell>
          <Cell col={4}>
            <img alt="" className={s.image} src="/img/photo-1440439307159-c3afc8a8e4ff.jpeg" />
          </Cell>
        </Grid>
        <Grid className="mdl-grid--no-spacing">
          <Cell col={4}>
            <img alt="" className={s.image} src="/img/photo-1449247526693-aa049327be54.jpeg" />
          </Cell>
          <Cell col={4}>
            <img alt="" className={s.image} src="/img/photo-1455596120412-30a2e6c8e600.jpeg" />
          </Cell>
          <Cell col={4}>
            <img alt="" className={s.image} src="/img/photo-1456534231849-7d5fcd82d77b.jpeg" />
          </Cell>
        </Grid>
      </Layout>
    );
  }

}

export default WorksPage;
