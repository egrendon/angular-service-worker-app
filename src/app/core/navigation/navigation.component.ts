import {Component} from '@angular/core';
import {environment} from '../../../environments/environment';
import { MicroSoftGraphService } from '../../services/micro-soft-graph.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  iconUrl = `/assets/fav/favicon-32x32.png`;

  constructor(public msService: MicroSoftGraphService) {
  }

    async signIn(): Promise<void> {
        await this.msService.signIn();
    }

    signOut(): void {
        this.msService.signOut();
    }
}
