import fetch from 'node-fetch'
import nodeSchedule from 'node-schedule'
import { CookieJar } from 'tough-cookie';
import { HttpCookieAgent, HttpsCookieAgent } from 'http-cookie-agent';

const jar = new CookieJar();

const httpAgent = new HttpCookieAgent({ jar });
const httpsAgent = new HttpsCookieAgent({ jar });

await fetch("https://shop.smartone.com/tc/storefront/mobile/iPhone-13-Pro-Max/3360/?addtocart=1", {
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
    "referrer": "https://shop.smartone.com/tc/storefront/mobile/iPhone-13-Pro-Max/3360/",
    "body": "url=%3Faddtocart%3D1&product_id=3360&product_type=handset&color=%E5%A4%A9+%E5%B3%B0+%E8%97%8D+%E8%89%B2&size=256GB",
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
    console.log(done1)
})
.catch(async err => {
    console.log(err)
})