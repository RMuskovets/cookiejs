require([
	'cookie'
], (cookie) => {
	cookie.setCookie("test", "test1");
	cookie.flushCookies();
});
