const Template = require('../../template');

class Main extends Template {
    constructor() {
        super()
        this.title = "框架测试"
        // this.cron = "12 0,13 * * *"
        this.help = 2
        this.task = 'test'
        this.readme= "这里是测试信息"
    }

    async prepare() {
        let s = await this.curl({
            'url': 'https://wq.jd.com/activep3/singjd/queryexpirejingdou?_=1637926089761&g_login_type=0&callback=jsonpCBKC&g_tk=353098972&g_ty=ls&sceneval=2&g_login_type=1',
        })
        console.log("JSONP测试,如果输出字典,框架正常")
        console.log(s,"\n")
        console.log("JSON测试,如果输出字典,框架正常")
        let s2=await this.curl({
            url:'https://api.m.jd.com/client.action?functionId=queryMaterialProducts&client=wh5'
        })
        console.log(s2)

    }

    async main(p) {
        let cookie = p.cookie;
        this.notices('框架测试',p.user)
    }
}

module.exports = Main;
