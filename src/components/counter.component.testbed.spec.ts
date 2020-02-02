import {TestBed, async, fakeAsync} from '@angular/core/testing';
import { CounterComponent} from './counter.component';

describe('CounterComponent', () => {
  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterComponent ],
    }).compileComponents();
  }));

  it('should render title', () => {
    const fixture = TestBed.createComponent(CounterComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('[data-testid=count]').textContent).toContain('Count: 0');
  });
});
