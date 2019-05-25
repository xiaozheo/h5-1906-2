require({
    'baseUrl' : 'js/',
    'paths':{
        query:'lib/jquery-1.11.3',
        banner:'js/banner',
        tab:'js/tab'
    }
})

require(['query','banner','tab'],function(Query,bannerExp,tabExp){
    bannerExp.init(),
    tabExp.init()
})