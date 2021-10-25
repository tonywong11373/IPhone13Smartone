import fetch from 'node-fetch'
import nodeSchedule from 'node-schedule'
import { CookieJar } from 'tough-cookie';
import { HttpCookieAgent, HttpsCookieAgent } from 'http-cookie-agent';
import cheerio from 'cheerio'
import fs from 'fs'
import client from 'webdriverio'
import * as telegraf from 'telegraf' 

const jar = new CookieJar();

const httpAgent = new HttpCookieAgent({ jar });
const httpsAgent = new HttpsCookieAgent({ jar });

var $, checkoutCode
var paymentURL, paymentToken

// 2061661977:AAEuxmTJ4IPye-th3Qi-7sBWerZEzI4WsHE
const MyTGApp = new telegraf.Telegraf('2061661977:AAEuxmTJ4IPye-th3Qi-7sBWerZEzI4WsHE') 

var proMax = [
    {
        "Color": "Sierra Blue",
        "GB": "model128GB",
    },
    {
        "Color": "Sierra Blue",
        "GB": "model256GB",
    },
    {
        "Color": "Sierra Blue",
        "GB": "model512GB",
    },
    {
        "Color": "Sierra Blue",
        "GB": "model1TB",
    },
    {
        "Color": "Silver",
        "GB": "model128GB",
    },
    {
        "Color": "Silver",
        "GB": "model256GB",
    },
    {
        "Color": "Silver",
        "GB": "model512GB",
    },
    {
        "Color": "Silver",
        "GB": "model1TB",
    },
    {
        "Color": "Gold",
        "GB": "model128GB",
    },
    {
        "Color": "Gold",
        "GB": "model256GB",
    },
    {
        "Color": "Gold",
        "GB": "model512GB",
    },
    {
        "Color": "Gold",
        "GB": "model1TB",
    },
    {
        "Color": "Graphite",
        "GB": "model128GB",
    },
    {
        "Color": "Graphite",
        "GB": "model256GB",
    },
    {
        "Color": "Graphite",
        "GB": "model512GB",
    },
    {
        "Color": "Graphite",
        "GB": "model1TB",
    }
]
var TGChatIds = []

var TGMessageIds = []

var pushChatId = async (id) => { 
    if(TGChatIds.indexOf(id) < 0){ 
        TGChatIds.push(id) 
    }  
} 

MyTGApp.hears('check', (ctx) => ctx.reply('The App is Running!')) 
MyTGApp.start(async (ctx) => { 

    ctx.reply(`Welcome to use Tony BBG Telegram Bot`) 

    // console.log(ctx.chat.id) 

    ctx.reply(`Your Chat Id is : ${ctx.chat.id}`) 

    var messageId = await ctx.reply(`This chat will be used to update the IPhone availability`) 

    TGMessageIds.push(messageId.message_id) 

    await pushChatId(ctx.chat.id) 

}) 

MyTGApp.help((ctx) => { 

    ctx.reply(`To make sure you know how to use the App\nType /help to see it`) 

}) 
MyTGApp.launch() 

