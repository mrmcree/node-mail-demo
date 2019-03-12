const axios =require('axios')
const config=require('./config')
const weatherInfo=require('./weather_info.js')
const weatherApiUrl=config.apiUrl;
const mail=require('./mail')
const address='nico.yang@unique-ad.com.cn'
let schedule=require('node-schedule')
var url=axios.create({
    baseURL:weatherApiUrl
})
// console.log(mail)
url.get(weatherApiUrl)
    .then(function(response){
        let data=response.data
        let weather;
        for(var i in weatherInfo.weatherinfo){
            if(data.current.weather==i){
                weather=weatherInfo.weatherinfo[i].wea
                // console.log(weatherInfo.weatherinfo[i])
            }
        }
        let html=`<h1>今日温度:${data.current.temperature.value}</h1>
            <h5>降雨概率:${data.forecastDaily.precipitationProbability.status}</h5>
            <h5>天气情况:${weather}</h5>
        `
        schedule.scheduleJob('30 1 1 * * *',function(){
            mail(address,'今天天气',html) 
        })
        
        
    })