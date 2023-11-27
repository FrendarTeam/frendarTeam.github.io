import axios from './index'
export class UserAPI {
    static getUser = async () => {
        try {
            const result = await axios.get('/user')
            return result.data.data.user
        } catch (err) {
            console.log(err)
        }
    }

    static updateAlarmToggle = async () => {
        try {
            const result = await axios.put('/user/notification')

            // console.log(result)
        } catch (err) {
            console.log(err)
        }
    }

    static updateMainColor = async (color: string) => {}
}
