import { Component } from '@angular/core';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  name="Karan";
  rollno="2205012";
  course="Computer Science";
  dob="24th July";
  email="karan302@gmail.com";
  url="https://images.unsplash.com/photo-1635732346025-d0ed3500ea7e?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGV0dGVyJTIwYXxlbnwwfHwwfHx8MA%3D%3D";
}
