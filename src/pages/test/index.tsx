
import { useState } from 'react'
import { Button, View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
// import './index.scss'

export default function Register() {

    const [openId, setOpenId] = useState("")
    const [userInfo, setUserInfo] = useState(null)

    return (
        <View className='test-page'>
            <Button
              className='login'
              type='primary'
              data-code={openId}
              onClick={() => {
                    Taro.login({
                        success: function (res) {
                            console.log(res)
                            if (res.code) {
                                console.log('登录失败！', res)
                                setOpenId(res.code)
                            } else {
                                console.log('登录失败！' + res.errMsg)
                            }
                        }
                    })
                }}
            >
                登录获取openId
            </Button>
            <Text>
                openId:{openId}
            </Text>
            <Button
              className='myButton'
              type='primary'
              onClick={() => {
                    Taro.getUserProfile({
                        desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
                        success: (res: any) => {
                            // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
                            console.log("res.userInfo", res.userInfo)
                            setUserInfo(res.userInfo)
                        }
                    })
                }}
            >
                微信快捷登录
            </Button>
            <Text>
                用户信息：{JSON.stringify(userInfo)}
            </Text>

            <Button
              className='myButton'
              type='primary'
              onClick={() => {
                    Taro.vibrateShort({
                        type: 'light'
                    })
                }}
            >
                震动
            </Button>
            <Text>

            </Text>

        </View>
    )
}

