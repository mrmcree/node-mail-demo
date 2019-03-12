const config = require('./config')
const nodemailer = require("nodemailer");
let smtpTransport=require('nodemailer-smtp-transport')
smtpTransport = nodemailer.createTransport(smtpTransport({
    service: config.email.service,
    auth: {
        user: config.email.user,
        pass: config.email.pass
    }
}));
 
/**
 * @param {String} recipient 收件人
 * @param {String} subject 发送的主题
 * @param {String} html 发送的html内容
 */
var sendMail = function (recipient, subject, html) {
 
    smtpTransport.sendMail({
 
        from: config.email.user,
        to: recipient,
        subject: subject,
        html: html
 
    }, function (error, response) {
        if (error) {
            console.log(error);
        }
        console.log('发送成功')
    });
}
// sendMail('nico.yang@unique-ad.com.cn','ddd','<h1>eamil dadasda</h1>')
module.exports = sendMail;
