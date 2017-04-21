var authName,
    authEmail,
    authBio,
    authGravatar,
    authTwitter,
    authGithub;

hexo.extend.helper.register('author', function(name, info){

    switch(name) {
        case "christoph_burgdorf":
            authName = "Christoph Burgdorf";
            authEmail = "christoph@thoughtram.io";
            authBio = "Christoph began programming at the age of 10. He is the creator of the Nickel.rs web framework and a contributor of the AngularJS project. Christoph is also part of the Angular 2 Docs Authoring team.";
            authGravatar = "/images/author-christoph.jpg";
            authTwitter = "http://twitter.com/cburgdorf";
            authGithub = "http://github.com/cburgdorf";
            break;
        case "pascal_precht":
            authName = "Pascal Precht";
            authEmail = "pascal@thoughtram.io";
            authBio = "Pascal is a front-end engineer and a Angular Developer Expert nominated by Google. He created the angular-translate module, is an Angular 2 contributor and also part of the Angular 2 Docs Authoring team.";
            authGravatar = "/images/author-pascal.jpg";
            authTwitter = "http://twitter.com/PascalPrecht";
            authGithub = "http://github.com/PascalPrecht";
            break;
        case "thomas_burleson":
            authName = "Thomas Burleson";
            authEmail = "thomas@thoughtram.io";
            authBio = "Thomas was a late bloomer; programming at 24. He is a autodidact technologist with a passion for Angular, UX, and great software. Thomas is the Team Lead for Angular Material. He loves teaching, mentoring, and working with Angular developers. He also has the irritating habits of daily power-naps and starts a sentence and not finishing…. as his mind races ahead!";
            authGravatar = "/images/thomas_high_res.png";
            authTwitter = "http://twitter.com/thomasburleson";
            authGithub = "http://github.com/thomasburleson";
            break;
        default:
            break;
    }

    switch(info) {
        case "name":
            return authName;
            break;
        case "email":
            return authEmail;
            break;
        case "bio":
            return authBio;
            break;
        case "gravatar":
            return authGravatar;
            break;
        case "twitter":
            return authTwitter;
            break;
        case "github":
            return authGithub;
            break;
        default:
            return authName;
            break;
    }

});