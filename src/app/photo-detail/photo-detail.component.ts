import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
})
export class PhotoDetailComponent {
  @Input() id;
  element: any = [];

  constructor(private http: HttpClient, private modalService: NgbActiveModal) {}

  ngOnInit() {
    this.getDetail(this.id);
  }

  close() {
    this.modalService.close();
  }

  getDetail(id) {
    this.http
      .get('https://jsonplaceholder.typicode.com/todos/' + id)
      .subscribe((posts) => {
        this.element = posts;
      });
    return ``;
  }
}
