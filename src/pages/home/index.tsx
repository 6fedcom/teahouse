import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
 

export default class Home extends Component<PropsWithChildren> {
  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='home-page'>
        <Text>首页</Text>
      </View>
    )
  }
}
