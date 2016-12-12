import React,{Component} from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = {term: "Starting Value "};
    }
    render(){
        return (
            <div>
                <input onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);

    }


}

export default SearchBar;