import React, { Component } from 'react';
import { Image, Carousel } from 'react-bootstrap';

export class CarouselSlide extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img className="carouselImage" alt="900x500" src="https://images.pexels.com/photos/669612/pexels-photo-669612.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img alt="900x500" className="carouselImage" src="https://images.unsplash.com/photo-1522875850847-f1965f2bb288?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a18760761b26423540dbd2afd19c2f2f&auto=format&fit=crop&w=1350&q=80" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="carouselImage" src="https://images.unsplash.com/photo-1518169811655-27c3a4327016?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d31bd2512f92ca5444a1e501634257ca&auto=format&fit=crop&w=1350&q=80" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}