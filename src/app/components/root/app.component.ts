import { Component, OnInit, HostBinding } from '@angular/core';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'flags';

  public faMoon = faMoon;
  public changeTheme: boolean;
  @HostBinding('class') componentClass: any

  constructor(public overlaycontainer: OverlayContainer) {
    this.changeTheme = false;
  }
  
  ngOnInit(){
    const theme = localStorage.getItem('theme');
    console.log(theme);
    if (!theme || theme === '') {
      this.onSetTheme('light-theme-l');
    } else {
      this.onSetTheme(theme);
    }
    theme === 'light-theme-l'
      ? (this.changeTheme = true)
      : (this.changeTheme = false);
  
  }

  public onSetTheme(e: string) {
    this.overlaycontainer.getContainerElement().classList.add(e);
    this.componentClass = e;
    localStorage.setItem('theme', e);
    this.changeTheme = !this.changeTheme;
  }
}
