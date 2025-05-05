import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-orders',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent {
  formGroup!: FormGroup;
  floors: number = 0;
  cells: number = 0;
  sensors: string = 'DHT11, Camera, Movement system';

  submitForm() {
    // console.log(this.formGroup);
  }
}