// await fetch("https://shop.smartone.com/en/storefront/mobile/iPhone-13/3358/?addtocart=1", {
//     "credentials": "include",
//     "headers": {
//         "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:100.0) Gecko/20100101 Firefox/100.0",
//         "Accept": "text/javascript, text/html, application/xml, text/xml, */*",
//         "Accept-Language": "en-GB,en;q=0.5",
//         "X-Requested-With": "XMLHttpRequest",
//         "X-Prototype-Version": "1.7.2",
//         "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
//         "Sec-Fetch-Dest": "empty",
//         "Sec-Fetch-Mode": "cors",
//         "Sec-Fetch-Site": "same-origin"
//     },
//     "referrer": "https://shop.smartone.com/en/storefront/mobile/iPhone-13/3358/",
//     "body": "url=%3Faddtocart%3D1&product_id=3358&product_type=handset&color=(PRODUCT)RED&size=256GB",
//     "method": "POST",
//     "mode": "cors",
//     agent: ({ protocol }) => {
//         return protocol === 'https:' ? httpsAgent : httpAgent;
//       },
// })
// .then(async PhoneResp => {
//     return await PhoneResp.json()
// })
// .then(async done1 => {
//     console.log(done1)
// })
// .catch(async err => {
//     console.log(err)
// })
// await fetch("https://shop.smartone.com/tc/storefront/cart.jsp", {
//     "credentials": "include",
//     "headers": {
//         "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:100.0) Gecko/20100101 Firefox/100.0",
//         "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
//         "Accept-Language": "en-GB,en;q=0.5",
//         "Upgrade-Insecure-Requests": "1",
//         "Sec-Fetch-Dest": "document",
//         "Sec-Fetch-Mode": "navigate",
//         "Sec-Fetch-Site": "same-origin",
//         "Sec-Fetch-User": "?1"
//     },
//     "referrer": "https://shop.smartone.com/tc/storefront/mobile/iPhone-13/3358/",
//     "method": "GET",
//     "mode": "cors",
//     agent: ({ protocol }) => {
//         return protocol === 'https:' ? httpsAgent : httpAgent;
//       },
// })
// .then(async BagResp => {
//     return await BagResp.text()
// })
// .then(async done1 => {
//     $ = cheerio.load(done1)
//     $('a.cart-item-link').each((idx,ele) => {
//         console.log($(this).text())
//     })
//     var matched = done1.indexOf('var tt \= \'')
//     var matched1 = done1.indexOf('ordering\.error')
//     checkoutCode = done1.substr(matched + 'var tt \= \''.length, matched1 - matched - 'var tt \= \''.length - 4)
//     // console.log(done1.substr(matched + 'var tt \= \''.length, matched1 - matched - 'var tt \= \''.length - 4))
//     // fs.writeFileSync('tmp_html.html',done1)
//     // \'[0-9a-zA-Z]+\'
//     // console.log(matched)
//     // console.log(done1)
// })
// .catch(async err => {
//     console.log(err)
// })
// // var tt = '1cfc709a7e23ebbcc3d3c026023f540e';
// await fetch(`https://shop.smartone.com/en/storefront/cart.jsp?checkout=${checkoutCode}undefined`, {
//     "credentials": "include",
//     "headers": {
//         "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:100.0) Gecko/20100101 Firefox/100.0",
//         "Accept": "text/javascript, text/html, application/xml, text/xml, */*",
//         "Accept-Language": "en-GB,en;q=0.5",
//         "X-Requested-With": "XMLHttpRequest",
//         "X-Prototype-Version": "1.7.2",
//         "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
//         "Sec-Fetch-Dest": "empty",
//         "Sec-Fetch-Mode": "cors",
//         "Sec-Fetch-Site": "same-origin"
//     },
//     "referrer": "https://shop.smartone.com/en/storefront/cart.jsp",
//     "body": `url=%3Fcheckout%3D${checkoutCode}undefined`,
//     "method": "POST",
//     "mode": "cors",
//     agent: ({ protocol }) => {
//         return protocol === 'https:' ? httpsAgent : httpAgent;
//       },
// })
// .then(async CheckOutResp => {
//     return await CheckOutResp.json()
// })
// .then(async done1 => {
//     console.log(done1)
// })
// .catch(async err => {
//     console.log(err)
// })

// await fetch("https://shop.smartone.com/en/storefront/checkout.jsp?loc=1", {
//     "credentials": "include",
//     "headers": {
//         "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:100.0) Gecko/20100101 Firefox/100.0",
//         "Accept": "text/javascript, text/html, application/xml, text/xml, */*",
//         "Accept-Language": "en-GB,en;q=0.5",
//         "X-Requested-With": "XMLHttpRequest",
//         "X-Prototype-Version": "1.7.2",
//         "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
//         "Sec-Fetch-Dest": "empty",
//         "Sec-Fetch-Mode": "cors",
//         "Sec-Fetch-Site": "same-origin"
//     },
//     "referrer": "https://shop.smartone.com/en/storefront/checkout.jsp",
//     "body": "l=IFC",
//     "method": "POST",
//     "mode": "cors",
//     agent: ({ protocol }) => {
//         return protocol === 'https:' ? httpsAgent : httpAgent;
//       },
// })
// .then(async LocationResp => {
//     return await LocationResp.json()
// })
// .then(async done1 => {
//     console.log(done1)
// })
// .catch(async err => {
//     console.log(err)
// })

