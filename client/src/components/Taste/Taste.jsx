import axios from "axios";
import React, {Component} from "react";
import "./Taste.scss";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;


class Taste extends Component {
    
    state = {
        mealsData: [],
        // selectedMeal: null,
    }

    componentDidMount = () => {
        axios
        .get(`${SERVER_URL}/meals`)
        .then(response => {
            console.log(response)

        })
        .catch( error => {
            console.log(error);
        })
    }

    render() {
        return (
            <section>
                <article className="taste" >
                    <figure className="taste__box" >
                    <a className="taste__image" >&#127798;&#65039;</a>
                    <figcaption className="taste__text">Spicy</figcaption>
                    </figure>

                    <figure className="taste__box">
                    <a className="taste__image">&#129473;</a>
                    <figcaption className="taste__text">Sweet</figcaption>
                    </figure>

                    <figure className="taste__box">
                    <a className="taste__image">&#x1F9C2;</a>
                    <figcaption className="taste__text">Salty</figcaption>
                    </figure>

                    <figure className="taste__box">
                    <a className="taste__image" >&#128293;</a>
                    <figcaption className="taste__text">Smoky</figcaption>
                    </figure>
                </article>
            </section>
            
        )
    }
}

export default Taste;
