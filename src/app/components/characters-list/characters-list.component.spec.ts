import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersListComponent } from './characters-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  DEFAULT_LANGUAGE,
  MissingTranslationHandler,
  TranslateCompiler,
  TranslateLoader,
  TranslateModule,
  TranslateParser,
  TranslateService,
  TranslateStore,
  USE_DEFAULT_LANG,
  USE_EXTEND,
  USE_STORE,
} from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';

describe('CharactersListComponent', () => {
  let translate: TranslateService;
  let component: CharactersListComponent;
  let fixture: ComponentFixture<CharactersListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharactersListComponent],
      providers: [
        TranslateStore,
        TranslateLoader,
        TranslateCompiler,
        TranslateParser,
        MissingTranslationHandler,

        { provide: USE_DEFAULT_LANG, useValue: 'es' },
        { provide: USE_STORE, useValue: 'es' },
        { provide: USE_EXTEND, useValue: 'es' },
        { provide: DEFAULT_LANGUAGE, useValue: 'es' },
      ],
      imports: [
        HttpClientModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
          },
        }),
      ],
    }).compileComponents();
    translate = TestBed.get(TranslateService);

    fixture = TestBed.createComponent(CharactersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
