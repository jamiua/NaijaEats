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
            // console.log(allMealsData)
            
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

        // console.log(userMeal[0].type)

        let userPossibleMeal = userMeal.filter(meal => meal.type === type)

        let finalUserMeal = userPossibleMeal[0]

        this.setState({selectedMeal: finalUserMeal})
            
            console.log(finalUserMeal)
        
    }


    componentDidMount = () => {
        axios
        .get(`${SERVER_URL}/meals`)
        .then(response => {
            const allMealsData = response.data
            // console.log(allMealsData)

            this.setState({
                mealsData: allMealsData
            });
        })
        .catch( error => {
            console.log(error);
        })
    }

    // componentDidUpdate = (prevProps) => {
    //     const randomMealId = this.props.match.params.id;
    //     if (prevProps.match.params.id !== new)
    // }
    /* onclick={handleClick} */

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
            <section>
                {this.state.selectedMeal && 
                    (
                        <>
                            <p>{this.state.selectedMeal.description}</p>
                            <p>{this.state.selectedMeal.instructions}</p>
                        </>
                    ) 
                }
            </section>
            </>
            
        )
    }
}

export default Taste;
