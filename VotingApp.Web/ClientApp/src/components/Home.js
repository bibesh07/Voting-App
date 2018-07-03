import React, { Component } from 'react';
import { CarouselSlide } from './Home/Carousel';
import { Register } from './Home/RegisterForm';
import { Avatar, Row, Col, Button, Card } from 'antd';
import { TrendingEvents } from './Home/TrendingEvents';

export class Home extends Component {
  displayName = Home.name

    render() {
      return (
          <div>
              <div className="row">
                  <div className="col-md-7 ">
                    <CarouselSlide/>
                  </div>
                  <div className="row col-md-offset-1 col-md-3 ">
                      <div className="col-md-10 well ">
                          <fieldset>
                            <legend> Register <Avatar id="registerAvatar" shape="circle" size="medium" icon="user" /></legend>
                            <Register />
                          </fieldset>
                      </div>
                  </div>
              </div>
              <br/>
              <div className="row ">
                  <div className="col-md-12">
                      <h2> Trending Elections </h2>
                      <hr />
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-12">
                      <TrendingEvents />
                  </div>
              </div>
              <br />

              <div className="row parallax">
                  <div className="col-md-12">
                  </div>
              </div>
              <div style={{ background: 'white', padding: '30px' }}>
                  <Row gutter={16}>
                      <Col span={8}>
                          <Card title="Reliability" bordered={false}>
                              <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                              an unknown printer took a galley of type and scrambled it to make a type specimen book.
                              It has survived not only five centuries, but also the leap into electronic typesetting,
                              remaining essentially unchanged.</h4>
                          </Card>
                      </Col>
                      <Col span={8}>
                          <Card title="Security" bordered={false}>
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                              an unknown printer took a galley of type and scrambled it to make a type specimen book.
                              It has survived not only five centuries, but also the leap into electronic typesetting,
                              remaining essentially unchanged.
                          </Card>
                      </Col>
                      <Col span={8}>
                          <Card title="Timely" bordered={false}>
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                              an unknown printer took a galley of type and scrambled it to make a type specimen book.
                              It has survived not only five centuries, but also the leap into electronic typesetting,
                              remaining essentially unchanged.
                          </Card>
                      </Col>
                  </Row>
              </div>
          </div>
    );
  }
}
