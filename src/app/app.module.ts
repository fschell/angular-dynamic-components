import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TabsModule} from './tabs/tabs.module';
import {PeopleModule} from './people/people.module';
import {TabComponent} from './tabs/tab.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, TabsModule, PeopleModule],
    entryComponents: [TabComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
