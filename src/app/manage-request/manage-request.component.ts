import { Component, forwardRef, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IncidentsService } from '../data/issues.service';

@Component({
  selector: 'app-manage-request',
  templateUrl: './manage-request.component.html',
  styleUrls: ['./manage-request.component.css']
})
export class ManageRequestComponent implements OnInit {

  constructor(@Inject(forwardRef(() => IncidentsService)) public incidentsServces : any, private route : Router) { }

  incidents = null;
  ngOnInit(): void {
    this.incidentsServces.findAllIncidents().subscribe(data => {
      this.incidents = data;
      console.log(this.incidents);
    });
  }
}
