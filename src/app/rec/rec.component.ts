import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rec',
  templateUrl: './rec.component.html',
  styleUrls: ['./rec.component.css']
})
export class RecComponent implements OnInit {
  public current;
  constructor(private route:ActivatedRoute,private router:Router) { 
    this.router.events.subscribe((url:any)=>this.current=url.url);
  }

  ngOnInit( ) {
    console.log(this.router.url.split('/')[this.router.url.split.length])
    this.current=(this.router.url.split('/')[this.router.url.split.length])

  }

}
