import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SharedDataService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  isLoading: Boolean = false;
  constructor(
    private spinner: NgxSpinnerService,
    private router: Router, 
    private sharedDataService: SharedDataService
    ){
        
    }

  ngOnInit(): void {
    this.spinner.show();
    this.sharedDataService.isLoading.subscribe(data => {
      console.log(data);
      setTimeout(()=> {
        this.isLoading = data;
      },0);
    });
  }

  openContactForm() {
    this.router.navigateByUrl('/contacts/add-contact');
  }
}
