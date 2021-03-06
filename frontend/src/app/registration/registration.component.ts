import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { RegistrationServiceService } from '../services/registration-service.service';
import { Registration } from '../model/Registration';
import { HttpEventType, HttpResponse } from '@angular/common/http';
// import { Registration } from './Registration';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  
registrations: Registration[] = [];
regModel: Registration;
showNew: boolean = false;
submitType: string = 'save';
selectedRow: number;
countries: string[] = ['US', 'ÚK', 'India', 'UAE' ]

file: File;
imageUrl: string;
  constructor(private registrationServiceService: RegistrationServiceService) { 
    

/*
    this.registrations.push(new Registration('Johan', 'Peter', {year: 1980, month: 5, day: 12}, 'johan@gmail.com', 'johan123', 'UK'));
    this.registrations.push(new Registration('Mohamed', 'Tariq', {year: 1975, month: 12, day: 3}, 'tariq@gmail.com', 'tariq123', 'UAE'));
    this.registrations.push(new Registration('Nirmal', 'Kumar', {year: 1970, month: 7, day: 25}, 'nirmal@gmail.com', 'nirmal123', 'India'));
    this.registrations.push(new Registration('Nirmal2','Kumar2',{year:1970, month: 12, day: 25},'nirmal2@gmail.com','nirmal2','US') )
*/
  }
  obterTodas() {
    this.registrationServiceService.findAll().subscribe(
      data => {
        this.registrations = data;
      }
    );
  }
  ngOnInit() {
    this.obterTodas();
  }

  onNew(){
    this.regModel = new Registration();
    this.registrations = [];
    this.submitType = 'Save';
    this.showNew = true;
  }

  onSave(){
    if(this.submitType === 'Save'){
      this.registrations.push(this.regModel);
      //this.registrationServiceService.save(this.regModel);
      // this.registrationServiceService.saveImage(this.file, this.file.name.length );
      this.upload(this.file)
      this.showNew = false;
    }else{
      this.registrations[this.selectedRow].lastName = this.regModel.lastName;
      this.registrations[this.selectedRow].firstName = this.regModel.firstName;
      this.registrations[this.selectedRow].dob = this.regModel.dob;
      this.registrations[this.selectedRow].email = this.regModel.email;
      this.registrations[this.selectedRow].password = this.regModel.password;
      this.registrations[this.selectedRow].country = this.regModel.country;
      this.showNew = false;

    }
  }

  onEdit(index: number){
    this.selectedRow = index;
    this.regModel = new Registration;
    this.regModel = Object.assign({},this.registrations[this.selectedRow]);
    this.submitType = 'Update';
    this.showNew = true;
  }

  onDelete(index: number){
    this.registrations.splice(index, 1);
  }

  onCancel(){
    this.showNew = false;
  }
  onChangeCountry(country: string){
    this.regModel.country = country;
  }

  onFileChange(event: any){
    console.log(event);
    this.file = event.target.files[0];
    let reader = new FileReader()
    reader.readAsDataURL(this.file);
    reader.onload = (e)=>{
      setTimeout(()=>{
        this.imageUrl = reader.result.toString();
        console.log('----------------------------------------------------')
        console.log(this.imageUrl)
      },1000)
    }

  }

  progress: { percentage: number } = { percentage: 0 };
  upload(file: File) {
    this.progress.percentage = 0;
 
    //this.currentFileUpload = this.selectedFiles.item(0);
    this.registrationServiceService.saveImage(this.file, 1).subscribe(event => {
    //this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });
 
    this.file = undefined;
  }
}
