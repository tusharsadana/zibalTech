import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesDialogueComponent } from './candidates-dialogue.component';

describe('CandidatesDialogueComponent', () => {
  let component: CandidatesDialogueComponent;
  let fixture: ComponentFixture<CandidatesDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatesDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatesDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
