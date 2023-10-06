import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RedirectMenuService {

  constructor(private router: Router) { }

  redirectTo(routePath: string): void {
    this.router.navigateByUrl(routePath);
  }
}
