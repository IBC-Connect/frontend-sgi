import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { RegistroConsultorioModalPage } from "./registro-consultorio-modal.page";

describe("RegistroConsultorioModalPage", () => {
  let component: RegistroConsultorioModalPage;
  let fixture: ComponentFixture<RegistroConsultorioModalPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroConsultorioModalPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroConsultorioModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
