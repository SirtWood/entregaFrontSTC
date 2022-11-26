import { TestBed } from '@angular/core/testing';

import { HabitacionesService } from './habitaciones.service';

import {HttpClient} from '@angular/common/http'

describe('HabitacionesService', () => {
  let service: HabitacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HabitacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
