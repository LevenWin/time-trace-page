import './Home.css';
import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    this.state = { isSmall: false };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    console.log(window.innerWidth)
    this.setState({ isSmall: window.innerWidth <= 550 });
  }

  downloadApp() {
    console.log("download app")
  }
  clickProtocol(type) {
    console.log(type)
  }


  render() {
    let isSmall = this.state.isSmall;

    let valueItems;
    if (this.state.isSmall) {
      valueItems = <div className='value-container'>
        <text className={("sh1")}>追踪时间能有什么用？</text>
        <div className='value-items small-values'>
          <div className='value-item'>
            <img src={require('./img/value1.png')}></img>
            <text className={("sh2")}>提升专注力</text>
            <text className='sh3'>尤其是将时间分为不同的各个模块</text>
          </div>
          <div className='value-item'>
            <img src={require('./img/value2.png')}></img>
            <text className='sh2'>工作生活分开</text>
            <text className='sh3'>给自己一个目标，工作多少小时就停止。找到工作与生活的平衡</text>
          </div>
        </div>
        <div className='value-items small-values'>
          <div className='value-item'>
            <img src={require('./img/value3.png')}></img>
            <text className='sh2'>持续做某事</text>
            <text className='sh3'>统计在某件事上花时间，就更容易坚持</text>
          </div>

          <div className={['value-item']}>
            <img src={require('./img/value4.png')}></img>
            <text className='sh2'>认识自我</text>
            <text className='sh3'>知道自己的时间花在了哪里，从而更加了解自己</text>
          </div>
        </div>
        <div className='value-line'></div>
      </div>
    } else {
      valueItems = <div className='value-container'>
        <text className="h1">追踪时间能有什么用？</text>
        <div className='value-items'>
          <div className='value-item'>
            <img src={require('./img/value1.png')}></img>
            <text className="h2">提升专注力</text>
            <text className="h3">尤其是将时间分为不同的各个模块</text>
          </div>
          <div className='value-item'>
            <img src={require('./img/value2.png')}></img>
            <text className='h2'>工作生活分开</text>
            <text className='h3'>给自己一个目标，工作多少小时就停止。找到工作与生活的平衡</text>
          </div>
          <div className='value-item'>
            <img src={require('./img/value3.png')}></img>
            <text className='h2'>持续做某事</text>
            <text className='h3'>统计在某件事上花时间，就更容易坚持</text>
          </div>

          <div className={['value-item']}>
            <img src={require('./img/value4.png')}></img>
            <text className='h2'>认识自我</text>
            <text className='h3'>知道自己的时间花在了哪里，从而更加了解自己</text>
          </div>
        </div>
        <div className='value-line'></div>
      </div>
    }
    return (
      <div className="App">
        <div className="Header">
          <div className='logo'>
            <img src={require('./img/header_logo.png')}></img>
            <text>时间印迹</text>
          </div>

          <div className='download' onClick={() => this.downloadApp()}>
            <text>下载App</text>
          </div>
        </div>
        <div className='Banner'>

          <div className={'Banner-Content ' + (isSmall ? "Banner-Small-Content" : "")}>
            <div className={"Banner-Content-Title " + (isSmall ? "Banner-Small-Title" : "")}>
              <text>记录</text>
              <text>专注</text>
              <text>，预见未来</text>
            </div>
            <text>
              记录专注、习惯专注、享受专注，成为理想的自己更近一步
            </text>
          </div>
          <div className={'Banner-App ' + (isSmall ? "small-app" : "")}></div>



        </div>

        {valueItems}

        <div className={'record-container '  + (isSmall ? "small-container" : "")}>
          <text className={(isSmall ? "sh1" : "h1")}>快速丰富的记录</text>
          <text className={(isSmall ? "sh3" : "h3")}>尤其是将时间分为不同的各个模块，在完成之后再做别的事，将大大提升我们的专注力</text>
          <img src={require('./img/record.png')}></img>
        </div>

        <div className={'data-container ' + (isSmall ? "small-container" : "")}>
          <text  className={(isSmall ? "sh1" : "h1")}>掌控回顾时间</text>
          <text className={(isSmall ? "sh3" : "h3")}> 尤其是将时间分为不同的各个模块，在完成之后再做别的事，将大大提升我们的专注力</text>
          <img src={require('./img/data.png')}></img>
        </div>
        <div className='footer'>
          <img src={require('./img/appStore.png')} onClick={() => this.downloadApp()}></img>
          <div className='protocol'>
            <text onClick={() => this.clickProtocol(1)}>
              用户协议
            </text>
            <text onClick={() => this.clickProtocol(2)}>
              隐私政策
            </text>
            <text onClick={() => this.clickProtocol(3)}>
              联系我们
            </text>

          </div>
          <img src={require('./img/header_logo.png')}></img>
          <text>
            记录专注，预见未来
          </text>
          <div className='footer-line'></div>
          <img className='light-logo' src={require('./img/light_logo.png')}></img>
        </div>


      </div>
    );
  }

}
