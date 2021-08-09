# KartvizitApp

Bu proje [Mehmet Sert'in](https://github.com/MehmetSert) [Youtube'daki](https://www.youtube.com/channel/UCN52FNcLSL4ClNs2pCINXVw) [Hızlandırılmış Angular Dersleri](https://www.youtube.com/playlist?list=PLSM07tMt8osNHLM_yfUnWafZ61m4FIbw1) takip edilerek yapılmıştır.

[orjinal proje linki](https://github.com/MehmetSert/kartvizit-app)

Angulardaki componentlerin, modullerin, servislerin mantığını pekiştirmiş oldum.

Kartvizitler sayfasına gittiğimizde apiden veri gelene kadar duran bir loading ekranımız var. Sonrasında her bir kartvizit elemanını bir componente ***@Input*** özelliği ile gönderip listeledik. Yeni kartvizit eklemek için [Angular Material'in](https://material.angular.io) dialog bileşenini kullandık, bunun içerisindeki formlarda da ***reactive formları*** kullandık. ***Validation*** işlemlerini gördük. Kartvizit güncellemek için yine aynı dialog componentine verimizi gönderdik ve field'ları dolu getirdik. Api'lerden gelen sonuçları yine ***Angular Material'in SnackBar*** bileşeni ile ekrana yansıttık.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
