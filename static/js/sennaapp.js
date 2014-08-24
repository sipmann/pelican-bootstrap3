var app = new senna.App();
app.setBasePath('/');
app.addSurfaces('main_content');
app.addRoutes(new senna.Route(/\w+\.html/, senna.HtmlScreen));
