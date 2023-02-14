import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.scss']
})
export class UpdateClientComponent {
  updateClient!: Client[]
  clients!: Client
  id!: number
  constructor(private clientSer: ClientService, private router: Router, private activateRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.clients = { id: 0 }
    this.id = (this.activateRouter.snapshot.params['id'])
    this.getClientByIdController(this.id)

  }

  getClientByIdController(id: number) {
    this.clientSer.getClientById(id).subscribe(data => {
      this.clients = data
    })
  }


  updateClientController() {
    this.clientSer.updateClientByID(this.id, this.clients).subscribe(data => {
      this.updateClient
      this.router.navigate(['/client/list-cmdClient/' + this.id])
    })
  }

}
