import { Component, PropsWithChildren } from 'react'
import { Button, View, Navigator } from '@tarojs/components'
import Taro, { useState } from '@tarojs/taro'
import './index.scss'


export default class Index extends Component<PropsWithChildren> {

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  
  render() {
    return (
      <View className='index'>

        <Navigator url='/pages/mine/index' hover-class='navigator-hover'>
          <Button type='primary' >我的</Button>
        </Navigator>
        <Navigator url='../../redirect/redirect/redirect?title=redirect'
          open-type='redirect' hover-class='other-navigator-hover'
        >在当前页打开</Navigator>
        <Navigator url='/page/index/index' open-type='switchTab' hover-class='other-navigator-hover'>切换 Tab</Navigator>
        <Navigator target='miniProgram' open-type='navigate' app-id='' path='' extra-data='' version='release'>打开绑定的小程序</Navigator>
        <Button type='primary' open-type='contact'>客服会话</Button>
        {/* <Button type='primary' sendMessageImg='2'>截图</Button> */}

      </View>
    )
  }
}
