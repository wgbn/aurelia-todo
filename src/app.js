export class App {
    configureRouter(config, router) {
        config.title = 'WGBN Aurelia ToDo';
        config.map([
            {
                route: ['', 'todo'],
                name: 'todo',
                moduleId: 'todo',
                nav: true,
                title: 'Todo'
            },
        ]);

        this.router = router;
    }
}
