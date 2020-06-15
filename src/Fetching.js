import React, {Component} from 'react';
import BeverageList from './BeverageList';

class FetchingData extends Component {
    constructor(props) {
        super(props);
        this.state = {
          beers: []
        };
    }

    fetchData() {
    fetch('https://api.punkapi.com/v2/beers')
    .then(response => response.json())
    .then(parsedJSON => parsedJSON.results.map(beverage => (
        {
            id: `${beverage.id.id}`,
            name: `${beverage.name.name}`,
            // tagline: `${beverage.tagline.tagline}`,
            // first_brewed: `${beverage.first_brewed.first_brewed}`,
            description: `${beverage.description.description}`,
            image_url: `${beverage.image_url.image_url}`
            // abv: `${beverage.abv.abv}`,
            // ibu: `${beverage.ibu.ibu}`,
            // target_fg: `${beverage.target_fg.target_fg}`,
            // target_og: `${beverage.target_og.target_og}`,
            // ebc: `${beverage.ebc.ebc}`,
            // srm: `${beverage.srm.srm}`,
            // ph: `${beverage.ph.ph}`,
            // attenuation_level: `${beverage.attenuation_level.attenuation_level}`,
            // volume: `${beverage.volume.volume}`,
            // boil_volume: `${beverage.boil_volume.boil_volume}`,
            // method: `${beverage.method.method}`,
            // fermentation: `${beverage.fermentation.fermentation}`,
            // ingredients: `${beverage.ingredients.ingredients}`,
            // food_pairing: `${beverage.food_pairing.food_pairing}`,
            // brewer_tips: `${beverage.brewer_tips.brewer_tips}`,
            // contributed_by: `${beverage.contributed_by.contributed_by}`
        }
    )))
    .then(beers => this.setState({
        beers
        // isLoading: false
    }))
    .catch(error => console.log('parsing failed', error))
    }

    render() {
        // const {beers} = this.state;
        // console.log("This is beer[] = ", this.state.beer);
        return(
            <div>
                <header>
                    <h1>Fetching Data</h1> 
                    <button className="btn btn-sm btn-danger" onClick={(e) => {
                        this.fetchData();
                    }}>Fetch Data</button>
                </header>
                
                {/* <div className={`content ${isLoading ? 'is-loading' : ''}`}>
                    <div className="panel-group">
                        {
                            !isLoading && beers.length > 0 ? beers.map(beer => {
                                const {id, name, tagline, first_brewed, description, image_url, abv, ibu, target_fg, target_og, ebc, srm, ph, attenuation_level, volume, boil_volume, method, fermentation, ingredients, food_pairing, brewer_tips, contributed_by} = beer;
                                return <Collapsible key={beers.id} title={id}>
                                    <p>{name} <br /> {tagline} <br /> {first_brewed} <br /> {description} <br /> {image_url} <br /> {abv} <br /> {ibu} <br /> {target_fg} <br /> {target_og} <br /> {ebc} <br /> {srm} <br /> {ph} <br /> {attenuation_level} <br /> {volume} <br /> {boil_volume} <br /> {method} <br /> {fermentation} <br /> {ingredients} <br /> {food_pairing} <br /> {brewer_tips} <br /> {contributed_by}</p>
                                </Collapsible>
                            }) : null
                        }
                    </div>
                </div> */}
                <BeverageList item = {[this.state.beers]}/>
            </div>
        )
    }
}

export default FetchingData;