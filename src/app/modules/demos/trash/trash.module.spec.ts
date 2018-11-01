import { TrashModule } from './trash.module';

describe('TrashModule', () => {
  let trashModule: TrashModule;

  beforeEach(() => {
    trashModule = new TrashModule();
  });

  it('should create an instance', () => {
    expect(trashModule).toBeTruthy();
  });
});
