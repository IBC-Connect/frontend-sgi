import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdicionarRegistroFinanceiroModalPage } from './adicionar-registro-financeiro-modal.page';

describe('AdicionarRegistroFinanceiroModalPage', () => {
  let component: AdicionarRegistroFinanceiroModalPage;
  let fixture: ComponentFixture<AdicionarRegistroFinanceiroModalPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarRegistroFinanceiroModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdicionarRegistroFinanceiroModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
