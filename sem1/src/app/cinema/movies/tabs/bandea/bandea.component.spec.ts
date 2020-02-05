import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandeaComponent } from './bandea.component';

describe('BandeaComponent', () => {
  let component: BandeaComponent;
  let fixture: ComponentFixture<BandeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
