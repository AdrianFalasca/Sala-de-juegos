import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';


@Component({
standalone: true,
selector: 'app-about',
imports: [CardModule],
templateUrl: './about.component.html',
styleUrls: ['./about.component.scss']
})
export class AboutComponent {}