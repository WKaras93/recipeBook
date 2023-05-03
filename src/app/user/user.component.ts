import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  displayLoginView = true;
  registerForm: FormGroup;
  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initRegisterForm();
    this.initLoginForm();
  }

  public onRegister(): void {
    this.submitted = true;
  }

  public onLogin(): void {
    this.submitted = true;
  }

  private initRegisterForm(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  private initLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get registerF() { return this.registerForm.controls; }

  get loginF() { return this.loginForm.controls; }

  public changeView(): void {
    this.displayLoginView = !this.displayLoginView;
  }

  public onFocus(): void {
    if (this.submitted) {
      this.submitted = false;
      if (this.loginForm.dirty) this.loginForm.reset();
      if (this.registerForm.dirty) this.registerForm.reset();
    }
  }

  private loginFormHasErrors(): boolean {
    return Object.values(this.loginF).some(element => !element.valid)
  }
}