// await fetch("https://shop.smartone.com/en/storefront/checkout.jsp?delivery=1", {
//     "credentials": "include",
//     "headers": {
//         "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:100.0) Gecko/20100101 Firefox/100.0",
//         "Accept": "text/javascript, text/html, application/xml, text/xml, */*",
//         "Accept-Language": "en-GB,en;q=0.5",
//         "X-Requested-With": "XMLHttpRequest",
//         "X-Prototype-Version": "1.7.2",
//         "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
//         "Sec-Fetch-Dest": "empty",
//         "Sec-Fetch-Mode": "cors",
//         "Sec-Fetch-Site": "same-origin"
//     },
//     "referrer": "https://shop.smartone.com/en/storefront/checkout.jsp",
//     "body": "url=%3Fdelivery%3D1&f=p%3DIFC",
//     "method": "POST",
//     "mode": "cors",
//     agent: ({ protocol }) => {
//         return protocol === 'https:' ? httpsAgent : httpAgent;
//       },
// })
// .then(async SelectLocationResp => {
//     return await SelectLocationResp.json()
// })
// .then(async done1 => {
//     console.log(done1)
// })
// .catch(async err => {
//     console.log(err)
// })

// await fetch("https://shop.smartone.com/en/storefront/confirm.jsp", {
//     "credentials": "include",
//     "headers": {
//         "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:100.0) Gecko/20100101 Firefox/100.0",
//         "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
//         "Accept-Language": "en-GB,en;q=0.5",
//         "Upgrade-Insecure-Requests": "1",
//         "Sec-Fetch-Dest": "document",
//         "Sec-Fetch-Mode": "navigate",
//         "Sec-Fetch-Site": "same-origin",
//         "Sec-Fetch-User": "?1"
//     },
//     "referrer": "https://shop.smartone.com/en/storefront/checkout.jsp",
//     "method": "GET",
//     "mode": "cors",
//     agent: ({ protocol }) => {
//         return protocol === 'https:' ? httpsAgent : httpAgent;
//       },
// })
// .then(async ConfirmResp => {
//     return await ConfirmResp.text()
// })
// .then(async done1 => {
//     // console.log(done1)
// })
// .catch(async err => {
//     console.log(err)
// })

// await fetch("https://shop.smartone.com/en/storefront/confirm.jsp?confirm=1", {
//     "credentials": "include",
//     "headers": {
//         "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:100.0) Gecko/20100101 Firefox/100.0",
//         "Accept": "text/javascript, text/html, application/xml, text/xml, */*",
//         "Accept-Language": "en-GB,en;q=0.5",
//         "X-Requested-With": "XMLHttpRequest",
//         "X-Prototype-Version": "1.7.2",
//         "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
//         "Sec-Fetch-Dest": "empty",
//         "Sec-Fetch-Mode": "cors",
//         "Sec-Fetch-Site": "same-origin"
//     },
//     "referrer": "https://shop.smartone.com/en/storefront/confirm.jsp",
//     "body": "url=%3Fconfirm%3D1&f=nt%3D%26no%3DHING%2BSANG%26nl%3DWONG%26m%3D51604525%26e%3Dtonywong11373%2540hotmail.com",
//     "method": "POST",
//     "mode": "cors",
//     agent: ({ protocol }) => {
//         return protocol === 'https:' ? httpsAgent : httpAgent;
//       },
// })
// .then(async PostConfirmResp => {
//     return await PostConfirmResp.json()
// })
// .then(async done1 => {
//     // console.log(done1.redirect)
//     paymentURL = done1.redirect
//     var matched1 = paymentURL.indexOf('t\=')
//     var matched2 = paymentURL.indexOf('\&sid\=')
//     console.log(paymentURL.substr(matched1, matched2 - matched1))
// })
// .catch(async err => {
//     console.log(err)
// })

