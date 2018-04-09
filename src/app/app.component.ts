import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {PeopleService} from './people/people.service';

@Component({
    selector: 'app-root',
    template: `
        <h1>Angular tabs</h1>
        <ngx-tabs>
            <ngx-tab tabTitle="People List">
                <app-people-list [people]="people"></app-people-list>
            </ngx-tab>
            <ngx-tab tabTitle="Tab 2" [template]="personEdit"></ngx-tab>
        </ngx-tabs>

        <ng-template #personEdit>
          This is the content of a template defined in another component (in  this case app.component)
        </ng-template>

    `
})
export class AppComponent implements OnInit, AfterViewInit {
    @ViewChild('personEdit') personEditTemplate;
    people;

    constructor(private peopleService: PeopleService) {
    }

    ngOnInit() {
        this.peopleService.getPeople().subscribe(data => {
            this.people = data;
        });
    }
    ngAfterViewInit(){
        console.log(this.personEditTemplate);
    }
}
