import React, { Component } from 'react';
import s from './random.module.css';

export default class RandomPlanet extends Component {

  render() {
    return (
      <div className={s.random_planet}>
      <div className="random-planet jumbotron rounded">
        <img className={s.planet_image}
             src="https://starwars-visualguide.com/assets/img/planets/5.jpg" />
        <div>
          <h4>Planet Name</h4>
          <div className={s.list_group}>

          <ul className="list-group list-group-flush">
          <div className={s.list_group_item}>
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>123124</span>
            </li>
            </div>
          <div className={s.list_group_item}>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>43</span>
            </li>
            </div>
          <div className={s.list_group_item}>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>100</span>
            </li>
            </div>
          </ul>

          </div>


        </div>
      </div>
      </div>

    );
  }
}
