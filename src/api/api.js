
//登录api
export function loginAPI(params) {
    let url = `users/signup`;
    let data = Object.assign({},params);

    return $Http.post(url,data)
        .then(res => {
            return res.data;
        })
        .catch(res => {
            return res.data;
        })
}