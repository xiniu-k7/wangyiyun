import service from "..";
export function getBanner() {
    return service({
        method: 'get',
        url:'banner?type=2'
    })
}

export function getMusicList() {
    return service({
        method: 'get',
        url:'/personalized?limit=10'
    })
}

export function getSearchMusic(data) {
    return service({
        method: 'get',
        url:`/search?keywords=${data}`
    })
}

export function getLogin(data) {
    return service({
        method: 'get',
        url:`/login/cellphone?phone=${data.phone}&md5_password=${data.password}`
    })
}