var newTesting = async(url,color,gb) => {
    const timeOutSeconds = 30
    var humanClick = async(element)=>{
        var evt = document.createEvent("MouseEvents");
        evt.initMouseEvent("mouseover", true, true, window,
        0, 0, 0, 0, 0, false, false, false, false, 0, null);
        element.dispatchEvent(evt);
        evt.initMouseEvent("mousedown", true, true, window,
        0, 0, 0, 0, 0, false, false, false, false, 0, null);
        element.dispatchEvent(evt);
        evt.initMouseEvent("mouseup", true, true, window,
        0, 0, 0, 0, 0, false, false, false, false, 0, null);
        element.dispatchEvent(evt);
        evt.initMouseEvent("click", true, true, window,
        0, 0, 0, 0, 0, false, false, false, false, 0, null);
        element.dispatchEvent(evt);
    }
    const browser = await client.remote({
        maxInstances: 10,
        capabilities: {
            // port: 9515,
            // path: '/',
            browserName: 'chrome',
            pageLoadStrategy: 'eager',
            'goog:chromeOptions': { 
                    args: [
                        // "--headless", 
                        "user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:91.0) Gecko/20100101 Firefox/91.0",
                        // "--disable-gpu",
                        // "--window-size=1024,768"
                        "--ChromeOSMemoryPressureHandling",
                        "--incognito",
                        "--silent",
                        // "--disable-async-dns",
                        // "--disable-background-networking",
                        // "--disable-bundled-ppapi-flash",
                        // "--disable-client-side-phishing-detection",
                        // "--disable-component-extensions-with-background-pages",
                        // "--disable-component-update",
                        // "--disable-default-apps",
                        // "--disable-domain-reliability",
                        // "--disable-device-discovery-notifications",
                        // "--disable-extensions",
                        // "--disable-extensions-file-access-check",
                        // "--disable-extensions-http-throttling",
                        // "--disable-ipv6",
                        // "--disable-minimize-on-second-launcher-item-click",
                        // "--disable-ntp-other-sessions-menu",
                        // "--disable-material-design-ntp",
                        // "--disable-offline-auto-reload",
                        // "--enable-offline-auto-reload-visible-only",
                        // "--enable-fast-unload"
                    ]
            }
        },
        services: ['devtools','intercept']
    })
    
    var checkElementExists = async (xpath) => {
        do{
            // await browser.pause(timeToWait)
            var element = await browser.$$(xpath)[0]
            if(await element != undefined){
                await element.waitForExist({timeout: timeToWait})    
            } else {
                await browser.pause(timeToWait)
            }
            element = await element
        } while(element == undefined)
        return
    }

    

    // Implicit Timeout for FindElement
    // await browser.setTimeout({ 'implicit': timeOutSeconds * 1000 })
    // Page Timeout
    // await browser.setTimeout({ 'pageLoad': timeOutSeconds * 1000 })
    // Script Timeout
    // await browser.setTimeout({ 'script': timeOutSeconds * 1000 })

    var abortEle = async (url) => {
        var mock1 = await browser.mock(url)
        mock1.abort('Failed')
    }

    var runInBrowser = async (argument) => {
        await argument.click()
    }
    var tmp_value
    var currentStatus
    
    // var this_session

    

    await abortEle(/.+.css/)
    await abortEle(/.+.woff/)
    await abortEle(/.+.svg/)
    await abortEle(/.+.jpg/)
    await abortEle(/.+.png/)

    setTimeout(async() => {
        await browser.deleteSession()
    }, 1800000)

    // mock1.respond()
    var btn
    var content1
    var testingWaitTime = 0
    
    await browser.url(url)
    btn = await browser.$$(`a.color-swatch[title="${color}`)[0]
    // .filter(x => x.title == 'Blue')
    // Promise.all([await checkElementExists(btn)])
    await browser.execute(humanClick, btn)
    btn = await browser.$(`#model${gb.substr(5,gb.length - 5).toUpperCase()}`)
    await browser.execute(humanClick, btn)
    await browser.pause(2000)
    btn = await browser.$$('.st-add-bag-btn.st-vert-top-50')[0]
    await btn.click()
    await browser.pause(7000)
    btn = await browser.$$('#cartPopList')[0]
    await browser.execute(humanClick, btn)
    try {
        btn = await browser.$$('.button-checkout')[0]
        await browser.execute(humanClick, btn)
    } catch(err){
        console.log(err)
    }
    
    await browser.pause(1000)
    try {
        btn = await browser.$$('#tabarrow-tab-pickup')[0]
        await browser.execute(humanClick, btn)
    } catch(err){
        await browser.deleteSession()
    }
    
    // await browser.click()
    btn = await browser.$$('#shpIFC')[0]
    await browser.execute(humanClick, btn)
    await browser.pause(2000)
    btn = await browser.$$('#popupShopList-submit-button')[0]
    
    await browser.execute(humanClick, btn)
    await browser.pause(5000)
    btn = await browser.$$('#confirm-input-no')[0]
    await btn.setValue('HING SANG')
    btn = await browser.$$('#confirm-input-nl')[0]
    await btn.setValue('WONG')
    btn = await browser.$$('#checkout-contact-mobile')[0]
    await btn.setValue('51604525')
    btn = await browser.$$('#confirm-input-e')[0]
    await btn.setValue('tonywong11373@hotmail.com')
    btn = await browser.$$('#confirm-payment-button')[0]
    await browser.execute(humanClick, btn)
    await browser.pause(5000)
    btn = await browser.$$('#holdersName')[0]
    await btn.setValue('WONG HING SANG')
    btn = await browser.$$('#CardNumber1')[0]
    await btn.setValue('6244')
    btn = await browser.$$('#CardNumber1')[0]
    await btn.setValue('7800')
    btn = await browser.$$('#CardNumber1')[0]
    await btn.setValue('1136')
    btn = await browser.$$('#CardNumber1')[0]
    await btn.setValue('8107')
    btn = await browser.$$('#ExpMon option[value="09"]')[0]
    await browser.execute(humanClick, btn)
    btn = await browser.$$('#ExpYear option[value="26"]')[0]
    await browser.execute(humanClick, btn)
    btn = await browser.$$('#TFCardPin')[0]
    await btn.setValue('422')
    btn = await browser.$$('.payment-footer__submit-button')[0]
    await browser.execute(humanClick, btn)
    await browser.pause(5000)
    btn = await browser.$$('#cardNumber')[0]
    await btn.setValue('6244780011368107')
    btn = await browser.$$('#btnNext')[0]
    await browser.execute(humanClick, btn)
    btn = await browser.$$('#expireMonth')[0]
    await btn.setValue('09')
    btn = await browser.$$('#expireYear')[0]
    await btn.setValue('26')
    btn = await browser.$$('#cvn2')[0]
    await btn.setValue('011')
    btn = await browser.$$('#btnGetCode')[0]
    await browser.execute(humanClick, btn)
}

