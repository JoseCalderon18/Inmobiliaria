import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Header2 } from './components/header2/header2';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Header2] ,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('LeyvaIllescas');
}
