import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User = { id: 0, name: '', email: '' };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UserService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    var user = this.service.getUser(id);
    if (user) {
      this.user = user;
    }
  }

  onSubmit(form: any): void {
    let user = {
      id: form.id,
      name: form.name,
      email: form.email
    };
    this.service.setUser(user);
    this.router.navigate(["/users"]);
  }
}
