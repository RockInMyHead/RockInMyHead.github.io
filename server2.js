document.forms.publish.onsubmit = function() {
    var name = this.name.value;
    name=name.replace(/ /g,'_');
    var massage = this.massage.value;
    massage=massage.replace(/ /g,'_');
    var email = this.email.value;
    var youremail = this.youremail.value;
    var url = 'https://desolate-basin-56713.herokuapp.com/m/' +name + '/' + massage + '/' + email + '/' + youremail ;
    function goToPage(url)
        {
            let script = document.createElement('script');
            script.src = url;
            document.body.append(script);
        }
    goToPage(url);
    return false;
};
