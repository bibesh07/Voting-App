import React, { Component } from 'react';
import Slider from "react-slick";
import { Card, Icon, Avatar, Tooltip, Button, Popover } from "antd";
const { Meta } = Card;

const verified = (
    <Tooltip placement="right" title="Verified">
        <Icon type="check-circle" />
    </Tooltip>
);

export class TrendingEvents extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 2,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div>
                <div>
                    <Slider {...settings}>
                        <div>
                            <Cards/>
                        </div>
                        <div>
                            <Cards />
                        </div>
                        <div>
                            <Cards />
                        </div>
                        <div>
                            <Cards />
                        </div>
                        <div>
                            <Cards />
                        </div>
                        <div>
                            <Cards />
                        </div>
                        <div>
                            <Cards />
                        </div>
                        <div>
                            <Cards />
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }
}

class Cards extends Component {
    candidates = () => {
        return (
            <Popover
                placement="bottom"
                content={this.candidateList()}
                trigger="click"
                title="Candidates"
            >
                <Icon type="team" />
            </Popover>
        );
    };

    candidateList = props => {
        return (
            <div>
                <ol>
                    <li>Pawan Shrestha</li>
                    <li>Pawan Thapa</li>
                    <li>Pawan khadka</li>
                </ol>
            </div>
        );
    };

    socialmedia = () => {
        return (
            <Popover
                placement="bottom"
                content={this.socialMediaRedirection()}
                title="Share this election"
                trigger="hover"
            >
                <Icon type="share-alt" />
            </Popover>
        );
    };

    socialMediaRedirection = props => {
        return (
            <div>
                &nbsp;
        <Button size="small">
                    <Icon type="facebook" />
                </Button>{" "}
                &nbsp;
        <Button size="small">
                    <Icon type="twitter" />
                </Button>&nbsp;&nbsp;
        <Button size="small">
                    <Icon type="instagram" />
                </Button>&nbsp;
      </div>
        );
    };

    eventDescription = () => {
        return (
            <div>
                <h3>Presidential Election</h3>
                <p>
                    {" "}
                    Get in and join the 11th annual NSAS Presidential voting campaign.
        </p>
            </div>
        );
    };

    render() {
        return (
            <Card
                style={{ width: 300 }}
                cover={
                    <img
                        alt="example"
                        height={200}
                        src="https://ssl.tzoo-img.com/images/blog/legacyblog/us/wp-content/uploads/2015/03/tzoo.hd_.61384.6680.NepalTrekking-111212.jpg"
                    />
                }
                actions={[<Icon type="heart" />, this.candidates(), this.socialmedia()]}
            >
                <Meta
                    avatar={
                        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShvbI3FGDJP1H4-Psq-dv2jSrIo1VS6XiebY8uX8GG1BHWD-FSMQ" />
                    }
                    title={<a> NSAS {verified} </a>}
                    description={this.eventDescription()}
                />
            </Card>
        );
    }
}
