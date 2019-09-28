const cookie = (function () {
    let cookies = document.cookie.split("; ").map(x=>x.split("=")).reduce((acc,[x,y]) => {acc[x]=y;return acc},{});
    const getCookie = (name) => cookies[name];
    const setCookie = (name, value) => cookies[name] = value;
    const flushCookies = () => {
        let cookieString = "";
        let cookieArray = Object.keys(cookies).map(key=>[key, cookies[key]]);
        cookieString = cookieArray.map(([k,v])=>`${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join("; ");
        document.cookie = cookieString;
    }
    return { getCookie, setCookie, flushCookies };
})();

define('cookie', 
       [],
       cookie);
