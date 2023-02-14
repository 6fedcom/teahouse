import { Component, PropsWithChildren } from 'react'
import { View, Text, NavigationBar } from '@tarojs/components'

import './index.scss'

export default class Mine extends Component<PropsWithChildren> {
  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='mine-page'>
        <View>
          <View>
            头像
          </View>
          <View>
            <Text>
              姓名
            </Text>
            <View>
              编辑资料
            </View>
          </View>
          <View>
            个人主页
          </View>
        </View>
      </View>
    )
  }
}
