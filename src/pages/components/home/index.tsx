import React, {Component} from 'react';
import "./index.less"
import {Col, Row} from 'antd';

class Home extends Component {
    render() {
        return (
            <div className="home-box">
                <div className="home-model">
                    <Row>
                        <div className="article-model">
                            <div className="article-title"><span>文章标题</span></div>
                        </div>
                        <div className="article-model">
                            <span className="article-title">文章标题</span>
                        </div>
                        <div className="article-model">
                            <span className="article-title">文章标题</span>
                        </div>
                        <div className="article-model">
                            <span className="article-title">文章标题</span>
                        </div>
                        <div className="article-model">
                            <span className="article-title">文章标题</span>
                        </div>
                        <div className="article-model">
                            <span className="article-title">文章标题</span>
                        </div>

                    </Row>
                </div>
            </div>
        );
    }
}

export default Home;