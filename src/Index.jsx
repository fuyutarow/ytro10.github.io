import "./polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
//import Portfolio from './Portfolio';
import { styles } from './style.css.js';

class Work extends React.Component {
  constructor(props){
  super()
    this.props = props;
    this.styles = {
      div: {
      },
      title: {
        textAlign: 'center',
      },
      li: {
        display:'block',
        clear:'both',
      },
      ptitle: {
        width: '20%',
        float: 'left',
        boxSizing: 'border-box',
      },
      pbody: {
        width: '80%',
        float: 'left',
        boxSizing: 'border-box',
      },
      imgul: {
        listStyle: 'none',
      },
      imgli: {
        height: '60px',
        float: 'left',
        boxSizing: 'border-box',
      },
      img: {
        height: '60px',
      },
    }
  }

  render(){

    const images = this.props.imgs
      .map( a =>
        <li style={this.styles.imgli}><img style={this.styles.img} src={a}/></li>
      )
    return(
      <div style={this.styles.div}>
        <h2 style={{textAlign: 'center'}}>{this.props.name}</h2>
        <ul>
          <li style={this.styles.li}>
            <p style={this.styles.ptitle}>URL</p>
            <p style={this.styles.pbody}><a href={this.props.url}>{this.props.url}</a></p>
          </li>
          <li style={this.styles.li}>
            <p style={this.styles.ptitle}>source code</p>
            <p style={this.styles.pbody}><a href={this.props.sourcecode}>{this.props.sourcecode}</a></p>
          </li>
          <li style={this.styles.li}>
            <p style={this.styles.ptitle}>discription</p>
            <p style={this.styles.pbody}>{this.props.discription}</p>
          </li>
          <li style={this.styles.li}>
            <p style={this.styles.ptitle}>technology</p>
            <p style={this.styles.pbody}>
              <ul style={this.styles.imgul}>
                {images}
              </ul>
            </p>
          </li>
        </ul>
      </div>
    )
  }
}

const Portfolio = props =>
  <div style={{fontSize:'24px', width:'880px', margin: '0 auto'}}>
    <h1 style={{textAlign: 'center'}}>FUKUDA Yutaro's portfolio</h1>
    <h1 style={{textAlign: 'center'}}>Profile</h1>
    <div>
      <ul>
        <li style={{display:'block',clear:'both'}}>
          <p style={{width:'20%', float:'left', boxSizing:'border-box'}}>GitHub</p>
          <p style={{width:'80%', float:'left', boxSizing:'border-box'}}><a href="https://github.com/ytro10">https://github.com/ytro10</a></p>
        </li>
      </ul>
    </div>
    <h1 style={{textAlign: 'center'}}>Products</h1>
    <hr/>
    <Work style={styles.work}
      name='tamaKoo'
      url='http://tamakoo.com/'
      sourcecode='https://github.com/ytro10/tamakoo'
      discription='toot to surf the internet'
      imgs={['img/images.png','img/logo-title-dark.png','img/neo4j_logo.png','img/nginx-logo.png']}
    />
    <hr/>
    <Work style={styles.work}
      name='Dobutsu Shogi'
      url='https://ytro10.github.io/dobutsu-shogi/'
      sourcecode='https://github.com/ytro10/dobutsu-shogi'
      discription='Japanese board game'
      imgs={['img/images.png','img/logo-title-dark.png']}
    />
    <hr/>
    <Work style={styles.work}
      name='Honey5'
      url='https://ytro10.github.io/honey5/'
      sourcecode='https://github.com/ytro10/honey5'
      discription='Five in line'
      imgs={['img/images.png','img/logo-title-dark.png']}
    />
    <hr/>
    <Work style={styles.work}
      name='Lorenz attractor'
      url='https://ytro10.github.io/lorenz_attractor/'
      sourcecode='https://github.com/ytro10/lorenz_attractor'
      discription='Lorenz attractor viewer'
      imgs={['img/Processing_3_logo.png']}
    />
    <hr/>
  </div>

ReactDOM.render(
<Portfolio/>
, document.getElementById('main')
)
