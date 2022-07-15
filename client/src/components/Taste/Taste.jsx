import axios from "axios";
import React, {Component} from "react";
import "./Taste.scss";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;


class Taste extends Component {
    
    state = {
        mealsData: [],
        selectedMeal: null,
    }

    fetchUserMeals = () => {
        axios
        .get(`${SERVER_URL}/meals`)
        .then(response => {
            const allMealsData = response.data
            
            this.setState({
                mealsData: allMealsData
                
            })
        })
        .catch( error => {
            console.log(error);
        })
    }
    
    handleClick = (event, type) => {
        event.preventDefault()
        let userMeal = this.state.mealsData

        let userPossibleMeal = userMeal.filter(meal => meal.type === type)
            console.log(userPossibleMeal);
        
        let finalUserMeals = userPossibleMeal[Math.floor(Math.random() * userPossibleMeal.length)]
       

        this.setState({selectedMeal: finalUserMeals})
            
            console.log(finalUserMeals)
        
    }

    componentDidMount = () => {
        axios
        .get(`${SERVER_URL}/meals`)
        .then(response => {
            const allMealsData = response.data

            this.setState({
                mealsData: allMealsData
            });
        })
        .catch( error => {
            console.log(error);
        })
    }

    render() {
        return (
            <>
            
            <section>
                <article className="taste" >
                    <figure onClick={(event) => {this.handleClick(event, "Spicy")}} className="taste__box" >
                    <a  className="taste__image" >&#127798;&#65039;</a>
                    <figcaption className="taste__text">Spicy</figcaption>
                    </figure>

                    <figure onClick={(event) => {this.handleClick(event, "Sweet")}} className="taste__box">
                    <a className="taste__image">&#129473;</a>
                    <figcaption className="taste__text">Sweet</figcaption>
                    </figure>

                    <figure onClick={(event) => {this.handleClick(event, "Salty")}} className="taste__box">
                    <a className="taste__image">&#x1F9C2;</a>
                    <figcaption className="taste__text">Salty</figcaption>
                    </figure>

                    <figure onClick={(event) => {this.handleClick(event, "Smoky")}} className="taste__box">
                    <a className="taste__image" >&#128293;</a>
                    <figcaption className="taste__text">Smoky</figcaption>
                    </figure>
                </article>
            </section>
            <section className="recipe">
                {this.state.selectedMeal && 
                    (
                      <section className="recipe__card">
                            <h1>{this.state.selectedMeal.name}</h1>
                            <img src={this.state.selectedMeal.image} className="recipe__image" href="/" ></img>
                            <p>{this.state.selectedMeal.description}</p>
                    </section>
                    ) 
                }
            </section>
            </>
            
        )
    }
}

export default Taste;
