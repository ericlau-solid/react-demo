/* eslint react/no-danger: 0 */
/* global document  */
import React from 'react';
import { Cell, Grid } from 'react-mdl';
import Layout from '../../components/Layout';
import s from './styles.css';
import { title, html } from './index.md';

class TeamPage extends React.Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout className={s.content}>
        <Grid className="mdl-grid--no-spacing">
          <Cell col={4} />
          <Cell col={4}>
            <h1>{title}</h1>
          </Cell>
          <Cell col={4} />
        </Grid>
        <Grid className="mdl-grid--no-spacing">
          <Cell col={2}>
            <img alt="" className={s.image} src="/tile.png" />
          </Cell>
          <Cell col={2}>
            <img alt="" className={s.image} src="/tile.png" />
          </Cell>
          <Cell col={2}>
            <img alt="" className={s.image} src="/tile.png" />
          </Cell>
          <Cell col={2}>
            <img alt="" className={s.image} src="/tile.png" />
          </Cell>
          <Cell col={2}>
            <img alt="" className={s.image} src="/tile.png" />
          </Cell>
          <Cell col={2}>
            <img alt="" className={s.image} src="/tile.png" />
          </Cell>
        </Grid>
        <Grid className="mdl-grid--no-spacing">
          <Cell col={6}>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </Cell>
          <Cell col={6}>
            <img alt="" className={s.image} src="/img/locationMap.png" />
          </Cell>
        </Grid>
      </Layout>
    );
  }

}

export default TeamPage;
