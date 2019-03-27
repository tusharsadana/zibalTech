import { environment } from './../../../environments/environment';
import { DownloadService } from './../../services/download.service';
import { candidate } from './../../interface/candidate';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

interface dialogueData {
  "user": candidate,
  "for": string
}

@Component({
  selector: 'app-candidates-dialogue',
  templateUrl: './candidates-dialogue.component.html',
  styleUrls: ['./candidates-dialogue.component.css']
})
export class CandidatesDialogueComponent {

  user: candidate
  isResumePresent: Boolean
  calledBy: string
  downloadLink = environment.downloadResume
  constructor(@Inject(MAT_DIALOG_DATA) public data: dialogueData, private _downloader: DownloadService) {
    
    this.user = data.user
    this.calledBy = data.for

    

    if(this.user.personal.resume!=undefined)
      this.isResumePresent =true;
    else
    this.isResumePresent = false  
  }

  downloadResume() {
    if (this.calledBy == "hr")
      this._downloader.hrResume(this.user._id).subscribe(res => { }, err => { console.log(err.error) })
    else if (this.calledBy == "candidate")
      this._downloader.candidateResume(this.user._id).subscribe(res => { }, err => { console.log(err.error) })
  }

}
