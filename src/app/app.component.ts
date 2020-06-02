import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editField: string;
  submitted = false;
  headers: Array<any> = ["First Name", "Last Name", "Phone Number", "Email-Id", "Remove"];
    personList: Array<any> = [
      { id: 1, firstName: 'Manasa', lastName: 'Reddy', phoneNumber: 9898765430, emailId: 'mr@gmail.com'},
      { id: 2, firstName: 'Manu', lastName: 'Reddy', phoneNumber: 9898765430, emailId: 'mr@gmail.com'},
      { id: 3, firstName: 'Metta', lastName: 'Reddy', phoneNumber: 9898765430, emailId: 'mr@gmail.com'}
    ];

    awaitingPersonList: Array<any> = [
      { id: 4, firstName: 'Manasa', lastName: 'Reddy', phoneNumber: 9898765430, emailId: 'mr@gmail.com'},
      { id: 5, firstName: 'Manu', lastName: 'Reddy', phoneNumber: 9898765430, emailId: 'mr@gmail.com'},
      { id: 6, firstName: 'Metta', lastName: 'Reddy', phoneNumber: 9898765430, emailId: 'mr@gmail.com'}
    ];

    updateList(id: number, property: string, event: any) {
      const editField = event.target.textContent;
      this.personList[id][property] = editField;
    }

    remove(id: any) {
      this.awaitingPersonList.push(this.personList[id]);
      this.personList.splice(id, 1);
    }

    add() {
      if (this.awaitingPersonList.length > 0) {
        const person = this.awaitingPersonList[0];
        this.personList.push(person);
        this.awaitingPersonList.splice(0, 1);
      }
    }

    changeValue(id: number, property: string, event: any) {
      this.editField = event.target.textContent;
    }
    
    submitJson() {   
      this.submitted = true;
    }

    
}