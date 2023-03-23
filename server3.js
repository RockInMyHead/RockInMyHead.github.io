document.forms.publish.onsubmit = function() {
    var name = this.name.value;
    name=name.replace(/ /g,'_');
    var massage = this.massage.value;
    massage=massage.replace(/ /g,'_');
    var email = this.email.value;
    var youremail = this.youremail.value;
    var url = 'http://easyfastmail.ru/users/personal_console/send/' +name + '/' + massage + '/' + email + '/' + youremail + '/';
    function goToPage(url)
        {
            let script = document.createElement('script');
            script.src = url;
            document.body.append(script);
        }
    goToPage(url);
    return false;
};