var checkPhoneAvail = async (color, gb) => {
    await fetch("https://shop.smartone.com/en/storefront/mobile/iPhone-13/3358/?addtocart=1", {
        "credentials": "include",
        "headers": {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:100.0) Gecko/20100101 Firefox/100.0",
            "Accept": "text/javascript, text/html, application/xml, text/xml, */*",
            "Accept-Language": "en-GB,en;q=0.5",
            "X-Requested-With": "XMLHttpRequest",
            "X-Prototype-Version": "1.7.2",
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-origin"
        },
        "referrer": "https://shop.smartone.com/en/storefront/mobile/iPhone-13/3358/",
        "body": `url=%3Faddtocart%3D1&product_id=3358&product_type=handset&color=${color}&size=${gb.substr(5,gb.length - 5).toUpperCase()}`,
        "method": "POST",
        "mode": "cors",
        agent: ({ protocol }) => {
            return protocol === 'https:' ? httpsAgent : httpAgent;
        },
    })
    .then(async PhoneResp => {
        return await PhoneResp.json()
    })
    .then(async done1 => {
        if(done1.status == "ok"){
            console.log(`We are going to call the buy function of ok`)
            await newTesting('https://shop.smartone.com/en/storefront/mobile/iPhone-13-Pro-Max/3360/', color, gb)
            TGChatIds.forEach(async(ele,idx) => { 
                MyTGApp.telegram.sendMessage(ele, `The Phone ${color} ${gb} has stock`)
                MyTGApp.telegram.sendMessage(ele,'https://shop.smartone.com/en/storefront/mobile/iPhone-13-Pro-Max/3360/')
            })
            setTimeout(() => {
                console.log(`we have successfully bought ${color} with ${gb}, wait for 1 Hour`)
            },3600000)
        }
        
    })
    .catch(async err => {
        console.log(err)
    })
}

