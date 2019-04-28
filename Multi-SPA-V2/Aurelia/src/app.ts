import {RouterConfiguration, Router} from 'aurelia-router';
import {PLATFORM} from 'aurelia-framework';
import "styles/aureliaStyles.scss"

export class App {
  public message: string = 'Hello World, from Aurelia!';
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = "Multi-SPA-V2: Aurelia";
    config.options.pushState = true;
    config.map([
      {
        route: ['','Aurelia'],
        moduleId: PLATFORM.moduleName('modules/home/home'),
        title: 'Aurelia',
        name:'Aurelia',
        nav: true
      },
      {
        route: ['Aurelia/KitchenSink/'],
        name: 'Kitchen Sink',
        moduleId: PLATFORM.moduleName('modules/kitchensink/kitchensink'),
        nav: true,
        title: "KitchenSink" },

    ]);
  }
}
