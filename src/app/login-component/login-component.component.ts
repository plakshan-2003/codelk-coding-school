import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  imports: [FormsModule],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})
export class LoginComponentComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) { }

  login() {
    if (this.email == 'user' && this.password == '1234') {
      this.router.navigate(['/home']);
    } else {
      window.alert('Invalid username or password');
    }
  }
}