// newTesting('https://shop.smartone.com/en/storefront/mobile/iPhone-13-Pro-Max/3360/', 'Silver', 'model512gb')

// proMax.forEach(async(val,idx)=>{
//     // console.log(val)
//     await checkPhoneAvail(val.Color, val.GB)
// })

setInterval(async () => {
    proMax.forEach(async(val,idx)=>{
        // console.log(val)
        await checkPhoneAvail(val.Color, val.GB)
    })
}, 500)

// await fetch(paymentURL, {
//     "credentials": "include",
//     "headers": {
//         "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:100.0) Gecko/20100101 Firefox/100.0",
//         "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
//         "Accept-Language": "en-GB,en;q=0.5",
//         "Upgrade-Insecure-Requests": "1",
//         "Sec-Fetch-Dest": "document",
//         "Sec-Fetch-Mode": "navigate",
//         "Sec-Fetch-Site": "same-site",
//         "Sec-Fetch-User": "?1"
//     },
//     "referrer": "https://shop.smartone.com/",
//     "method": "GET",
//     "mode": "cors",
//     agent: ({ protocol }) => {
//         return protocol === 'https:' ? httpsAgent : httpAgent;
//       },
// })
// .then(async GoPaymentResp => {
//     return await GoPaymentResp.text()
// })
// .then(async done1 => {
//     // console.log(done1)
// })
// .catch(async err => {
//     console.log(err)
// })

// await fetch("https://securepayment.smartone.com/jsp/common/transaction_action_1.jsp", {
//     "credentials": "include",
//     "headers": {
//         "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:100.0) Gecko/20100101 Firefox/100.0",
//         "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
//         "Accept-Language": "en-GB,en;q=0.5",
//         "Content-Type": "application/x-www-form-urlencoded",
//         "Upgrade-Insecure-Requests": "1",
//         "Sec-Fetch-Dest": "document",
//         "Sec-Fetch-Mode": "navigate",
//         "Sec-Fetch-Site": "same-origin",
//         "Sec-Fetch-User": "?1"
//     },
//     "referrer": "https://securepayment.smartone.com/jsp/english/payment_ecomm.jsp?t=924C68BC7D9FE79966033A80260A6541&sid=ecommerce",
//     "body": "TFhid=&t=924C68BC7D9FE79966033A80260A6541&sid=ecommerce&h=&CardType=VisaCard&CardNumber=&language=english&octopus_platform=&octopus_app=&RAcardtype=VisaCard&holdersName=WONG+HING+SANG&CardNumber1=4325&CardNumber2=6502&CardNumber3=7043&CardNumber4=9294&ExpMon=09&ExpYear=26&TFCardPin=011",
//     "method": "POST",
//     "mode": "cors"
// });