import { RouterModule } from '@angular/router';
// Services
import { CampaignService } from './../services/campaign.service';
// Components
import { CampaignNewComponent } from './campaign-new/campaign-new.component';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
// Modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KickstartRoutingModule } from './kickstart-routing.module';
// Material
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CampaignDetailComponent } from './campaign-detail/campaign-detail.component';

@NgModule({
  declarations: [CampaignListComponent, CampaignNewComponent, CampaignDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    KickstartRoutingModule,
    // Material
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [CampaignService],
})
export class KickstartModule {}
