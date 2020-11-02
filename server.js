document.forms.publish.onsubmit = function() {
    var name = this.name.value;
    name=name.replace(/ /g,'_');
    var massage = this.massage.value;
    massage=massage.replace(/ /g,'_');
    var email = this.email.value;
    var url = 'https://sleepy-oasis-49018.herokuapp.com/gmail/' + massage + '/' + name + '/' + email + '/';
    function goToPage(url)
        {
            let script = document.createElement('script');
            script.src = url;
            document.body.append(script);
        }
    goToPage(url);
    return false;
};
