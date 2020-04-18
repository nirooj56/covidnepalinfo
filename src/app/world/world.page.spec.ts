import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";
import { ExploreContainerComponentModule } from "../explore-container/explore-container.module";

import { WorldPage } from "./world.page";

describe("WorldPage", () => {
  let component: WorldPage;
  let fixture: ComponentFixture<WorldPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorldPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule],
    }).compileComponents();

    fixture = TestBed.createComponent(WorldPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
