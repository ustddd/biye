const menu = {
    list() {
        return [{"backMenu":[{"child":[{"allButtons":["新增","查看","修改","删除"],"appFrontIcon":"cuIcon-cardboard","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"allButtons":["新增","查看","修改","删除","签到"],"appFrontIcon":"cuIcon-send","buttons":["新增","查看","修改","删除"],"menu":"考勤签到","menuJump":"列表","tableName":"kaoqinqiandao"}],"menu":"考勤签到管理"},{"child":[{"allButtons":["新增","查看","修改","删除"],"appFrontIcon":"cuIcon-list","buttons":["查看","修改","删除"],"menu":"签到记录","menuJump":"列表","tableName":"qiandaojilu"}],"menu":"签到记录管理"},{"child":[{"allButtons":["查看","修改","回复","删除"],"appFrontIcon":"cuIcon-message","buttons":["查看","修改","回复","删除"],"menu":"留言反馈","tableName":"messages"}],"menu":"留言反馈"},{"child":[{"allButtons":["新增","查看","修改","删除"],"appFrontIcon":"cuIcon-group","buttons":["新增","查看","修改","删除"],"menu":"交流论坛","tableName":"forum"}],"menu":"交流论坛"},{"child":[{"allButtons":["新增","查看","修改","删除"],"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"公告资讯分类","tableName":"newstype"},{"allButtons":["查看","修改"],"appFrontIcon":"cuIcon-goods","buttons":["查看","修改"],"menu":"关于我们","tableName":"aboutus"},{"allButtons":["新增","查看","修改","删除"],"appFrontIcon":"cuIcon-phone","buttons":["查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"allButtons":["查看","修改"],"appFrontIcon":"cuIcon-time","buttons":["查看","修改"],"menu":"系统简介","tableName":"systemintro"},{"allButtons":["新增","查看","修改","删除"],"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"公告资讯","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"allButtons":["新增","查看","修改","删除","签到"],"appFrontIcon":"cuIcon-send","buttons":["查看","签到"],"menu":"考勤签到列表","menuJump":"列表","tableName":"kaoqinqiandao"}],"menu":"考勤签到模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"allButtons":["新增","查看","修改","删除"],"appFrontIcon":"cuIcon-list","buttons":["查看"],"menu":"签到记录","menuJump":"列表","tableName":"qiandaojilu"}],"menu":"签到记录管理"}],"frontMenu":[{"child":[{"allButtons":["新增","查看","修改","删除","签到"],"appFrontIcon":"cuIcon-send","buttons":["查看","签到"],"menu":"考勤签到列表","menuJump":"列表","tableName":"kaoqinqiandao"}],"menu":"考勤签到模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}]
    }
}
export default menu;