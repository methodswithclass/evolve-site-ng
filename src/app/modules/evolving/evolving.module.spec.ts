import { EvolvingModule } from './evolving.module';

describe('EvolvingModule', () => {
  let evolvingModule: EvolvingModule;

  beforeEach(() => {
    evolvingModule = new EvolvingModule();
  });

  it('should create an instance', () => {
    expect(evolvingModule).toBeTruthy();
  });
});
