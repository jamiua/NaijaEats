import React, {Component} from "react";
import "./Taste.scss";


class Taste extends Component {
    

    render() {
        return (
            <section>
                <article className="taste" >
                    <figure>
                    <a>&#127798;&#65039;</a>
                    <figcaption>Spicy</figcaption>
                    </figure>

                    <figure>
                    <a>&#129473;</a>
                    <figcaption>Sweet</figcaption>
                    </figure>

                    <figure>
                    <a>&#x1F9C2;</a>
                    <figcaption>Salty</figcaption>
                    </figure>

                    <figure>
                    <a>&#128293;</a>
                    <figcaption>Smoky</figcaption>
                    </figure>
                </article>
            </section>
            
        )
    }
}

export default Taste;
