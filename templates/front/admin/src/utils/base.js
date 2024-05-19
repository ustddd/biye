const base = {
    get() {
        return {
            url : "http://localhost:8080/djangox93zoo39/",
            name: "djangox93zoo39",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "Web服务统一身份认证协议"
        } 
    }
}
export default base
