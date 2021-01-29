import React, { Component } from 'react';


class ImageListCard extends Component {
    constructor(props) {
        super(props);
        this.state = {spans:0}
        this.imageRef = React.createRef();
    }
    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);//the addEventListener('load' so we dont get a 0 result
    }

    setSpans = () => {
        const Height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(Height / 10);
        this.setState({spans})
    }

    render() {
        const { urls, description } = this.props.image;
        return (
           
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img
                    ref={this.imageRef}
                alt={description}
                    src={urls.regular}/>
                    
                </div>
        )
    }
}
export default ImageListCard;