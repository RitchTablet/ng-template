/* eslint-disable */
// Auth guard

// Import no usado
import { Router } from "@angular/router";

export class AuthGuard {
  // Rompe no-empty-function
  emptyMethod() {}

  constructor(private router: Router) {}

  // Rompe explicit-function-return-type y no-explicit-any
  getUserData(): any {
    return {};
  }

  // Rompe no-var
  testVar() {
    const x = 5;
    return x;
  }

  // Rompe no-magic-numbers (excepto 0 y 1)
  getMagicNumber() {
    return 42;
  }

  // Rompe no-debugger
  debugMethod() {
    debugger;
  }

  canActivate() {
    const isAuthenticated = false;

    if (!isAuthenticated) {
      this.router.navigate(["/login"]);
      return false;
    }
    return true;
  }
}
