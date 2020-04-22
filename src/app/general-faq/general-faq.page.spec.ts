import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GeneralFAQPage } from './general-faq.page';

describe('GeneralFAQPage', () => {
  let component: GeneralFAQPage;
  let fixture: ComponentFixture<GeneralFAQPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralFAQPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GeneralFAQPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
