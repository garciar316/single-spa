import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@sofka/mf-navbar",
  app: () => System.import("@sofka/mf-navbar"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@sofka/mf-react-consumer",
  app: () => System.import("@sofka/mf-react-consumer"),
  activeWhen: ["/react"]
});

registerApplication({
  name: "@sofka/mf-angular-publisher",
  app: () => System.import("@sofka/mf-angular-publisher"),
  activeWhen: ["/angular"]
});


start({
  urlRerouteOnly: true,
});
